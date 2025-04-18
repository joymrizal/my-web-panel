'use client';

import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/auth/login');
  };

  const handleRegisterClick = () => {
    router.push('/auth/register');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
      {/* Teks Landing Page */}
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Selamat Datang di Website Joy MR IOT</h1>
      <p className="text-lg mb-8 text-gray-600">Platform yang mempermudah semua kebutuhan Anda. Daftar atau login untuk mulai</p>
      <p className="text-lg mb-8 text-gray-600">Koneksi online dengan PLC</p>

      {/* Tombol Login dan Register */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={handleLoginClick}
          className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
        <button
          onClick={handleRegisterClick}
          className="bg-green-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-green-600 transition-colors"
        >
          Daftar
        </button>
      </div>
    </div>
  );
}
