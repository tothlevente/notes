import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import NotesIcon from "@mui/icons-material/Notes";
import Typography from "@mui/material/Typography";
import DeleteNote from "./DeleteNote";
import Card from "@mui/material/Card";
import EditNote from "./EditNote";

import { Avatar, Box, IconButton } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";
import { useState } from "react";

export default function NoteCard({
  index,
  title,
  discription,
  note,
  notes,
  setNotes,
}: any) {
  const [showHandleDelete, setShowHandleDelte] = useState(false);
  const [showHandleEdit, setShowHandleEdit] = useState(false);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          width: 500,
          height: 250,
          bgcolor: grey[200],
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
                  color: "background.paper",
                }}
              >
                <NotesIcon />
              </Avatar>
              {title.length < 30
                ? title
                : title.substring(0, 30) + "..."}
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginTop: "12px", color: "text.secondary" }}
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
              aria-label="edit"
              sx={{
                marginRight: "3px",
                "&:hover": {
                  color: blue[500],
                },
              }}
              onClick={() => {
                setShowHandleEdit(true);
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
                setShowHandleDelte(true);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Box>
      </Card>
      <DeleteNote
        showHandleDelete={showHandleDelete}
        setShowHandleDelte={setShowHandleDelte}
        notes={notes}
        setNotes={setNotes}
        index={index}
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
    </>
  );
}
