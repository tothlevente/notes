import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import BlockIcon from "@mui/icons-material/Block";
import NoteProps from "../interfaces/NoteProps";
import CryptoJS from "crypto-js";

import { grey, red } from "@mui/material/colors";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

interface DeleteNotesDialogProps {
  openDeleteNotesDialog: boolean;
  setOpenDeleteNotesDialog: React.Dispatch<React.SetStateAction<boolean>>;
  notes: NoteProps[];
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
  secret: string;
}

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
      <DialogTitle
        variant="h6"
        color={red[600]}
        bgcolor={grey[200]}
        sx={{ m: 0, p: 2, fontWeight: "bold" }}
      >
        Are you sure?
      </DialogTitle>
      <DialogContent dividers>
        <Typography>
          This will delete your {notes.length}{" "}
          {notes.length === 1 ? "note" : "notes"} in this browser.
        </Typography>
        <Typography sx={{ marginTop: "10px" }}>
          You cannot undo this action later!
        </Typography>
      </DialogContent>
      <DialogActions>
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
