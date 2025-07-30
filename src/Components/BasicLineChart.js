import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Typography, Box } from '@mui/material';

export default function BasicLineChart() {
  return (
    <Box sx={{ width: 300}}>
      <Typography
        variant="h6"
        align="center"
        sx={{ mb: 1, color: 'black' }} 
      >
        Évolution du nombre d'utilisateurs d'ordinateurs
      </Typography>
      <LineChart
        xAxis={[
          {
            data: [1950, 1970, 1990, 2000, 2010, 2020],
            label: 'Année',
            valueFormatter: (value) => `${value}`,
            labelStyle: { fill: 'black' }, 
            tickLabelStyle: { fill: 'black' }, 
          }
        ]}
        yAxis={[
          {
            label: "Nombre d'utilisateurs",
            labelStyle: { fill: 'black' },
            tickLabelStyle: { fill: 'black' }, 
          }
        ]}
        series={[
          {
            data: [1000, 10000, 1000000, 50000000, 2000000000, 5000000000],
            area: true,
            label: 'Utilisateurs',
            color: '#4286f4'
          },
        ]}
        height={200}
      />
    </Box>
  );
}
