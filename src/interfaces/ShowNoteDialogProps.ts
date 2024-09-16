export default interface ShowNoteDialogProps {
  openShowNoteDialog: boolean;
  setOpenShowNoteDialog: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  discription: string;
}
