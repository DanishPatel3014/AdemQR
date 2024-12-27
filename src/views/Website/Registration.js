import {
  Button,
  Container,
  Heading,
  Stack,
  Text,
  Box,
  HStack,
  FormLabel,
  SimpleGrid,
  Tag,
} from '@chakra-ui/react';
import React from 'react';
import CustInput from '../../components/Dashboard/CustHeading/CustInput';

export default function Registration() {
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
          <SimpleGrid columns={{base : 1,md :2}} spacing={10}   >
            <Stack>
              <Stack margin={0} spacing={0} mb={4}>
                <Heading
                  fontFamily={'Railway'}
                  as={'h1'}
                  color={'#fff'}
                  fontSize={{base: '35px' , md:'64px'}}
                  m={0}
                >
                  Complete Your <br />
                  Registration
                </Heading>
                <Text fontSize={'18px'} color={'#7E798B'}>
                  Welcome to the platform! To start earning through ads on your
                  truck, complete the payment process below.
                </Text>
              </Stack>
              <Stack direction={'column'} gap={4} pt={2}>
                <HStack
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  gap={4}
                  flexWrap={'wrap'}
                  pr={4}
                >
                  <Box w={{ base: '100%', md: '47%' }}>
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
                  <Box w={{ base: '100%', md: '47%' }}>
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
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  gap={4}
                  flexWrap={'wrap'}
                  pr={4}
                >
                  <Box w={{ base: '100%', md: '47%' }}>
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
                    <CustInput name={'12-12-32'} />
                  </Box>
                  <HStack alignItems={'end'} w={{ base: '100%', md: '47%' }}>
                    <Stack w={'full'}>
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
                      <CustInput name={'Type here'} />
                    </Stack>
                    <Stack w={'full'}>
                      <FormLabel
                        color={'#7E798B'}
                        fontSize={'16px'}
                        fontFamily={'Rubik'}
                        fontWeight={400}
                        px={2}
                        py={1}
                        margin={'0 !important'}
                      ></FormLabel>
                      <CustInput name={'Type here'} />
                    </Stack>
                  </HStack>
                </HStack>

                <HStack
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  gap={4}
                  flexWrap={'wrap'}
                  pr={4}
                >
                  <Box w={{ base: '100%', md: '47%' }}>
                    <Button
                      w="100%"
                      bgGradient="linear(180deg, #C086EC 0%, #7F47D6 100%)"
                      borderRadius="6px"
                      py={7}
                      opacity="1"
                      color={'#fff'}
                      fontSize={'18px'}
                      fontWeight={400}
                      _hover={{
                        bg: 'linear-gradient(180deg, #C086EC 0%, #7F47D6 100%)',
                      }}
                    >
                      Pay Now
                    </Button>
                  </Box>
                </HStack>
              </Stack>
            </Stack>
            <Stack  alignItems={'end'}>
              <Stack
                bg={
                  'transparent linear-gradient(180deg, #2F1862 0%, #171129 100%) 0% 0% no-repeat padding-box;'
                }
                w={{base: '100%',md:'70%'}}
                px={'6'}
                py={8}
                borderRadius={14}
                border={'2px solid #C086EC'}
              >
                <Box pb={4} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                  <Heading color={'#fff'} fontSize={'30px'}>
                    Reistration
                  </Heading>
                  <Tag  bgGradient="linear(180deg, #C086EC 0%, #7F47D6 100%)" color={'#fff'} px={6} py={4} fontSize={'17px'}>$100</Tag>
                </Box>
                <Text fontSize={'18px'} color={'#7E798B'}>
                  To start earning through ads on your truck, complete the
                  payment process below.
                </Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Container>
    </Stack>
  );
}
