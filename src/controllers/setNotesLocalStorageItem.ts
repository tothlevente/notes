import NoteProps from "../interfaces/NoteProps";
import CryptoJS from "crypto-js";

export default function setNotesLocalStorageItem(
  isEncrypted: boolean,
  secret: string,
  notes: Array<NoteProps>,
  title: string,
  discription: string,
  backgroundColor: string
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
            backgroundColor: backgroundColor,
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
          backgroundColor: backgroundColor,
        },
      ])
    );
  }
}
