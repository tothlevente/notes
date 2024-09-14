import getNotesLocalStorageItem from "../controllers/getNotesLocalStorageItem";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FactoryResetDialog from "./FactoryResetDialog";
import BlockIcon from "@mui/icons-material/Block";

import { grey, red } from "@mui/material/colors";
import { useState } from "react";

import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

export default function DecryptionDialog({
  openDecryptionDialog,
  setOpenDecryptionDialog,
  setIsEncrypted,
  setSecret,
  setNotes,
  setIsLoading,
}: any) {
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [openFactoryResetDialog, setOpenFactoryResetDialog] = useState(false);

  function handleSave() {
    setIsEncrypted(true);
    setSecret(password);

    if (localStorage.getItem("notes") !== null) {
      try {
        setNotes(getNotesLocalStorageItem(true, password));
        setIsLoading(false);
        setOpenDecryptionDialog(false);
      } catch {
        setIsError(true);
      }
    }
  }

  function WrongPassword() {
    return (
      <Alert variant="filled" severity="error" sx={{ marginBottom: 2 }}>
        You entered an incorrect password.
      </Alert>
    );
  }

  function ForgotPasswordDialog() {
    return (
      <Dialog
        open={openForgotPassword}
        onClose={() => setOpenForgotPassword(false)}
        maxWidth={"sm"}
        fullWidth
      >
        <DialogTitle
          variant="h6"
          color={grey[900]}
          bgcolor={grey[200]}
          sx={{ m: 0, p: 2, fontWeight: "bold" }}
        >
          Forgot your password?
        </DialogTitle>
        <DialogContent dividers>
          If you have forgotten your password, you can only use a factory reset.
          This will delete your all notes in this browser and restore everything
          to factory settings. You cannot undo this action later.
        </DialogContent>
        <DialogActions>
          <FactoryResetDialog
            openFactoryResetDialog={openFactoryResetDialog}
            setOpenFactoryResetDialog={setOpenFactoryResetDialog}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: red[500] }}
            onClick={() => setOpenFactoryResetDialog(true)}
            startIcon={<DeleteForeverIcon />}
          >
            Factory reset
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setOpenForgotPassword(false)}
            startIcon={<BlockIcon />}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <Dialog open={openDecryptionDialog} maxWidth={"sm"} fullWidth>
      <DialogTitle
        variant="h6"
        color={grey[900]}
        bgcolor={grey[200]}
        sx={{ m: 0, p: 2, fontWeight: "bold" }}
      >
        Decrypt your notes! 🔓️
      </DialogTitle>
      <DialogContent dividers>
        <Typography sx={{ marginBottom: 2 }}>
          If you want to decrypt your notes please type your password.
        </Typography>
        {isError ? <WrongPassword /> : null}
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
      <DialogActions>
        <ForgotPasswordDialog />
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
