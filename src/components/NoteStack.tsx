import NoteProps from "../interfaces/NoteProps";
import DeleteNote from "./DeleteNote";
import EditNote from "./EditNote";
import NoteCard from "./NoteCard";

import { Stack } from "@mui/material";
import { useState } from "react";

export default function NoteStack({ notes, setNotes }: any) {
  const [showHandleDelete, setShowHandleDelte] = useState(false);
  const [showHandleEdit, setShowHandleEdit] = useState(false);

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
              setShowHandleEdit={setShowHandleEdit}
              setShowHandleDelte={setShowHandleDelte}
            />
            <DeleteNote
              showHandleDelete={showHandleDelete}
              setShowHandleDelte={setShowHandleDelte}
              notes={notes}
              setNotes={setNotes}
              id={note.id}
              title={note.title}
            />
            <EditNote
              showHandleEdit={showHandleEdit}
              setShowHandleEdit={setShowHandleEdit}
              notes={notes}
              setNotes={setNotes}
              index={index}
            />
          </div>
        );
      })}
    </Stack>
  );
}
