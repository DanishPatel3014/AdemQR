import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Dummy from '../../../assets/images/truck.png';

function FreightlinerCard() {
  return (
    <Box p={'15px'} bg={'#00092D'} borderRadius="15px" h="207px">
      <Stack direction={'row'}>
        <Stack borderRadius={'15px'} w="283px" h="165px">
          <Image w={'100%'} h={'100%'} borderRadius={'10px'} src={Dummy} />
        </Stack>
        <Stack w="100%">
          <HStack spacing={4} h={'30px'} w={'100%'}>
            <Stack
              direction={'row'}
              alignItems={'center'}
              h={'30px'}
              w={{ xl: '65%', '2xl': '56%' }}
              px={4}
              gap={6}
              justifyContent={'space-between'}
            >
              <Text fontSize={'18px'} fontWeight={'500'} color={'#fff'}>
                Freightliner
              </Text>
              <Text fontSize={'14px'} color={'#F3EEFE'}>
                Driver/Trucking Co
              </Text>
              <Text fontSize={'14px'} color={'#C086EC'}>
                Premium Package
              </Text>
            </Stack>
            <Stack
              w={{ lg: '35%', '2xl': '41%' }}
              direction={'row'}
              justifyContent={'flex-end'}
            >
              <HStack>
                <Box bg="purple.300" borderRadius="full" h={2} w={2}></Box>
                <Text color="white" fontSize="sm">
                  20 Qr Scans
                </Text>
              </HStack>
              <HStack>
                <Box bg="purple.300" borderRadius="full" h={2} w={2}></Box>
                <Text color="white" fontSize="sm">
                  150 Impressions
                </Text>
              </HStack>
            </Stack>
          </HStack>
          <Stack
            w="100%"
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'center'}
            mt={2}
          >
            <Box borderBottom={'1px solid #969DA6'} h={'1px'} w={'97%'}></Box>
          </Stack>
          <Stack
            flexDirection={'row'}
            w="100%"
            alignItems={'center'}
            gap={8}
            py={6}
            px={3}
            // px={2}
            // justifyContent={'space-between'}
          >
            <Stack
              w="70%"
              p={'15px'}
              bg={'#000D41'}
              h="77px"
              borderRadius={'11px'}
            >
              <HStack>
                <Text flex={2} color={'#834CD7'}>
                  Route
                </Text>
                <Text flex={1} color={'#834CD7'}>
                  Driver:
                </Text>
                <Text flex={1} color={'#834CD7'}>
                  Driver:
                </Text>
              </HStack>
              <HStack alignItems={'center'}>
                <Text
                  fontSize={{ xl: '14px', '2xl': '16px' }}
                  flex={2}
                  color={'#fff'}
                >
                  New York, NY → Los Angeles, CA
                </Text>
                <Text
                  fontSize={{ xl: '14px', '2xl': '16px' }}
                  flex={1}
                  color={'#fff'}
                >
                  John Doe
                </Text>
                <Text
                  fontSize={{ xl: '14px', '2xl': '16px' }}
                  flex={1}
                  color={'#fff'}
                >
                  John Doe
                </Text>
              </HStack>
            </Stack>
            <Stack w="30%" direction={'row'} m={'0 !important'}>
              <Stack
                w={{ base: '70%', lg: '70%', xl: '70%', '2xl': '43%' }}
                p={'15px'}
                bg={'#000D41'}
                h="77px"
                m={'0 !important'}
                borderRadius={'11px'}
              >
                <HStack>
                  <Text fontSize={`16px`} flex={1} color={'#834CD7'}>
                    Ad Dimensions
                  </Text>
                </HStack>
                <HStack>
                  <Text flex={1} color={'#fff'}>
                    10ft x 4ft
                  </Text>
                </HStack>
              </Stack>
            </Stack>
          </Stack>
          <Stack marginTop={'-16px !important'}>
            <Text textAlign={'right'} fontSize={'14px'} color={'#fff'}>
              <span style={{ color: '#7E798B' }}>Date:</span> 01-30 Aug
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default FreightlinerCard;
