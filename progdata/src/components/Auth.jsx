import { useState, useEffect } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

function Auth() {
  const [user, setUser] = useState(null);

  // Firebase Authenticationの認証状態の変更を監視
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="auth-section">
      {user ? (
        <>
          <p>ログイン中: {user.displayName}</p>
          <button onClick={logout}>ログアウト</button>
        </>
      ) : (
        <button onClick={signInWithGoogle}>Googleでログイン</button>
      )}
    </div>
  );
}

export default Auth;
