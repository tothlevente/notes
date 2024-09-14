import { grey } from "@mui/material/colors";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

export default function EncryptionDialog({
  openEncryptionDialog,
  setOpenEncryptionDialog,
  setIsEncrypted,
  setSecret,
}: any) {
  function handleClose() {
    setOpenEncryptionDialog(false);
    localStorage.setItem("welcome", JSON.stringify(false));
  }

  return (
    <Dialog
      open={openEncryptionDialog}
      onClose={handleClose}
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle
        variant="h6"
        color={grey[900]}
        bgcolor={grey[200]}
        sx={{ m: 0, p: 2, fontWeight: "bold" }}
      >
        Encrypt you notes! 🔐
      </DialogTitle>
      <DialogContent dividers></DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{ backgroundColor: grey[900] }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
