import {
  Button,
  Container,
  Heading,
  Stack,
  Text,
  Box,
  HStack,
  FormLabel,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import React from 'react';
import CustInput from '../../components/Dashboard/CustHeading/CustInput';

function Signup() {
  return (
    <Stack
      w={'100%'}
      overflow={'hidden'}
      alignItems={'center'}
      justifyContent={'center'}
      position={'relative'}
    >
      <Container
        maxW={{ base: '100%', md: '1200px', xl: '1200px', '2xl': '1600px' }}
      >
        <Stack mt={{base : 18, md :20}} py={{base : 16 ,md: 28}}>
          <Tabs variant="unstyled">
            <TabList pb={{base : 6,md: 14}} justifyContent={'center'}>
              <Tab
               w="151px"
               h="37px"
               bg={'#C086EC47'}
               border={'1px solid #FFFFFF59'}
               borderRadius={'10px 0px 0px 11px'}
               opacity={1}
               color={'#fff'}
               fontSize={'18px'}
               fontWeight={'normal'}
               _selected={{ color: 'white', bgGradient:"linear(to-b, #C086EC 0%, #7F48D6 100%)" }}
              >Advertiser</Tab>
              <Tab
               w="151px"
               h="37px"
               bg={'#C086EC47'}
               border={'1px solid #FFFFFF59'}
               borderRadius={'0px 10px 10px 0px'}
               opacity={1}
               color={'#fff'}
               fontSize={'18px'}
               fontWeight={'normal'}
               _selected={{ color: 'white', bgGradient:"linear(to-b, #C086EC 0%, #7F48D6 100%)" }}
              >Trucker</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Stack>
                  <Text fontSize={'18px'} color={'#7E798B'}>
                    Let’s explore with zikuya for discover all it’s,
                  </Text>
                  <Stack margin={0} spacing={0} mb={4}>
                    <Heading
                      fontFamily={'Railway'}
                      as={'h1'}
                      color={'#fff'}
                      fontSize={{base: '35px' , md:'64px'}}
                      m={0}
                    >
                      Advertiser
                    </Heading>
                    <Heading
                      fontFamily={'Railway'}
                      as={'h1'}
                      color={'#fff'}
                      fontSize={{base: '35px' , md:'64px'}}
                      m={0}
                    >
                      Sign-Up
                    </Heading>
                  </Stack>
                  <Stack direction={'column'} gap={4} pt={2}>
                    <HStack
                      w={{
                        base: '100%',
                        sm: '100%',
                        md: '100%',
                        xl: '70%',
                        '2xl': '70%',
                      }}
                      direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      gap={4}
                      flexWrap={'wrap'}
                      pr={{base : 0 ,md :4}}
                    >
                      <Box w={{ base: '100%', md: '48%' }}>
                        <FormLabel
                          color={'#7E798B'}
                          fontSize={'16px'}
                          fontFamily={'Rubik'}
                          fontWeight={400}
                          px={2}
                          py={1}
                          margin={'0 !important'}
                        >
                          Company Name
                        </FormLabel>
                        <CustInput name={'Type here'} />
                      </Box>
                      <Box w={{ base: '100%', md: '48%' }} ml={'0 !important'}>
                        <FormLabel
                        
                          color={'#7E798B'}
                          fontSize={'16px'}
                          fontFamily={'Rubik'}
                          fontWeight={400}
                          px={2}
                          py={1}
                          margin={'0 !important'}
                        >
                          Full Name
                        </FormLabel>
                        <CustInput name={'1234-4567-8910-1112'} />
                      </Box>
                    </HStack>
                    <HStack
                      w={{
                        base: '100%',
                        sm: '100%',
                        md: '100%',
                        xl: '70%',
                        '2xl': '70%',
                      }}
                      direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      gap={4}
                      flexWrap={'wrap'}
                      pr={{base : 0 ,md :4}}
                    >
                      <Box w={{ base: '100%', md: '48%' }}>
                        <FormLabel
                          color={'#7E798B'}
                          fontSize={'16px'}
                          fontFamily={'Rubik'}
                          fontWeight={400}
                          px={2}
                          py={1}
                          margin={'0 !important'}
                        >
                          Email Address
                        </FormLabel>
                        <CustInput name={'Enter your mail'} />
                      </Box>
                      <Box w={{ base: '100%', md: '48%' }} ml={'0 !important'}>
                        <FormLabel
                          color={'#7E798B'}
                          fontSize={'16px'}
                          fontFamily={'Rubik'}
                          fontWeight={400}
                          px={2}
                          py={1}
                          margin={'0 !important'}
                        >
                          Phone Number
                        </FormLabel>
                        <CustInput name={'Type here'} />
                      </Box>
                    </HStack>
                    <HStack
                      w={{
                        base: '100%',
                        sm: '100%',
                        md: '100%',
                        xl: '70%',
                        '2xl': '70%',
                      }}
                      direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      gap={4}
                      flexWrap={'wrap'}
                      pr={{base : 0 ,md :4}}
                    >
                      <Box w={{ base: '100%', md: '48%' }}>
                        <FormLabel
                          color={'#7E798B'}
                          fontSize={'16px'}
                          fontFamily={'Rubik'}
                          fontWeight={400}
                          px={2}
                          py={1}
                          margin={'0 !important'}
                        >
                          Password
                        </FormLabel>
                        <CustInput name={'Enter your Password'} />
                      </Box>
                      <Box w={{ base: '100%', md: '48%' }} ml={'0 !important'}>
                        <FormLabel
                          color={'#7E798B'}
                          fontSize={'16px'}
                          fontFamily={'Rubik'}
                          fontWeight={400}
                          px={2}
                          py={1}
                          margin={'0 !important'}
                        >
                          Confirm Password
                        </FormLabel>
                        <CustInput name={'Enter your Password'} />
                      </Box>
                    </HStack>
                    <HStack
                      w={{
                        base: '100%',
                        sm: '100%',
                        md: '100%',
                        xl: '70%',
                        '2xl': '70%',
                      }}
                      direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      gap={4}
                      flexWrap={'wrap'}
                      pr={4}
                    >
                      <Box w={{ base: '100%', md: '48%' }}>
                        <Button
                            w="100%"
                            bgGradient="linear(180deg, #C086EC 0%, #7F48D6 100%)"
                            
                            borderRadius="6px"
                            py={7}
                            opacity="1"
                            color={'#fff'}
                            fontSize={'18px'}
                            fontWeight={400}
                            _hover={{
                              bg: 'linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)',
                            }}
                        >
                          Sign-up
                        </Button>
                      </Box>
                    </HStack>
                  </Stack>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack>
                  <Text fontSize={'18px'} color={'#7E798B'}>
                    Let’s explore with zikuya for discover all it’s,
                  </Text>
                  <Stack margin={0} spacing={0} mb={4}>
                    <Heading
                      fontFamily={'Railway'}
                      as={'h1'}
                      color={'#fff'}
                      fontSize={{base: '35px' , md:'64px'}}
                      m={0}
                    >
                      Trucker
                    </Heading>
                    <Heading
                      fontFamily={'Railway'}
                      as={'h1'}
                      color={'#fff'}
                      fontSize={{base: '35px' , md:'64px'}}
                      m={0}
                    >
                      Sign-Up
                    </Heading>
                  </Stack>
                  <Stack direction={'column'} gap={4} pt={2}>
                    <HStack
                      w={{
                        base: '100%',
                        sm: '100%',
                        md: '100%',
                        xl: '70%',
                        '2xl': '70%',
                      }}
                      direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      gap={4}
                      flexWrap={'wrap'}
                      pr={4}
                    >
                      <Box w={{ base: '100%', md: '48%' }}>
                        <FormLabel
                          color={'#7E798B'}
                          fontSize={'16px'}
                          fontFamily={'Rubik'}
                          fontWeight={400}
                          px={2}
                          py={1}
                          margin={'0 !important'}
                        >
                          Company Name
                        </FormLabel>
                        <CustInput name={'Type here'} />
                      </Box>
                      <Box w={{ base: '100%', md: '48%' }}>
                        <FormLabel
                          color={'#7E798B'}
                          fontSize={'16px'}
                          fontFamily={'Rubik'}
                          fontWeight={400}
                          px={2}
                          py={1}
                          margin={'0 !important'}
                        >
                          Full Name
                        </FormLabel>
                        <CustInput name={'1234-4567-8910-1112'} />
                      </Box>
                    </HStack>
                    <HStack
                      w={{
                        base: '100%',
                        sm: '100%',
                        md: '100%',
                        xl: '70%',
                        '2xl': '70%',
                      }}
                      direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      gap={4}
                      flexWrap={'wrap'}
                      pr={4}
                    >
                      <Box w={{ base: '100%', md: '48%' }}>
                        <FormLabel
                          color={'#7E798B'}
                          fontSize={'16px'}
                          fontFamily={'Rubik'}
                          fontWeight={400}
                          px={2}
                          py={1}
                          margin={'0 !important'}
                        >
                          Email Address
                        </FormLabel>
                        <CustInput name={'Enter your mail'} />
                      </Box>
                      <Box w={{ base: '100%', md: '48%' }}>
                        <FormLabel
                          color={'#7E798B'}
                          fontSize={'16px'}
                          fontFamily={'Rubik'}
                          fontWeight={400}
                          px={2}
                          py={1}
                          margin={'0 !important'}
                        >
                          Phone Number
                        </FormLabel>
                        <CustInput name={'Type here'} />
                      </Box>
                    </HStack>
                    <HStack
                      w={{
                        base: '100%',
                        sm: '100%',
                        md: '100%',
                        xl: '70%',
                        '2xl': '70%',
                      }}
                      direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      gap={4}
                      flexWrap={'wrap'}
                      pr={4}
                    >
                      <Box w={{ base: '100%', md: '48%' }}>
                        <FormLabel
                          color={'#7E798B'}
                          fontSize={'16px'}
                          fontFamily={'Rubik'}
                          fontWeight={400}
                          px={2}
                          py={1}
                          margin={'0 !important'}
                        >
                          Password
                        </FormLabel>
                        <CustInput name={'Enter your Password'} />
                      </Box>
                      <Box w={{ base: '100%', md: '48%' }}>
                        <FormLabel
                          color={'#7E798B'}
                          fontSize={'16px'}
                          fontFamily={'Rubik'}
                          fontWeight={400}
                          px={2}
                          py={1}
                          margin={'0 !important'}
                        >
                          Confirm Password
                        </FormLabel>
                        <CustInput name={'Enter your Password'} />
                      </Box>
                    </HStack>
                    <HStack
                      w={{
                        base: '100%',
                        sm: '100%',
                        md: '100%',
                        xl: '70%',
                        '2xl': '70%',
                      }}
                      direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      gap={4}
                      flexWrap={'wrap'}
                      pr={4}
                    >
                      <Box w={{ base: '100%', md: '48%' }}>
                        <Button
                             w="100%"
                             bgGradient="linear(180deg, #C086EC 0%, #7F48D6 100%)"
                             
                             borderRadius="6px"
                             py={7}
                             opacity="1"
                             color={'#fff'}
                             fontSize={'18px'}
                             fontWeight={400}
                             _hover={{
                               bg: 'linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)',
                             }}
                        >
                          Sign-up
                        </Button>
                      </Box>
                    </HStack>
                  </Stack>
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        
        </Stack>
      </Container>
    </Stack>
  );
}

export default Signup;
