import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";

export default function Navbar() {
  return (
    <header
      style={{
        backgroundColor: "#111827",
        color: "white",
        padding: "16px 0",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.12)",
      }}
    >
      <div
        style={{
          maxWidth: "90rem",
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "white",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #9333ea, #ec4899)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaGlobe
              style={{ color: "white", width: "20px", height: "20px" }}
            />
          </div>
          <span style={{ fontWeight: "700", fontSize: "18px" }}>Nusantara</span>
        </Link>
      </div>
    </header>
  );
}
