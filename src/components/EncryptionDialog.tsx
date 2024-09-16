import EncryptionDialogProps from "../interfaces/EncryptionDialogProps";
import ListItemButton from "@mui/material/ListItemButton";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NoteDialogTitle from "./NoteDialogTitle";
import LockIcon from "@mui/icons-material/Lock";
import ListItem from "@mui/material/ListItem";
import PasswordDialog from "./PasswordDialog";
import List from "@mui/material/List";

import { Dialog, DialogContent, Typography } from "@mui/material";
import { useState } from "react";

export default function EncryptionDialog({
  openEncryptionDialog,
  setOpenEncryptionDialog,
  setIsEncrypted,
  setSecret,
  setIsLoading,
}: EncryptionDialogProps) {
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);

  const handleClose = () => {
    setOpenEncryptionDialog(false);
    setOpenPasswordDialog(false);
    setIsLoading(false);
    localStorage.setItem("encryption", JSON.stringify(false));
    localStorage.setItem("notes", JSON.stringify([]));
  };

  const Dialogs = () => {
    return (
      <PasswordDialog
        setOpenEncryptionDialog={setOpenEncryptionDialog}
        setSecret={setSecret}
        setIsEncrypted={setIsEncrypted}
        setIsLoading={setIsLoading}
        openPasswordDialog={openPasswordDialog}
        handleClose={handleClose}
        setOpenPasswordDialog={setOpenPasswordDialog}
      />
    );
  };

  return (
    <Dialog
      open={openEncryptionDialog}
      onClose={handleClose}
      maxWidth={"sm"}
      fullWidth
    >
      <Dialogs />
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
