import { useEffect, useState } from "react";
import { auth, db } from "../libTES/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { logUserActivity } from "../libTES/firebaseLog";
import { ref, onValue } from "firebase/database";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [plcStatus, setPlcStatus] = useState<any>(null);
  const router = useRouter();

  // Cek user login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/auth/login");
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, []);

  // Realtime listener PLC_Status
  useEffect(() => {
    const plcRef = ref(db, "PLC_Status");
    const unsubscribe = onValue(plcRef, (snapshot) => {
      const data = snapshot.val();
      setPlcStatus(data);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    if (user) {
      await logUserActivity(user.uid, "logout");
    }
    await signOut(auth);
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold">Dashboard</h1>
      {user && <p>Selamat datang, {user.email}</p>}

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="font-semibold mb-2">Monitoring PLC Status:</h2>
        {plcStatus ? (
          <div className="grid grid-cols-2 gap-2 text-sm">
            {Object.entries(plcStatus).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="font-medium">{key}</span>
                <span>{String(value)}</span>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
