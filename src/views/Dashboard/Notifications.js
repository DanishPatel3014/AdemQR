import React from 'react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import { Stack, Text } from '@chakra-ui/react';

function Notifications() {
  return (
    <Stack px={4} pb={4} overflowY={'auto'}>
      <CustHeading name={'Notifications'} />
      <Stack direction={'column'} gap={2}>
        <Stack
          w="80%"
        
          bg="#00092D"
          borderRadius="14px"
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          px={4}
          py={3}
        >
          <Text fontSize="16px" fontFamily="Rubik" color={'#fff'}>
            Your ad on Truck #452 is now live!
          </Text>
          <Text color={'#7E798B'} fontSize={'14px'} fontWeight={500}>
            03:15 AM
          </Text>
        </Stack>
        <Stack
          w="80%"
        
          bg="#00092D"
          borderRadius="14px"
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          px={4}
          py={3}
        >
          <Text fontSize="16px" fontFamily="Rubik" color={'#fff'}>
            Your ad on Truck #452 is now live!
          </Text>
          <Text color={'#7E798B'} fontSize={'14px'} fontWeight={500}>
            03:15 AM
          </Text>
        </Stack>
        <Stack
          w="80%"
       
          bg="#00092D"
          borderRadius="14px"
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          px={4}
          py={3}
        >
          <Text fontSize="16px" fontFamily="Rubik" color={'#fff'}>
            Your ad on Truck #452 is now live!
          </Text>
          <Text color={'#7E798B'} fontSize={'14px'} fontWeight={500}>
            03:15 AM
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Notifications;
