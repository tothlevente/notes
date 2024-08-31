import Header from "./components/Header";
import Footer from "./components/Footer";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="site-wrapper">
        <Header />
        <main></main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
