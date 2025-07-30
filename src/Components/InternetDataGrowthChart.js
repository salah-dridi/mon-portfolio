import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Typography, Box } from '@mui/material';

export default function InternetDataGrowthChart() {
  const years = [1990, 2000, 2010, 2015, 2020, 2025];
 
  const data = [0.01, 0.1, 2, 10, 59, 120];

  return (
    <Box sx={{ width: 300  }}>
      <Typography variant="h6" align="center" sx={{ mb: 2 }}>
        Croissance du volume des données échangées via Internet (en zettaoctets)
      </Typography>
      <LineChart
        xAxis={[{ data: years, label: 'Année', valueFormatter: (v) => `${v}` }]}
        yAxis={[{ label: 'Volume (ZB)' }]}
        series={[
          {
            data,
            area: true,
            label: 'Volume de données',
            color: '#66cee5ff',
          },
        ]}
        height={200}
        sx={{ borderRadius: 2 }}
      />
      <Typography variant="body2" sx={{ mt: 1,alignItems:'center' }}>
        Source: Statista, Cisco – données approximatives
      </Typography>
    </Box>
  );
}
