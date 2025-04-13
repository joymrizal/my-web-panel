'use client';

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login berhasil!");
      router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);  // Menampilkan pesan error Firebase
      } else {
        alert("An unknown error occurred");  // Penanganan error yang tidak diketahui
      }
    }
  };

  const handleGoBack = () => {
    router.push("/"); // Kembali ke landing page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold">Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="border p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-green-500 text-white px-4 py-2" onClick={handleLogin}>
        Login
      </button>

      <button className="mt-4 text-blue-500" onClick={handleGoBack}>
        Kembali ke Landing Page
      </button>

      <p className="mt-4">
        Belum punya akun?{" "}
        <a href="/auth/register" className="text-blue-500">Daftar sekarang</a>
      </p>
    </div>
  );
}
