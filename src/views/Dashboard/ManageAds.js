import React from 'react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import {
  Box,
  Flex,
  Text,
  Image,
  VStack,
  Spacer,
  HStack,
  Badge,
  Stack,
} from '@chakra-ui/react';
import FreightlinerCard from '../../components/Dashboard/Card/FreightlinerCard';

function ManageAds() {
  return (
    <Stack px={4} pb={4} overflowY={'auto'}>
      <CustHeading name={'Manage Ads'} />
      <Stack direction={'column'} gap={2}>
        <FreightlinerCard />
        <FreightlinerCard />
        <FreightlinerCard />
        <FreightlinerCard />
        <FreightlinerCard />
      </Stack>
    </Stack>
  );
}

export default ManageAds;
