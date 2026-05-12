import { useState, useEffect } from "react"; // Hook React untuk state dan efek (useEffect belum dipakai di sini)
import { useNavigate } from "react-router-dom"; // Untuk navigasi halaman
import ProvinsiSelect from "../components/ProvinsiSelect"; // Component dropdown provinsi
import KotaSelect from "../components/KotaSelect"; // Component dropdown kota
import KecamatanSelect from "../components/KecamatanSelect"; // Component dropdown kecamatan
import KelurahanSelect from "../components/KelurahanSelect"; // Component dropdown kelurahan

// Import icon dari react-icons
import {
  FaArrowLeft,
  FaCheckCircle,
  FaTimes,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCity,
  FaBuilding,
  FaHome,
  FaChevronRight,
  FaDatabase,
  FaGlobeAsia,
  FaSpinner,
} from "react-icons/fa";

export default function RegionSelect() {
  const navigate = useNavigate(); // Fungsi untuk berpindah halaman

  // State untuk menyimpan data wilayah yang dipilih
  const [provinsi, setProvinsi] = useState({ id: "", text: "" });
  const [kota, setKota] = useState({ id: "", text: "" });
  const [kecamatan, setKecamatan] = useState({ id: "", text: "" });
  const [kelurahan, setKelurahan] = useState({ id: "", text: "" });

  const [activeStep, setActiveStep] = useState(1); // Menentukan langkah aktif (step ke berapa)
  const [isLoading, setIsLoading] = useState(false); // Untuk menampilkan loading

  // Fungsi saat user memilih provinsi
  const handleProvinsiSelect = (selected) => {
    setIsLoading(true); // tampilkan loading
    setProvinsi(selected); // simpan provinsi yang dipilih

    // Reset pilihan di bawahnya (karena hirarki berubah)
    setKota({ id: "", text: "" });
    setKecamatan({ id: "", text: "" });
    setKelurahan({ id: "", text: "" });

    setActiveStep(2); // lanjut ke step kota
    setTimeout(() => setIsLoading(false), 300); // simulasi loading 300ms
  };

  // Fungsi saat user memilih kota
  const handleKotaSelect = (selected) => {
    setIsLoading(true);
    setKota(selected); // simpan kota

    // Reset bawahnya
    setKecamatan({ id: "", text: "" });
    setKelurahan({ id: "", text: "" });

    setActiveStep(3); // lanjut ke kecamatan
    setTimeout(() => setIsLoading(false), 300);
  };

  // Fungsi saat user memilih kecamatan
  const handleKecamatanSelect = (selected) => {
    setIsLoading(true);
    setKecamatan(selected); // simpan kecamatan

    // Reset kelurahan
    setKelurahan({ id: "", text: "" });

    setActiveStep(4); // lanjut ke kelurahan
    setTimeout(() => setIsLoading(false), 300);
  };

  // Fungsi saat user memilih kelurahan
  const handleKelurahanSelect = (selected) => {
    setKelurahan(selected); // simpan kelurahan
  };

  // Mengecek apakah semua pilihan sudah lengkap
  const isComplete = provinsi.id && kota.id && kecamatan.id && kelurahan.id;

  // Fungsi ketika tombol "Selesai" ditekan
  const handleSelesai = () => {
    if (isComplete) {
      navigate("/detail", {
        state: {
          provinsi,
          kota,
          kecamatan,
          kelurahan,
        },
      }); // kirim data ke halaman detail
    }
  };

  // Data step untuk progress indikator
  const steps = [
    {
      id: 1,
      name: "Provinsi", // Nama step
      icon: FaMapMarkerAlt, // Icon step
      color: "from-purple-500 to-indigo-600", // warna gradient
      lightColor: "bg-purple-100 dark:bg-purple-900/30", // background ringan
      textColor: "text-purple-600 dark:text-purple-400", // warna teks
      selected: !!provinsi.id, // true jika sudah dipilih
      value: provinsi.text, // nama provinsi
    },
    {
      id: 2,
      name: "Kota/Kabupaten",
      icon: FaCity,
      color: "from-blue-500 to-cyan-600",
      lightColor: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-600 dark:text-blue-400",
      selected: !!kota.id,
      value: kota.text,
    },
    {
      id: 3,
      name: "Kecamatan",
      icon: FaBuilding,
      color: "from-indigo-500 to-purple-600",
      lightColor: "bg-indigo-100 dark:bg-indigo-900/30",
      textColor: "text-indigo-600 dark:text-indigo-400",
      selected: !!kecamatan.id,
      value: kecamatan.text,
    },
    {
      id: 4,
      name: "Kelurahan",
      icon: FaHome,
      color: "from-pink-500 to-rose-600",
      lightColor: "bg-pink-100 dark:bg-pink-900/30",
      textColor: "text-pink-600 dark:text-pink-400",
      selected: !!kelurahan.id,
      value: kelurahan.text,
    },
  ];

  // Fungsi untuk menentukan status setiap step
  const getStepStatus = (stepId) => {

    // STEP 1 (Provinsi)
    if (stepId === 1)
      return provinsi.id
        ? "completed" // jika sudah dipilih
        : activeStep === 1
          ? "active" // jika sedang aktif
          : "pending"; // belum dipilih

    // STEP 2 (Kota)
    if (stepId === 2)
      return kota.id
        ? "completed"
        : activeStep === 2
          ? "active"
          : provinsi.id
            ? "pending" // bisa dipilih jika provinsi sudah ada
            : "locked"; // dikunci jika belum pilih provinsi

    // STEP 3 (Kecamatan)
    if (stepId === 3)
      return kecamatan.id
        ? "completed"
        : activeStep === 3
          ? "active"
          : kota.id
            ? "pending"
            : "locked";

    // STEP 4 (Kelurahan)
    return kelurahan.id
      ? "completed"
      : activeStep === 4
        ? "active"
        : kecamatan.id
          ? "pending"
          : "locked";
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8 md:py-12 px-4 relative overflow-hidden">
      {/* Animated Background - simplified for dark theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header with Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/")}
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-purple-600 dark:text-purple-400 font-semibold transition-all backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
            <FaGlobeAsia className="text-3xl text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-3">
            Pilih{" "}
            <span className="bg-gradient-to-r dark:text-white bg-clip-text text-transparent">
              Wilayah Anda
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400  mx-auto">
            Tentukan lokasi dengan memilih provinsi, kota, kecamatan, dan
            kelurahan secara berurutan{" "}
          </p>
        </div>

        {/* Modern Step Progress Indicator */}
        <div className="mb-10">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-gray-700/30 p-6">
            <div className="flex items-center justify-between relative">
              {steps.map((step, idx) => {
                const status = getStepStatus(step.id);
                return (
                  <div key={step.id} className="flex-1 relative">
                    {/* Connector Line */}
                    {idx < steps.length - 1 && (
                      <div
                        className={`absolute top-5 left-[60%] w-[80%] h-0.5 transition-all duration-500 ${
                          status === "completed" ||
                          (idx + 2 <= activeStep && status !== "locked")
                            ? "bg-gradient-to-r from-purple-500 to-pink-500"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      />
                    )}

                    {/* Step Circle */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`relative z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl transition-all duration-300 ${
                          status === "completed"
                            ? `bg-gradient-to-r ${step.color} shadow-lg scale-110`
                            : status === "active"
                              ? "bg-white dark:bg-gray-700 border-2 border-purple-500 shadow-lg"
                              : status === "locked"
                                ? "bg-gray-300 dark:bg-gray-700 opacity-50"
                                : "bg-gray-300 dark:bg-gray-700"
                        }`}
                      >
                        {status === "completed" ? (
                          <FaCheckCircle className="text-white text-lg md:text-xl" />
                        ) : status === "active" ? (
                          <step.icon className="text-purple-500 text-lg md:text-xl" />
                        ) : (
                          <step.icon className="text-gray-500 dark:text-gray-400 text-lg md:text-xl" />
                        )}
                      </div>

                      {/* Step Label */}
                      <p
                        className={`mt-2 text-xs md:text-sm font-bold transition-all duration-300 ${
                          status === "completed"
                            ? `bg-gradient-to-r ${step.color} bg-clip-text text-transparent`
                            : status === "active"
                              ? "text-purple-600 dark:text-purple-400"
                              : "text-gray-500 dark:text-gray-500"
                        }`}
                      >
                        {step.name}
                      </p>

                      {/* Selected Value */}
                      {status === "completed" && step.value && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-[80px] truncate hidden md:block">
                          {step.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 flex flex-col items-center gap-3 shadow-2xl">
              <FaSpinner className="text-4xl text-purple-500 animate-spin" />
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Memuat data...
              </p>
            </div>
          </div>
        )}

        {/* Form Cards - Modern Cascade Design */}
        <div className="space-y-5">
          {/* Provinsi Card */}
          <div
            className={`transform transition-all duration-500 ${getStepStatus(1) === "locked" ? "opacity-50" : "opacity-100"}`}
          >
            <div
              className={`relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                provinsi.id
                  ? "border-purple-500/50 shadow-md"
                  : activeStep === 1
                    ? "border-purple-500/50 ring-2 ring-purple-500/20"
                    : "border-gray-200/50 dark:border-gray-700/50"
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 shadow-md`}
                    >
                      <FaMapMarkerAlt className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        Provinsi
                      </h3>
                      {provinsi.text && (
                        <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                          {provinsi.text}
                        </p>
                      )}
                    </div>
                  </div>
                  {provinsi.id && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40">
                      <FaCheckCircle className="text-purple-600 dark:text-purple-400 text-xs" />
                      <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                        Terpilih
                      </span>
                    </div>
                  )}
                </div>
                <ProvinsiSelect
                  selectedId={provinsi.id}
                  onSelect={handleProvinsiSelect}
                  disabled={!!provinsi.id}
                />
                {!provinsi.id && activeStep === 1 && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 flex items-center gap-1">
                    <FaChevronRight className="text-purple-500 text-xs" />
                    Silakan pilih provinsi Anda
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Kota Card */}
          {provinsi.id && (
            <div
              className={`transform transition-all duration-500 ${getStepStatus(2) === "locked" ? "opacity-50" : "opacity-100"}`}
            >
              <div
                className={`relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                  kota.id
                    ? "border-blue-500/50 shadow-md"
                    : activeStep === 2
                      ? "border-blue-500/50 ring-2 ring-blue-500/20"
                      : "border-gray-200/50 dark:border-gray-700/50"
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 shadow-md`}
                      >
                        <FaCity className="text-white text-lg" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          Kota/Kabupaten
                        </h3>
                        {kota.text && (
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            {kota.text}
                          </p>
                        )}
                      </div>
                    </div>
                    {kota.id && (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40">
                        <FaCheckCircle className="text-blue-600 dark:text-blue-400 text-xs" />
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                          Terpilih
                        </span>
                      </div>
                    )}
                  </div>
                  <KotaSelect
                    provinsiId={provinsi.id}
                    selectedId={kota.id}
                    onSelect={handleKotaSelect}
                    disabled={!!kota.id}
                  />
                  {!kota.id && activeStep === 2 && provinsi.id && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 flex items-center gap-1">
                      <FaChevronRight className="text-blue-500 text-xs" />
                      Pilih kota/kabupaten di {provinsi.text}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Kecamatan Card */}
          {kota.id && (
            <div
              className={`transform transition-all duration-500 ${getStepStatus(3) === "locked" ? "opacity-50" : "opacity-100"}`}
            >
              <div
                className={`relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                  kecamatan.id
                    ? "border-indigo-500/50 shadow-md"
                    : activeStep === 3
                      ? "border-indigo-500/50 ring-2 ring-indigo-500/20"
                      : "border-gray-200/50 dark:border-gray-700/50"
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md`}
                      >
                        <FaBuilding className="text-white text-lg" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          Kecamatan
                        </h3>
                        {kecamatan.text && (
                          <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                            {kecamatan.text}
                          </p>
                        )}
                      </div>
                    </div>
                    {kecamatan.id && (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40">
                        <FaCheckCircle className="text-indigo-600 dark:text-indigo-400 text-xs" />
                        <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                          Terpilih
                        </span>
                      </div>
                    )}
                  </div>
                  <KecamatanSelect
                    kotaId={kota.id}
                    selectedId={kecamatan.id}
                    onSelect={handleKecamatanSelect}
                    disabled={!!kecamatan.id}
                  />
                  {!kecamatan.id && activeStep === 3 && kota.id && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 flex items-center gap-1">
                      <FaChevronRight className="text-indigo-500 text-xs" />
                      Pilih kecamatan di {kota.text}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Kelurahan Card */}
          {kecamatan.id && (
            <div
              className={`transform transition-all duration-500 ${getStepStatus(4) === "locked" ? "opacity-50" : "opacity-100"}`}
            >
              <div
                className={`relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                  kelurahan.id
                    ? "border-pink-500/50 shadow-md"
                    : activeStep === 4
                      ? "border-pink-500/50 ring-2 ring-pink-500/20"
                      : "border-gray-200/50 dark:border-gray-700/50"
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 shadow-md`}
                      >
                        <FaHome className="text-white text-lg" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          Kelurahan
                        </h3>
                        {kelurahan.text && (
                          <p className="text-sm text-pink-600 dark:text-pink-400 font-medium">
                            {kelurahan.text}
                          </p>
                        )}
                      </div>
                    </div>
                    {kelurahan.id && (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pink-100 dark:bg-pink-900/40">
                        <FaCheckCircle className="text-pink-600 dark:text-pink-400 text-xs" />
                        <span className="text-xs font-semibold text-pink-600 dark:text-pink-400">
                          Terpilih
                        </span>
                      </div>
                    )}
                  </div> 
      
                  <KelurahanSelect
                    kecamatanId={kecamatan.id}
                    selectedId={kelurahan.id}
                    onSelect={handleKelurahanSelect}
                    disabled={!!kelurahan.id}
                  />
                  {!kelurahan.id && activeStep === 4 && kecamatan.id && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 flex items-center gap-1">
                      <FaChevronRight className="text-pink-500 text-xs" />
                      Pilih kelurahan di {kecamatan.text}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => navigate("/")}
            className="group px-6 py-3.5 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:shadow-md"
          >
            <span className="flex items-center justify-center gap-2">
              <FaTimes className="w-4 h-4" />
              Batal
            </span>
          </button>

          <button
            onClick={handleSelesai}
            disabled={!isComplete}
            className={`group flex-1 px-6 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg ${
              isComplete
                ? "bg-gradient-to-r dark:bg-gray-800/80 hover:shadow-xl hover:scale-[1.02] text-white"
                : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
            }`}
          >
            <span>Lanjut ke Detail Wilayah</span>
            <FaArrowRight
              className={`w-4 h-4 transition-transform duration-300 ${isComplete ? "group-hover:translate-x-1" : ""}`}
            />
          </button>
        </div>

        {/* Completion Status */}
        {isComplete && (
          <div className="mt-6 animate-fadeInUp">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 backdrop-blur-sm rounded-xl border border-green-200 dark:border-green-800 p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <FaCheckCircle className="text-green-600 dark:text-green-400 text-lg" />
                <p className="text-green-700 dark:text-green-300 font-semibold">
                  Lengkap! Seluruh wilayah sudah terpilih
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {provinsi.text} → {kota.text} → {kecamatan.text} →{" "}
                {kelurahan.text}
              </p>
            </div>
          </div>
        )}

        {/* Info Database Card */}
        <div className="mt-8">
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <FaDatabase className="text-purple-600 dark:text-purple-400 text-sm" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white text-sm mb-0.5">
                  Database Wilayah Indonesia
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  34 Provinsi • 514 Kota/Kabupaten • 7.024 Kecamatan • 83.763
                  Kelurahan • Data terupdate 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
