import setNotesLocalStorageItem from "../controllers/setNotesLocalStorageItem";
import NoteDialogSupplements from "./NoteDialogSupplements";
import CreateNoteProps from "../interfaces/CreateNoteProps";
import NoteDialogContent from "./NoteDialogContent";
import NoteDialogActions from "./NoteDialogActions";
import CloseIcon from "@mui/icons-material/Close";
import NoteDialogTitle from "./NoteDialogTitle";

import { amber, blue, green, grey, indigo, pink, red } from "@mui/material/colors";
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
  const [backgroundColor, setBackgroundColor] = useState("");

  const colors = [
    grey[400],
    amber[500],
    red[500],
    blue[500],
    green[500],
    pink[500],
    indigo[500],
  ];

  const handleSave = () => {
    setNotes([
      ...notes,
      {
        id: Math.round(Math.random() * 10000000),
        title: title,
        discription: discription,
        backgroundColor: backgroundColor,
      },
    ]);

    setNotesLocalStorageItem(
      isEncrypted,
      secret,
      notes,
      title,
      discription,
      backgroundColor
    );

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
        sx={() => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: grey[500],
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
      <NoteDialogSupplements
        colors={colors}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
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
