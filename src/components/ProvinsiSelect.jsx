import { useEffect, useState } from "react";

export default function ProvinsiSelect({ selectedId, onSelect }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://alamat.thecloudalert.com/api/provinsi/get/")
      .then((res) => res.json())
      .then((res) => {
        setData(res.result || []);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <select
      value={selectedId || ""}
      onChange={(e) => {
        const id = e.target.value;
        const text = e.target.options[e.target.selectedIndex]?.text || "";
        onSelect({ id, text });
      }}
      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-medium focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900/50 transition"
    >
      <option value="">Pilih Provinsi</option>
      {data.map((item) => (
        <option key={item.id} value={item.id}>
          {item.text}
        </option>
      ))}
    </select>
  );
}
