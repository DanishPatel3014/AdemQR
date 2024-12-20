import { Heading } from '@chakra-ui/react';
import React from 'react';

function CustHeading({ name }) {
  return (
    <Heading
      fontSize={{base : '20px', md : '32px'}}
      color={'#fff'}
      pb={
        name === 'Refer a Friend' ||
        name === 'Referral Earning' ||
        name === 'My Trucks'
          ? 0
          : 4
      }
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
