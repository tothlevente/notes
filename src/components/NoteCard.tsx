import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import EditNoteIcon from "@mui/icons-material/EditNote";
import NoteCardProps from "../interfaces/NoteCardProps";
import DeleteIcon from "@mui/icons-material/Delete";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeleteNoteDialog from "./DeleteNoteDialog";
import NotesIcon from "@mui/icons-material/Notes";
import Typography from "@mui/material/Typography";
import EditNoteDialog from "./EditNoteDialog";
import ShowNoteDialog from "./ShowNoteDialog";
import Card from "@mui/material/Card";

import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";
import { useState } from "react";

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

  const Dialogs = () => {
    return (
      <>
        <ShowNoteDialog
          openShowNoteDialog={openShowNoteDialog}
          setOpenShowNoteDialog={setOpenShowNoteDialog}
          title={note.title}
          discription={note.discription}
        />
        <DeleteNoteDialog
          isEncrypted={isEncrypted}
          secret={secret}
          openHandleDelete={openHandleDelete}
          setOpenHandleDelte={setOpenHandleDelte}
          notes={notes}
          setNotes={setNotes}
          id={note.id}
          title={note.title}
        />
        <EditNoteDialog
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
  };

  return (
    <>
      <Dialogs />
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
              justifyContent: "space-between",
            }}
          >
            <div>
              <Tooltip title="Show full note">
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
              </Tooltip>
            </div>
            <div>
              <Tooltip title="Edit this note">
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
              </Tooltip>
              <Tooltip title="Delte this note">
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
              </Tooltip>
            </div>
          </CardActions>
        </Box>
      </Card>
    </>
  );
}
