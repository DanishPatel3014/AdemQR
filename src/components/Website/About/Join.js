import React from 'react';
import {
  
  Stack,
  Heading,
  Container,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Paramit from '../../../assets/images/page/paramit.png';


export default function Join() {
  return (
    <>
    <Stack py={{base:6,md:24}}  >
        <Container maxW={'1600px'}>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap={20} alignItems={'center'}>
            <Stack gap={{base:10,md:16}} className="animate__animated  animate__fadeInLeft animate__delay-2s">
              <Stack>
                <Heading color={'#834cd7'} fontSize={'25px'}>
                  Join the Network
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
                  Refer & Earn
                </Heading>
                <Text color={'#c3c3c3'}>
                  Use our 10-tier referral system to invite other drivers and
                  companies to join. The more you refer, the more you earn. It's
                  that simple!
                </Text>
              </Stack>
              <Stack>
                <Heading color={'#834cd7'} fontSize={'25px'}>
                  Advertise & Profit
                </Heading>
                <Text color={'#c3c3c3'}>
                  Turn your truck into a mobile billboard with our QR code
                  advertising system. Businesses pay to advertise on your truck,
                  and you earn a share of the revenue. It's a win-win!
                </Text>
              </Stack>
            </Stack>
            <Stack className="animate__animated  animate__fadeInRight animate__delay-2s">
              <Image src={Paramit} alt="Paramit" />
            </Stack>
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  )
}
