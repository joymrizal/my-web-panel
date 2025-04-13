// src/app/page.tsx
'use client'; // Menandai sebagai komponen client

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Arahkan ke halaman login setelah komponen dimuat
    router.push('/auth/login');
  }, [router]);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
