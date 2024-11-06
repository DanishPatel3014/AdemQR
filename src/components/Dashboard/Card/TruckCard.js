import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Truck from '../../../assets/images/truck.png';
import { useLocation, useNavigate } from 'react-router-dom';

function TruckCard() {
  const location = useLocation();
  const checkPath = location.pathname.split('/')[1];
  const navigate = useNavigate();
  return (
    <Stack
      h="425px"
      w="100%"
      bg="#00092D"
      borderRadius="20px"
      direction={'column'}
      justifyContent={'space-between'}
      pb={3}
      cursor={'pointer'}
      onClick={() => {
        checkPath === 'trucker'
          ? navigate('/trucker/truck-details')
          : navigate('/dashboard/manage-ads');
      }}
    >
      <Stack h={'207px'}>
        <Image w={'100%'} h={'100%'} src={Truck} />
      </Stack>
      <Stack
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        px={3}
      >
        <Text fontSize={'22px'} fontWeight={'500'} color={'#fff'}>
          Freightliner
        </Text>
        <Stack m={'0 !important'} lineHeight={'0.8'}>
          <Text fontSize={'12px'} color={'#7E798B'}>
            Ad Space
          </Text>
          <Text fontSize={'12px'} fontWeight={'normal'} color={'#fff'}>
            10ft x 4ft
          </Text>
        </Stack>
      </Stack>
      <Stack px={3}>
        <Stack
          h={'65px'}
          bg={'#000D41'}
          borderRadius={'10px'}
          lineHeight={'1'}
          px={4}
          py={4}
        >
          <Text fontSize={'14px'} fontWeight={'500'} color={'#7E798B'}>
            Route
          </Text>

          <Text fontSize={'14px'} fontWeight={'500'} color={'#fff'}>
            New York, NY → Los Angeles, CA
          </Text>
        </Stack>
      </Stack>
      <Stack px={3}>
        <Text textAlign={'left'} fontSize={'14px'} color={'#fff'}>
          <span style={{ color: '#7E798B' }}>Date:</span> 01-30 Aug
        </Text>
      </Stack>
      <Stack px={3}>
        <Box bg="#7E798B" borderRadius="10px" h="1px" w="100%" />
      </Stack>
      <Stack px={3} direction={'row'} justifyContent={'space-between'}>
        <Text fontSize={'14px'} color={'#F3EEFE'}>
          Driver/Trucking Co
        </Text>
        <Text fontSize={'14px'} fontWeight={600} color={'#834CD7'}>
          Sarah Lee
        </Text>
      </Stack>
    </Stack>
  );
}

export default TruckCard;
