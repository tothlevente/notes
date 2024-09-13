import setLocalStorageItem from "../controllers/setLocalStorageItem";
import NoteDialogContent from "./NoteDialogContent";
import NoteDialogActions from "./NoteDialogActions";
import CloseIcon from "@mui/icons-material/Close";

import { Dialog, DialogTitle, IconButton } from "@mui/material";
import { useState } from "react";
import { grey } from "@mui/material/colors";

//FIXME !!!
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

    setLocalStorageItem(notes, title, discription);

    setTitle("");
    setDescription("");

    setShowCreateNewNote(false);
  }

  return (
    <Dialog
      open={showCreateNewNote}
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
