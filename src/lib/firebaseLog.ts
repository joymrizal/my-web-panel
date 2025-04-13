import { db } from "./firebase";
import { ref, push } from "firebase/database";

export const logUserActivity = async (userId: string, type: "login" | "logout") => {
  const logRef = ref(db, `user_logs/${userId}`);
  await push(logRef, {
    type,
    timestamp: new Date().toISOString(),
  });
};
