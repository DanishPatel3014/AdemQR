import { Heading, HStack, Image, Stack, Text, Grid, GridItem  } from '@chakra-ui/react';
import React, { useState } from 'react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import ManageAdDetail from '../Dashboard/ManageAdDetail';
import Check1 from '../Dashboard/Check1';
import Truck from '../../assets/images/truck.png';

function AdsPerformance() {
  const [index, setIndex] = useState(0);

  return (
    <Stack px={4} pb={4} overflowY={'auto'} overflowX={'hidden'}>
      <CustHeading name={'Ads Performance'} />
   
      <Stack direction={{base : 'column', md: 'column',xl:'row', "2xl": 'row'}} gap={2}>
        <Stack w={{base:'100%',  sm : '100%', md:'100%', xl:'35%', "2xl": '35%'}} bg={'#00092D'} borderRadius={'20px'}>
          <Stack px={4} py={4}>
            <Heading
              fontSize={'22px'}
              color={'#F3EEFE'}
              py={1}
              fontWeight={500}
              letterSpacing={'0px'}
              fontFamily={'Montserrat'}
              px={3}
            >
              Trucks
            </Heading>
          </Stack>
          <Stack direction={'column'} gap={4} px={4} pb={6}>
            {[1, 2, 3, 4]?.map((item, ind) => (
              <Stack
                cursor={'pointer'}
                onClick={() => setIndex(ind)}
                key={ind}
                w={'100%'}
                minH={'148px'}
                bg={index === ind ? '#071A67' : '#000D41'}
                direction={{ xl: 'row', '2xl': 'row' }}
                gap={1}
                alignItems={'center'}
                borderRadius={'15px'}
                pl={4}
                border={index === ind ? '1px solid #C086EC' : ''}
              >
                <Image
                  src={Truck}
                  w={'104px'}
                  h={'104px'}
                  borderRadius={'10px'}
                />
                <Stack w="100%" px={1}>
                  <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <Text fontSize={'16px'} color="#E0E4EA">
                      Freightliner
                    </Text>
                    <Text   m={'0 !important'} fontSize={'13px'} color="#C086EC">
                      Active
                    </Text>
                  </Stack>
                  <Stack direction={'column'} lineHeight={1}>
                    <HStack flex="1" alignItems={'center'}>
                      <Text fontSize="12px" color="#7E798B" flex="2">
                        Route
                      </Text>
                      <Text fontSize="12px" color="#7E798B" flex="1">
                        Ad Space
                      </Text>
                    </HStack>
                    <HStack flex="1" alignItems={'center'}>
                      <Text fontSize="12px" color="#fff" flex="2">
                        New York, NY Los Angeles, CA
                      </Text>
                      <Text fontSize="12px" color="#fff" flex="1">
                        10ft x 4ft
                      </Text>
                    </HStack>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Stack w={{base:'100%',  sm : '100%', md:'100%', xl:'65%', "2xl": '65%'}}>
          <ManageAdDetail name="trucker" />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default AdsPerformance;
