// Import hook React untuk state dan efek (side effect seperti fetch data)
import { useEffect, useState } from "react";

// Komponen KotaSelect menerima 3 props:
// - provinsiId → ID provinsi yang dipilih (untuk ambil data kota/kabupaten)
// - selectedId → ID kota yang sedang dipilih
// - onSelect → fungsi callback saat user memilih kota
export default function KotaSelect({ provinsiId, selectedId, onSelect }) {

  // State untuk menyimpan daftar kota dari API
  const [data, setData] = useState([]);

  // useEffect akan berjalan setiap kali provinsiId berubah
  useEffect(() => {

    // Jika provinsiId ada (tidak kosong)
    if (provinsiId) {

      // Fetch data kota/kabupaten dari API berdasarkan provinsiId
      fetch(
        `https://alamat.thecloudalert.com/api/kabkota/get/?d_provinsi_id=${provinsiId}`,
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
      // Jika provinsiId kosong, kosongkan data kota
      setData([]);
    }

  }, [provinsiId]); // dependency: akan rerun saat provinsiId berubah

  return (
    // Dropdown select untuk memilih kota/kabupaten
    <select

      // Nilai yang dipilih (controlled component)
      value={selectedId || ""}

      // Event saat user memilih option
      onChange={(e) => {

        // Ambil ID kota dari value option
        const id = e.target.value;

        // Ambil nama/teks kota dari option yang dipilih
        const text = e.target.options[e.target.selectedIndex]?.text || "";

        // Kirim data ke parent component melalui callback
        onSelect({ id, text });
      }}

      // Disable dropdown jika provinsi belum dipilih
      disabled={!provinsiId}

      // Styling menggunakan Tailwind CSS
      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-medium focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >

      {/* Option default */}
      <option value="">Pilih Kota</option>

      {/* Loop data kota dari API */}
      {data.map((item) => (

        // Setiap option punya key dan value dari item.id
        <option key={item.id} value={item.id}>
          {/* Tampilkan nama kota/kabupaten */}
          {item.text}
        </option>
      ))}

    </select>
  );
}