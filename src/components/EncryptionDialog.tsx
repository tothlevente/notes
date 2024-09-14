import BlockIcon from "@mui/icons-material/Block";
import LockIcon from "@mui/icons-material/Lock";
import CryptoJS from "crypto-js";

import { grey } from "@mui/material/colors";
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

export default function EncryptionDialog({
  openEncryptionDialog,
  setOpenEncryptionDialog,
  setIsEncrypted,
  setSecret,
  setIsLoading,
}: any) {
  const [password, setPassword] = useState("");

  function handleClose() {
    setOpenEncryptionDialog(false);
    setIsLoading(false);
    localStorage.setItem("encryption", JSON.stringify(false));
    localStorage.setItem("notes", JSON.stringify([]));
  }

  function handleSave() {
    setOpenEncryptionDialog(false);
    setSecret(password);
    setIsEncrypted(true);
    setIsLoading(false);
    localStorage.setItem("encryption", JSON.stringify(true));
    localStorage.setItem(
      "notes",
      CryptoJS.AES.encrypt(JSON.stringify([]), password).toString()
    );
  }

  return (
    <Dialog
      open={openEncryptionDialog}
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
        Encrypt your notes! 🔐
      </DialogTitle>
      <DialogContent dividers>
        <Typography sx={{ marginBottom: 2 }}>
          If you want your notes to be saved encrypted, please enter a
          password. If you don't encrypt it, anyone can read your notes.
        </Typography>
        <TextField
          sx={{ marginBottom: 2 }}
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
        <Alert
          variant="filled"
          severity="warning"
          sx={{ marginBottom: 2 }}
        >
          Don't forget your password because you won't be able to view and
          restore your notes.
        </Alert>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClose}
          startIcon={<BlockIcon />}
        >
          Do not use encryption
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          disabled={password.length <= 0}
          startIcon={<LockIcon />}
        >
          Save and encrypt
        </Button>
      </DialogActions>
    </Dialog>
  );
}
