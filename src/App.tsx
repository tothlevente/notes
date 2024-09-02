import CreateNewNote from "./components/CreateNewNote";
import NoteStack from "./components/NoteStack";
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

  return (
    <ThemeProvider theme={theme}>
      <CreateNewNote
        showCreateNewNote={showCreateNewNote}
        setShowCreateNewNote={setShowCreateNewNote}
      />
      <div className="site-wrapper">
        <Header setShowCreateNewNote={setShowCreateNewNote} />
        <NoteStack />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
