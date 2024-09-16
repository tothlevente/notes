import VerifiedIcon from "@mui/icons-material/Verified";

import { grey } from "@mui/material/colors";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import NoteDialogTitle from "./NoteDialogTitle";

interface WelcomeDialogProps {
  openWelcomeDialog: boolean;
  setOpenWelcomeDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenEncryptionDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WelcomeDialog({
  openWelcomeDialog,
  setOpenWelcomeDialog,
  setOpenEncryptionDialog,
}: WelcomeDialogProps) {
  const handleClose = () => {
    setOpenWelcomeDialog(false);
    setOpenEncryptionDialog(true);
    localStorage.setItem("welcome", JSON.stringify(false));
  };

  return (
    <Dialog
      open={openWelcomeDialog}
      onClose={handleClose}
      maxWidth={"sm"}
      sx={{ borderRadius: "10px" }}
      fullWidth
    >
      <NoteDialogTitle title="Welcome in the notes! 👋" />
      <DialogContent dividers sx={{ textAlign: "center" }}>
        <Typography sx={{ marginBottom: 2 }}>
          In this web application you can save, edit and delete notes. 📝
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          This web application is under{" "}
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            style={{ color: grey[900] }}
            href="https://github.com/tothlevente/notes/blob/main/LICENSE"
          >
            MIT license
          </a>
          , ad-free and does not use cookies only local storage for save a notes
          information and manages dialogs to improve your experience.
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
          Thank you for visiting! ✌️
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
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
