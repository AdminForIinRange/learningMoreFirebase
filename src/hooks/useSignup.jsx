import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = (email, passowrd) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, passowrd)
      .then((res) => {
        console.log("user signed up:", res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return {
    error,
    signup,
  };
};
