export default interface PasswordDialogProps {
  setOpenEncryptionDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setSecret: React.Dispatch<React.SetStateAction<string>>;
  setIsEncrypted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  openPasswordDialog: boolean;
  setOpenPasswordDialog: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
}
