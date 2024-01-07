import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };

  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          Feel free to reach out to us using the form below.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Your Email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            type="email"
          />
          <TextField
            label="Message"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary" size="large" mt={2}>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Contact;
