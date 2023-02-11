import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Button, Container, Grid, Typography } from "@mui/material";

const StyledContainer = styled(Container)`
  margin-top: 20px;
  padding: 2rem;
`;

const cities = [
  {
    city: "Munich",
    imageUrl: "https://tinyurl.com/5d9jyu8t",
    price: 125,
  },
  {
    city: "New York",
    imageUrl: "https://tinyurl.com/ytuy79b3",
    price: 112,
  },
  {
    city: "Berlin",
    imageUrl: "https://tinyurl.com/47srs8na",
    price: 105,
  },
  {
    city: "Lagos",
    imageUrl: "https://tinyurl.com/5n8tsw3w",
    price: 213,
  },
  {
    city: "London",
    imageUrl: "https://tinyurl.com/5ybt45k5",
    price: 119,
  },
  {
    city: "Paris",
    imageUrl: "https://tinyurl.com/yaf6ybn4",
    price: 399,
  },
  {
    city: "Munich",
    imageUrl: "https://tinyurl.com/5d9jyu8t",
    price: 125,
  },
  {
    city: "New York",
    imageUrl: "https://tinyurl.com/ytuy79b3",
    price: 112,
  },
  {
    city: "Berlin",
    imageUrl: "https://tinyurl.com/47srs8na",
    price: 105,
  },
  {
    city: "Lagos",
    imageUrl: "https://tinyurl.com/5n8tsw3w",
    price: 213,
  },
  {
    city: "London",
    imageUrl: "https://tinyurl.com/5ybt45k5",
    price: 119,
  },
  {
    city: "Paris",
    imageUrl: "https://tinyurl.com/yaf6ybn4",
    price: 399,
  },
  {
    city: "Munich",
    imageUrl: "https://tinyurl.com/5d9jyu8t",
    price: 125,
  },
  {
    city: "New York",
    imageUrl: "https://tinyurl.com/ytuy79b3",
    price: 112,
  },
  {
    city: "Berlin",
    imageUrl: "https://tinyurl.com/47srs8na",
    price: 105,
  },
  {
    city: "Lagos",
    imageUrl: "https://tinyurl.com/5n8tsw3w",
    price: 213,
  },
  {
    city: "London",
    imageUrl: "https://tinyurl.com/5ybt45k5",
    price: 119,
  },
  {
    city: "Paris",
    imageUrl: "https://tinyurl.com/yaf6ybn4",
    price: 399,
  },
];

export default function SearchResultCard() {
  //this function is used to send user to pricing page after flight selection

  return (
    <StyledContainer>
      {cities.map((item, index) => (
        <Paper elevation={2} sx={{ marginTop: "45px" }} key={index}>
          <Grid container spacing={2} sx={{ backgroundColor: "aliceblue" }}>
            <Grid item xs={12} md={2} lg={2} borderRight={2}>
              <Box>
                <Grid
                  container
                  my={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box>
                    <Grid item xs={12}>
                      <img height={50} width={50} src={item.imageUrl} alt="" />
                    </Grid>
                  </Box>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={7} lg={7} borderRight={2}>
              <Box>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box>
                      <Grid>
                        <Typography variant="h4">
                          {item.city}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography>{item.price} </Typography>
                      </Grid>
                      <Grid>
                        <Typography>
                          <b>{item.price}</b>
                        </Typography>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              lg={3}
              bgcolor=""
              container
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding={2}
            >
              <Box sx={{ width: "100%" }}>
                <Button
                  variant="contained"
                  color="info"
                  sx={{ borderRadius: "20px" }}
                  fullWidth
                >
                  Select Flight
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </StyledContainer>
  );
}
