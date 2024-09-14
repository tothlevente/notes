import setNotesLocalStorageItem from "../controllers/setNotesLocalStorageItem";
import NoteDialogContent from "./NoteDialogContent";
import NoteDialogActions from "./NoteDialogActions";
import CloseIcon from "@mui/icons-material/Close";

import { Dialog, DialogTitle, IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";

export default function CreateNote({
  isEncrypted,
  secret,
  notes,
  setNotes,
  openCreateNewNote,
  setOpenCreateNewNote,
}: any) {
  const [title, setTitle] = useState("");
  const [discription, setDescription] = useState("");

  function handleClose() {
    setTitle("");
    setDescription("");
    setOpenCreateNewNote(false);
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

    setNotesLocalStorageItem(
      isEncrypted,
      secret,
      notes,
      title,
      discription
    );

    setTitle("");
    setDescription("");

    setOpenCreateNewNote(false);
  }

  return (
    <Dialog
      open={openCreateNewNote}
      onClose={handleClose}
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle
        sx={{ m: 0, p: 2, fontWeight: "bold" }}
        color={grey[900]}
        bgcolor={grey[200]}
      >
        Create a new note
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
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
