import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function Stats({ data }) {
  return (
    <Box
      bg="#00092D"
      p="6"
      borderRadius="20px"
      color="white"
      display="flex"
      alignItems="center"
      boxShadow="lg"
      
    >
      {/* Vertical Bar */}
      <Box h="full" w="4px" bg="purple.400" borderRadius="full" mr="4" />

      {/* Content */}
      <Box>
        <Text fontSize="32px" fontWeight="bold">
          {data?.value}
        </Text>
        <Text fontSize="16px" color="#E0E4EA" fontWeight={300}>
          {data?.name}
        </Text>
      </Box>
    </Box>
  );
}

export default Stats;
