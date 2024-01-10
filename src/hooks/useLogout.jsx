import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

export const useLogout = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("user logged out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return {
    logout,
  };
};
