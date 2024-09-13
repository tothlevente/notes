import updateLocalStorageItem from "../controllers/updateLocalStorageItem";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
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
    const updatedNotes = values.filter((note) => note.id !== key);

    setNotes(updatedNotes);
    updateLocalStorageItem(updatedNotes);

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
        <Typography>
          Are you sure to delete the{" "}
          <b>
            {title.length < 25
              ? title
              : title.substring(0, 25) + "..."}{" "}
          </b>
          note?
        </Typography>
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
