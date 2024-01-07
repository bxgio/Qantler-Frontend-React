import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Skeleton from '@mui/material/Skeleton';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const cardData = [
    {
      heading: 'BPA WITH K2 AND NINTEX',
      image: 'https://source.unsplash.com/random?tech support',
    },
    {
      heading: 'OFFICE AUTOMATION WITH OFFICE 365',
      image: 'https://source.unsplash.com/random?office',
    },
    {
      heading: 'LOW CODE PLATFORMS',
      image: 'https://source.unsplash.com/random?coding',
    },
    {
      heading: 'ROBOTIC AUTOMATION PROCESS',
      image: 'https://source.unsplash.com/random?robots',
    },
    {
      heading: 'BUSINESS INTELLIGENCE',
      image: 'https://source.unsplash.com/random?insights',
    },
    {
      heading: 'MOBILE AND WEB APPLICATIONS',
      image: 'https://source.unsplash.com/random?software',
    },
  ];

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Our Specialized Services
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Qantler Technologies
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Discover the magic of our Consultancy with futuristic technological services
          </Typography>
          <Grid container spacing={4}>
            {cardData.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  {isLoading ? (
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        paddingTop: '56.25%',
                      }}
                    />
                  ) : (
                    <CardMedia
                      component="div"
                      sx={{
                        paddingTop: '56.25%',
                      }}
                      image={card.image}
                    />
                  )}
                  <CardContent sx={{ flexGrow: 1 }}>
                    {isLoading ? (
                      <>
                        <Skeleton height={20} width="80%" />
                        <Skeleton height={10} width="60%" />
                      </>
                    ) : (
                      <>
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.heading}
                        </Typography>
                        <Typography>
                          Explore our {card.heading.toLowerCase()}. With Qantler Technology.
                        </Typography>
                      </>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 5 }}>
            <Typography variant="body2" color="text.secondary" align="center">
              {'Copyright © '}
              <Link color="inherit" href="https://mui.com/">
                Your Website
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Box>
        </Container>
      </main>
    </ThemeProvider>
  );
}
