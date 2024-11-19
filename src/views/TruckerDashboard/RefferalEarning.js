import { Button, Stack, Grid, GridItem } from '@chakra-ui/react';
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
    <Stack px={4} pb={4}>
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
          _hover={{
            background: 'linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)',
          }}
        >
          Add Truck
        </Button>
      </Stack>
      <Grid
        h="200px"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(12, 1fr)"
        gap={4}
      >
        <GridItem colSpan={{base :12, md : 10}}  >
          {' '}
          <CustTable header={dataHeaders} data={dataColumns} />
        </GridItem>
        <GridItem rowSpan={2} colSpan={{base : 12 , md : 1}}  >
          <Chart />
        </GridItem>
      </Grid>
  
    </Stack>
  );
}

export default RefferalEarning;
