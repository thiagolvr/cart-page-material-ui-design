import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

export default function SimplePaper() {
  return (
    <Box p={2} sx={{width: '50%'}}
    >
      <Paper elevation={3}>
        <Typography variant='body1' p={2} mt={3}>
          Apple Macbook Air 13 M1 Silicon
        </Typography>
        </Paper>
      
      <Paper elevation={3}>
        <Typography variant='body1' p={2} mt={3}>
          Apple Iphone 11 
        </Typography>
      </Paper>

      <Paper elevation={3}>
        <Typography variant='body1' p={2} mt={2}>
          Apple Watch Series 7
        </Typography>
      </Paper>
    </Box>
  );
}
