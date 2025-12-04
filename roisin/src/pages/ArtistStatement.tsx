import { Link } from "react-router-dom";

export default function ArtistStatement() {
  return (
    <main
      style={{
        padding: "2rem",
        color: "#0f0f10",
        background: "#ffffff",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
    
      <div style={{ textAlign: "left", marginBottom: "2rem" }}>
        <Link
          to="/"
          style={{
            backgroundColor:"#0f0f10", 
            color: "#ffffff",
            padding: "8px 16px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          ← Home
        </Link>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Artist Statement</h1>
        <p style={{ lineHeight: 1.6 }}>
          Welcome to my artist statement page. Here I share the concepts, inspirations, and
          materials that shape my creative work. This section highlights how my artistic
          process evolves through experimentation and reflection.
        </p>
      </div>
    </main>
  );
}


