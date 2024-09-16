import DeleteNotesDialogProps from "../interfaces/DeleteNotesDialogProps";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import BlockIcon from "@mui/icons-material/Block";
import NoteDialogTitle from "./NoteDialogTitle";
import CryptoJS from "crypto-js";

import { red } from "@mui/material/colors";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";

export default function DeleteNotesDialog({
  openDeleteNotesDialog,
  setOpenDeleteNotesDialog,
  notes,
  setNotes,
  secret,
}: DeleteNotesDialogProps) {
  const handleDeleteNotes = () => {
    setNotes([]);

    if (JSON.parse(localStorage.getItem("encryption")!) === true) {
      localStorage.setItem(
        "notes",
        CryptoJS.AES.encrypt(JSON.stringify([]), secret).toString()
      );
    } else {
      localStorage.setItem("notes", JSON.stringify([]));
    }

    setOpenDeleteNotesDialog(false);
  };

  return (
    <Dialog
      open={openDeleteNotesDialog}
      onClose={() => {
        setOpenDeleteNotesDialog(false);
      }}
      maxWidth={"xs"}
      fullWidth
    >
      <NoteDialogTitle title="Are you sure? 🤔" />
      <DialogContent dividers sx={{ textAlign: "center" }}>
        <Typography>
          This will delete your {notes.length}{" "}
          {notes.length === 1 ? "note" : "notes"} in this browser.
        </Typography>
        <Typography sx={{ marginTop: "10px" }}>
          You cannot undo this action later!
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: red[500] }}
          onClick={handleDeleteNotes}
          startIcon={<DeleteSweepIcon />}
        >
          Delete notes
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setOpenDeleteNotesDialog(false);
          }}
          startIcon={<BlockIcon />}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
