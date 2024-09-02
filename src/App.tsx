import CreateNote from "./components/CreateNote";
import NoteStack from "./components/NoteStack";
import NoteProps from "./interfaces/NoteProps";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useState } from "react";

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

  return (
    <ThemeProvider theme={theme}>
      <CreateNote
        notes={notes}
        setNotes={setNotes}
        showCreateNewNote={showCreateNewNote}
        setShowCreateNewNote={setShowCreateNewNote}
      />
      <div className="site-wrapper">
        <Header setShowCreateNewNote={setShowCreateNewNote} />
        <NoteStack notes={notes} setNotes={setNotes} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
