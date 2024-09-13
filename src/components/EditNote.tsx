import updateLocalStorageItem from "../controllers/updateLocalStorageItem";
import NoteDialogContent from "./NoteDialogContent";
import NoteDialogActions from "./NoteDialogActions";
import CloseIcon from "@mui/icons-material/Close";

import { Dialog, DialogTitle, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { grey } from "@mui/material/colors";

export default function EditNote({
  openHandleEdit,
  setOpenHandleEdit,
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
    setOpenHandleEdit(false);
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

      setOpenHandleEdit(false);
    }
  }

  return (
    <Dialog
      open={openHandleEdit}
      onClose={handleClose}
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle
        sx={{ m: 0, p: 2, fontWeight: "bold" }}
        color={grey[900]}
        bgcolor={grey[200]}
      >
        Edit the note
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
