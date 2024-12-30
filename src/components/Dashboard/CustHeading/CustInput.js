import { Box, Input } from '@chakra-ui/react';
import React from 'react';

function CustInput({ name, type }) {
  return (
    <Box
      w="100%"
      bg="#00092D"
      borderRadius="10px"
      p="3px"
      margin={'0 !important'}
    >
      <Input
        placeholder={name}
        type={type || 'text'}
        variant="unstyled"
        borderRadius="12px"
        px="16px"
        py="14px"
        fontSize="14px"
        fontFamily={'Rubik'}
        color="#7E798B"
        _placeholder={{ color: '#7E798B' }}
      />
    </Box>
  );
}

export default CustInput;
