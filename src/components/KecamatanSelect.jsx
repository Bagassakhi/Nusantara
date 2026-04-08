import { useEffect, useState } from "react";

export default function KecamatanSelect({ kotaId, selectedId, onSelect }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (kotaId) {
      fetch(
        `https://alamat.thecloudalert.com/api/kecamatan/get/?d_kabkota_id=${kotaId}`,
      )
        .then((res) => res.json())
        .then((res) => {
          setData(res.result || []);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setData([]);
    }
  }, [kotaId]);

  return (
    <select
      value={selectedId || ""}
      onChange={(e) => {
        const id = e.target.value;
        const text = e.target.options[e.target.selectedIndex]?.text || "";
        onSelect({ id, text });
      }}
      disabled={!kotaId}
      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-medium focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <option value="">Pilih Kecamatan</option>
      {data.map((item) => (
        <option key={item.id} value={item.id}>
          {item.text}
        </option>
      ))}
    </select>
  );
}
