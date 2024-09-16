import ShowNoteDialogProps from "../interfaces/ShowNoteDialogProps";
import CloseIcon from "@mui/icons-material/Close";
import NoteDialogTitle from "./NoteDialogTitle";

import { Dialog, DialogContent, IconButton, Typography } from "@mui/material";

export default function ShowNoteDialog({
  openShowNoteDialog,
  setOpenShowNoteDialog,
  title,
  discription,
}: ShowNoteDialogProps) {
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
      <NoteDialogTitle title={title} />
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
      <DialogContent>
        <Typography>{discription}</Typography>
      </DialogContent>
    </Dialog>
  );
}
