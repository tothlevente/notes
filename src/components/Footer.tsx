import packageJson from "../../package.json";

import { AppBar, Toolbar } from "@mui/material";

export default function Footer() {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: "auto", bottom: 0 }}
    >
      <Toolbar>
        <div
          style={{
            flex: 1,
            flexGrow: 1,
            margin: "10px",
            fontSize: "small",
          }}
        >
          <p>
            This website is under MIT license, ad-free and does not
            use cookies only local storage for save a notes
            information and manages dialogs to improve your
            experience.
          </p>
          <p>You accept this when you use the website.</p>
          <p>
            For more information please visit the project repository.
          </p>
          <p>Created by Levente in 2024 | v{packageJson.version}</p>
        </div>
      </Toolbar>
    </AppBar>
  );
}
