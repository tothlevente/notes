import NoteAddIcon from "@mui/icons-material/NoteAdd";
import NoteProps from "../interfaces/NoteProps";
import NoteCard from "./NoteCard";

import { Box, Button, Stack, Typography } from "@mui/material";

export default function NoteStack({
  isEncrypted,
  secret,
  notes,
  setNotes,
  setShowCreateNewNote,
}: any) {
  return (
    <>
      {notes.length === 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="40vh"
          marginLeft="10px"
          marginRight="10px"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              You don't have any notes yet!
            </Typography>
            <Button
              variant="contained"
              startIcon={<NoteAddIcon />}
              sx={{ mt: 2 }}
              onClick={() => setShowCreateNewNote(true)}
            >
              Let's add your first note
            </Button>
          </div>
        </Box>
      ) : (
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
                  isEncrypted={isEncrypted}
                  secret={secret}
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
      )}
    </>
  );
}
