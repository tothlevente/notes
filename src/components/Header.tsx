import NightsStayTwoToneIcon from "@mui/icons-material/NightsStayTwoTone";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
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
              <AddCircleTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Switch to dark mode">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="switch to dark mode"
              sx={{ mr: 2 }}
            >
              <NightsStayTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Open settings">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open settings"
              sx={{ mr: 2 }}
            >
              <SettingsTwoToneIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
