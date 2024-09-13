import CloseIcon from "@mui/icons-material/Close";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";

export default function ShowNoteDialog({
  openShowNoteDialog,
  setOpenShowNoteDialog,
  title,
  discription,
}: any) {
  function handleClose() {
    setOpenShowNoteDialog(false);
  }

  return (
    <Dialog
      open={openShowNoteDialog}
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
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography>{discription}</Typography>
      </DialogContent>
    </Dialog>
  );
}