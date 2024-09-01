import NoteAddIcon from "@mui/icons-material/NoteAdd";
import Logo from "./Logo";

import { Box } from "@mui/system";

import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

export default function Header({ setShowCreateNewNote }: any) {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
