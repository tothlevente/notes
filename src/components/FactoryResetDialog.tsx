import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BlockIcon from "@mui/icons-material/Block";
import NoteDialogTitle from "./NoteDialogTitle";

import { red } from "@mui/material/colors";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";

export default function FactoryResetDialog({
  openFactoryResetDialog,
  setOpenFactoryResetDialog,
}: any) {
  function handleFactoryReset() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <Dialog
      open={openFactoryResetDialog}
      onClose={() => {
        setOpenFactoryResetDialog(false);
      }}
      maxWidth={"xs"}
      fullWidth
    >
      <NoteDialogTitle title="Are you sure? 🤔" />
      <DialogContent dividers sx={{ textAlign: "center" }}>
        <Typography>
          Factory reset will delete your all notes in this browser and restore
          everything to factory settings.
        </Typography>
        <Typography sx={{ marginTop: "10px" }}>
          You cannot undo this action later!
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: red[500] }}
          onClick={handleFactoryReset}
          startIcon={<DeleteForeverIcon />}
        >
          Factory reset
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setOpenFactoryResetDialog(false);
          }}
          startIcon={<BlockIcon />}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
