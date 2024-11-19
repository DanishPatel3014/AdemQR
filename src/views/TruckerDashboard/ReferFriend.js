import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import Scan from '../../assets/images/scan.svg';
import CustTable from '../../components/Dashboard/Table/CustTable';

function ReferFriend() {
  const dataHeaders = [
    'Referral Name',
    'Tier',
    'Type',
    'New Referral',
    'Date',
    'Amount Earned',
  ];
  const dataColumns = [
    {
      name: 'John Doe',
      tier: 'Tier 1',
      type: 'New Referral',
      newReferral: 'Yes',
      date: '08/15/2024',
      amountEarned: '$100',
    },
    {
      name: 'John Doe',
      tier: 'Tier 2',
      type: 'New Referral',
      newReferral: 'Yes',
      date: '08/15/2024',
      amountEarned: '$100',
    },
    {
      name: 'John Doe',
      tier: 'Silver',
      type: 'Referral',
      newReferral: 'No',
      date: '08/15/2024',
      amountEarned: '$50',
    },
    {
      name: 'John Doe',
      tier: 'Silver',
      type: 'Referral',
      newReferral: 'No',
      date: '08/15/2024',
      amountEarned: '$50',
    },
  ];
  return (
    <Stack px={4} pb={4} overflowY={'auto'} overflowX={'hidden'}>
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        pb={4}
      >
        <CustHeading name={'Refer a Friend'} />
        <Button
          mr={2}
          border={'1px solid #fff'}
          bg={'transparent'}
          w="170px"
          h="48px"
          borderRadius={'16px'}
          color={'#fff'}
          fontSize={'16px'}
          fontWeight={400}
          _hover={{ bg: 'transparent' }}
        >
          Refer A Friend
        </Button>
      </Stack>
      <Stack py={4}>
        <Text fontSize={'18px'} color={'#7E798B'} fontFamily={'Rubik'}>
          Refferral URL
        </Text>
        <Box
          my={5}
          bg="#00092D"
          py={4}
          borderRadius="14px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          h={'54px'}
          w="80%"
        >
          <InputGroup>
            <Input
              border="none"
              outline="none"
              type="text"
              fontSize="16px"
              value="www.referfromme.com/yourname_profile_ID_referral_link"
              borderRadius="14px"
              color="#fff"
              bg="transparent"
              _placeholder={{ color: '#969DA6' }}
              pr="150px"
            />

            <InputRightElement cursor={'pointer'} width="auto">
              <Text
                px={3}
                fontSize={'18px'}
                fontFamily={'Rubik'}
                color={'#C086EC'}
              >
                Copy
              </Text>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Stack>
      <Stack py={4} direction={{base : 'column', md: 'column',xl:'row', "2xl": 'row'}} gap={5}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={2}
          w={{base : '100%',md: "224px"}}
          h="204px"
          bg="#00092d"
          borderRadius={'20px'}
        >
          <Image src={Scan} w="131px" h="131px" />
          <Text fontSize={'18px'} fontFamily={'Montserrat'} color={'#F3EEFE'}>
            Scan Me{' '}
          </Text>
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={6} mt={2}>
          <Button
            border={'1px solid #FFFFFF59'}
            bg="linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)"
            opacity="1"
            fontWeight={400}
            fontSize={'16px'}
            color={'#fff'}
            w={{base : '100%',md: "224px"}}
            h="48px"
            _hover={{ bg: 'linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)' }}
          >
            Share on Facebook
          </Button>
          <Button
            border={'1px solid #FFFFFF59'}
            bg="linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)"
            opacity="1"
            fontWeight={400}
            fontSize={'16px'}
            color={'#fff'}
            w={{base : '100%',md: "224px"}}
            h="48px"
            _hover={{ bg: 'linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)' }}
          >
            Share on Insta
          </Button>
          <Button
            border={'1px solid #FFFFFF59'}
            bg="linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)"
            opacity="1"
            fontWeight={400}
            fontSize={'16px'}
            color={'#fff'}
            w={{base : '100%',md: "224px"}}
            _hover={{ bg: 'linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)' }}
            h="48px"
          >
            Share on Whatsapp
          </Button>
        </Box>
      </Stack>
      <Stack py={4} width={{base : '100%', md : '80%'}}>
        <CustTable header={dataHeaders} data={dataColumns} />
      </Stack>
    </Stack>
  );
}

export default ReferFriend;
