// Import hook React untuk state dan efek (side effect seperti fetch data)
import { useEffect, useState } from "react";

// Komponen KecamatanSelect menerima 3 props:
// - kotaId → ID kota yang dipilih (untuk ambil data kecamatan)
// - selectedId → ID kecamatan yang sedang dipilih
// - onSelect → fungsi callback saat user memilih kecamatan
export default function KecamatanSelect({ kotaId, selectedId, onSelect }) {

  // State untuk menyimpan daftar kecamatan dari API
  const [data, setData] = useState([]);

  // useEffect akan berjalan setiap kali kotaId berubah
  useEffect(() => {

    // Jika kotaId ada (tidak kosong)
    if (kotaId) {

      // Ambil data kecamatan dari API berdasarkan kotaId
      fetch(
        `https://alamat.thecloudalert.com/api/kecamatan/get/?d_kabkota_id=${kotaId}`,
      )
        .then((res) => res.json()) // ubah response ke JSON
        .then((res) => {
          // Simpan hasil ke state (ambil res.result atau kosong jika tidak ada)
          setData(res.result || []);
        })
        .catch((err) => {
          // Jika error, tampilkan di console
          console.error(err);
        });

    } else {
      // Jika kotaId kosong, kosongkan data kecamatan
      setData([]);
    }

  }, [kotaId]); // dependency: akan rerun saat kotaId berubah

  return (
    // Dropdown select untuk memilih kecamatan
    <select
      // Nilai yang dipilih (controlled component)
      value={selectedId || ""}

      // Event saat user memilih opsi
      onChange={(e) => {

        // Ambil ID kecamatan dari value option
        const id = e.target.value;

        // Ambil teks/nama kecamatan dari option yang dipilih
        const text = e.target.options[e.target.selectedIndex]?.text || "";

        // Kirim data ke parent component lewat callback onSelect
        onSelect({ id, text });
      }}

      // Disable dropdown jika kota belum dipilih
      disabled={!kotaId}

      // Styling menggunakan Tailwind CSS
      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-medium focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >

      {/* Option default */}
      <option value="">Pilih Kecamatan</option>

      {/* Loop data kecamatan dari API */}
      {data.map((item) => (

        // Setiap option punya key dan value dari item.id
        <option key={item.id} value={item.id}>
          {/* Tampilkan nama kecamatan */}
          {item.text}
        </option>
      ))}

    </select>
  );
}