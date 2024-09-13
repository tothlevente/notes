import NoteProps from "../interfaces/NoteProps";
import CryptoJS from "crypto-js";

export default function updateLocalStorageItem(
  isEncrypted: boolean,
  secret: string,
  updatedNotes: Array<NoteProps>
) {
  if (isEncrypted) {
    localStorage.setItem(
      "notes",
      CryptoJS.AES.encrypt(
        JSON.stringify(updatedNotes),
        secret
      ).toString()
    );
  } else {
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }
}
