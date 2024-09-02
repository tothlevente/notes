import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import NotesIcon from "@mui/icons-material/Notes";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import { Avatar, IconButton } from "@mui/material";

export default function NoteCard({
  id,
  index,
  title,
  discription,
  handleEdit,
  handleDelete,
}: any) {
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
            }}
          >
            {<NotesIcon color="primary" />}
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
          edge="end"
          aria-label="edit"
          sx={{
            marginRight: "3px",
            "&:hover": {
              color: "#2196f3",
            },
          }}
          onClick={() => {
            handleEdit(index);
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
              color: "#ff5722",
            },
          }}
          onClick={() => {
            handleDelete(id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
