

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatxxx-dc0fd.firebaseapp.com",
  projectId: "chatxxx-dc0fd",
  storageBucket: "chatxxx-dc0fd.firebasestorage.app",
  messagingSenderId: "326499182146",
  appId: "1:326499182146:web:deaa41cba57940943e6fdb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  useFetchStreams: false,
});

// (optional) quiet the SDK logs a bit
setLogLevel("error");
export const storage = getStorage(app);


