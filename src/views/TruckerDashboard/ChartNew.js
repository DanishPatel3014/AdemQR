import React from 'react';
import { Box, Text, Flex, Stack, Heading } from '@chakra-ui/react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Sample data for the chart
const data = [
  { name: 'Tier 1', value: 67 }, // Tier 1 is 67%
  { name: 'Tier 2', value: 33 }, // Tier 2 is 33%
];

// Colors for the chart slices
const COLORS = ['#A17DFF', '#5636CB']; // Adjust colors to match your design

const ReferralEarnings = () => {
  return (
    <Box
      bg="#00092D"
      color="white"
      pos={'relative'}
      p={6}
      borderRadius={'20px'}
      w="100%"
      h={'100%'}
      // pt={4}
    >
      <Stack w="100%" h={'100%'} direction={{base : 'column', md: 'row'}} py={3}>
        {/* Semi-Doughnut Chart */}
        <Stack
          direction={'column'}
          gap={6}
          w="100%"
          //   border={'1px solid #fff'}
        >
          <Text fontSize={'22px'} fontWeight={500} fontFamily={'Montserrat'}>
            Referral Earnings
          </Text>
          <Stack direction={'column'}>
            <Heading
              fontSize={'47px'}
              fontWeight={600}
              color={'#fff'}
              fontFamily={'Montserrat'}
            >
              $1342
            </Heading>
            <Text
              pb={4}
              fontSize={'20px'}
              color={'#fff'}
              fontFamily={'Montserrat'}
            >
              Total Earnings
            </Text>
            <Stack direction={'row'} alignItems={'center'}>
              <Box w="8px" h="8px" bg={'#C086EC'} borderRadius={'50%'}></Box>
              <Text fontSize={'14px'} color={'#fff'} fontFamily={'Rubik'}>
                Tier 1
              </Text>
            </Stack>
            <Stack direction={'row'} alignItems={'center'}>
              <Box w="8px" h="8px" bg={'#834CD7 '} borderRadius={'50%'}></Box>
              <Text fontSize={'14px'} color={'#fff'} fontFamily={'Rubik'}>
                Tier 2
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack w="60%">
        <Stack w={'400px'} h={'200px'}>
        <ResponsiveContainer width="100%" height="100%">
            <PieChart >
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                startAngle={180}
                borderWidth={0}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Stack>
        </Stack>
        {/* Semi-Doughnut Chart */}
      </Stack>
    </Box>
  );
};

export default ReferralEarnings;
