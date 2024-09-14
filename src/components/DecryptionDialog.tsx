import getNotesLocalStorageItem from "../controllers/getNotesLocalStorageItem";
import LockOpenIcon from "@mui/icons-material/LockOpen";

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

export default function DecryptionDialog({
  openDecryptionDialog,
  setOpenDecryptionDialog,
  setIsEncrypted,
  setSecret,
  setNotes,
}: any) {
  const [password, setPassword] = useState("");

  function handleSave() {
    setIsEncrypted(true);
    setSecret(password);

    if (localStorage.getItem("notes") !== null) {
      setNotes(getNotesLocalStorageItem(true, password));
    }

    setOpenDecryptionDialog(false);
  }

  return (
    <Dialog open={openDecryptionDialog} maxWidth={"sm"} fullWidth>
      <DialogTitle
        variant="h6"
        color={grey[900]}
        bgcolor={grey[200]}
        sx={{ m: 0, p: 2, fontWeight: "bold" }}
      >
        Decrypt you notes! 🔓️
      </DialogTitle>
      <DialogContent dividers>
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
