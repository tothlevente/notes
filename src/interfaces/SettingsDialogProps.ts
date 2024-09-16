import NoteProps from "./NoteProps";

export default interface SettingsDialogProps {
  setOpenSettingsDialog: React.Dispatch<React.SetStateAction<boolean>>;
  openSettingsDialog: boolean;
  notes: NoteProps[];
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
  secret: string;
}
