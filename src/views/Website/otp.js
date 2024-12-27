import {
  Stack,
  Box,
  Image,
  Text,
  Heading,
  Icon,
  Checkbox,
  FormLabel,
  Input,
  Button,
  PinInput, PinInputField,
  Container,
  Grid,
  GridItem,
  HStack,
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import Loginimg from '../../assets/images/page/login1.jpg';

export default function Otp() {
  return (
    <>
      <Stack
        w={'100%'}
        h={'100vh'}
        overflow={'hidden'}
        alignItems={'center'}
        justifyContent={'center'}
        position={'relative'}
      >
        <Stack
          display={{ base: 'none', md: 'block' }}
          position={'absolute'}
          left={'0'}
          height={'100%'}
          w={'45%'}
          bgImg={Loginimg}
          backgroundPosition={'right'}
          backgroundSize={'cover'}
        ></Stack>

        <Container maxW={'9xl'}>
          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={{ base: 1, sm: 6 }}
            alignItems={'center'}
          >
            <GridItem colSpan={{ base: '4', md: '6' }}>
              <Stack pl={16} position={'relative'}></Stack>
            </GridItem>
            <GridItem colSpan={{ base: '12', md: '6' }}>
              <Stack pl={6} pr={{ base: '0', md: '35%' }}>
                <Stack className="m3-h p1" mb={6}>
                  <Heading as={'h3'} color={'#fff'}>
                    Login Verify
                  </Heading>
                  <Text color={'#fff'}>Enter your Verification Number</Text>
                </Stack>
                <Stack className="regwarp" gap={4}>
                  <Stack>
                    <HStack>
                      <PinInput  size='lg'>
                        <PinInputField color={'#fff'} w={'100px'} py={8} outline={'2px solid #834cd7'} border={0}/>
                        <PinInputField color={'#fff'} w={'100px'} py={8} outline={'2px solid #834cd7'} border={0}/>
                        <PinInputField color={'#fff'} w={'100px'} py={8} outline={'2px solid #834cd7'} border={0}/>
                        <PinInputField color={'#fff'} w={'100px'} py={8} outline={'2px solid #834cd7'} border={0}/>
                        <PinInputField color={'#fff'} w={'100px'} py={8} outline={'2px solid #834cd7'} border={0}/>
                      </PinInput>
                    </HStack>
                  </Stack>

                  <Stack direction={'row'} gap={14}>
                    <Button
                      fontSize={'15px'}
                      w={'154px'}
                      p={'25px 30px'}
                      fontWeight={400}
                      color={'white'}
                      border={'2px solid #FFFFFF59'}
                      borderRadius={'30px'}
                      bg={
                        'transparent linear-gradient(180deg, #C086EC 0%, #7F48D6 100%) 0% 0% no-repeat padding-box;'
                      }
                      href={'#'}
                      _hover={{
                        bg: '#3E5079',
                        color: '#fff',
                      }}
                    >
                      Send
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </GridItem>
          </Grid>
        </Container>
      </Stack>
    </>
  );
}
