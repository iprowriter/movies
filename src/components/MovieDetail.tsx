import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Container} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const StyledContainer = styled(Container)`
  margin-top: 20px;
  padding: 2rem;
`;

export default function Checkout() {
  return (
    <StyledContainer>
      <Paper elevation={0} sx={{ marginTop: "45px" }}>
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
                height="440"
                image="https://tinyurl.com/5n8tsw3w"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Paper>
    </StyledContainer>
  );
}
