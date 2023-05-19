import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export const AuthAPI = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    return error;
  }
};
