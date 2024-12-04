import { Box, Text, Flex, Center, VStack, Stack } from '@chakra-ui/react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Active', 'Completed'],
  datasets: [
    {
      data: [67, 33], // Active: 67%, Completed: 33%
      backgroundColor: ['#A17DFF', '#5636CB'], // Active: Green, Completed: Purple
      hoverBackgroundColor: ['#A17DFF', '#5636CB'],
      borderWidth: 0, // No border around segments
      cutout: '60%', // Thicker arc
      spacing: 12,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide the default legend
    },
    tooltip: {
      enabled: false, // Hide tooltips
    },
  },
  rotation: -90, // Start at the top
  circumference: 180, // Semi-circle
};

export default function Check1({ name }) {
  return (
    <Box bg="#00092D" borderRadius="20px" p={6} w="100%" h={'96%'}>
      <VStack spacing={4}>
        <Stack w="100%">
          <Text
            textAlign={'center'}
            fontSize="20px"
            fontWeight="medium"
            color="white"
          >
            {name ? 'Performance Metrics' : 'Ads Status'}
          </Text>
        </Stack>

        <Text fontSize="36px" fontWeight="medium" color="white">
          1342
        </Text>
        <Text
          fontSize="20px"
          fontWeight="200"
          color={name ? '#C086EC' : '#F3EEFE'}
          mb={3}
        >
          Total {name ? 'Impressions' : 'Employment'}
        </Text>

        <Center position="relative" w="220px" h="220px">
          <Doughnut data={data} options={options} />
          <Box position="absolute" top="10%" left="25px">
            <Text fontSize="16px" color="#fff">
              33%
            </Text>
          </Box>
          <Box position="absolute" top="10%" right="25px">
            <Text fontSize="16px" color="#fff">
              67%
            </Text>
          </Box>
        </Center>

        <Flex justifyContent="center" m={'0 !important'} mt>
          <Flex alignItems="center" mr={6}>
            <Box bg="#A17DFF" borderRadius="full" h={3} w={3} mr={2}></Box>
            <Text fontSize="sm" color="gray.300">
              {name ? 'Impressions' : 'Active'}
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Box bg="#5636CB" borderRadius="full" h={3} w={3} mr={2}></Box>
            <Text fontSize="sm" color="gray.300">
              {name ? 'QR Scans' : 'Completed'}
            </Text>
          </Flex>
        </Flex>
      </VStack>
    </Box>
  );
}
