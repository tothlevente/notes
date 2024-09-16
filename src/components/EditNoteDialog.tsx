import updateNotesLocalStorageItem from "../controllers/updateNotesLocalStorageItem";
import EditNoteProps from "../interfaces/EditNoteProps";
import NoteDialogContent from "./NoteDialogContent";
import NoteDialogActions from "./NoteDialogActions";
import CloseIcon from "@mui/icons-material/Close";
import NoteDialogTitle from "./NoteDialogTitle";

import { Dialog, IconButton } from "@mui/material";
import { useEffect, useState } from "react";

export default function EditNoteDialog({
  isEncrypted,
  secret,
  openHandleEdit,
  setOpenHandleEdit,
  notes,
  setNotes,
  index,
}: EditNoteProps) {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");

  useEffect(() => {
    setTitle(notes[index].title);
    setDiscription(notes[index].discription);
  }, [notes]);

  const handleEdit = (index: number) => {
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
      updateNotesLocalStorageItem(isEncrypted, secret, updatedNotes);

      setOpenHandleEdit(false);
    }
  };

  const handleClose = () => {
    setOpenHandleEdit(false);
  };

  return (
    <Dialog open={openHandleEdit} onClose={handleClose} maxWidth={"sm"} fullWidth>
      <NoteDialogTitle title="Edit this note" />
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
