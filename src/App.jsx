import React, { useState } from "react";
import { Box, CssBaseline, Typography, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchBar from "./components/SearchBar";
import ImagesList from "./components/ImagesDisplay";
import searchPhotos from "./Api";

const theme = createTheme({
  palette: {
    primary: {
      main: "#723d46",
    },
    background: {
      default: "#f5f5f5",
    },
    errors: {
      default: "#ff4d6d",
    },
    successs: {
      default: "#007200",
    },
  },
  typography: {
    fontFamily: ["Bruno Ace SC", "Arial", "sans-serif"].join(","),
  },
});

function App() {
  const [imagesArray, setImagesArray] = useState([]);
  const [error, setError] = useState("");
  const [color, setColor] = useState("background.default");
  const currentYear = new Date().getFullYear();
  const handleSubmit = async (term) => {
    if (term.length < 3) {
      setError("Need more letters");
      setColor("errors.default");
      return;
    }
    setError("Here you go...");

    setColor("successs.default");
    const result = await searchPhotos(term);
    setImagesArray(result);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          bgcolor: "background.default",
        }}
      >
        <header>
          <Box
            sx={{
              bgcolor: "primary.main",
              padding: 2,
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography variant="h4">FotoFinder</Typography>
          </Box>
        </header>
        <main>
          <Container>
            <SearchBar onSubmit={handleSubmit} errorMsg={error} color={color} />
            <ImagesList images={imagesArray} />
          </Container>
        </main>
        <footer style={{ marginTop: "auto" }}>
          <Box
            sx={{
              bgcolor: "primary.main",
              padding: 2,
              color: "background.default",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">
                <sup>&copy;</sup>{" "}
              </Typography>
              <Typography variant="body2">
                Geetha Supriya Bathula {currentYear}. All rights reserved.
              </Typography>
            </Box>
          </Box>
        </footer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
