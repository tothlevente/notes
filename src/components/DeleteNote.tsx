import BlockIcon from "@mui/icons-material/Block";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function DeleteNote({
  showHandleDelete,
  setShowHandleDelte,
  notes,
  setNotes,
  id,
  title,
}: any) {
  function handleDelete(key: number) {
    const values = [...notes];
    const update = values.filter((note) => note.id !== key);

    setNotes(update);
    setShowHandleDelte(false);
  }

  function handleClose() {
    setShowHandleDelte(false);
  }

  return (
    <Dialog
      open={showHandleDelete}
      onClose={setShowHandleDelte}
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle
        sx={{ fontWeight: "bold" }}
        color="#ff5722"
        bgcolor="#eeeeee"
      >
        Delete note
      </DialogTitle>
      <DialogContent sx={{ marginTop: "12px", marginBottom: "12px" }}>
        Are you sure to delete the {title} note?
      </DialogContent>
      <DialogActions sx={{ m: 1, p: 1 }}>
        <Button
          sx={{ backgroundColor: "#ff5722" }}
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
