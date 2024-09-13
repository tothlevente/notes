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
  isEncrypted,
  secret,
  notes,
  setNotes,
  openCreateNewNote,
  setOpenCreateNewNote,
}: any) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CreateNote
        isEncrypted={isEncrypted}
        secret={secret}
        notes={notes}
        setNotes={setNotes}
        openCreateNewNote={openCreateNewNote}
        setOpenCreateNewNote={setOpenCreateNewNote}
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
                setOpenCreateNewNote(true);
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
