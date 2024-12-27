import {
    Button,
    Container,
    Heading,
    Stack,
    Text,
    Box,
    HStack,
    FormLabel,
 
  } from '@chakra-ui/react';
  import React from 'react';
  import CustInput from '../../components/Dashboard/CustHeading/CustInput';

export default function Withdrawal() {
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
      <Stack mt={{base : 24, md :36}} py={{base : 16 ,md: 28}}>
      <Stack>
                
                <Stack  direction={{base: 'column',md : 'row'}}  alignItems={'start'} gap={{base:4, md:32}}>
                  <Heading
                    fontFamily={'Railway'}
                    as={'h1'}
                    color={'#fff'}
                    fontSize={{base: '35px' , md:'64px'}}
                    m={0}
                  >
                    Withdrawal <br/>Request
                  </Heading>
                 <Stack bg={'#00092D'} px={12} py={8} borderRadius={14}>
                 <Box borderLeft={'2px solid #B57BE8'} pl={4}>
                    <Heading   color={'#fff'}
                    fontSize={'30px'} >$2,500</Heading>
                    <Text fontSize={'18px'} color={'#7E798B'}>Total Earning</Text>
                 </Box>
                 </Stack>
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
                    <Box w={{ base: '100%', md: '100%' }}>
                      <FormLabel
                        color={'#7E798B'}
                        fontSize={'16px'}
                        fontFamily={'Rubik'}
                        fontWeight={400}
                        px={2}
                        py={1}
                        margin={'0 !important'}
                      >
                        Withdrawal Amount
                      </FormLabel>
                      <CustInput name={'Type here Amount'} />
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
                        Bank Name
                      </FormLabel>
                      <CustInput name={'Bank Name'} />
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
                      Account Number
                      </FormLabel>
                      <CustInput name={'Account Number'} />
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
                       Routing Number
                      </FormLabel>
                      <CustInput name={'Enter Here'} />
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
                        Account Holder's Name
                      </FormLabel>
                      <CustInput name={'Enter Here'} />
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
                        Withdraw
                      </Button>
                    </Box>
                  </HStack>
                </Stack>
              </Stack>
      
      </Stack>
    </Container>
  </Stack>
  )
}
