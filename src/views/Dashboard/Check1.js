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
      backgroundColor: ['#48BB78', '#9F7AEA'], // Active: Green, Completed: Purple
      hoverBackgroundColor: ['#38A169', '#805AD5'],
      borderWidth: 0, // No border around segments
      cutout: '60%', // Thicker arc
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

export default function Check1() {
  return (
    <Box bg="#00092D" borderRadius="20px" p={4} w="100%" h={'320px'} mx={4}>
      <VStack spacing={3}>
        <Stack w={'100%'} px={4}>
          <Text fontSize="22px" fontWeight="medium" color="white">
            Ads Status
          </Text>
        </Stack>

        <Text fontSize="32px" fontWeight="medium" color="white">
          1342
        </Text>
        <Text fontSize="18px" fontWeight={'200'} color="#F3EEFE" mb={2}>
          Total Employment
        </Text>

        <Center position="relative" w="150px" h="150px">
          {' '}
          {/* Increased size */}
          {/* Doughnut Chart */}
          <Doughnut data={data} options={options} />
          {/* Custom Labels for the percentages */}
          <Box position="absolute" top="5%" left="20px">
            <Text fontSize="14px" color="#fff">
              33
            </Text>
          </Box>
          <Box position="absolute" top="5%" right="20px">
            <Text fontSize="14px" color="#fff">
              67
            </Text>
          </Box>
        </Center>

        {/* Custom Legend */}
        <Flex justifyContent="center" m={'0 !important'}>
          <Flex alignItems="center" mr={4}>
            <Box bg="green.400" borderRadius="full" h={2} w={2} mr={2}></Box>
            <Text fontSize="xs" color="gray.300">
              Active
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Box bg="purple.400" borderRadius="full" h={2} w={2} mr={2}></Box>
            <Text fontSize="xs" color="gray.300">
              Completed
            </Text>
          </Flex>
        </Flex>
      </VStack>
    </Box>
  );
}
