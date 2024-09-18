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

import { Avatar, IconButton, Tooltip } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";

export default function NoteCard({
  isEncrypted,
  secret,
  index,
  title,
  discription,
  backgroundColor,
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
          width: 500,
          height: 250,
          display: "grid",
          alignContent: "space-between",
          bgcolor: backgroundColor,
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
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ display: "flex" }}
          >
            <Avatar
              sx={{
                marginRight: "10px",
                color: backgroundColor,
                backgroundColor: grey[900],
              }}
            >
              <NotesIcon />
            </Avatar>
            {title.length < 30 ? title : title.substring(0, 30) + "..."}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "12px", color: grey[900] }}>
            {discription.length < 300
              ? discription
              : discription.substring(0, 300) + "..."}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            marginBottom: "20px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Tooltip title="Show full note">
              <IconButton
                edge="end"
                aria-label="show"
                sx={{
                  marginRight: "5px",
                  "&:hover": {
                    color: grey[900],
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
                    color: grey[900],
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
                    color: grey[900],
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
      </Card>
    </>
  );
}
