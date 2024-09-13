import updateLocalStorageItem from "../controllers/updateLocalStorageItem";
import NoteDialogContent from "./NoteDialogContent";
import NoteDialogActions from "./NoteDialogActions";

import { Dialog, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";

export default function EditNote({
  showHandleEdit,
  setShowHandleEdit,
  notes,
  setNotes,
  index,
}: any) {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");

  useEffect(() => {
    setTitle(notes[index].title);
    setDiscription(notes[index].discription);
  }, [notes]);

  function handleClose() {
    setShowHandleEdit(false);
  }

  function handleEdit(index: number) {
    const values = [...notes];

    if (
      title !== null &&
      title.trim() !== "" &&
      discription !== null &&
      discription.trim() !== ""
    ) {
      let updatedNotes = [...values];
      updatedNotes[index].title = title;
      updatedNotes[index].discription = discription;

      setNotes(updatedNotes);
      updateLocalStorageItem(updatedNotes);

      setShowHandleEdit(false);
    }
  }

  return (
    <Dialog
      open={showHandleEdit}
      onClose={handleClose}
      aria-labelledby="edit-note-dialog-title"
      aria-describedby="edit-note-dialog-description"
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle
        sx={{ fontWeight: "bold" }}
        id="new-note-dialog-title"
        color="primary"
        bgcolor="#eeeeee"
      >
        Edit the note
      </DialogTitle>
      <NoteDialogContent
        titleInput={title}
        setTitleInput={setTitle}
        discriptionInput={discription}
        setDescriptionInput={setDiscription}
      />
      <NoteDialogActions
        handleSave={() => handleEdit(index)}
        handleClose={handleClose}
        titleInput={title}
        discriptionInput={discription}
      />
    </Dialog>
  );
}
