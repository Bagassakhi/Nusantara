import { useLocation, useNavigate } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaMapMarkerAlt, 
  FaCity, 
  FaBuilding, 
  FaHome,
  FaDatabase,
  FaCheckCircle,
  FaGlobeAsia,
  FaRegBuilding,
  FaTree,
  FaCloudSun,
  FaCompass,
  FaEdit,
  FaPrint,
  FaShare,
  FaDownload
} from "react-icons/fa";
import { useState } from "react";

export default function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const [isHovered, setIsHovered] = useState(false);

  // Handle jika data kosong
  if (!data) {
    return (
      <div className="min-h-screen dark:from-gray-900 bg-slate-900  flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 -right-40 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 text-center space-y-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl animate-bounce">
            <FaGlobeAsia className="text-5xl text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white">
            Data Tidak{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ditemukan
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400  mx-auto">
            Silakan kembali ke halaman pemilihan wilayah untuk memilih lokasi
          </p>
          <button
            onClick={() => navigate("/region-select")}
            className="group relative inline-block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r  rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="mt-3 relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 group-hover:scale-105 transition-transform">
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Kembali Pilih Wilayah
            </div>
          </button>
        </div>
      </div>
    );
  }

  const { provinsi, kota, kecamatan, kelurahan } = data;

  const hierarchy = [
    { name: "Provinsi", value: provinsi.text, id: provinsi.id, icon: FaMapMarkerAlt, color: "from-purple-500 to-indigo-600", bg: "bg-purple-100 dark:bg-purple-900/30", textColor: "text-purple-600" },
    { name: "Kota/Kabupaten", value: kota.text, id: kota.id, icon: FaCity, color: "from-blue-500 to-cyan-600", bg: "bg-blue-100 dark:bg-blue-900/30", textColor: "text-blue-600" },
    { name: "Kecamatan", value: kecamatan.text, id: kecamatan.id, icon: FaBuilding, color: "from-indigo-500 to-purple-600", bg: "bg-indigo-100 dark:bg-indigo-900/30", textColor: "text-indigo-600" },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-950 dark:to-slate-900 py-8 md:py-12 px-4 relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        <div className="absolute top-2/3 left-1/2 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse animation-delay-6000"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
              opacity: Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Header with Navigation */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => navigate("/region-select")}
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-purple-600 dark:text-purple-400 font-semibold transition-all backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali Ke Pemilihan
          </button>
          
        </div>

        {/* Hero Section */}
        <div className="text-center mb-10 ">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-5 rounded-2xl  dark:bg-gray-800/80  shadow-2xl animate-gradient-x">
            <FaHome className="text-3xl text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-3">
            Detail{" "}
            <span className="bg-gradient-to-r dark:text-white bg-clip-text text-transparent">
              Wilayah
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            Informasi lengkap dan detail dari wilayah yang Anda pilih
          </p>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="mb-10 flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 flex-wrap">
          {hierarchy.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${item.bg} backdrop-blur-sm`}>
                <item.icon className={`w-4 h-4 ${item.textColor}`} />
                <span className={`font-semibold ${item.textColor} dark:${item.textColor.replace('text-','text-')}`}>
                  {item.value}
                </span>
              </div>
              {idx < hierarchy.length - 1 && (
                <svg className="w-5 h-5 mx-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Main Hero Card - Kelurahan */}
        <div className="mb-8 group">
          <div className="relative bg-gradient-to-br  dark:bg-gray-800/80 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                      <FaHome className="text-white text-2xl" />
                    </div>
                    <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">Kelurahan / Village</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3">
                    {kelurahan.text}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur">
                      <FaCheckCircle className="text-green-300 text-xs" />
                      <span className="text-white text-sm font-medium">Status Aktif</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur">
                      <FaDatabase className="text-white/70 text-xs" />
                      <span className="text-white text-sm font-medium">ID: {kelurahan.id}</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Hierarki Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {hierarchy.map((item, idx) => (
            <div 
              key={idx}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}>
                    <item.icon className={`w-6 h-6 ${item.textColor}`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{item.name}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">ID: {item.id}</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.value}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <FaCheckCircle className="text-green-500 text-xs" />
                  <span>Terverifikasi</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information Grid */}
        <div className=" gap-6 mb-8">
          {/* Informasi Geografis */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <FaTree className="text-emerald-600 dark:text-emerald-400 text-lg" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Informasi Geografis</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Ketinggian</span>
                <span className="font-semibold text-gray-900 dark:text-white">± 500 mdpl</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Luas Wilayah</span>
                <span className="font-semibold text-gray-900 dark:text-white">12.5 km²</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Jumlah Penduduk</span>
                <span className="font-semibold text-gray-900 dark:text-white">8,234 jiwa</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 dark:text-gray-400">Kode Pos</span>
                <span className="font-semibold text-gray-900 dark:text-white">80352</span>
              </div>
            </div>
          </div>

          
        </div>

      

        {/* Action Buttons */}
        <div className="flex gap-4 flex-col sm:flex-row">
          <button
            onClick={() => navigate("/")}
            className="group px-6 py-3.5 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:shadow-md flex items-center justify-center gap-2"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </button>
          
          <button
            onClick={() => navigate("/region-select")}
            className="group flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r  dark:bg-gray-800/80 text-white font-bold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <FaEdit className="w-4 h-4" />
            Pilih Ulang Wilayah
            <FaArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>  

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-pulse {
          animation: pulse 8s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-6000 { animation-delay: 6s; }
        
        @media print {
          .animate-pulse, .animate-float, .animate-gradient-x {
            animation: none;
          }
          button {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}