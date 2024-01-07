import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, Grid, Skeleton } from '@mui/material';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';

const About = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Array of random image URLs
  const randomImages = [
    img1,
    img2,
    img3,
  ];

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        {isLoading ? (
          <Skeleton height={30} width="60%" />
        ) : (
          "Welcome to our amazing About page! Here you'll find interesting information about our company."
        )}
      </Typography>
      <Grid container spacing={2} justifyContent="center" mt={3}>
        {randomImages.map((imageUrl, index) => (
          <Grid item key={index} xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: '10px', textAlign: 'center' }}>
              {isLoading ? (
                <Skeleton variant="rectangular" height={200} />
              ) : (
                <img
                  src={imageUrl}
                  alt={`Random ${index + 1}`}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '10px' }}
                />
              )}
              {isLoading ? (
                <Skeleton height={100} />
              ) : (
                <Typography variant="body2">
                  Qantler has a team of highly reliable dedicated software developers who have a vast experience
                  and expertise in Business Intelligence using Power BI & Tableau.
                </Typography>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1" mt={3}>
        {isLoading ? (
          <Skeleton height={30} width="80%" />
        ) : (
          "Qantler Technology is a US-based company with several branches around India. It provides Tech Services and Business insights. Recently opened a branch in Trichy St. Joseph's college."
        )}
      </Typography>
    </Container>
  );
};

export default About;
