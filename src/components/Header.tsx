import NoteAddIcon from "@mui/icons-material/NoteAdd";
import CreateNote from "./CreateNote";
import Logo from "./Logo";

import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import { Box } from "@mui/system";

export default function Header({
  notes,
  setNotes,
  showCreateNewNote,
  setShowCreateNewNote,
}: any) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CreateNote
        notes={notes}
        setNotes={setNotes}
        showCreateNewNote={showCreateNewNote}
        setShowCreateNewNote={setShowCreateNewNote}
      />
      <AppBar position="static">
        <Toolbar>
          <Logo />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "5px" }}
          >
            Notes
          </Typography>
          <Tooltip title="Create new note">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="create new note"
              sx={{ mr: 2 }}
              onClick={() => {
                setShowCreateNewNote(true);
              }}
            >
              <NoteAddIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
