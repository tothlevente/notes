import VerifiedIcon from "@mui/icons-material/Verified";

import { grey } from "@mui/material/colors";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

export default function WelcomeDialog({
  openWelcomeDialog,
  setOpenWelcomeDialog,
  setOpenEncryptionDialog,
}: any) {
  function handleClose() {
    setOpenWelcomeDialog(false);
    setOpenEncryptionDialog(true);
    localStorage.setItem("welcome", JSON.stringify(false));
  }

  return (
    <Dialog
      open={openWelcomeDialog}
      onClose={handleClose}
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle
        variant="h6"
        color={grey[900]}
        bgcolor={grey[200]}
        sx={{ m: 0, p: 2, fontWeight: "bold" }}
      >
        Welcome in the notes! 👋
      </DialogTitle>
      <DialogContent dividers>
        <Typography sx={{ marginBottom: 2 }}>
          In the notes website you can save, edit and delete notes. 📝
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          This website is under{" "}
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            style={{ color: grey[900] }}
            href="https://github.com/tothlevente/notes/blob/main/LICENSE"
          >
            MIT license
          </a>
          , ad-free and does not use cookies only local storage for save a
          notes information and manages dialogs to improve your experience.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          For more information please visit the project{" "}
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            style={{ color: grey[900] }}
            href="https://github.com/tothlevente/notes"
          >
            repository
          </a>
          .
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          You accept this when you use the website.
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Thank you for visiting!
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="contained"
          startIcon={<VerifiedIcon />}
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
