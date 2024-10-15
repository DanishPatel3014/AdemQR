import React from 'react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import {
  Box,
  VStack,
  Text,
  Badge,
  Stack,
  Button,
  List,
  ListItem,
  ListIcon,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import Packages from '../../components/Dashboard/Package/Packages';

function Package() {
  return (
    <Stack pb={4} overflowY={'auto'} fontFamily={'Rubik'}>
      <Stack px={4}>
        <CustHeading name={'Select Package'} />
      </Stack>
      <SimpleGrid columns={{ base: 1, xl: 2, '2xl': 3 }} spacing={4}>
        <Packages />
        <Packages />
        <Packages />
      </SimpleGrid>
    </Stack>
  );
}

export default Package;
