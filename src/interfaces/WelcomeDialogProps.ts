export default interface WelcomeDialogProps {
  openWelcomeDialog: boolean;
  setOpenWelcomeDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenEncryptionDialog: React.Dispatch<React.SetStateAction<boolean>>;
}
