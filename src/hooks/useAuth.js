import { useEffect, useState } from "react";
import { app } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);

export const useAuth = () => {
  const [user, setUser] = useState(auth.currentUser);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const credentials = await signInWithPopup(auth, provider);
      const token = await credentials.user.getIdToken();
      localStorage.setItem("token", token);
    } catch (error) {
      alert(error.message);
      throw new Error("Login failed");
    }
  };

  return { loginGoogle, user };
};
