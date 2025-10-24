import { Link } from "react-router-dom";

export default function Videos() {
  return (
    <main
      style={{
        padding: "2rem",
        background: "#0f0f10",
        color: "white",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <div style={{ textAlign: "left", marginBottom: "2rem" }}>
        <Link
          to="/"
          style={{
            backgroundColor: "#ffffff",
            color: "#0f0f10",
            padding: "8px 16px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          ← Back to Home
        </Link>
      </div>

      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Videos</h1>
      <p style={{ maxWidth: 800, margin: "0 auto", lineHeight: 1.6 }}>
        This page will showcase my video work.
      </p>
    </main>
  );
}
