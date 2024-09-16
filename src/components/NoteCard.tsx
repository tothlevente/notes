import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import NotesIcon from "@mui/icons-material/Notes";
import Typography from "@mui/material/Typography";
import NoteProps from "../interfaces/NoteProps";
import ShowNoteDialog from "./ShowNoteDialog";
import DeleteNote from "./DeleteNote";
import Card from "@mui/material/Card";
import EditNote from "./EditNote";

import { Avatar, Box, IconButton } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";
import { useState } from "react";

interface NoteCardProps {
  isEncrypted: boolean;
  secret: string;
  index: number;
  title: string;
  discription: string;
  note: NoteProps;
  notes: NoteProps[];
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
}

export default function NoteCard({
  isEncrypted,
  secret,
  index,
  title,
  discription,
  note,
  notes,
  setNotes,
}: NoteCardProps) {
  const [openHandleDelete, setOpenHandleDelte] = useState(false);
  const [openHandleEdit, setOpenHandleEdit] = useState(false);
  const [openShowNoteDialog, setOpenShowNoteDialog] = useState(false);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          width: 500,
          height: 250,
          bgcolor: grey[300],
          "@media (max-width: 560px)": {
            width: "auto",
            minWidth: 50,
            height: 300,
          },
          "@media (max-width: 459px)": {
            height: 300,
          },
          "@media (max-width: 349px)": {
            height: 350,
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ display: "flex" }}
            >
              <Avatar
                sx={{
                  marginRight: "10px",
                  color: grey[700],
                }}
              >
                <NotesIcon />
              </Avatar>
              {title.length < 30 ? title : title.substring(0, 30) + "..."}
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginTop: "12px", color: grey[900] }}
            >
              {discription.length < 300
                ? discription
                : discription.substring(0, 300) + "..."}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              marginBottom: "20px",
            }}
          >
            <IconButton
              edge="end"
              aria-label="delete"
              sx={{
                marginRight: "5px",
                "&:hover": {
                  color: blue[500],
                },
              }}
              onClick={() => {
                setOpenShowNoteDialog(true);
              }}
            >
              <OpenInNewIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="edit"
              sx={{
                marginRight: "3px",
                "&:hover": {
                  color: blue[500],
                },
              }}
              onClick={() => {
                setOpenHandleEdit(true);
              }}
            >
              <EditNoteIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              sx={{
                marginRight: "5px",
                "&:hover": {
                  color: red[500],
                },
              }}
              onClick={() => {
                setOpenHandleDelte(true);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Box>
      </Card>
      <ShowNoteDialog
        openShowNoteDialog={openShowNoteDialog}
        setOpenShowNoteDialog={setOpenShowNoteDialog}
        title={note.title}
        discription={note.discription}
      />
      <DeleteNote
        isEncrypted={isEncrypted}
        secret={secret}
        openHandleDelete={openHandleDelete}
        setOpenHandleDelte={setOpenHandleDelte}
        notes={notes}
        setNotes={setNotes}
        id={note.id}
        title={note.title}
      />
      <EditNote
        isEncrypted={isEncrypted}
        secret={secret}
        openHandleEdit={openHandleEdit}
        setOpenHandleEdit={setOpenHandleEdit}
        notes={notes}
        setNotes={setNotes}
        index={index}
      />
    </>
  );
}
