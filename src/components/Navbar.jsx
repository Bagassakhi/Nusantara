// Import Link untuk navigasi tanpa reload halaman (React Router)
import { Link } from "react-router-dom";

// Import icon globe dari react-icons
import { FaGlobe } from "react-icons/fa";

// Komponen Navbar
export default function Navbar() {
  return (
    // Elemen header sebagai pembungkus navbar
    <header
      style={{
        backgroundColor: "#111827", // warna background gelap
        color: "white",             // warna teks putih
        padding: "16px 0",          // jarak atas bawah
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.12)", // bayangan halus
      }}
    >
      {/* Container agar isi navbar tidak terlalu lebar */}
      <div
        style={{
          maxWidth: "90rem", // lebar maksimal
          margin: "0 auto",  // center ke tengah
          padding: "0 16px",
          display: "flex",   // pakai flexbox
          alignItems: "center", // sejajar vertikal
          justifyContent: "space-between", // kiri-kanan
          gap: "16px",
        }}
      >

        {/* Logo + Nama Brand (klik kembali ke homepage) */}
        <Link
          to="/" // arah ke halaman utama
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none", // hilangkan underline
            color: "white",
          }}
        >

          {/* Kotak icon dengan gradient */}
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
            {/* Icon globe */}
            <FaGlobe
              style={{ color: "white", width: "20px", height: "20px" }}
            />
          </div>

          {/* Nama brand */}
          <span style={{ fontWeight: "700", fontSize: "18px" }}>
            Nusantara
          </span>
        </Link>

      </div>
    </header>
  );
}