import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import FactoryResetDialog from "./FactoryResetDialog";
import DeleteNotesDialog from "./DeleteNotesDialog";
import BlockIcon from "@mui/icons-material/Block";

import { grey, red } from "@mui/material/colors";
import { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

export default function SettingsDialog({
  setOpenSettingsDialog,
  openSettingsDialog,
  notes,
  setNotes,
  secret,
}: any) {
  const [openFactoryResetDialog, setOpenFactoryResetDialog] = useState(false);
  const [openDeleteNotesDialog, setOpenDeleteNotesDialog] = useState(false);

  function handleClose() {
    setOpenSettingsDialog(false);
  }

  function Dialogs() {
    return (
      <>
        <FactoryResetDialog
          openFactoryResetDialog={openFactoryResetDialog}
          setOpenFactoryResetDialog={setOpenFactoryResetDialog}
        />
        <DeleteNotesDialog
          openDeleteNotesDialog={openDeleteNotesDialog}
          setOpenDeleteNotesDialog={setOpenDeleteNotesDialog}
          notes={notes}
          setNotes={setNotes}
          secret={secret}
        />
      </>
    );
  }

  return (
    <Dialog
      open={openSettingsDialog}
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
        Settings
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="h6" color={red[600]} sx={{ marginBottom: "5px" }}>
          Delete notes
        </Typography>
        <Typography color={red[600]} sx={{ marginBottom: "5px" }}>
          {notes.length <= 0
            ? "This will delete your all notes in this browser but you have no note yet."
            : "This will delete your all notes in this browser."}{" "}
          You cannot undo this action later.
        </Typography>

        <Button
          variant="contained"
          sx={{ backgroundColor: red[500] }}
          onClick={() => setOpenDeleteNotesDialog(true)}
          startIcon={<DeleteSweepIcon />}
          disabled={notes.length <= 0}
        >
          Delete notes
        </Button>
      </DialogContent>
      <DialogContent dividers>
        <Typography variant="h6" color={red[600]} sx={{ marginBottom: "5px" }}>
          Factory reset
        </Typography>
        <Typography color={red[600]} sx={{ marginBottom: "5px" }}>
          This will delete your all notes in this browser and restore everything
          to factory settings. You cannot undo this action later.
        </Typography>

        <Button
          variant="contained"
          sx={{ backgroundColor: red[500] }}
          onClick={() => setOpenFactoryResetDialog(true)}
          startIcon={<DeleteForeverIcon />}
        >
          Factory reset
        </Button>
      </DialogContent>
      <DialogActions sx={{ m: 1, p: 1 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClose}
          startIcon={<BlockIcon />}
        >
          Close
        </Button>
      </DialogActions>
      <Dialogs />
    </Dialog>
  );
}
