import React from 'react';
import { Box, Text, Flex, Stack } from '@chakra-ui/react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function TruckAdsRevenue() {
  // Chart.js data
  const data = {
    labels: ['Truck 1', 'Truck 2', 'Truck 3'],
    datasets: [
      {
        label: 'Revenue',
        data: [55, 45, 55], // values corresponding to Truck 1, 2, and 3
        // backgroundColor: ['#FFA500', '#5A67D8', '#805AD5'], // matching colors for each section
        backgroundColor: ['#5A67D8', '#805AD5', '#FFA500'], // matching colors for each section
        hoverBackgroundColor: ['#FFA500', '#5A67D8', '#805AD5'],
        borderWidth: 0,
        spacing: 8,
        // Add space between the segments by using a larger border width
        // borderColor: '#30243C', // Match the border color with the background to simulate gaps
        cutout: '70%', // Creates the inner space
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false }, // Disable default legend
      tooltip: { enabled: true }, // Disable tooltips for exact replica
    },
  };

  return (
    <Box
      bg="#00092D"
      borderRadius="lg"
      p={5}
      boxShadow="lg"
      color="white"
      textAlign="center"
      width="100%"
      // h="97%"
    >
      <Text
        fontWeight="500"
        color={'#F3EEFE'}
        fontFamily={'Montserrat'}
        fontSize="22px"
        mb={4}
      >
        Truck Ads Revenue
      </Text>
      <Box position="relative">
        {/* Doughnut Chart */}
        <Doughnut data={data} options={options} />
        {/* Center Text */}
        <Box
          width={'88px'}
          h={'88px'}
          border={'2px solid #fff'}
          borderRadius={'50%'}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          bg="#30243C"
          color="white"
          display={'flex'}
          alignItems="center"
          justifyContent="center"
        >
          <Text fontWeight="400" fontSize="22px">
            $124
          </Text>
        </Box>
      </Box>

      {/* Revenue Details */}
      <Flex justifyContent="space-around" mt={6}>
        <Box textAlign="center">
          <Text
            fontWeight="500"
            color={'#F3EEFE'}
            fontFamily={'Montserrat'}
            fontSize="22px"
          >
            $55
          </Text>
          <Stack direction={'row'} alignItems={'center'}>
            <Box w={'8px'} h="8px" bg={'#FAAB3C'} borderRadius={'50%'}></Box>
            <Text fontSize="14px" color="#fff">
              Truck 1
            </Text>
          </Stack>
        </Box>
        <Box textAlign="center">
          <Text
            fontWeight="500"
            color={'#F3EEFE'}
            fontFamily={'Montserrat'}
            fontSize="22px"
          >
            $45
          </Text>
          <Stack direction={'row'} alignItems={'center'}>
            <Box w={'8px'} h="8px" bg={'##9566F2'} borderRadius={'50%'}></Box>
            <Text fontSize="14px" color="#fff">
              Truck 2
            </Text>
          </Stack>
        </Box>
        <Box textAlign="center">
          <Text
            fontWeight="500"
            color={'#F3EEFE'}
            fontFamily={'Montserrat'}
            fontSize="22px"
          >
            $55
          </Text>
          <Stack direction={'row'} alignItems={'center'}>
            <Box w={'8px'} h="8px" bg={'#1F74EC'} borderRadius={'50%'}></Box>
            <Text fontSize="14px" color="#fff">
              Truck 3
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default TruckAdsRevenue;
