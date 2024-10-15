import React from 'react';
import {
  Stack,
  Heading,
  Container,
  Box,
  Image,
  SimpleGrid,
  Text,
  Link,
  Button,
  Flex,
} from '@chakra-ui/react';
import Truck from '../../../assets/images/page/truck.png';
import { Link as ReactLink } from 'react-router-dom';

export default function MainBanner() {
  return (
    <>
      <Stack
        bg={
          '#171129 radial-gradient(closest-side at 50% 50%, #6432A699 0%, #6432A61F 68%, #6432A600 100%) 0% 0% no-repeat padding-box'
        }
        w={'100%'}
        h={{base:'auto', md:'1200px', xl:'1200px', "2xl": '1200px'}}
        pt={'102px'}
        px={30}
        position={'relative'}
        zIndex={1}
        justifyItems={'center'}
        alignItems={'center'}
      >
        <Image
        display={{"base":"none", "md":"block"}}
          src={Truck}
          alt={'Truck Qr'}
          position={'absolute'}
          bottom={0}
          left={0}
          right={'0'}
          margin={'auto'}
          zIndex={-1}
           className="animate__animated  animate__zoomIn animate__delay-2s"
        />
        <Container maxW={'1600px'}>
          <Stack py={{base:16,md:28}} gap={{base:28,md:40}}>
            <Heading
              textAlign={'center'}
              fontSize={{base:'40px', md:'60px', xl:'90px', "2xl": '106px'}}
              fontWeight={'500'}
              fontFamily={'"Raleway", sans-serif'}
              color={'#fff'}
              className="animate__animated  animate__fadeIn animate__delay-1s" 
            >
              Boost Brand
              <Box
                as="span"
                w={{base:'60px',md:'202px'}}
                  h={{base:'25px',md:'59px'}}
                display={'inline-flex'}
                bg={
                  'transparent linear-gradient(180deg,#ECA986  0%, #D64848 100%) 0% 0% no-repeat padding-box;'
                }
                mx={3}
                borderRadius={'30px'}
              ></Box>
              Visibility
              <br />
              <Box
                as="span"
                w={{base:'60px',md:'202px'}}
                  h={{base:'25px',md:'59px'}}
                display={'inline-flex'}
                bg={
                  'transparent linear-gradient(180deg, #EC86E9 0%, #782981 100%) 0% 0% no-repeat padding-box;'
                }
                mx={3}
                borderRadius={'30px'}
              ></Box>
              On The Go
            </Heading>
            <SimpleGrid
             columns={{ base: 1, md: 3, xl: 3 }}
              justifyContent={'space-between'}
              alignItems={'end'}
            
            >
              <Stack gap={4} className="animate__animated  animate__fadeInLeft animate__delay-2s" >
                <Heading color={'#fff'} fontSize={{base : '25px',md:'32px'}}>
                  Drive Your Way to <br/><Text as={'span'} color={'#834cd7'}>Success</Text>
                </Heading>
                <Text color={'#c3c3c3'} maxW={'394px'}>
                  Join the Revolution in Trucking Income. Earn More with Our
                  10-Tier Referral Network and QR Code Advertising System.
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
                    Join Now
                  </Button>
                </Link>
              </Stack>
              <Stack display={{base:'none',md:'block'}}></Stack>
              <Stack gap={{base:'2',md:'4'}} alignItems={'end'} className="animate__animated  animate__fadeInRight animate__delay-2s">
                <Stack gap={{base:'2',md:'4'}}>
                  <Flex align={'center'}>
                    <Heading color={'#fff'} fontSize={{base : '30px',md:'50px'}}>
                      5k
                    </Heading>
                    <Text fontSize={'50px'} color={'#834cd7'}>
                      +
                    </Text>
                  </Flex>
                  <Text color={'#c3c3c3'} maxW={'394px'}>
                    Join the Revolution in Trucking Income. Earn More with Our
                    10-Tier Referral Network and QR Code Advertising System.
                  </Text>
                </Stack>
                <Stack gap={{base:'2',md:'4'}}>
                  <Flex align={'center'}>
                    <Heading color={'#fff'} fontSize={{base : '30px',md:'50px'}}>
                      5k
                    </Heading>
                    <Text fontSize={'50px'} color={'#834cd7'}>
                      +
                    </Text>
                  </Flex>
                  <Text color={'#c3c3c3'} maxW={'394px'}>
                    Join the Revolution in Trucking Income. Earn More with Our
                    10-Tier Referral Network and QR Code Advertising System.
                  </Text>
                </Stack>
              </Stack>
            </SimpleGrid>
          </Stack>
        </Container>
      </Stack>
    </>
  )
}
