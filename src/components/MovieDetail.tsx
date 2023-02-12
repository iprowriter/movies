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

export default function MovieDetail() {
  const [movie, setMovie] = useState<any>([]);
  const { id } = useParams();

  useEffect(() => {
    getMovies();
  });

  const getMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_Key}`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
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
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Box>
          </Grid>
          <Grid item>
            <Typography>
              <b>Description:</b> {movie ? movie.overview : ""}
            </Typography>
            <Typography>
              {" "}
              <b>Rating:</b> {movie ? movie.popularity : ""}
            </Typography>
            <Typography>
              {" "}
              <b>Budget:</b> {movie ? movie.budget : ""}
            </Typography>
          </Grid>
        </Grid>
      </StyledContainer>
    </Box>
  );
}
