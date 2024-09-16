import NoteProps from "./NoteProps";

export default interface DecryptionDialogProps {
  openDecryptionDialog: boolean;
  setOpenDecryptionDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEncrypted: React.Dispatch<React.SetStateAction<boolean>>;
  setSecret: React.Dispatch<React.SetStateAction<string>>;
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
