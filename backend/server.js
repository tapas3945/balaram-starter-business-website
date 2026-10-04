const express = require("express");
const crypto = require("crypto");
const cors = require("cors");
require("dotenv").config();

const pool = require("./db");

const app = express();

const adminTokens = new Set();

function requireAdminToken(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token || !adminTokens.has(token)) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access.",
    });
  }

  next();
}

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Balaram Web Development Company API is running",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend is working",
  });
});

app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (
  username === process.env.ADMIN_USERNAME &&
  password === process.env.ADMIN_PASSWORD
) {
  const token = crypto.randomBytes(32).toString("hex");

  adminTokens.add(token);

  return res.json({
    success: true,
    message: "Login successful",
    token,
  });
}

  res.status(401).json({
    success: false,
    message: "Invalid username or password.",
  });
});

app.post("/api/admin/logout", requireAdminToken, (req, res) => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  adminTokens.delete(token);

  res.json({
    success: true,
    message: "Logout successful",
  });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    await pool.query(
      `
      INSERT INTO enquiries (name, email, phone, message)
      VALUES ($1, $2, $3, $4)
      `,
      [name, email, phone, message]
    );

    res.json({
      success: true,
      message: "Your enquiry has been received successfully.",
    });
  } catch (error) {
    console.error("Database error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to save enquiry.",
    });
  }
});
app.get("/api/enquiries", requireAdminToken, async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT id, name, email, phone, message, created_at
      FROM enquiries
      ORDER BY id DESC
      `
    );

    res.json({
      success: true,
      enquiries: result.rows,
    });
  } catch (error) {
    console.error("Database error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch enquiries.",
    });
  }
});
app.delete("/api/enquiries/:id", requireAdminToken, async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM enquiries WHERE id = $1 RETURNING id",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });
    }

    res.json({
      success: true,
      message: "Enquiry deleted successfully.",
    });
  } catch (error) {
    console.error("Database error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to delete enquiry.",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});