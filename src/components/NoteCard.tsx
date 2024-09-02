import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import NotesIcon from "@mui/icons-material/Notes";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import { Avatar, IconButton } from "@mui/material";

export default function NoteCard({ title, discription }: any) {
  return (
    <Card sx={{ width: 500, height: 250 }}>
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
              color: "background.paper",
              bgcolor: "#616161",
            }}
          >
            {<NotesIcon />}
          </Avatar>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ marginTop: "12px", color: "text.secondary" }}
        >
          {discription}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton
          sx={{
            marginRight: "3px",
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
      </CardActions>
    </Card>
  );
}
