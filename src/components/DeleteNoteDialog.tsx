import updateNotesLocalStorageItem from "../controllers/updateNotesLocalStorageItem";
import DeleteNoteProps from "../interfaces/DeleteNoteProps";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import CloseIcon from "@mui/icons-material/Close";
import NoteDialogTitle from "./NoteDialogTitle";

import { red } from "@mui/material/colors";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";

export default function DeleteNoteDialog({
  isEncrypted,
  secret,
  openHandleDelete,
  setOpenHandleDelte,
  notes,
  setNotes,
  id,
  title,
}: DeleteNoteProps) {
  function handleDelete(key: number) {
    const values = [...notes];
    const updatedNotes = values.filter((note) => note.id !== key);

    setNotes(updatedNotes);
    updateNotesLocalStorageItem(isEncrypted, secret, updatedNotes);

    setOpenHandleDelte(false);
  }

  function handleClose() {
    setOpenHandleDelte(false);
  }

  return (
    <Dialog
      open={openHandleDelete}
      onClose={handleClose}
      maxWidth={"sm"}
      fullWidth
    >
      <NoteDialogTitle title="Delete note" />
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
      <DialogContent
        sx={{ marginTop: "12px", marginBottom: "12px", textAlign: "center" }}
      >
        <Typography>
          Are you sure to delete the{" "}
          <b>{title.length < 25 ? title : title.substring(0, 25) + "..."} </b>
          note?
        </Typography>
      </DialogContent>
      <DialogActions sx={{ m: 1, p: 1, justifyContent: "center" }}>
        <Button
          sx={{ backgroundColor: red[500] }}
          variant="contained"
          onClick={() => handleDelete(id)}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleClose()}
          startIcon={<BlockIcon />}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
