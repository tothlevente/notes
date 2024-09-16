export default interface ForgotPasswordDialogProps {
  openForgotPassword: boolean;
  setOpenForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
  openFactoryResetDialog: boolean;
  setOpenFactoryResetDialog: React.Dispatch<React.SetStateAction<boolean>>;
}
