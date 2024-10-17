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
  Avatar,
  AvatarGroup,
  useBreakpointValue,
} from '@chakra-ui/react';
import AbTruck from '../../../assets/images/page/truck1.png';
import Circle from '../../../assets/images/page/circle.png';
import { Link as ReactLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

export default function About() {
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
      <Stack py={{base:6,md:24}}  className="animate__animated  animate__fadeInUpBig animate__delay-2s">
        <Container maxW={{ base: '100%', lg:'1400px',  '2xl': '1600px' }}>
          <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap={2} alignItems={'center'}>
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
              <Image w={'260px'} src={Circle} alt="truck about" />
            </Stack>
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  );
}
