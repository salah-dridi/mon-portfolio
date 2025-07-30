import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { desktopOS,valueFormatter} from './webUsageStats';
import { Typography, Box } from '@mui/material';
export default function PieActiveArc() {
  return (
     <Box sx={{ width: 300}}>
          <Typography
            variant="h6"
            align="center"
            sx={{ mb: 1, color: 'black' }} 
          >
            Utilisation des langages de programmation en pourcentage
          </Typography>
    <PieChart
      series={[
        {
          data: desktopOS,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter
        },
      ]}
      height={200}
      width={200}
    />
    </Box>
  );
}