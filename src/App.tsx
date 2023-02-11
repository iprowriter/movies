import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import Detail from "./components/Detail";


function App() {
  return (
    <Router>
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#f5f5f5"}}>
        <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/detail" element={<Detail/>} />
        </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
