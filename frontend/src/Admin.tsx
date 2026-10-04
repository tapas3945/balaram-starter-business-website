import { useEffect, useState } from "react";

type Enquiry = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
};

function Admin() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  const loadEnquiries = async () => {
  setLoading(true);

  try {
    const response = await fetch("http://localhost:5000/api/enquiries", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    });

    const data = await response.json();

    if (data.success) {
      setEnquiries(data.enquiries);
    }
  } catch (error) {
    console.error("Unable to fetch enquiries:", error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
  loadEnquiries();
}, []);

  return (
    <div className="admin-page">

      <div className="admin-header">
        <div>
          <span>ADMIN DASHBOARD</span>
          <h1>Client Enquiries</h1>
          <p>
            Manage enquiries received through your business website.
          </p>
        </div>

        <div className="admin-count">
          <strong>{enquiries.length}</strong>
          <span>Total Enquiries</span>
        </div>

        <button
  className="admin-logout-button"
  onClick={async () => {
  try {
    await fetch("http://localhost:5000/api/admin/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    });
  } catch (error) {
    console.error("Logout error:", error);
  }

  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminLoggedIn");

  window.location.href = "/admin";
}}
>
  Logout
</button>

        <button
  className="admin-refresh-button"
  onClick={loadEnquiries}
>
  Refresh
</button>
      </div>

      <div className="admin-table-card">

        {loading ? (
          <p className="admin-loading">
            Loading enquiries...
          </p>
        ) : enquiries.length === 0 ? (
          <p className="admin-empty">
            No enquiries found.
          </p>
        ) : (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Client</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

             <tbody>
  {enquiries.map((enquiry) => (
    <tr key={enquiry.id}>
      <td>#{enquiry.id}</td>

      <td>
        <strong>{enquiry.name}</strong>
      </td>

      <td>{enquiry.email}</td>

      <td>{enquiry.phone}</td>

      <td>{enquiry.message}</td>

      <td>
        {new Date(
          enquiry.created_at
        ).toLocaleDateString("en-IN")}
      </td>

      <td>
  <button
    className="delete-button"
    onClick={async () => {
      const confirmed = window.confirm(
        "Are you sure you want to delete this enquiry?"
      );

      if (!confirmed) return;

      try {
        const response = await fetch(
          `http://localhost:5000/api/enquiries/${enquiry.id}`,
          {
            method: "DELETE",
          }
        );

        const result = await response.json();

        if (result.success) {
          setEnquiries((current) =>
            current.filter((item) => item.id !== enquiry.id)
          );
        } else {
          alert(result.message);
        }
      } catch (error) {
        console.error(error);
        alert("Unable to delete enquiry.");
      }
    }}
  >
    Delete
  </button>
</td>
    </tr>
  ))}
</tbody>
            </table>
          </div>
        )}

      </div>

    </div>
  );
}

export default Admin;