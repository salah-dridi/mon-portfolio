import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { desktopOS,valueFormatter} from './webUsageStats';

export default function PieActiveArc() {
  return (
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
      sx={{ borderRadius: 2 ,background:'linear-gradient(to bottom, #001, #4db2b6)'}}
    />
  );
}