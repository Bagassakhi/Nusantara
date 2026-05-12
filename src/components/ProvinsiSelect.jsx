// Import hook React untuk state dan efek (side effect seperti fetch data)
import { useEffect, useState } from "react";

// Komponen ProvinsiSelect menerima 2 props:
// - selectedId → ID provinsi yang sedang dipilih
// - onSelect → fungsi callback saat user memilih provinsi
export default function ProvinsiSelect({ selectedId, onSelect }) {

  // State untuk menyimpan daftar provinsi dari API
  const [data, setData] = useState([]);

  // useEffect dengan dependency [] → hanya jalan sekali saat komponen pertama kali render
  useEffect(() => {

    // Fetch data provinsi dari API
    fetch("https://alamat.thecloudalert.com/api/provinsi/get/")
      .then((res) => res.json()) // ubah response ke JSON
      .then((res) => {
        // Simpan hasil ke state (jika tidak ada, pakai array kosong)
        setData(res.result || []);
      })
      .catch((err) => {
        // Jika terjadi error, tampilkan di console
        console.error(err);
      });

  }, []); // kosong → hanya dijalankan sekali (componentDidMount)

  return (
    // Dropdown select untuk memilih provinsi
    <select

      // Nilai yang dipilih (controlled component)
      value={selectedId || ""}

      // Event saat user memilih option
      onChange={(e) => {

        // Ambil ID provinsi dari value option
        const id = e.target.value;

        // Ambil nama/teks provinsi dari option yang dipilih
        const text = e.target.options[e.target.selectedIndex]?.text || "";

        // Kirim data ke parent component melalui callback
        onSelect({ id, text });
      }}

      // Styling menggunakan Tailwind CSS
      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-medium focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900/50 transition"
    >

      {/* Option default */}
      <option value="">Pilih Provinsi</option>

      {/* Loop data provinsi dari API */}
      {data.map((item) => (

        // Setiap option punya key dan value dari item.id
        <option key={item.id} value={item.id}>
          {/* Tampilkan nama provinsi */}
          {item.text}
        </option>
      ))}

    </select>
  );
}