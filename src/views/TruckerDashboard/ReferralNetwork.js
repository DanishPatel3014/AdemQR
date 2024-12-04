import { SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import Stats from '../../components/Dashboard/Stats/Stats';
import { Trucker_Refferal_NETWORK } from '../../utilities/constant';
import RefferalStats from '../../components/Dashboard/Stats/RefferalStats';

function ReferralNetwork() {
  return (
    <Stack px={4} pb={4} overflowY={'auto'} overflowX={'hidden'}>
      <CustHeading name={'Referral Network'} />
      <Stack pb={4}>
        <SimpleGrid columns={[1, 2, 4]} spacing="6">
          {Trucker_Refferal_NETWORK?.map(item => (
            <Stats data={item} />
          ))}
        </SimpleGrid>
      </Stack>
      <Stack pb={4}>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="6">
          <RefferalStats />
          <RefferalStats />
          <RefferalStats />
          <RefferalStats />
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}

export default ReferralNetwork;
