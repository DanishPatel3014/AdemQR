import React from 'react';
import Future from '../../components/Website/About/Future';
import Packages from '../../components/Website/Packages/Packages';
import QrAds from '../../components/Website/About/QrAds';
import Tir from '../../components/Website/About/Tir';
import InnerBanner from '../../components/Website/Banner/InnerBanner';
import Truck from '../../assets/images/page/truck3.jpg';
import Paramit from '../../assets/images/page/cloud.png';
import {
  Stack,
  Container,
  SimpleGrid,
  Image,
  Heading,
  Box,
  Text,
  Flex,
} from '@chakra-ui/react';

export default function Advertisers() {
  return (
    <>
      <InnerBanner title={'Advertisers'} />
      <Stack py={{base:6,md:24}}>
        <Container maxW={'1600px'}>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap={12} alignItems={'center'}>
            <Stack gap={6}>
              <Heading
                fontSize={{base : '30px',md:'70px'}}
                fontWeight={'500'}
                fontFamily={'"Raleway", sans-serif'}
                color={'#fff'}
              >
                Maximize Your Reach with Truck-Side{' '}
                <Box
                  as="span"
                  w={{base:'120px',md:'202px'}}
                  h={{base:'25px',md:'59px'}}
                  display={'inline-flex'}
                  bg={
                    'transparent linear-gradient(180deg,#ECA986  0%, #D64848 100%) 0% 0% no-repeat padding-box;'
                  }
                  mx={3}
                  borderRadius={'30px'}
                ></Box>
                <Text as={'span'} color={'#C086EC'}>
                  Advertising
                </Text>
              </Heading>
              <Text color={'#c3c3c3'} fontSize={'16px'}>
                Truck-side advertising provides a unique, mobile way to reach
                potential customers. With thousands of trucks moving across
                cities and highways, your brand can travel farther than ever,
                reaching untapped markets with minimal effort.
              </Text>
              <SimpleGrid columns={3} gap={{base:3,md:6}} alignItems={'center'}>
                <Stack>
                  <Flex align={'center'}>
                    <Heading color={'#fff'} fontSize={{base : '30px',md:'50px'}}>
                      89,2k
                    </Heading>
                    <Text fontSize={'50px'} color={'#834cd7'}>
                      +
                    </Text>
                  </Flex>
                  <Text color={'#C086EC'} fontSize={{base:'14px',md:'16px'}}>
                  Total Impressions
                  </Text>
                </Stack>
                <Stack>
                  <Flex align={'center'}>
                    <Heading color={'#fff'} fontSize={{base : '30px',md:'50px'}}>
                      7001k
                    </Heading>
                    <Text fontSize={'50px'} color={'#834cd7'}>
                      +
                    </Text>
                  </Flex>
                  <Text color={'#C086EC'} fontSize={{base:'14px',md:'16px'}}>
                  Website Traffic
                  </Text>
                </Stack>
                <Stack>
                  <Flex align={'center'}>
                    <Heading color={'#fff'} fontSize={{base : '30px',md:'50px'}}>
                      3,124
                    </Heading>
                    <Text fontSize={'50px'} color={'#834cd7'}>
                      +
                    </Text>
                  </Flex>
                  <Text color={'#C086EC'} fontSize={{base:'14px',md:'16px'}}>
                  Truck Drivers
                  </Text>
                </Stack>
              </SimpleGrid>
            </Stack>
            <Stack>
              <Image borderRadius={'90px'} src={Truck} />
            </Stack>
          </SimpleGrid>
        </Container>
      </Stack>
      <Future />
      <Stack py={{base:0,md:24}}>
        <Container maxW={'1600px'}>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap={{base:10,md:20}} alignItems={'center'}>
            <Stack gap={{base:10,md:16}}>
              <Stack>
                <Heading color={'#834cd7'} fontSize={'25px'}>
                Browse Trucks
                </Heading>
                <Text color={'#c3c3c3'}>
                  Sign up with us and become part of a community that's driving
                  the future of trucking. Whether you're an individual truck
                  driver or a trucking company, our platform is designed to help
                  you maximize your income.
                </Text>
              </Stack>
              <Stack>
                <Heading color={'#834cd7'} fontSize={'25px'}>
                Select Ad Packages
                </Heading>
                <Text color={'#c3c3c3'}>
                  Use our 10-tier referral system to invite other drivers and
                  companies to join. The more you refer, the more you earn. It's
                  that simple!
                </Text>
              </Stack>
              <Stack>
                <Heading color={'#834cd7'} fontSize={'25px'}>
                Upload Your Ad
                </Heading>
                <Text color={'#c3c3c3'}>
                  Turn your truck into a mobile billboard with our QR code
                  advertising system. Businesses pay to advertise on your truck,
                  and you earn a share of the revenue. It's a win-win!
                </Text>
              </Stack>
            </Stack>
            <Stack>
              <Image src={Paramit} alt="Paramit" />
            </Stack>
          </SimpleGrid>
        </Container>
      </Stack>
      <Packages />
      <QrAds />
      <Tir />
    </>
  );
}
