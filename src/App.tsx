import Header from "./components/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";



function App() {
  //make darkmode toggle
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const darkTheme = createTheme({
    palette: {
      mode: checked ? "dark" : "light",
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
      <Header checked={checked} handleChange={handleChange}/>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#f5f5f5"}}>
        <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/detail/:id" element={<MovieDetail/>} />
        </Routes>
        </Box>
      </Container>
    </Router>
    </ThemeProvider>
    
  );
}

export default App;
