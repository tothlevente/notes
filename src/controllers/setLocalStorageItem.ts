import NoteProps from "../interfaces/NoteProps";

export default function setLocalStorageItem(
  notes: Array<NoteProps>,
  title: string,
  discription: string
) {
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
