import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import User from '../../../assets/images/user.png';

function RefferalUserStat() {
  return (
    <Box
      p={{ xl: 4, '2xl': 6 }}
      bg={'#000d41'}
      display={'flex'}
      flexDirection={'column'}
      gap={6}
      borderRadius={'20px'}
      w="100%"
      h="140px"
    >
      <HStack gap={{ xl: 2, '2xl': 4 }}>
        <Stack
          w="50px"
          h="50px"
          border={'1px solid #C086ec'}
          borderRadius="50%"
        >
          <Image src={User} alt="user" w="100%" h="100%" />
        </Stack>
        <Text
          fontSize={{ xl: '16px', '2xl': '18px' }}
          fontWeight={600}
          fontFamily={'Montserrat'}
        >
          John Doe
        </Text>
      </HStack>
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Text fontSize={'14px'} fontFamily={'Rubik'} color={'#7e798b'}>
          Original Referral
        </Text>
        <HStack>
          <Stack
            w="30px"
            h="30px"
            border={'1px solid #C086ec'}
            borderRadius="50%"
          >
            <Image src={User} alt="user" w="100%" h="100%" />
          </Stack>
          <Text
            fontSize={{ xl: '14px', '2xl': '12px' }}
            color={'#fff'}
            fontWeight={'normal'}
            fontFamily={'Rubik'}
          >
            Sara Grey
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
}

export default RefferalUserStat;
