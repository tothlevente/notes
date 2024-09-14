import packageJson from "../../package.json";

import { AppBar, Toolbar } from "@mui/material";
import { grey } from "@mui/material/colors";

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
            margin: "20px",
            fontSize: "small",
            textAlign: "center",
          }}
        >
          <p>
            This website is under{" "}
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              style={{ color: grey[50] }}
              href="https://github.com/tothlevente/notes/blob/main/LICENSE"
            >
              MIT license
            </a>
            , ad-free and does not use cookies only local storage for save
            a notes information and manages dialogs to improve your
            experience.
          </p>
          <p>You accept this when you use the website.</p>
          For more information please visit the project{" "}
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            style={{ color: grey[50] }}
            href="https://github.com/tothlevente/notes"
          >
            repository.
          </a>
          <p>
            Created by{" "}
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              style={{ color: grey[50] }}
              href="https://github.com/tothlevente"
            >
              Levente
            </a>{" "}
            in 2024 | v{packageJson.version}
          </p>
        </div>
      </Toolbar>
    </AppBar>
  );
}
