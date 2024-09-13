import NoteProps from "../interfaces/NoteProps";
import CryptoJS from "crypto-js";

export default function setLocalStorageItem(
  secret: string,
  notes: Array<NoteProps>,
  title: string,
  discription: string
) {
  const createdCryptoNote = CryptoJS.AES.encrypt(
    JSON.stringify([
      ...notes,
      {
        id: Math.round(Math.random() * 10000000),
        title: title,
        discription: discription,
      },
    ]),
    secret
  ).toString();

  localStorage.setItem("notes", createdCryptoNote);
}
