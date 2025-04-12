import { useState } from "react";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { logUserActivity } from "../../lib/firebaseLog";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await logUserActivity(auth.currentUser?.uid ?? "unknown", "login");      alert("Login berhasil!");
      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    }
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
    </div>
  );
}
