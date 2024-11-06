import { Button, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import TruckCard from '../../components/Dashboard/Card/TruckCard';
import { useLocation, useNavigate } from 'react-router-dom';

function BrowseTruck() {
  const location = useLocation();
  const checkPath = location.pathname.split('/')[1];
  const navigate = useNavigate();
  return (
    <Stack px={4} pb={4} overflowY={'auto'}>
      {checkPath === 'trucker' ? (
        <Stack
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          mb={4}
        >
          <CustHeading name={'My Trucks'} />
          <Button
            onClick={() => navigate('/trucker/add-truck')}
            borderRadius="10px"
            // m="10px 20px"
            bgGradient="linear(180deg, #C086EC 0%, #7F48D6 100%)"
            color={'#fff'}
            fontWeight={'400'}
            _hover={{ bgGradient: 'linear(180deg, #7F48D6 0%, #C086EC 100%)' }}
            _active={{ bgGradient: 'linear(180deg, #7F48D6 0%, #C086EC 100%)' }}
          >
            <Text color="#fff" fontSize="18px" as={'span'}>
              Add Truck
            </Text>
          </Button>
        </Stack>
      ) : (
        <CustHeading name={'Browse Trucks'} />
      )}

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2, xl: 3, '2xl': 4 }}
        spacing="6"
      >
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
