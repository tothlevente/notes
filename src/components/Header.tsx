import SettingsIcon from "@mui/icons-material/Settings";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import HeaderProps from "../interfaces/HeaderProps";
import CreateNote from "./CreateNote";
import Logo from "./Logo";

import { Box } from "@mui/system";

import { AppBar, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";

export default function Header({
  isEncrypted,
  secret,
  notes,
  setNotes,
  openCreateNewNote,
  setOpenCreateNewNote,
  setOpenSettingsDialog,
}: HeaderProps) {
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
              onClick={() => setOpenCreateNewNote(true)}
            >
              <NoteAddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Open settings">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open settings"
              sx={{ mr: 2 }}
              onClick={() => setOpenSettingsDialog(true)}
            >
              <SettingsIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
