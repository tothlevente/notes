import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FactoryResetDialog from "./FactoryResetDialog";
import BlockIcon from "@mui/icons-material/Block";
import NoteDialogTitle from "./NoteDialogTitle";

import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { red } from "@mui/material/colors";

interface ForgotPasswordDialogProps {
  openForgotPassword: boolean;
  setOpenForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
  openFactoryResetDialog: boolean;
  setOpenFactoryResetDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ForgotPasswordDialog({
  openForgotPassword,
  setOpenForgotPassword,
  openFactoryResetDialog,
  setOpenFactoryResetDialog,
}: ForgotPasswordDialogProps) {
  return (
    <Dialog
      open={openForgotPassword}
      onClose={() => setOpenForgotPassword(false)}
      maxWidth={"sm"}
      fullWidth
    >
      <NoteDialogTitle title="Forgot your password? 🫣" />
      <DialogContent dividers sx={{ textAlign: "center" }}>
        If you have forgotten your password, you can only use a factory reset. This
        will delete your all notes in this browser and restore everything to
        factory settings. You cannot undo this action later.
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <FactoryResetDialog
          openFactoryResetDialog={openFactoryResetDialog}
          setOpenFactoryResetDialog={setOpenFactoryResetDialog}
        />
        <Button
          variant="contained"
          sx={{ backgroundColor: red[500] }}
          onClick={() => setOpenFactoryResetDialog(true)}
          startIcon={<DeleteForeverIcon />}
        >
          Factory reset
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setOpenForgotPassword(false)}
          startIcon={<BlockIcon />}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
