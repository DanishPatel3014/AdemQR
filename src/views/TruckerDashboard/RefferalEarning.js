import { Button, Stack } from '@chakra-ui/react';
import React from 'react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import CustTable from '../../components/Dashboard/Table/CustTable';
import Chart from './Chart';

function RefferalEarning() {
  const dataHeaders = [
    'Truck Model',
    'Ad Company',
    'Route',
    'Date',
    'Amount Earned',
  ];
  const dataColumns = [
    {
      name: 'Freightliner Cascadia',
      company: 'ABC Electronics',
      route: 'New York, NY → Los Angeles, CA',
      date: '08/15/2024',
      amountEarned: '$100',
    },
    {
      name: 'Freightliner Cascadia',
      company: 'ABC Electronics',
      route: 'New York, NY → Los Angeles, CA',
      date: '08/15/2024',
      amountEarned: '$100',
    },
    {
      name: 'Freightliner Cascadia',
      company: 'ABC Electronics',
      route: 'New York, NY → Los Angeles, CA',
      date: '08/15/2024',
      amountEarned: '$100',
    },
    {
      name: 'Freightliner Cascadia',
      company: 'ABC Electronics',
      route: 'New York, NY → Los Angeles, CA',
      date: '08/15/2024',
      amountEarned: '$100',
    },
    {
      name: 'Freightliner Cascadia',
      company: 'ABC Electronics',
      route: 'New York, NY → Los Angeles, CA',
      date: '08/15/2024',
      amountEarned: '$100',
    },
    {
      name: 'Freightliner Cascadia',
      company: 'ABC Electronics',
      route: 'New York, NY → Los Angeles, CA',
      date: '08/15/2024',
      amountEarned: '$100',
    },
    {
      name: 'Freightliner Cascadia',
      company: 'ABC Electronics',
      route: 'New York, NY → Los Angeles, CA',
      date: '08/15/2024',
      amountEarned: '$100',
    },
    {
      name: 'Freightliner Cascadia',
      company: 'ABC Electronics',
      route: 'New York, NY → Los Angeles, CA',
      date: '08/15/2024',
      amountEarned: '$100',
    },
    {
      name: 'Freightliner Cascadia',
      company: 'ABC Electronics',
      route: 'New York, NY → Los Angeles, CA',
      date: '08/15/2024',
      amountEarned: '$100',
    },
    {
      name: 'Freightliner Cascadia',
      company: 'ABC Electronics',
      route: 'New York, NY → Los Angeles, CA',
      date: '08/15/2024',
      amountEarned: '$100',
    },
    {
      name: 'Freightliner Cascadia',
      company: 'ABC Electronics',
      route: 'New York, NY → Los Angeles, CA',
      date: '08/15/2024',
      amountEarned: '$100',
    },
  ];

  return (
    <Stack px={4} pb={4} overflowY={'auto'} overflowX={'hidden'}>
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        pb={4}
        pr={2}
      >
        <CustHeading name={'Referral Earning'} />
        <Button
          mr={2}
          border={'1px solid #fff'}
          background="linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)"
          w="170px"
          h="48px"
          borderRadius={'16px'}
          color={'#fff'}
          fontSize={'16px'}
          fontWeight={400}
          _hover={{ bg: 'transparent' }}
        >
          Add Truck
        </Button>
      </Stack>
      <Stack w="100%" flexDirection={'row'} gap={4}>
        <Stack w="80%">
          <CustTable header={dataHeaders} data={dataColumns} />
        </Stack>
        <Stack w="20%">
          <Chart />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default RefferalEarning;
