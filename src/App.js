import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import styled from '@emotion/styled'


const marks = [
  {
    value: 5,
    label: '5L',
  },
  {
    value: 25,
    label: '25L',
  },
  {
    value: 50,
    label: '50L',
  },
  {
    value: 75,
    label: '75L',
  },
  {
    value: 100,
    label: '1Cr',
  },

  {
    value: 150,
    label: '1.50Cr',
  },
];

function valuetext(value) {
  return `${value}L`;
}

export default function App() {
  return (

    <Box>
      <Card sx={{ minWidth: 275, margin: "40px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Loan Amount
        </Typography>
        <Slider
          aria-label="Loan Amount"
          defaultValue={25}
          getAriaValueText={valuetext}
          step={25}
          max={200}
          valueLabelDisplay="auto"
          marks={marks}
        />
        <Typography sx={{ fontSize: 14, marginTop: "30px" }} color="text.secondary" gutterBottom>
          Tenure
        </Typography>
        <Slider
          aria-label="Tenure"
          defaultValue={25}
          getAriaValueText={valuetext}
          step={5}
          max={30}
          marks={[5,10,15,20,25,30].map((val)=>({"value": val, "label": `${val}`}))}
          valueLabelDisplay="auto"
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">Calculate</Button>
      </CardActions>
    </Card>

    </Box>
  );
}
