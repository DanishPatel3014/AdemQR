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
      data: [60, 80, 45, 65, 58, 70, 90],
      borderColor: '#C084FC',
      backgroundColor: 'rgba(192, 132, 252, 0.1)',
      tension: 0.4,
    },
    {
      label: 'Black Friday',
      data: [45, 65, 70, 58, 60, 75, 85],
      borderColor: '#9F7AEA',
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
        color: '#C086EC ',
        usePointStyle: true,
        pointStyle: 'circle',
        boxWidth: 8,
        boxHeight: 8,
      },
      padding: 50,
    },
  },
  layout: {
    padding: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
    },
  },
  scales: {
    x: {
      ticks: { color: '#E9D8FD' },
      grid: { display: false },
    },
    y: {
      ticks: {
        color: '#E9D8FD',
        stepSize: 25,
        min: 25,
        max: 100,
      },
      grid: {
        color: 'rgba(233, 216, 253, 0.2)',
      },
    },
  },
};
export default function Check() {
  return (
    <Box w="100%" display={'flex'}>
      <Stack w="70%" bg="#00092D" p={6} borderRadius="20px" h="340px">
        {' '}
        <Text pb={2} fontSize={'20px'} color={'#fff'} fontWeight={500}>
          QR Scans
        </Text>
        <Box w={'100%'} h="100%">
          {' '}
          <Line
            w="100%"
            h="100%"
            data={data}
            options={{
              ...options,
              maintainAspectRatio: false,
            }}
          />
        </Box>
      </Stack>
      <Stack w="30%">
        <Check1 />
      </Stack>
    </Box>
  );
}
