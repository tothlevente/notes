import NoteProps from "./NoteProps";

export default interface EditNoteProps {
  isEncrypted: boolean;
  secret: string;
  openHandleEdit: boolean;
  setOpenHandleEdit: React.Dispatch<React.SetStateAction<boolean>>;
  notes: NoteProps[];
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
  index: number;
}
