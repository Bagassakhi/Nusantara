import { useState } from "react";
import ProvinsiSelect from "../components/ProvinsiSelect";
import KotaSelect from "../components/KotaSelect";
import KecamatanSelect from "../components/KecamatanSelect";
import KelurahanSelect from "../components/KelurahanSelect";

export default function Home() {
  const [provinsi, setProvinsi] = useState({ id: "", text: "" });
  const [kota, setKota] = useState({ id: "", text: "" });
  const [kecamatan, setKecamatan] = useState({ id: "", text: "" });
  const [kelurahan, setKelurahan] = useState({ id: "", text: "" });

  const handleProvinsiSelect = (selected) => {
    setProvinsi(selected);
    setKota({ id: "", text: "" });
    setKecamatan({ id: "", text: "" });
    setKelurahan({ id: "", text: "" });
  };

  const handleKotaSelect = (selected) => {
    setKota(selected);
    setKecamatan({ id: "", text: "" });
    setKelurahan({ id: "", text: "" });
  };

  const handleKecamatanSelect = (selected) => {
    setKecamatan(selected);
    setKelurahan({ id: "", text: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Data Wilayah Indonesia</h1>

      <ProvinsiSelect
        onSelect={handleProvinsiSelect}
        selectedId={provinsi.id}
      />
      <br />
      <br />

      <KotaSelect
        provinsiId={provinsi.id}
        onSelect={handleKotaSelect}
        selectedId={kota.id}
      />
      <br />
      <br />

      <KecamatanSelect
        kotaId={kota.id}
        onSelect={handleKecamatanSelect}
        selectedId={kecamatan.id}
      />
      <br />
      <br />

      <KelurahanSelect
        kecamatanId={kecamatan.id}
        onSelect={setKelurahan}
        selectedId={kelurahan.id}
      />
      <br />
      <br />

      <h3>Hasil:</h3>
      <p>Provinsi: {provinsi.text || "-"}</p>
      <p>Kota: {kota.text || "-"}</p>
      <p>Kecamatan: {kecamatan.text || "-"}</p>
      <p>Kelurahan: {kelurahan.text || "-"}</p>
    </div>
  );
}
