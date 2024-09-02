import NoteDialogContent from "./NoteDialogContent";
import NoteDialogActions from "./NoteDialogActions";

import { Dialog, DialogTitle } from "@mui/material";
import { useState } from "react";

const dummyTitle = "Lorem ipsum dolor sit amet";
const dummyDiscription =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ";

export default function CreateNote({
  notes,
  setNotes,
  showCreateNewNote,
  setShowCreateNewNote,
}: any) {
  const [title, setTitle] = useState(dummyTitle);
  const [discription, setDescription] = useState(dummyDiscription);

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
