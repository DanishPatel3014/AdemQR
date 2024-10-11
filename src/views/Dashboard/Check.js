import { border, Box, Grid, layout, Stack, Text } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { toPadding } from 'chart.js/helpers';
import Check1 from '../Dashboard/Check1';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const data = {
  labels: [
    'Sep 01',
    'Sep 02',
    'Sep 03',
    'Sep 04',
    'Sep 05',
    'Sep 06',
    'Sep 07',
  ],
  datasets: [
    {
      label: 'Winter Sale',
      data: [60, 80, 45, 65, 58, 70, 90], // Adjusted to match the image closely
      borderColor: '#C084FC', // Light purple from the image
      backgroundColor: 'rgba(192, 132, 252, 0.1)', // Slight background fill
      tension: 0.4, // Smooth lines
      // borderWidth: 2,
      // pointRadius: 2, // Size of the circles on the chart
      // pointHoverRadius: 3, // Size of the circles on hover
    },
    {
      label: 'Black Friday',
      data: [45, 65, 70, 58, 60, 75, 85], // Adjusted to match the image closely
      borderColor: '#9F7AEA', // Dark purple from the image
      backgroundColor: 'rgba(159, 122, 234, 0.1)',
      tension: 0.4, // Smooth lines
      borderWidth: 2,
      pointRadius: 3,
      pointHoverRadius: 5,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',

      labels: {
        border: 'none ',
        color: '#C086EC ', // Label color to match the dark theme
        usePointStyle: true, // Use dots in legend
        pointStyle: 'circle', // The style of the points (can also use 'rect', 'triangle', etc
        boxWidth: 8,
        boxHeight: 8,
      },
      padding: '20px',
    },
  },
  layout: {
    padding: {
      top: 10, // Reduce space at the top
      bottom: 10, // Reduce space at the bottom
      left: 10, // Reduce space on the left
      right: 10, // Reduce space on the right
    },
  },
  scales: {
    x: {
      ticks: { color: '#E9D8FD' }, // X-axis tick labels color
      grid: { display: false }, // Hide x-axis gridlines
    },
    y: {
      ticks: {
        color: '#E9D8FD', // Y-axis tick labels color
        stepSize: 25, // Set step size to control gaps between ticks
        min: 25, // Start from 25
        max: 100, // End at 100
      },
      grid: {
        color: 'rgba(233, 216, 253, 0.2)', // Light gridlines on Y-axis
      },
    },
  },
};
export default function Check() {
  return (
    <Box w="100%" display={'flex'}>
      <Stack w="70%" bg="#00092D" p={6} borderRadius="20px" h="320px">
        {' '}
        {/* Set a fixed height */}
        <Text pb={2} fontSize={'20px'} color={'#fff'} fontWeight={500}>
          QR Scans
        </Text>
        {/* Chart.js Line chart */}
        <Box w={'100%'} h="100%">
          {' '}
          {/* This ensures the chart doesn't stretch vertically */}
          <Line
            w="100%"
            h="100%"
            data={data}
            options={{
              ...options,
              maintainAspectRatio: false, // Allow the chart to fill its container's width and height
            }}
          />
        </Box>
      </Stack>
      <Stack w="30%">
        <Check1 />
      </Stack>
      {/* <Stack w={'30%'} bg="#00092D" p={6} borderRadius="20px" h="320px"> */}
      {/* </Stack> */}
    </Box>
  );
}
