import NoteProps from "../interfaces/NoteProps";
import NoteCard from "./NoteCard";

import BlockIcon from "@mui/icons-material/Block";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { useState } from "react";

export default function NoteStack({ notes, setNotes }: any) {
  const [haDelete, setHaDelte] = useState(false);

  function handleEdit(index: number) {
    const values = [...notes];
    const editedTitle = prompt(`Edit the title:`);
    const editedDiscription = prompt(`Edit the discription:`);

    if (
      editedTitle !== null &&
      editedTitle.trim() !== "" &&
      editedDiscription !== null &&
      editedDiscription.trim() !== ""
    ) {
      let updatedNotes = [...values];
      updatedNotes[index].title = editedTitle;
      updatedNotes[index].discription = editedDiscription;

      setNotes(updatedNotes);
    }
  }

  function handleDelete(key: number) {
    const values = [...notes];
    const update = values.filter((note) => note.id !== key);

    setNotes(update);
  }

  function DeleteNote({ open, onClose, id, setNotes, title }: any) {
    function hDelete(key: number) {
      const values = [...notes];
      const update = values.filter((note) => note.id !== key);

      setNotes(update);
      onClose(false);
    }

    function hClose() {
      onClose(false);
    }

    return (
      <Dialog open={open} onClose={onClose} maxWidth={"sm"} fullWidth>
        <DialogTitle
          sx={{ fontWeight: "bold" }}
          color="#ff5722"
          bgcolor="#eeeeee"
        >
          Delete note
        </DialogTitle>
        <DialogContent
          sx={{ marginTop: "12px", marginBottom: "12px" }}
        >
          Are you sure to delete the {title} note?
        </DialogContent>
        <DialogActions sx={{ m: 1, p: 1 }}>
          <Button
            sx={{ backgroundColor: "#ff5722" }}
            variant="contained"
            onClick={() => hDelete(id)}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => hClose()}
            startIcon={<BlockIcon />}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <>
      <Stack
        useFlexGap
        direction="row"
        spacing={{ xs: 1, sm: 2 }}
        sx={{
          m: 2,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {notes.map((note: NoteProps, index: number) => {
          return (
            <div key={index}>
              <NoteCard
                id={note.id}
                index={index}
                title={note.title}
                discription={note.discription}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                setHaDelte={setHaDelte}
              />
              <DeleteNote
                open={haDelete}
                onClose={setHaDelte}
                title={note.title}
                setNotes={setNotes}
                id={note.id}
              />
            </div>
          );
        })}
      </Stack>
    </>
  );
}
