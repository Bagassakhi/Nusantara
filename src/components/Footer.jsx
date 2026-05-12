// Import komponen Link dari react-router-dom untuk navigasi tanpa reload halaman
import { Link } from "react-router-dom";

// Import icon globe dari react-icons
import { FaGlobe } from "react-icons/fa";

// Membuat komponen Footer
export default function Footer() {

  // Mengambil tahun sekarang secara otomatis (misalnya 2026)
  const currentYear = new Date().getFullYear();

  return (
    // Elemen utama footer
    <footer
      style={{
        backgroundColor: "#111827", // warna background gelap
        color: "white",             // warna teks putih
        padding: "48px 0"           // jarak dalam atas & bawah
      }}
    >
      {/* Container utama agar isi tidak terlalu lebar */}
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 16px" }}>
        
        {/* Grid layout 3 kolom */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 kolom sama besar
            gap: "32px", // jarak antar kolom
            marginBottom: "32px",
          }}
        >

          {/* ================= BRAND ================= */}
          <div>
            {/* Link ke halaman utama */}
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
              {/* Icon kotak dengan gradient */}
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
                {/* Icon globe */}
                <FaGlobe style={{ color: "white", fontSize: "18px" }} />
              </div>

              {/* Nama brand */}
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                Nusantara
              </span>
            </Link>

            {/* Deskripsi singkat */}
            <p style={{ color: "#9ca3af", fontSize: "14px" }}>
              Database wilayah geografis Indonesia terlengkap dan terpercaya.
            </p>
          </div>

          {/* ================= NAVIGASI ================= */}
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

            {/* List menu navigasi */}
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
              {/* Link ke Beranda */}
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

              {/* Link ke halaman region */}
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

              {/* Anchor ke section halaman */}
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

          {/* ================= BANTUAN ================= */}
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

            {/* List bantuan */}
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
                <a href="#docs" style={{ color: "#9ca3af", fontSize: "14px" }}>
                  Dokumentasi
                </a>
              </li>

              <li>
                <a href="#faq" style={{ color: "#9ca3af", fontSize: "14px" }}>
                  FAQ
                </a>
              </li>

              <li>
                <a href="#contact" style={{ color: "#9ca3af", fontSize: "14px" }}>
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= BAGIAN BAWAH ================= */}
        <div style={{ borderTop: "1px solid #374151", paddingTop: "32px" }}>
          
          {/* Flex untuk layout kiri kanan */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between", // kiri kanan
              alignItems: "center",
              flexWrap: "wrap", // biar responsive
              gap: "16px",
            }}
          >
            {/* Copyright */}
            <p style={{ color: "#9ca3af", fontSize: "14px" }}>
              © {currentYear} Jelajahi Nusantara. Semua hak dilindungi.
            </p>

            {/* Link tambahan */}
            <div style={{ display: "flex", gap: "24px" }}>
              <a href="#privacy" style={{ color: "#9ca3af", fontSize: "14px" }}>
                Privasi
              </a>

              <a href="#terms" style={{ color: "#9ca3af", fontSize: "14px" }}>
                Syarat
              </a>

              <a href="#cookies" style={{ color: "#9ca3af", fontSize: "14px" }}>
                Cookie
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}