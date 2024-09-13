import getNotesLocalStorageItem from "./controllers/getNotesLocalStorageItem";
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
  const [openWelcomeDialog, setOpenWelcomeDialog] = useState(false);
  const [openCreateNewNote, setOpenCreateNewNote] = useState(false);

  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [secret, setSecret] = useState("");
  const [isEncrypted, setIsEncrypted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("notes") !== null) {
      setNotes(getNotesLocalStorageItem(isEncrypted, secret));
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
          setIsEncrypted={setIsEncrypted}
          setSecret={setSecret}
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
