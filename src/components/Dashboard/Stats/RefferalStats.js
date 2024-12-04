import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import RefferalUserStat from './RefferalUserStat';

function RefferalStats({ item }) {
  return (
    <Box
      bg="#00092D"
      p="4"
      borderRadius="20px"
      color="white"
      display="flex"
      alignItems="center"
      boxShadow="lg"
      flexDirection={'column'}
      gap={4}
    >
      <Stack w="100%" textAlign={'start'} px={3}>
        <Text fontSize={'22px'} fontWeight={600} color={'#F3EEFE'}>
          Tier {item}
        </Text>
        <Box h="2px" border={'1px solid #30243C'} w="100%"></Box>
      </Stack>

      <RefferalUserStat />
      <RefferalUserStat />
      <RefferalUserStat />
      <RefferalUserStat />
    </Box>
  );
}

export default RefferalStats;
