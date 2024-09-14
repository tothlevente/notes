import CryptoJS from "crypto-js";

export default function getNotesLocalStorageItem(
  isEncrypted: boolean,
  secret: string
) {
  if (localStorage.getItem("notes") !== null) {
    if (isEncrypted) {
      return JSON.parse(
        CryptoJS.AES.decrypt(
          localStorage.getItem("notes")!,
          secret
        ).toString(CryptoJS.enc.Utf8)!
      );
    } else {
      return JSON.parse(localStorage.getItem("notes")!);
    }
  }
}
