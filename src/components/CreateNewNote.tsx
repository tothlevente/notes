import NoteAddIcon from "@mui/icons-material/NoteAdd";
import NoteDialogContent from "./NoteDialogContent";
import NoteDialogActions from "./NoteDialogActions";

import {
  AppBar,
  Dialog,
  DialogTitle,
  Toolbar,
  Typography,
} from "@mui/material";

import { useState } from "react";

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
      <DialogTitle>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <NoteAddIcon />
            <Typography
              sx={{ ml: 0, flex: 1 }}
              variant="h6"
              component="div"
            >
              Create a new note
            </Typography>
          </Toolbar>
        </AppBar>
      </DialogTitle>

      <NoteDialogContent
        titleInput={titleInput}
        setTitleInput={setTitleInput}
        discriptionInput={discriptionInput}
        setDescriptionInput={setDescriptionInput}
      />
      <NoteDialogActions
        handleSave={handleSave}
        handleClose={handleClose}
        titleInput={titleInput}
        discriptionInput={discriptionInput}
      />
    </Dialog>
  );
}
