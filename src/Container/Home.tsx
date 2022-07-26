import React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography, Button, Stack, Container, Box } from '@mui/material';
import { Link } from "react-router-dom";

function Home() {
  return (
    <Stack>
       <Typography variant="h2" component="h1" className="App">
        Form Builder App
      </Typography>
      {/* <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", height: "80vh"}}> */}
      <Box sx={{bgcolor: '#cfe8fc', height: '100vh', justifyContent: "center",  alignItems: "center", display: "flex" }}>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Link to="form-builder">
            <Typography>Build your own customize form</Typography>
          </Link>
        </Stack>

      </Box>

      {/* </div> */}
    </Stack>
  );
}

export default Home;
