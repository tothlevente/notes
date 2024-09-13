import NoteProps from "../interfaces/NoteProps";
import NoteCard from "./NoteCard";

import { Stack } from "@mui/material";

export default function NoteStack({ notes, setNotes }: any) {
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
              index={index}
              title={note.title}
              discription={note.discription}
              note={note}
              notes={notes}
              setNotes={setNotes}
            />
          </div>
        );
      })}
    </Stack>
  );
}
