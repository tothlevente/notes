import BlockIcon from "@mui/icons-material/Block";
import LockIcon from "@mui/icons-material/Lock";

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
}: any) {
  const [password, setPassword] = useState("");

  function handleClose() {
    setOpenEncryptionDialog(false);
    localStorage.setItem("encryption", JSON.stringify(false));
  }

  function handleSave() {
    setOpenEncryptionDialog(false);
    setSecret(password);
    setIsEncrypted(true);
    localStorage.setItem("encryption", JSON.stringify(true));
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
        Encrypt you notes! 🔐
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
          Don't forget or save your password in a secret place, because if
          you forget it, you won't be able to view and it won't be possible
          to restore your notes.
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
