import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaCity,
  FaBuilding,
  FaGlobe,
  FaArrowRight,
  FaDatabase,
  FaRocket,
  FaPalette,
} from "react-icons/fa";
import Template from "./Template";
import RegionSelect from "./pages/RegionSelect";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

const stats = [
  {
    number: "34",
    label: "Provinsi",
    icon: FaMapMarkerAlt,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "514",
    label: "Kota/Kabupaten",
    icon: FaCity,
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "7.024",
    label: "Kecamatan",
    icon: FaBuilding,
    color: "from-orange-500 to-red-500",
  },
  {
    number: "83.763",
    label: "Kelurahan",
    icon: FaGlobe,
    color: "from-purple-500 to-pink-500",
  },
];

const features = [
  {
    title: "Data Terlengkap",
    desc: "Informasi wilayah administratif Indonesia...",
    icon: FaDatabase,
    color: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Pencarian Interaktif",
    desc: "Sistem filter cascade...",
    icon: FaSearch,
    color: "from-green-500 to-emerald-500",
    iconColor: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Pencarian Cepat",
    desc: "Temukan lokasi dengan cepat...",
    icon: FaRocket,
    color: "from-orange-500 to-red-500",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    title: "Design Modern",
    desc: "Interface responsif dan indah...",
    icon: FaPalette,
    color: "from-purple-500 to-pink-500",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

const StatCard = ({ number, label, Icon, color }) => (
  <div className={`relative group hover:scale-105 transition-transform`}>
    <div
      className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-2xl blur opacity-0 group-hover:opacity-75 transition`}
    />
    <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700">
      <div className="text-purple-600 dark:text-purple-400 mb-3">
        <Icon className="text-4xl" />
      </div>
      <div
        className={`text-4xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}
      >
        {number}
      </div>
      <p className="text-gray-700 dark:text-gray-300 font-semibold">{label}</p>
    </div>
  </div>
);

// ✅ FIX DI SINI SAJA
const FeatureCard = ({ title, desc, Icon, color, iconColor, bgColor }) => (
  <div className="group relative hover:-translate-y-2 transition-transform">
    <div
      className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-2xl blur opacity-0 group-hover:opacity-100 transition`}
    />
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg border border-gray-200 dark:border-gray-700 h-full">
      
      <div className={`inline-flex p-4 rounded-2xl ${bgColor} mb-4`}>
        {/* ❌ HAPUS text-transparent */}
        <Icon className={`text-5xl ${iconColor}`} />
      </div>

      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden ">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-slate-600 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
              opacity: Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="inline-block mb-8 animate-spin-slow p-5 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full shadow-2xl">
          <FaGlobe className="text-5xl text-white" />
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          <span className="text-gray-900 dark:text-white">Jelajahi</span>
          <br />
          <span className="bg-gradient-to-r dark:text-white bg-clip-text text-transparent">
            Nusantara
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-9">
          Temukan informasi geografis lengkap tentang provinsi, kota, kecamatan,
          dan kelurahan di seluruh nusantara
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 mt-5">
          {stats.map((s, i) => (
            <StatCard
              key={i}
              number={s.number}
              label={s.label}
              Icon={s.icon}
              color={s.color}
            />
          ))}
        </div>

        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Fitur{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Unggulan
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 ">
            Nikmati kemudahan dalam menjelajahi wilayah Indonesia
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
            {features.map((f, i) => (
              <FeatureCard
                key={i}
                title={f.title}
                desc={f.desc}
                Icon={f.icon}
                color={f.color}
                iconColor={f.iconColor}
                bgColor={f.bgColor}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-20"></div>
          <div className="relative bg-gradient-to-r dark:bg-gray-800/80 rounded-3xl p-12 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap Menjelajahi Indonesia?
            </h3>

            <p className="text-white/90 text-lg mb-8 ">
              Temukan ribuan data wilayah geografis Indonesia dengan mudah dan
              cepat
            </p>

            <button
              onClick={() => navigate("/region-select")}
              className="mt-5 inline-flex items-center gap-3 px-8 py-4 bg-white rounded-2xl text-purple-600 font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 group"
            >
              <span>Mulai Jelajahi Sekarang</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {0%,100%{transform:translateY(0);}50%{transform:translateY(-20px);}}
        @keyframes spin-slow {from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
        .animate-float{animation:float linear infinite;}
        .animate-spin-slow{animation:spin-slow 20s linear infinite;}
      `}</style>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<Landing />} />
          <Route path="/region-select" element={<RegionSelect />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;