import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function WelcomeDialog({
  openWelcomeDialog,
  setOpenWelcomeDialog,
  setIsEncrypted,
  setSecret,
}: any) {
  function handleClose() {
    setOpenWelcomeDialog(false);
    setIsEncrypted(false);
  }

  function handleSave() {}

  return (
    <Dialog
      open={openWelcomeDialog}
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
        Welcome
      </DialogTitle>
      <DialogContent dividers></DialogContent>
    </Dialog>
  );
}
