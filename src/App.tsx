import getNotesLocalStorageItem from "./controllers/getNotesLocalStorageItem";
import EncryptionDialog from "./components/EncryptionDialog";
import DecryptionDialog from "./components/DecryptionDialog";
import WelcomeDialog from "./components/WelcomeDialog";
import NoteStack from "./components/NoteStack";
import NoteProps from "./interfaces/NoteProps";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { createTheme, CssBaseline, Paper } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    mode: "light",
    primary: {
      main: blue[500],
    },
    secondary: {
      main: grey[800],
    },
    background: {
      default: grey[50],
    },
  },
});

export default function App() {
  const [openEncryptionDialog, setOpenEncryptionDialog] = useState(false);
  const [openDecryptionDialog, setOpenDecryptionDialog] = useState(false);
  const [openWelcomeDialog, setOpenWelcomeDialog] = useState(true);
  const [openCreateNewNote, setOpenCreateNewNote] = useState(false);
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [secret, setSecret] = useState("");
  const [isEncrypted, setIsEncrypted] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("welcome")!) === false) {
      setOpenWelcomeDialog(false);
    }
  }, [setOpenWelcomeDialog]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("encryption")!) === true) {
      setOpenDecryptionDialog(true);
    }
  }, [setIsEncrypted]);

  useEffect(() => {
    if (localStorage.getItem("notes") !== null) {
      if (JSON.parse(localStorage.getItem("encryption")!) === true) {
        setOpenDecryptionDialog(true);
      } else {
        setNotes(getNotesLocalStorageItem(isEncrypted, secret));
      }
    }
  }, [setNotes]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper
        elevation={0}
        square
        sx={{
          pb: "150px",
          "@media (max-width: 459px)": {
            pb: "200px",
          },
          "@media (max-width: 349px)": {
            pb: "300px",
          },
          bgcolor: grey[50],
        }}
      >
        <Header
          isEncrypted={isEncrypted}
          secret={secret}
          notes={notes}
          setNotes={setNotes}
          openCreateNewNote={openCreateNewNote}
          setOpenCreateNewNote={setOpenCreateNewNote}
        />
        <WelcomeDialog
          openWelcomeDialog={openWelcomeDialog}
          setOpenWelcomeDialog={setOpenWelcomeDialog}
          setOpenEncryptionDialog={setOpenEncryptionDialog}
        />
        <EncryptionDialog
          openEncryptionDialog={openEncryptionDialog}
          setOpenEncryptionDialog={setOpenEncryptionDialog}
          setIsEncrypted={setIsEncrypted}
          setSecret={setSecret}
        />
        <DecryptionDialog
          openDecryptionDialog={openDecryptionDialog}
          setOpenDecryptionDialog={setOpenDecryptionDialog}
          setIsEncrypted={setIsEncrypted}
          setSecret={setSecret}
          setNotes={setNotes}
        />
        <NoteStack
          isEncrypted={isEncrypted}
          secret={secret}
          notes={notes}
          setNotes={setNotes}
          setOpenCreateNewNote={setOpenCreateNewNote}
        />
      </Paper>
      <Footer />
    </ThemeProvider>
  );
}
