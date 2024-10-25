import { Heading } from '@chakra-ui/react';
import React from 'react';

function CustHeading({ name }) {
  return (
    <Heading
      fontSize={'32px'}
      color={'#fff'}
      pb={name === 'Refer a Friend' || name === 'Referral Earning' ? 0 : 4}
      fontWeight={400}
      letterSpacing={'0px'}
      fontFamily={'Montserrat'}
      // px={3}
    >
      {name}
    </Heading>
  );
}

export default CustHeading;
