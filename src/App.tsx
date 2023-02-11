import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Hero from "./components/Hero";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#f5f5f5"}}>
        <Hero/>
        <MovieCard />
        </Box>
      </Container>
    </>
  );
}

export default App;
