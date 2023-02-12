import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Chip from '@mui/material/Chip';
import { Container, Grid, Typography, Divider } from "@mui/material";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { iCities } from "../common/interfaces";
import { useState } from "react";


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



export function CardMovie({id, original_title, poster_path,  popularity}: any) {
  const navigate = useNavigate();
  const imagePath = "https://image.tmdb.org/t/p/w500/"
  

  return (
    <StyledCard>
     
     <Box sx={{ position: 'relative', cursor: "pointer" }} onClick={()=> { navigate(`/detail/${id}`)}}>
     <CardMedia
        component="img"
        height="245"
        image={imagePath+poster_path}
        alt="city image"
        
      />
       <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: 'rgba(0, 0, 0, 0.54)',
        color: 'white',
        padding: '10px',
      }}
    >
      <Grid container justifyContent="center" alignItems="center"> 
      <Chip label={popularity} color="success" variant="filled"/>
      </Grid>
    </Box>
     </Box>
      <CardContent>
        <Grid container>
        <Typography color="primary">
        {original_title}
          </Typography>
        </Grid>
      </CardContent>
    </StyledCard>
  );
}

export default function MovieCard({getSearchQueryValue}: any) {
  const [url, setUrl] = useState<string>(`https://api.themoviedb.org/4/list/1?api_key=${process.env.REACT_APP_API_Key}`)

  const handleURL = () => {
    if (getSearchQueryValue.length > 2) {
      setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_Key}&query=${getSearchQueryValue}`)
    }
  }


  const {data} = useFetch(url)
  const movies = data.results;

  console.log("moviecard:", getSearchQueryValue)
  

  return (
    <Box>
      <StyledContainer>
        <Typography variant="h5">
          Trending Movies
        </Typography>
      </StyledContainer>
      <Divider variant="middle"/>
      <StyledContainer>
        <Grid container direction="row">
        {movies?.map((item: any) => (
            <Grid item xs={12} sm={4} md={3} lg={2} key={item.id}>
            <CardMovie id={item.id} original_title={item.original_title} poster_path={item.poster_path} popularity={item.popularity} />
            </Grid>
        ))}
        </Grid>
      </StyledContainer>
    </Box>
  );
}
