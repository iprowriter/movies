import {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const StyledBox = styled(Box)`
  color: darkslategray;
  padding: 2rem;
  text-align: center;
  min-height: 300px;
  background: url(https://tinyurl.com/39rbr4n9),
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
`;

const StyledContainer = styled(Container)`
  margin-top: 20px;
  padding: 2rem;
`;



export default function MovieDetail(mova: any) {
   const [movie, setMovie] = useState([]);
    const id = useParams();




  return (
    <Box sx={{ bgcolor: '#f5f5f5', height: '100vh' }}>
    {mova.filter((item: any) => item.id === id).map((item: any, index: any) => (
        <>
        <StyledBox>
        <Typography variant="h3" sx={{ color: "white", textAlign: "initial" }}>
            {item.original_title}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: {
                lg: 30,
                md: 30,
                sm: 25,
                xs: 15,
              }, 
              color: "white",
              textAlign: "initial"
            }}
          >
            Discover millions of top-ranked movies and TV shows
          </Typography>
      </StyledBox>
      <Typography variant="h5">
            Details
      </Typography>
        </>
    ))}
    </Box>
  );
}
