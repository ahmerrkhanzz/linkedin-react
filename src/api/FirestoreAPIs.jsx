import { firestore } from "../../firebaseconfig";
import { addDoc, collection } from "firebase/firestore";

let dbRef = collection(firestore, "posts");
export const PostStatus = (data) => {
  const obj = {
    status: data,
  };
  addDoc(dbRef, obj)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};
