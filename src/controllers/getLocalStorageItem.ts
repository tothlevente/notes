import CryptoJS from "crypto-js";

export default function getLocalStorageItem(secret: string) {
  if (localStorage.getItem("notes") !== null) {
    return JSON.parse(
      CryptoJS.AES.decrypt(
        localStorage.getItem("notes")!,
        secret
      ).toString(CryptoJS.enc.Utf8)!
    );
  }
}
