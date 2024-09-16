import NoteProps from "./NoteProps";

export default interface CreateNoteProps {
  isEncrypted: boolean;
  secret: string;
  notes: NoteProps[];
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
  openCreateNewNote: boolean;
  setOpenCreateNewNote: React.Dispatch<React.SetStateAction<boolean>>;
}
