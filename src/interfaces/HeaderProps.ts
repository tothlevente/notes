import NoteProps from "./NoteProps";

export default interface HeaderProps {
  isEncrypted: boolean;
  secret: string;
  notes: NoteProps[];
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
  openCreateNewNote: boolean;
  setOpenCreateNewNote: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSettingsDialog: React.Dispatch<React.SetStateAction<boolean>>;
}
