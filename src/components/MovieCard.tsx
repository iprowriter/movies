import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { Container, Grid, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { iMovieData } from "../common/interfaces";
import { useEffect, useState } from "react";
import axios from "axios";
import {links} from "./endpoints"

const StyledContainer = styled(Container)`
  margin-top: 20px;
  padding: 2rem;
`;

export const StyledCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    maxWidth: 400,
    height: 350,
    marginRight: 0,
    marginBottom: 25,
    
  },
  [theme.breakpoints.up("sm")]: {
    maxWidth: 400,
    height: 350,
    marginRight: 2,
    marginBottom: 25,
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: 300,
    height: 350,
    marginRight: 12,
    marginBottom: 25,
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 200,
    height: 350,
    margin: 2,
    marginRight: 12,
    marginBottom: 25,
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: 200,
    height: 350,
    marginRight: 12,
    marginBottom: 25,
  },
}));

//this card was used in the component below:
export function CardMovie({
  id,
  original_title,
  poster_path,
  popularity,
}: iMovieData) {
  const navigate = useNavigate();
  const imagePath = "https://image.tmdb.org/t/p/w500/";

  return (
    <StyledCard sx={{
      ':hover': {
        boxShadow: 20,
        transition: "transform 0.15s ease-in-out",
        transform: "scale3d(1.05, 1.05, 1)",
      },
    }}>
      <Box
        sx={{ position: "relative", cursor: "pointer" }}
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
      >
        <CardMedia
          component="img"
          height="245"
          image={imagePath + poster_path}
          alt="city image"
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            bgcolor: "rgba(0, 0, 0, 0.54)",
            color: "white",
            padding: "10px",
          }}
        >
          <Grid container justifyContent="center" alignItems="center">
            <Chip label={popularity} color="success" variant="filled" />
          </Grid>
        </Box>
      </Box>
      <CardContent>
        <Grid container>
          <Typography color="primary">{original_title}</Typography>
        </Grid>
      </CardContent>
    </StyledCard>
  );
}

//this component displays all the movies in the Homepage
export default function MovieCard({ getSearchQueryValue }: any) {
  let homeUrl = links[0]
  let searchUrl = links[1]+getSearchQueryValue
  
  const [url, setUrl] = useState<string>(homeUrl);

  useEffect(() => {
    if (getSearchQueryValue.length !== 0) {
      setUrl(searchUrl);
    }
  }, [getSearchQueryValue, searchUrl]);

  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  // const movies = data.results?.sort(function (a: {popularity:number}, b: {popularity:number}) {
  //   return b.popularity - a.popularity;
  // });

  const movies = data.results?.sort((a: {popularity:number}, b: {popularity:number}) =>  {
    if (a.popularity > b.popularity) {
      return -1
    }  else if (a.popularity < b.popularity){
      return 1
    } else {
      return 0
    }
  })

  return (
    <Box>
      {loading ? <Typography>Loading ...</Typography> :
      <>
      <StyledContainer>
        <Typography variant="h5" color="#3e2723">Trending Movies</Typography>
      </StyledContainer>
      <Divider variant="middle" />
      <StyledContainer>
        <Grid container direction="row">
          {movies?.length === 0 ? (
            <Typography color="#3e2723"> No movies found</Typography>
          ) : (
            movies?.map((item: iMovieData) => (
              <Grid item xs={12} sm={4} md={3} lg={2} key={item.id}>
                <CardMovie
                  id={item.id}
                  original_title={item.original_title}
                  poster_path={item.poster_path}
                  popularity={item.popularity}
                />
              </Grid>
            ))
          )}
        </Grid>
      </StyledContainer>
      </>
      }
    </Box>
  );
}
