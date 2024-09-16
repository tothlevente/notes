import setNotesLocalStorageItem from "../controllers/setNotesLocalStorageItem";
import CreateNoteProps from "../interfaces/CreateNoteProps";
import NoteDialogContent from "./NoteDialogContent";
import NoteDialogActions from "./NoteDialogActions";
import CloseIcon from "@mui/icons-material/Close";
import NoteDialogTitle from "./NoteDialogTitle";

import { Dialog, IconButton } from "@mui/material";
import { useState } from "react";

export default function CreateNote({
  isEncrypted,
  secret,
  notes,
  setNotes,
  openCreateNewNote,
  setOpenCreateNewNote,
}: CreateNoteProps) {
  const [title, setTitle] = useState("");
  const [discription, setDescription] = useState("");

  const handleSave = () => {
    setNotes([
      ...notes,
      {
        id: Math.round(Math.random() * 10000000),
        title: title,
        discription: discription,
      },
    ]);

    setNotesLocalStorageItem(isEncrypted, secret, notes, title, discription);

    setTitle("");
    setDescription("");

    setOpenCreateNewNote(false);
  };

  const handleClose = () => {
    setTitle("");
    setDescription("");
    setOpenCreateNewNote(false);
  };

  return (
    <Dialog
      open={openCreateNewNote}
      onClose={handleClose}
      maxWidth={"sm"}
      fullWidth
    >
      <NoteDialogTitle title="Create a new note 📝" />
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
