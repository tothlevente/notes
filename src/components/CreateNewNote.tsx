import BlockIcon from "@mui/icons-material/Block";
import SaveIcon from "@mui/icons-material/Save";

import { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

export default function CreateNewNote({
  showCreateNewNote,
  setShowCreateNewNote,
}: any) {
  const [titleInput, setTitleInput] = useState("");
  const [discriptionInput, setDescriptionInput] = useState("");

  function handleClose() {
    setTitleInput("");
    setDescriptionInput("");
    setShowCreateNewNote(false);
  }

  function handleSave() {}

  return (
    <Dialog
      open={showCreateNewNote}
      onClose={handleClose}
      aria-labelledby="create-new-note-dialog-title"
      aria-describedby="create-new-note-dialog-description"
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle
        sx={{ fontWeight: "bold" }}
        id="new-note-dialog-title"
      >
        Create a new note
      </DialogTitle>
      <DialogContent>
        <div style={{ marginTop: "10px" }}>
          <TextField
            id="note-title-input"
            label="Title"
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            fullWidth
            required
          />
        </div>
        <div style={{ marginTop: "15px" }}>
          <TextField
            id="note-discription-input"
            label="Discription"
            rows={4}
            value={discriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
            fullWidth
            multiline
            required
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={handleSave}
          startIcon={<SaveIcon />}
          disabled={
            titleInput.length < 1 || discriptionInput.length < 1
          }
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
    </Dialog>
  );
}
