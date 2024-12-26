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

function Signup() {
  return (
    <Stack
      w={'100%'}
      h={'100vh'}
      overflow={'hidden'}
      alignItems={'center'}
      justifyContent={'center'}
      position={'relative'}
    >
      <Container maxW={'8xl'} border={'1px solid'} mt={'200px'}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text fontSize={'18px'} color={'#7E798B'}>
            Let’s explore with zikuya for discover all it’s,
          </Text>
          <Stack direction={'row'} margin={0} spacing={0}>
            <Button
              w="151px"
              h="37px"
              bg={'#C086EC47'}
              border={'1px solid #FFFFFF59'}
              borderRadius={'10px 0px 0px 11px'}
              opacity={1}
              color={'#fff'}
              fontSize={'18px'}
              fontWeight={'normal'}
            >
              Advertiser
            </Button>
            <Button
              w="151px"
              h="37px"
              ml={'-5px'}
              margin={0}
              bgGradient="linear(to-b, #C086EC 0%, #7F48D6 100%)"
              border={'1px solid #FFFFFF59'}
              borderRadius={'0px 10px 10px 0px'}
              opacity={1}
              color={'#fff'}
              fontSize={'18px'}
              fontWeight={'normal'}
            >
              Trucker
            </Button>
          </Stack>
        </Stack>
        <Stack margin={0} spacing={0} mb={4}>
          <Heading
            fontFamily={'Railway'}
            as={'h1'}
            color={'#fff'}
            fontSize={'64px'}
            m={0}
          >
            Trucker
          </Heading>
          <Heading
            fontFamily={'Railway'}
            as={'h1'}
            color={'#fff'}
            fontSize={'64px'}
            m={0}
          >
            Signup
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
                border="2px solid rgba(255, 255, 255, 0.35)" // Converted #FFFFFF59 to rgba
                borderRadius="6px"
                opacity="1"
                color={'#fff'}
                fontSize={'18px'}
                fontWeight={400}
                _hover={{
                  bg: 'linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)',
                }}
              >
                Signup
              </Button>
            </Box>
          </HStack>
        </Stack>
      </Container>
    </Stack>
  );
}

export default Signup;
