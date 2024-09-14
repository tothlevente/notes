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
  const [isError, setIsError] = useState(false);

  function handleSave() {
    setIsEncrypted(true);
    setSecret(password);

    if (localStorage.getItem("notes") !== null) {
      try {
        setNotes(getNotesLocalStorageItem(true, password));
        setOpenDecryptionDialog(false);
      } catch {
        setIsError(true);
      }
    }
  }

  function Error() {
    return (
      <Alert variant="filled" severity="error" sx={{ marginBottom: 2 }}>
        You entered an incorrect password.
      </Alert>
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
        Decrypt you notes! 🔓️
      </DialogTitle>
      <DialogContent dividers>
        <Typography sx={{ marginBottom: 2 }}>
          If you want to decrypt your notes please type your given
          password.
        </Typography>
        {isError ? <Error /> : null}
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
