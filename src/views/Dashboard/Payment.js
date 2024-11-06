import { Box, Button, FormLabel, HStack, Stack } from '@chakra-ui/react';
import React from 'react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import CustInput from '../../components/Dashboard/CustHeading/CustInput';

function Payment() {
  return (
    <Stack px={4} pb={4} overflowY={'auto'}>
      <CustHeading name={'Payment'} />
      <Stack direction={'column'} gap={4}>
        <HStack
          w={'70%'}
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          gap={4}
          flexWrap={'wrap'}
          pr={4}
        >
          <Box w={'48%'}>
            <FormLabel
              color={'#7E798B'}
              fontSize={'16px'}
              fontFamily={'Rubik'}
              fontWeight={400}
              px={2}
              py={1}
              margin={'0 !important'}
            >
              Card Title
            </FormLabel>
            <CustInput name={'Type here'} />
          </Box>
          <Box w={'48%'}>
            <FormLabel
              color={'#7E798B'}
              fontSize={'16px'}
              fontFamily={'Rubik'}
              fontWeight={400}
              px={2}
              py={1}
              margin={'0 !important'}
            >
              Card number
            </FormLabel>
            <CustInput name={'1234-4567-8910-1112'} />
          </Box>
        </HStack>
        <HStack
          w={'70%'}
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          gap={4}
          flexWrap={'wrap'}
          pr={4}
        >
          <Box w={'48%'}>
            <FormLabel
              color={'#7E798B'}
              fontSize={'16px'}
              fontFamily={'Rubik'}
              fontWeight={400}
              px={2}
              py={1}
              margin={'0 !important'}
            >
              CVV
            </FormLabel>
            <CustInput name={'123'} />
          </Box>
          <Box w={'48%'}>
            <FormLabel
              color={'#7E798B'}
              fontSize={'16px'}
              fontFamily={'Rubik'}
              fontWeight={400}
              px={2}
              py={1}
              margin={'0 !important'}
            >
              Expiry
            </FormLabel>
            <Stack
              w="100%"
              direction={'row'}
              justifyContent={'space-between'}
              gap={6}
            >
              <CustInput name={'24'} />
              <CustInput name={'12'} />
            </Stack>
          </Box>
        </HStack>
      </Stack>
      <Stack w="70%" direction={'row'} justifyContent={'center'} py={4}>
        <Button
          w={'170px !important'}
          h="48px"
          bg="linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)"
          color="#fff"
          border={'2px solid #FFFFFF59 '}
          fontWeight={400}
          borderRadius={'7px'}
          _hover={{ bg: 'linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)' }}
        >
          Pay Now
        </Button>
      </Stack>
    </Stack>
  );
}

export default Payment;
