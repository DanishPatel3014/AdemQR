import { Box, Input } from '@chakra-ui/react';
import React from 'react';

function CustInput({ name }) {
  return (
    <Box w="100%" bg="#00092D" borderRadius="10px" p="3px">
      <Input
        placeholder={name}
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
