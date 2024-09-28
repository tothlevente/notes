import packageJson from "../../package.json";
import GitHubIcon from "@mui/icons-material/GitHub";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar className="footer">
        <Box
          sx={{
            flex: 1,
            flexGrow: 1,
            margin: "20px",
            fontSize: "small",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              fontSize: "small",
            }}
          >
            <Typography className="typography">
              This website is under MIT license, ad-free and does not use cookies
              only local storage for save a notes information and manages dialogs
              to improve your experience.
            </Typography>
            <Typography className="typography">
              For more information please visit the project repository.
            </Typography>
            <Typography className="typography">
              Created by Levente in 2024 | v{packageJson.version}
            </Typography>
          </Box>
          <Box>
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/tothlevente/notes"
            >
              <GitHubIcon />
            </a>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
