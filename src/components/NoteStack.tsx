import NoteProps from "../interfaces/NoteProps";
import NoteCard from "./NoteCard";

import { Stack } from "@mui/material";

export default function NoteStack({ notes, setNotes }: any) {
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

  return (
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
            />
          </div>
        );
      })}
    </Stack>
  );
}
