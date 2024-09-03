import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import NotesIcon from "@mui/icons-material/Notes";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import { Avatar, IconButton } from "@mui/material";

export default function NoteCard({
  title,
  discription,
  setShowHandleEdit,
  setShowHandleDelte,
}: any) {
  return (
    <Card
      sx={{
        minWidth: 50,
        maxWidth: 500,
        height: 250,
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
              color: "background.paper",
            }}
          >
            <NotesIcon />
          </Avatar>
          {title.length < 30 ? title : title.substring(0, 30) + "..."}
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
        sx={{ justifyContent: "flex-end", marginBottom: "20px" }}
      >
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
              color: "#ff5722",
            },
          }}
          onClick={() => {
            setShowHandleDelte(true);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
