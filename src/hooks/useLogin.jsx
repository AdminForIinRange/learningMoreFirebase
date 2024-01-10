import { useState } from "react";

import { auth } from "../config/firebase";
import { signInWithEmailAndPassword} from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () =>{

    const [error, setError] = useState(null);
    const {dispatch} = useAuthContext()
  
    const login = (email, passowrd) => {
      setError(null);
      signInWithEmailAndPassword(auth, email, passowrd)
        .then((res) => {
            dispatch({type:"LOGIN", paylaod:res.user})
         
        })
        .catch((err) => {
          setError(err.message);
        });
    };
  
    return {
      error,
      login,
    };
  };

