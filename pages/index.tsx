import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth/login"); // Redirect otomatis ke halaman login
  }, [router]);

  return null; // Halaman ini tidak perlu menampilkan apa pun karena langsung redirect
}
