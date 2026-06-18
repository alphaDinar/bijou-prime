import { doc, setDoc } from "firebase/firestore";
import { fireStoreDB } from "./firebase";

export const genToken = (): string => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const tokenLength = 6;
  let token = "";
  const charactersLength = characters.length;
  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    token += characters[randomIndex];
  }
  return token;
};

// export const createClick = async (type: "bijou" | "foreclosed" | "closed") => {
//   const id = genToken();
//   const timestamp = Date.now();
//   await setDoc(doc(fireStoreDB, "Clicks/" + id), {
//     timestamp,
//     type
//   });
// }