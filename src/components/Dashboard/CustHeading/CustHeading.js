import { Heading } from '@chakra-ui/react';
import React from 'react';

function CustHeading({ name }) {
  return (
    <Heading
      fontSize={'32px'}
      color={'#fff'}
      pb={4}
      fontWeight={400}
      letterSpacing={'0px'}
      // px={3}
    >
      {name}
    </Heading>
  );
}

export default CustHeading;
