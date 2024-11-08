import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import RefferalUserStat from './RefferalUserStat';

function RefferalStats() {
  return (
    <Box
      bg="#00092D"
      p="6"
      borderRadius="20px"
      color="white"
      display="flex"
      alignItems="center"
      boxShadow="lg"
      flexDirection={'column'}
      gap={4}
    >
      <RefferalUserStat />
      <RefferalUserStat />
      <RefferalUserStat />
      <RefferalUserStat />
    </Box>
  );
}

export default RefferalStats;
