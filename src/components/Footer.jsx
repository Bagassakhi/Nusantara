import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: "#111827", color: "white", padding: "48px 0" }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
            marginBottom: "32px",
          }}
        >
          {/* Brand */}
          <div>
            <Link
              to="/"
              style={{
                display: "flex",
                gap: "8px",
                marginBottom: "16px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "linear-gradient(to right, #9333ea, #ec4899)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaGlobe style={{ color: "white", fontSize: "18px" }} />
              </div>
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                Nusantara
              </span>
            </Link>
            <p style={{ color: "#9ca3af", fontSize: "14px" }}>
              Database wilayah geografis Indonesia terlengkap dan terpercaya.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              style={{
                fontWeight: "bold",
                marginBottom: "16px",
                fontSize: "14px",
              }}
            >
              NAVIGASI
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <li>
                <Link
                  to="/"
                  style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/region-select"
                  style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Jelajahi
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Tentang
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3
              style={{
                fontWeight: "bold",
                marginBottom: "16px",
                fontSize: "14px",
              }}
            >
              BANTUAN
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <li>
                <a
                  href="#docs"
                  style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Dokumentasi
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid #374151", paddingTop: "32px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <p style={{ color: "#9ca3af", fontSize: "14px" }}>
              © {currentYear} Jelajahi Nusantara. Semua hak dilindungi.
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              <a
                href="#privacy"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Privasi
              </a>
              <a
                href="#terms"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Syarat
              </a>
              <a
                href="#cookies"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Cookie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
