import NoteProps from "./NoteProps";

export default interface DeleteNotesDialogProps {
  openDeleteNotesDialog: boolean;
  setOpenDeleteNotesDialog: React.Dispatch<React.SetStateAction<boolean>>;
  notes: NoteProps[];
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
  secret: string;
}
