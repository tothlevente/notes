import getNotesLocalStorageItem from "./controllers/getNotesLocalStorageItem";
import CircularProgress from "@mui/material/CircularProgress";
import EncryptionDialog from "./components/EncryptionDialog";
import DecryptionDialog from "./components/DecryptionDialog";
import SettingsDialog from "./components/SettingsDialog";
import WelcomeDialog from "./components/WelcomeDialog";
import NoteStack from "./components/NoteStack";
import NoteProps from "./interfaces/NoteProps";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Box, createTheme, CssBaseline, Paper } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    mode: "light",
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[700],
    },
    background: {
      default: grey[200],
    },
  },
});

export default function App() {
  const [openEncryptionDialog, setOpenEncryptionDialog] = useState(false);
  const [openDecryptionDialog, setOpenDecryptionDialog] = useState(false);
  const [openSettingsDialog, setOpenSettingsDialog] = useState(false);
  const [openWelcomeDialog, setOpenWelcomeDialog] = useState(false);
  const [openCreateNewNote, setOpenCreateNewNote] = useState(false);
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [secret, setSecret] = useState("");
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("welcome")!) === null) {
      setOpenWelcomeDialog(true);
    } else {
      if (JSON.parse(localStorage.getItem("encryption")!) === null) {
        localStorage.removeItem("welcome");
      }
    }
  }, [setOpenWelcomeDialog]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("encryption")!) === true) {
      setOpenDecryptionDialog(true);
    } else {
      if (localStorage.getItem("notes") !== null) {
        setIsLoading(false);
      }
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

  const Dialogs = () => {
    return (
      <>
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
          setIsLoading={setIsLoading}
        />
        <DecryptionDialog
          openDecryptionDialog={openDecryptionDialog}
          setOpenDecryptionDialog={setOpenDecryptionDialog}
          setIsEncrypted={setIsEncrypted}
          setSecret={setSecret}
          setNotes={setNotes}
          setIsLoading={setIsLoading}
        />
        <SettingsDialog
          openSettingsDialog={openSettingsDialog}
          setOpenSettingsDialog={setOpenSettingsDialog}
          notes={notes}
          setNotes={setNotes}
          secret={secret}
        />
      </>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dialogs />
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
          bgcolor: grey[200],
        }}
      >
        <Header
          isEncrypted={isEncrypted}
          secret={secret}
          notes={notes}
          setNotes={setNotes}
          openCreateNewNote={openCreateNewNote}
          setOpenCreateNewNote={setOpenCreateNewNote}
          setOpenSettingsDialog={setOpenSettingsDialog}
        />
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "40vh",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <NoteStack
            isEncrypted={isEncrypted}
            secret={secret}
            notes={notes}
            setNotes={setNotes}
            setOpenCreateNewNote={setOpenCreateNewNote}
          />
        )}
      </Paper>
      <Footer />
    </ThemeProvider>
  );
}
