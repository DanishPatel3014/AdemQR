import React from 'react'
import InnerBanner from '../../components/Website/Banner/InnerBanner'
import Future from '../../components/Website/About/Future'
import {
  Stack,
  Container,
  SimpleGrid,
  Image,
  Heading,
  Box,
  Text,
  Link,
  Button,
  Flex,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
} from '@chakra-ui/react';
import Truck from '../../assets/images/page/truck3.jpg';
import Join from '../../components/Website/About/Join';
import AbTruck from '../../assets/images/page/truck1.png';
import Circle from '../../assets/images/page/circle.png';
import { Link as ReactLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

export default function Trucker() {
  const avatars = [
    {
      name: 'Ryan Florence',
      url: 'https://bit.ly/ryan-florence',
    },
    {
      name: 'Segun Adebayo',
      url: 'https://bit.ly/sage-adebayo',
    },
    {
      name: 'Kent Dodds',
      url: 'https://bit.ly/kent-c-dodds',
    },
  ];
  return (
    <>
    <InnerBanner title="Trucker" />
    <Stack py={{base:12,md:24}}>
        <Container maxW={'1600px'}>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap={{base:10,md:12}} alignItems={'center'}>
            <Stack gap={6}>
              <Heading
                fontSize={{base : '30px',md:'70px'}}
                fontWeight={'500'}
                fontFamily={'"Raleway", sans-serif'}
                color={'#fff'}
              >
                Earn Money by Ads<br/> on Your
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
                Truck
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
    <Join/>
    <Stack py={{base:6,md:24}}  className="animate__animated  animate__fadeInUpBig animate__delay-2s">
        <Container maxW={'1600px'}>
          <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap={16} alignItems={'center'}>
            <Stack>
              <Image src={AbTruck} alt="truck about" />
            </Stack>
            <Stack gap={4} pl={8}>
              <Heading color={'#fff'} fontSize={'32px'}>
                Introduction to{' '}
                <Text as={'span'} color={'#834cd7'}>
                  QR Code
                </Text>{' '}
                Advertising
              </Heading>
              <Text color={'#c3c3c3'} maxW={'394px'}>
                We turn every truck into a dynamic advertising platform. Our QR
                code advertising system allows businesses to showcase their
                brand on the move.
              </Text>

              <Stack direction={'row'} spacing={4} align={'center'}>
                <AvatarGroup>
                  {avatars?.map(avatar => (
                    <Avatar
                      key={avatar.name}
                      name={avatar.name}
                      src={avatar.url}
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      size={useBreakpointValue({ base: 'sm', md: 'md' })}
                      position={'relative'}
                      zIndex={2}
                      _before={{
                        content: '""',
                        width: 'full',
                        height: 'full',
                        rounded: 'full',
                        transform: 'scale(1.125)',
                        bg: '#834cd7',
                        position: 'absolute',
                        zIndex: -1,
                        top: 0,
                        left: 0,
                      }}
                    />
                  ))}
                </AvatarGroup>

                <Link to={'/register'} as={ReactLink}>
                  <Button
                    marginLeft={'-25px'}
                    zIndex={9}
                    align={'center'}
                    justify={'center'}
                    fontFamily={'heading'}
                    fontSize={{ base: 'sm', md: '20px' }}
                    bg={'#5C5FE4'}
                    color={'white'}
                    rounded={'full'}
                    minWidth={useBreakpointValue({ base: '44px', md: '55px' })}
                    minHeight={useBreakpointValue({ base: '44px', md: '55px' })}
                    position={'relative'}
                    _hover={{
                      color: '#5C5FE4',
                      bg: '#fff',
                    }}
                  >
                    <FaPlus />
                  </Button>
                </Link>
                <Stack>
                  <Heading color={'#fff'} fontSize={'19px'}>
                    Join Us
                  </Heading>
                  <Text color={'#c3c3c3'} fontSize={'15px'}>
                    Community Now
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack display={{base:'none',md:'block'}}>
              <Image src={Circle} alt="truck about" />
            </Stack>
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  )
}
