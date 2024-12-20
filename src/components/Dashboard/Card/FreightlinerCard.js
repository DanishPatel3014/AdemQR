import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Dummy from '../../../assets/images/truck.png';

function FreightlinerCard() {
  return (
    <Box p={'15px'} bg={'#00092D'} borderRadius="15px">
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Stack
          borderRadius={'15px'}
          w={{ base: '100%', md: '283px' }}
          h={{ base: '100%', md: '165px' }}
        >
          <Image w={'100%'} h={'100%'} borderRadius={'10px'} src={Dummy} />
        </Stack>
        <Stack w="100%">
          <HStack
            flexDirection={{ base: 'column', md: 'row' }}
            spacing={4}
            py={2}
            w={'100%'}
          >
            <Stack
              direction={{ base: 'row', md: 'row' }}
              alignItems={'center'}
              w={{ xl: '65%', '2xl': '56%' }}
              px={4}
              gap={{ base: 6, sm: 6, md: 3, xl: 6, '2xl': 6 }}
              justifyContent={'space-between'}
              my={4}
            >
              <Text
                fontSize={{
                  base: '12px',
                  sm: '14px',
                  md: '14px',
                  xl: '18px',
                  '2xl': '18px',
                }}
                fontWeight={'500'}
                color={'#fff'}
              >
                Freightliner
              </Text>
              <Text
                noOfLines={1}
                fontSize={{
                  base: '12px',
                  sm: '14px',
                  md: '14px',
                  xl: '14px',
                  '2xl': '14px',
                }}
                color={'#F3EEFE'}
              >
                Driver/Trucking Co
              </Text>
              <Text noOfLines={1} fontSize={'14px'} color={'#C086EC'}>
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
                <Text noOfLines={1} color="white" fontSize="sm">
                  20 Qr Scans
                </Text>
              </HStack>
              <HStack>
                <Box bg="purple.300" borderRadius="full" h={2} w={2}></Box>
                <Text noOfLines={1} color="white" fontSize="sm">
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
            flexDirection={{ base: 'column', md: 'row' }}
            w="100%"
            alignItems={'center'}
            gap={8}
            py={6}
            px={3}
          >
            <Stack
              w={{ base: '100%', md: '70%' }}
              p={'15px'}
              bg={'#000D41'}
              borderRadius={'11px'}
            >
              <Stack direction={'row'}>
                <Text
                  flex={2}
                  color={'#834CD7'}
                  fontSize={{
                    base: '12px',
                    sm: '12px',
                    md: '12px',
                    xl: '16px',
                    '2xl': '16px',
                  }}
                >
                  Route
                </Text>
                <Text
                  flex={1}
                  color={'#834CD7'}
                  fontSize={{
                    base: '12px',
                    sm: '12px',
                    md: '12px',
                    xl: '16px',
                    '2xl': '16px',
                  }}
                >
                  Driver:
                </Text>
                <Text
                  flex={1}
                  color={'#834CD7'}
                  fontSize={{
                    base: '12px',
                    sm: '12px',
                    md: '12px',
                    xl: '16px',
                    '2xl': '16px',
                  }}
                >
                  Driver:
                </Text>
              </Stack>
              <Stack direction={'row'} alignItems={'center'}>
                <Text
                  fontSize={{
                    base: '12px',
                    sm: '12px',
                    md: '12px',
                    xl: '16px',
                    '2xl': '16px',
                  }}
                  flex={2}
                  color={'#fff'}
                  noOfLines={1}
                >
                  New York, NY → Los Angeles, CA
                </Text>
                <Text
                  fontSize={{
                    base: '12px',
                    sm: '12px',
                    md: '12px',
                    xl: '16px',
                    '2xl': '16px',
                  }}
                  flex={1}
                  color={'#fff'}
                >
                  John Doe
                </Text>
                <Text
                  fontSize={{
                    base: '12px',
                    sm: '12px',
                    md: '12px',
                    xl: '16px',
                    '2xl': '16px',
                  }}
                  flex={1}
                  color={'#fff'}
                >
                  John Doe
                </Text>
              </Stack>
            </Stack>
            <Stack
              w={{ base: '100%', md: '30%' }}
              direction={'row'}
              m={'0 !important'}
            >
              <Stack
                w={{
                  base: '70%',
                  sm: '70%',
                  md: '80%',
                  xl: '70%',
                  '2xl': '45%',
                }}
                p={'15px'}
                bg={'#000D41'}
                m={'0 !important'}
                borderRadius={'11px'}
              >
                <HStack>
                  <Text
                    noOfLines={1}
                    fontSize={{
                      base: '11px',
                      sm: '11px',
                      md: '11px',
                      xl: '14px',
                      '2xl': '14px',
                    }}
                    flex={1}
                    color={'#834CD7'}
                  >
                    Ad Dimensions
                  </Text>
                </HStack>
                <HStack>
                  <Text
                    flex={1}
                    fontSize={{
                      base: '11px',
                      sm: '11px',
                      md: '11px',
                      xl: '14px',
                      '2xl': '14px',
                    }}
                    color={'#fff'}
                  >
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
