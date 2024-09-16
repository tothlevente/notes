import getNotesLocalStorageItem from "../controllers/getNotesLocalStorageItem";
import ForgotPasswordDialog from "./ForgotPasswordDialog";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import NoteDialogTitle from "./NoteDialogTitle";
import NoteProps from "../interfaces/NoteProps";

import { useState } from "react";

import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";

interface DecryptionDialogProps {
  openDecryptionDialog: boolean;
  setOpenDecryptionDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEncrypted: React.Dispatch<React.SetStateAction<boolean>>;
  setSecret: React.Dispatch<React.SetStateAction<string>>;
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DecryptionDialog({
  openDecryptionDialog,
  setOpenDecryptionDialog,
  setIsEncrypted,
  setSecret,
  setNotes,
  setIsLoading,
}: DecryptionDialogProps) {
  const [password, setPassword] = useState("");
  const [isWrongpassword, setIsWrongpassword] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [openFactoryResetDialog, setOpenFactoryResetDialog] = useState(false);

  const handleSave = () => {
    setIsEncrypted(true);
    setSecret(password);

    if (localStorage.getItem("notes") !== null) {
      try {
        setNotes(getNotesLocalStorageItem(true, password));
        setIsLoading(false);
        setOpenDecryptionDialog(false);
      } catch {
        setIsWrongpassword(true);
      }
    }
  };

  const WrongPassword = () => {
    return (
      <Alert variant="filled" severity="error" sx={{ marginBottom: 2 }}>
        You entered an incorrect password.
      </Alert>
    );
  };

  return (
    <Dialog open={openDecryptionDialog} maxWidth={"sm"} fullWidth>
      <NoteDialogTitle title="Decrypt your notes 🔐" />
      <DialogContent dividers sx={{ textAlign: "center" }}>
        <Typography sx={{ marginBottom: 2 }}>
          If you want to decrypt your notes please type your password.
        </Typography>
        {isWrongpassword ? <WrongPassword /> : null}
        <TextField
          sx={{ marginBottom: 2 }}
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <ForgotPasswordDialog
          openForgotPassword={openForgotPassword}
          setOpenForgotPassword={setOpenForgotPassword}
          openFactoryResetDialog={openFactoryResetDialog}
          setOpenFactoryResetDialog={setOpenFactoryResetDialog}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setOpenForgotPassword(true)}
        >
          Forgot password?
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          disabled={password.length <= 0}
          startIcon={<LockOpenIcon />}
        >
          Decrypt
        </Button>
      </DialogActions>
    </Dialog>
  );
}
