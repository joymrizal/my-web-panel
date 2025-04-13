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
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center">
      {/* Gambar Landing Page */}
      <img src="/path/to/your/image.jpg" alt="Landing Page Image" className="w-full h-auto max-w-4xl mb-8" />

      {/* Teks Landing Page */}
      <h1 className="text-3xl font-bold mb-4">Selamat Datang di Website Kami</h1>
      <p className="text-lg mb-8">Platform yang mempermudah semua kebutuhan Anda. Daftar atau login untuk mulai.</p>

      {/* Tombol Login dan Register */}
      <div className="flex gap-4">
        <button
          onClick={handleLoginClick}
          className="bg-blue-500 text-white px-6 py-3 rounded-md"
        >
          Login
        </button>
        <button
          onClick={handleRegisterClick}
          className="bg-green-500 text-white px-6 py-3 rounded-md"
        >
          Daftar
        </button>
      </div>
    </div>
  );
}
