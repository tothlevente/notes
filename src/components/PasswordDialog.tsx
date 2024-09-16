import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import BlockIcon from "@mui/icons-material/Block";
import NoteDialogTitle from "./NoteDialogTitle";
import LockIcon from "@mui/icons-material/Lock";
import CryptoJS from "crypto-js";

import { useState } from "react";

import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";

interface PasswordDialogProps {
  setOpenEncryptionDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setSecret: React.Dispatch<React.SetStateAction<string>>;
  setIsEncrypted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  openPasswordDialog: boolean;
  setOpenPasswordDialog: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
}

export default function PasswordDialog({
  setOpenEncryptionDialog,
  setSecret,
  setIsEncrypted,
  setIsLoading,
  openPasswordDialog,
  handleClose,
  setOpenPasswordDialog,
}: PasswordDialogProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordAgain, setPasswordAgain] = useState("");
  const [showPasswordAgain, setShowPasswordAgain] = useState(false);
  const [isWrongpassword, setIsWrongpassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordAgain = () => setShowPasswordAgain((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSave = () => {
    if (password !== passwordAgain) {
      setIsWrongpassword(true);
    } else {
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
  };

  const WrongPassword = () => {
    return (
      <Alert variant="outlined" severity="error" sx={{ marginBottom: 2 }}>
        The entered passwords do not match.
      </Alert>
    );
  };

  return (
    <Dialog
      open={openPasswordDialog}
      onClose={handleClose}
      maxWidth={"sm"}
      fullWidth
    >
      <NoteDialogTitle title="Set a password 🔐" />
      <DialogContent dividers>
        <Typography sx={{ marginBottom: 2, textAlign: "center" }}>
          To set up encryption, you will need to enter a password.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>Please enter a password:</Typography>
        <FormControl
          fullWidth
          required
          sx={{ marginBottom: 2 }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl
          fullWidth
          required
          sx={{ marginBottom: 2 }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password-again">
            Password again
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password-again"
            type={showPasswordAgain ? "text" : "password"}
            onChange={(e) => setPasswordAgain(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPasswordAgain}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPasswordAgain ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password again"
          />
        </FormControl>
        {isWrongpassword ? <WrongPassword /> : null}
        <Alert variant="outlined" severity="warning" sx={{ marginBottom: 2 }}>
          Don't forget your password because it not possible to restore it.
        </Alert>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setOpenPasswordDialog(false);
          }}
          startIcon={<BlockIcon />}
        >
          Close
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          disabled={password.length <= 0}
          startIcon={<LockIcon />}
        >
          Encrypt
        </Button>
      </DialogActions>
    </Dialog>
  );
}
