import { Box, Text } from '@chakra-ui/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const earningsData = [
  { name: 'Sep 01', referral: 40, qrAds: 50 },
  { name: 'Sep 02', referral: 60, qrAds: 65 },
  { name: 'Sep 03', referral: 75, qrAds: 80 },
  { name: 'Sep 04', referral: 85, qrAds: 90 },
  { name: 'Sep 05', referral: 55, qrAds: 70 },
  { name: 'Sep 06', referral: 68, qrAds: 75 },
];

const referralPieData = [
  { name: 'Tier 1', value: 67 },
  { name: 'Tier 2', value: 33 },
];

const COLORS = ['#FF8042', '#00C49F'];

const Check = () => (
  <Box w={'300px'} mt="6" color="white">
    <Box bg="purple.700" p="6" borderRadius="md">
      <Text mb="4">Total Earnings</Text>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={earningsData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="referral" stroke="#8884d8" />
          <Line type="monotone" dataKey="qrAds" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Box>

    {/* <Box bg="purple.700" p="6" borderRadius="md" mt="6">
      <Text mb="4">Referral Earnings</Text>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={referralPieData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          >
            {referralPieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Box> */}
  </Box>
);

export default Check;
