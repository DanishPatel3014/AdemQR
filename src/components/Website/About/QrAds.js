import React from 'react';
import {
  Tag,
  Stack,
  Heading,
  Container,
  Box,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
 

export default function QrAds() {
  return (
    <>
     <Stack
        py={{base:4,md:24}}
        bg={
          'transparent radial-gradient(closest-side at 11% 50%, #6432A66B 0%, #6432A61F 58%, #6432A600 100%) 0% 0% no-repeat padding-box'
        }
        className="animate__animated  animate__fadeInUpBig animate__delay-2s"
      >
        <Container maxW={{ base: '100%', lg:'1400px',  '2xl': '1600px' }} gap={20}>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap={12} alignItems={'center'}>
            <Stack className="animate__animated  animate__fadeInLeft animate__delay-2s">
              <Stack
                gap={4}
                w={{base:'auto',md : '589px'}}
                bg={'linear-gradient(90deg, #1d083b 0%, #321e64 100%)'}
                borderRadius={'20px'}
                py={{base:10,md:12}}
                px={{base:10,md:20}}
              >
                <Heading
                  textAlign={'left'}
                  color={'#fff'}
                  fontSize={'64px'}
                  fontWeight={500}
                >
                  QR Code Ads
                </Heading>
                <Text color={'#c3c3c3'} fontSize={'16px'}>
                  With our cutting-edge technology, you can engage potential
                  customers with interactive ads that drive results.
                </Text>
              </Stack>
            </Stack>
            <Stack gap={4} className="animate__animated  animate__fadeInRight animate__delay-2s">
              <Tag
                bg={'#7125D6'}
                color={'#fff'}
                w={'max-content'}
                fontSize={{base:'20px',md:'25px'}}
                px={16}
                py={4}
                borderRadius={'30px'}
              >
                Billboards on the Truck
              </Tag>
              <Heading
                fontSize={{base : '30px',lg:'60px','2xl':'64px'}}
                
                fontWeight={'500'}
                fontFamily={'"Raleway", sans-serif'}
                color={'#fff'}
              >
                Revolutionize Your Ads <br />
                with
                <Box
                verticalAlign={'middle'}
                  as="span"
                  w={{base:'120px',md:'202px'}}
                  h={{base:'25px',md:'59px'}}
                  display={'inline-flex'}
                  bg={
                    'transparent linear-gradient(180deg, #C086EC 0%, #7F48D6 100%) 0% 0% no-repeat padding-box;'
                  }
                  mx={3}
                  borderRadius={'30px'}
                ></Box>
                Billboards
              </Heading>
            </Stack>
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  )
}
