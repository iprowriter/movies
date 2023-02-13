import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  Container,
  Grid,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { links } from "./endpoints";

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

//this component shows the details of a single movie
export default function MovieDetail() {
  const [movie, setMovie] = useState<any>([]);
  const { id } = useParams();
  let detailURL = links[2] + id + links[3];

  useEffect(() => {
    getMovies();
  });

  const getMovies = () => {
    axios.get(detailURL).then((response) => {
      setMovie(response.data);
    });
  };

  return (
    <Box sx={{ bgcolor: "#f5f5f5" }}>
      <StyledBox>
        <Typography variant="h3" sx={{ color: "white", textAlign: "center" }}>
          {movie ? movie.original_title : ""}
        </Typography>
      </StyledBox>
      <Divider sx={{ mt: 5 }} />
      <StyledContainer>
        <Grid container direction="column">
          <Grid item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
              }}
            >
              <Card sx={{ maxWidth: "100%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="340"
                    image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="Movie Poster"
                  />
                </CardActionArea>
              </Card>
            </Box>
          </Grid>
          <Grid item>
            <Typography color="#3e2723">
              <b>Description:</b> {movie ? movie.overview : ""}
            </Typography>
            <Typography color="#3e2723">
              <b>Rating:</b> {movie ? movie.popularity : ""}
            </Typography>
            <Typography color="#3e2723">
              <b>Budget: </b> ${movie ? movie.budget : ""}
            </Typography>
          </Grid>
        </Grid>
      </StyledContainer>
    </Box>
  );
}
