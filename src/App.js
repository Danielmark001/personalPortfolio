import { ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogList from "./pages/BlogList";
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
});

theme.typography.h2 = {
  fontSize: '1.8rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.8rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '5.8rem',
  },
};

theme.typography.h6 = {
  fontSize: '1.2rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.8rem',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: "100%",
          minHeight: "min-content",
          height: "100vh",
          backgroundColor: "#fff",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
