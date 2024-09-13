import NoteDialogContent from "./NoteDialogContent";
import NoteDialogActions from "./NoteDialogActions";

import { Dialog, DialogTitle } from "@mui/material";
import { useState } from "react";

export default function CreateNote({
  notes,
  setNotes,
  showCreateNewNote,
  setShowCreateNewNote,
}: any) {
  const [title, setTitle] = useState("");
  const [discription, setDescription] = useState("");

  function handleClose() {
    setTitle("");
    setDescription("");
    setShowCreateNewNote(false);
  }

  function handleSave() {
    setNotes([
      ...notes,
      {
        id: Math.round(Math.random() * 10000000),
        title: title,
        discription: discription,
      },
    ]);

    localStorage.setItem(
      "notes",
      JSON.stringify([
        ...notes,
        {
          id: Math.round(Math.random() * 10000000),
          title: title,
          discription: discription,
        },
      ])
    );

    setTitle("");
    setDescription("");
    setShowCreateNewNote(false);
  }

  return (
    <Dialog
      open={showCreateNewNote}
      onClose={handleClose}
      aria-labelledby="create-note-dialog-title"
      aria-describedby="create-note-dialog-description"
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle
        sx={{ fontWeight: "bold" }}
        id="new-note-dialog-title"
        color="primary"
        bgcolor="#eeeeee"
      >
        Create a new note
      </DialogTitle>
      <NoteDialogContent
        titleInput={title}
        setTitleInput={setTitle}
        discriptionInput={discription}
        setDescriptionInput={setDescription}
      />
      <NoteDialogActions
        handleSave={handleSave}
        handleClose={handleClose}
        titleInput={title}
        discriptionInput={discription}
      />
    </Dialog>
  );
}
