import NoteProps from "../interfaces/NoteProps";
import CryptoJS from "crypto-js";

export default function setLocalStorageItem(
  isEncrypted: boolean,
  secret: string,
  notes: Array<NoteProps>,
  title: string,
  discription: string
) {
  if (isEncrypted) {
    localStorage.setItem(
      "notes",
      CryptoJS.AES.encrypt(
        JSON.stringify([
          ...notes,
          {
            id: Math.round(Math.random() * 10000000),
            title: title,
            discription: discription,
          },
        ]),
        secret
      ).toString()
    );
  } else {
    localStorage.setItem(
      "notes",
      JSON.stringify([
        ...notes,
        {
          id: Math.round(Math.random() * 10000000),
          title: title,
          discription: discription,
        },
      ])
    );
  }
}
