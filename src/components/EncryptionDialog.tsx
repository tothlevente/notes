import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ListItemButton from "@mui/material/ListItemButton";
import Visibility from "@mui/icons-material/Visibility";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BlockIcon from "@mui/icons-material/Block";
import NoteDialogTitle from "./NoteDialogTitle";
import LockIcon from "@mui/icons-material/Lock";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
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

export default function EncryptionDialog({
  openEncryptionDialog,
  setOpenEncryptionDialog,
  setIsEncrypted,
  setSecret,
  setIsLoading,
}: any) {
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);

  function handleClose() {
    setOpenEncryptionDialog(false);
    setOpenPasswordDialog(false);
    setIsLoading(false);
    localStorage.setItem("encryption", JSON.stringify(false));
    localStorage.setItem("notes", JSON.stringify([]));
  }

  function PasswordDialog() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [passwordAgain, setPasswordAgain] = useState("");
    const [showPasswordAgain, setShowPasswordAgain] = useState(false);
    const [isWrongpassword, setIsWrongpassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowPasswordAgain = () =>
      setShowPasswordAgain((show) => !show);

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };

    const handleMouseUpPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };

    function handleSave() {
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
    }

    function WrongPassword() {
      return (
        <Alert variant="outlined" severity="error" sx={{ marginBottom: 2 }}>
          The entered passwords do not match.
        </Alert>
      );
    }

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
          <Typography sx={{ marginBottom: 2 }}>
            Please enter a password:
          </Typography>
          <FormControl
            fullWidth
            required
            sx={{ marginBottom: 2 }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
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

  return (
    <Dialog
      open={openEncryptionDialog}
      onClose={handleClose}
      maxWidth={"sm"}
      fullWidth
    >
      <PasswordDialog />
      <NoteDialogTitle title="Do you want encrypt your notes? 🤔" />
      <DialogContent dividers>
        <Typography sx={{ marginBottom: 2, textAlign: "center" }}>
          If you want you can encrypt your notes. This will protect your notes
          because nobody can see, edit or delete it except you.
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenPasswordDialog(true)}>
              <ListItemIcon>
                <LockIcon />
              </ListItemIcon>
              <ListItemText primary="Store your notes encrypted" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleClose}>
              <ListItemIcon>
                <LockOpenIcon />
              </ListItemIcon>
              <ListItemText primary="Do not use encryption" />
            </ListItemButton>
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
}
