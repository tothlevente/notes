import NoteProps from "./NoteProps";

export default interface DeleteNoteProps {
  isEncrypted: boolean;
  secret: string;
  openHandleDelete: boolean;
  setOpenHandleDelte: React.Dispatch<React.SetStateAction<boolean>>;
  notes: NoteProps[];
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
  id: number;
  title: string;
}
