import React from 'react';
import {
    Tag,
  Stack,
  Heading,
  Container,
  Box,
  SimpleGrid,
  Text,
  Link,
  Button,
  
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';


export default function Future() {
  return (
    <>
       <Stack py={{base:12,md:28}}>
        <Container maxW={'1600px'}>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap={12} alignItems={'center'}>
            <Stack gap={4}>
              <Tag
                bg={'#7125D6'}
                color={'#fff'}
                w={'max-content'}
                fontSize={{base : '15px',md:'20px'}}
                pr={16}
                pl={8}
                py={4}
                borderRadius={'30px'}
                textAlign={'left'}
              >
                How Our Referral Program Works
              </Tag>
              <Heading
                fontSize={{base:'30px', md:'40px', xl:'50px', "2xl": '64px'}}
                
                fontWeight={'500'}
                fontFamily={'"Raleway", sans-serif'}
                color={'#fff'}
              >
                The Future of <br />
                Trucking
                <Box
                verticalAlign={'middle'}
                  as="span"
                  w={{base:'90px',md:'202px'}}
                h={{base:'25px',md:'59px'}}
                  display={'inline-flex'}
                  bg={
                    'transparent linear-gradient(180deg, #C086EC 0%, #7F48D6 100%) 0% 0% no-repeat padding-box;'
                  }
                  mx={3}
                  borderRadius={'30px'}
                ></Box>
                Income
              </Heading>
            </Stack>
            <Stack gap={8} pl={{base:0,md:20}}>
              <Text color={'#c3c3c3'} fontSize={'16px'}>
                Our innovative platform combines a robust 10-tier referral
                network with a state-of-the-art QR code advertising system,
                turning every truck into a mobile revenue-generating machine.
              </Text>
              <Link to={'/register'} as={ReactLink}>
                <Button
                  display={{ base: 'none', md: 'inline-flex' }}
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
                  Get Started
                </Button>
              </Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  )
}
