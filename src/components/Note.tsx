import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import NotesIcon from "@mui/icons-material/Notes";

import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

export default function Note({
  avatar,
  color,
  title,
  discription,
}: any) {
  return (
    <ListItem
      sx={{
        margin: "10px",
        height: "130px",
        bgcolor: color || "background.paper",
      }}
      alignItems="flex-start"
      secondaryAction={
        <>
          <IconButton
            sx={{
              marginRight: "5px",
              "&:hover": {
                color: "#212121",
              },
            }}
            edge="end"
            aria-label="edit"
          >
            <EditNoteIcon />
          </IconButton>
          <IconButton
            sx={{
              marginRight: "5px",
              "&:hover": {
                color: "#ff5722",
              },
            }}
            edge="end"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemAvatar>
        <Avatar
          sx={{
            color: color || "background.paper",
            bgcolor: "#616161",
          }}
        >
          {avatar || <NotesIcon />}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={discription} />
    </ListItem>
  );
}
