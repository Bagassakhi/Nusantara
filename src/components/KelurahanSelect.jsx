// Import hook React untuk state dan efek (side effect seperti fetch data)
import { useEffect, useState } from "react";

// Komponen KelurahanSelect menerima 3 props:
// - kecamatanId → ID kecamatan yang dipilih (untuk ambil data kelurahan)
// - selectedId → ID kelurahan yang sedang dipilih
// - onSelect → fungsi callback saat user memilih kelurahan
export default function KelurahanSelect({ kecamatanId, selectedId, onSelect }) {

  // State untuk menyimpan daftar kelurahan dari API
  const [data, setData] = useState([]);

  // useEffect akan berjalan setiap kali kecamatanId berubah
  useEffect(() => {

    // Jika kecamatanId ada (tidak kosong)
    if (kecamatanId) {

      // Fetch data kelurahan dari API berdasarkan kecamatanId
      fetch(
        `https://alamat.thecloudalert.com/api/kelurahan/get/?d_kecamatan_id=${kecamatanId}`,
      )
        .then((res) => res.json()) // ubah response ke JSON
        .then((res) => {
          // Simpan hasil ke state (jika tidak ada, pakai array kosong)
          setData(res.result || []);
        })
        .catch((err) => {
          // Jika terjadi error, tampilkan di console
          console.error(err);
        });

    } else {
      // Jika kecamatanId kosong, kosongkan data kelurahan
      setData([]);
    }

  }, [kecamatanId]); // dependency: akan rerun saat kecamatanId berubah

  return (
    // Dropdown select untuk memilih kelurahan
    <select

      // Nilai yang dipilih (controlled component)
      value={selectedId || ""}

      // Event saat user memilih option
      onChange={(e) => {

        // Ambil ID kelurahan dari value option
        const id = e.target.value;

        // Ambil nama/teks kelurahan dari option yang dipilih
        const text = e.target.options[e.target.selectedIndex]?.text || "";

        // Kirim data ke parent component melalui callback
        onSelect({ id, text });
      }}

      // Disable dropdown jika kecamatan belum dipilih
      disabled={!kecamatanId}

      // Styling menggunakan Tailwind CSS
      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-medium focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >

      {/* Option default */}
      <option value="">Pilih Kelurahan</option>

      {/* Loop data kelurahan dari API */}
      {data.map((item) => (

        // Setiap option punya key dan value dari item.id
        <option key={item.id} value={item.id}>
          {/* Tampilkan nama kelurahan */}
          {item.text}
        </option>
      ))}

    </select>
  );
}