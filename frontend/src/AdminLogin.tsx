import { useState } from "react";
import type { FormEvent } from "react";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: FormEvent) => {
  e.preventDefault();

  setError("");

  try {
    const response = await fetch(
      "http://localhost:5000/api/admin/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {
  localStorage.setItem("adminToken", data.token);
  localStorage.setItem("adminLoggedIn", "true");

  window.location.href = "/admin";
  return;
}

    setError(data.message);
  } catch (error) {
    console.error(error);
    setError("Unable to connect to the server.");
  }
};

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">

        <div className="admin-login-logo">
          Balaram<span>.</span>
        </div>

        <div className="admin-login-badge">
          ADMIN PANEL
        </div>

        <h1>Welcome Back</h1>

        <p>
          Login to manage your client enquiries.
        </p>

        <form onSubmit={handleLogin} className="admin-login-form">

          <label>Username</label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />

          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />

          {error && (
            <div className="admin-login-error">
              {error}
            </div>
          )}

          <button type="submit">
            Login to Dashboard
          </button>

        </form>

      </div>
    </div>
  );
}

export default AdminLogin;