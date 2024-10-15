import React from 'react';
import { Stack, Heading, Container } from '@chakra-ui/react';
import BannerImg from '../../../assets/images/page/innerbg.png';

export default function InnerBanner({title}) {
  return (
    <>
      <Stack
        backgroundImage={BannerImg}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        w={'100%'}
        h={{base:'300px',md:'600px'}}
        pt={{base:10,md:40}}
        px={30}
        position={'relative'}
        zIndex={1}
        justifyItems={'center'}
        alignItems={'center'}
      >
        <Container maxW={'1600px'}>
          <Stack py={32} gap={40}>
            <Heading
              textAlign={'center'}
              fontSize={{base : '30px',md:'90px'}}
              fontWeight={'500'}
              fontFamily={'"Raleway", sans-serif'}
              color={'#fff'}
            >
             {title}
            </Heading>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
