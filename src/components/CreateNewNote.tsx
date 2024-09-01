import NoteDialogContent from "./NoteDialogContent";
import NoteDialogActions from "./NoteDialogActions";

import { useState } from "react";
import { Dialog, DialogTitle } from "@mui/material";

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
