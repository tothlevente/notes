import NoteProps from "../interfaces/NoteProps";
import CryptoJS from "crypto-js";

export default function updateLocalStorageItem(
  secret: string,
  updatedNotes: Array<NoteProps>
) {
  const updatedCryptoNotes = CryptoJS.AES.encrypt(
    JSON.stringify(updatedNotes),
    secret
  ).toString();

  localStorage.setItem("notes", updatedCryptoNotes);
}
