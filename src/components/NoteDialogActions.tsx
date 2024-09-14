import BlockIcon from "@mui/icons-material/Block";
import SaveIcon from "@mui/icons-material/Save";

import { Button, DialogActions } from "@mui/material";

export default function NoteDialogActions({
  handleSave,
  handleClose,
  titleInput,
  discriptionInput,
}: any) {
  return (
    <DialogActions sx={{ m: 1, p: 1 }}>
      <Button
        variant="contained"
        onClick={handleSave}
        startIcon={<SaveIcon />}
        disabled={titleInput.length < 1 || discriptionInput.length < 1}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClose}
        startIcon={<BlockIcon />}
      >
        Close
      </Button>
    </DialogActions>
  );
}
