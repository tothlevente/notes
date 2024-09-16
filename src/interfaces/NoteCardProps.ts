import NoteProps from "./NoteProps";

export default interface NoteCardProps {
  isEncrypted: boolean;
  secret: string;
  index: number;
  title: string;
  discription: string;
  note: NoteProps;
  notes: NoteProps[];
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
}
