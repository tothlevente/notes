import NoteProps from "./NoteProps";

export default interface NoteStackProps {
  isEncrypted: boolean;
  secret: string;
  notes: NoteProps[];
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
  setOpenCreateNewNote: React.Dispatch<React.SetStateAction<boolean>>;
}
