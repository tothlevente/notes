import NoteStack from "./components/NoteStack";
import NoteProps from "./interfaces/NoteProps";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, Paper } from "@mui/material";
import { useEffect, useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    mode: "light",
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#424242",
    },
  },
});

export default function App() {
  const [showCreateNewNote, setShowCreateNewNote] = useState(false);
  const [notes, setNotes] = useState<NoteProps[]>([]);

  useEffect(() => {
    if (localStorage.getItem("notes") !== null) {
      setNotes(JSON.parse(localStorage.getItem("notes")!));
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
        }}
      >
        <Header
          notes={notes}
          setNotes={setNotes}
          showCreateNewNote={showCreateNewNote}
          setShowCreateNewNote={setShowCreateNewNote}
        />
        <NoteStack
          notes={notes}
          setNotes={setNotes}
          setShowCreateNewNote={setShowCreateNewNote}
        />
      </Paper>
      <Footer />
    </ThemeProvider>
  );
}
