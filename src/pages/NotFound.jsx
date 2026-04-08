import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl space-y-12">
        {/* 404 Number */}
        <div className="text-[150px] md:text-[200px] font-black bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-none animate-bounce">
          404
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
            Maaf, halaman yang Anda cari tidak ada. URL mungkin salah atau
            halaman telah dihapus.
          </p>
        </div>

        {/* Icon */}
        <div className="text-5xl">🗺️</div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => navigate("/")}
            className="group relative inline-block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition"></div>
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-2xl transition">
              ← Kembali ke Beranda
            </div>
          </button>
          <button
            onClick={() => navigate("/region-select")}
            className="px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Ke Pemilihan Wilayah
          </button>
        </div>

        {/* Footer */}
        <div className="text-gray-600 dark:text-gray-400 text-sm">
          <p className="font-semibold">Butuh bantuan?</p>
          <p className="text-xs mt-2">
            Silakan kembali ke halaman utama atau hubungi support
          </p>
        </div>
      </div>
    </div>
  );
}
