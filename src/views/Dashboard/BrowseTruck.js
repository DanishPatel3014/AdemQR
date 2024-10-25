import { SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import TruckCard from '../../components/Dashboard/Card/TruckCard';

function BrowseTruck() {
  return (
    <Stack px={4} pb={4} overflowY={'auto'}>
      <CustHeading name={'Browse Trucks'} />
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="6">
        <TruckCard />
        <TruckCard />
        <TruckCard />
        <TruckCard />
        <TruckCard />
      </SimpleGrid>
    </Stack>
  );
}

export default BrowseTruck;
