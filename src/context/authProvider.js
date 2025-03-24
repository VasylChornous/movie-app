import { useEffect, useState, createContext } from "react";
import { auth } from "../services/firebase";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  function signWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(provider);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setIsloading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, signWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
