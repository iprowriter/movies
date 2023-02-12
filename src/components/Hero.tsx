import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

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



export default function Hero() {
  return (
    <StyledBox>
      <Typography variant="h3" sx={{ color: "white", textAlign: "initial" }}>
          Welcome
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
        <Box>
        <TextField
          id="filled-basic"
          label="Search for a Movie or TV show"
          variant="filled"
          fullWidth
          sx={{
            backgroundColor: "whitesmoke",
            my: 5,
        }}
        />

        <Button variant="contained" sx={{ height: "7ch", width: "35ch" }} color="info" >
          Search Movie
        </Button>
        </Box>
    </StyledBox>
  );
}
