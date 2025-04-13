'use client';

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  // Fungsi untuk validasi email dan password
  const validateInput = () => {
    if (!email || !password) {
      alert("Email dan Password tidak boleh kosong");
      return false;
    }
    if (password.length < 6) {
      alert("Password harus lebih dari 6 karakter");
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    if (!validateInput()) return; // Pastikan input valid

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registrasi berhasil!");
      router.push("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message); // Menampilkan pesan error dari Firebase
      } else {
        alert("An unknown error occurred");
      }
    }
  };

  const handleGoBack = () => {
    router.push("/"); // Kembali ke landing page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold">Register</h1>
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
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleRegister}>
        Daftar
      </button>

      <button className="mt-4 text-blue-500" onClick={handleGoBack}>
        Kembali ke Landing Page
      </button>

      <p className="mt-4">
        Sudah punya akun?{" "}
        <a href="/auth/login" className="text-blue-500">Login sekarang</a>
      </p>
    </div>
  );
}
