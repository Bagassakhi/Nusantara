import { useEffect, useState } from "react";

export default function KotaSelect({ provinsiId, selectedId, onSelect }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (provinsiId) {
      fetch(
        `https://alamat.thecloudalert.com/api/kabkota/get/?d_provinsi_id=${provinsiId}`,
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
  }, [provinsiId]);

  return (
    <select
      value={selectedId || ""}
      onChange={(e) => {
        const id = e.target.value;
        const text = e.target.options[e.target.selectedIndex]?.text || "";
        onSelect({ id, text });
      }}
      disabled={!provinsiId}
      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-medium focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <option value="">Pilih Kota</option>
      {data.map((item) => (
        <option key={item.id} value={item.id}>
          {item.text}
        </option>
      ))}
    </select>
  );
}
