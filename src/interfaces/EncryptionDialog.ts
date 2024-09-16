export default interface EncryptionDialogProps {
  openEncryptionDialog: boolean;
  setOpenEncryptionDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEncrypted: React.Dispatch<React.SetStateAction<boolean>>;
  setSecret: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
