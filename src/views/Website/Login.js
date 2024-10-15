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
  Link,
  Toast,
  useToast,
  Container,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { BsEyeSlash, BsEye, BsBag } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import React, { useEffect, useState } from 'react';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import Loginimg from '../../assets/images/page/login1.jpg';

export default function Login() {
  const [showpass, setshowpass] = useState(false);

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
        display={{base: 'none', md: 'block'}}
          position={'absolute'}
          left={'0'}
          height={'100%'}
          w={'45%'}
        bgImg={Loginimg}
        backgroundPosition={'right'}
        backgroundSize={'cover'}
        >
        
        </Stack>

        <Container maxW={'9xl'}>
          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={{ base: 1, sm: 6 }}
            alignItems={'center'}
          >
            <GridItem colSpan={{ base: '4', md: '6' }}>
              <Stack pl={16} position={'relative'}>
               
              </Stack>
            </GridItem>
            <GridItem colSpan={{ base: '12', md: '6' }}>
              <Stack pl={6} pr={{base:'0',md:'35%'}}>
                <Stack className="m3-h p1" mb={6}>
                  <Heading as={'h3'} color={'#fff'}>Login</Heading>
                  <Text color={'#fff'}>Enter your details to log in your account</Text>
                </Stack>
                <Stack className="regwarp" gap={4}>
                  <Stack>
                    <FormLabel
                      fontWeight={400}
                      m={0}
                      color={'#fff'}
                      fontSize={'14px'}
                    >
                      Email Address
                    </FormLabel>
                    <Box className="Ifiled">
                      <Icon fontSize={'25px'} color={'#fff'} as={GoMail} />
                      <Input type="email" placeholder="Enter Your Email " />
                    </Box>
                  </Stack>

                  <Stack>
                    <FormLabel
                      fontWeight={400}
                      m={0}
                      color={'#fff'}
                      fontSize={'14px'}
                    >
                      Password
                    </FormLabel>
                    <Box className="Ifiled">
                      <Icon
                        fontSize={'25px'}
                        color={'#949494'}
                        as={AiOutlineLock}
                      />
                      <Input
                        type={showpass ? 'text' : 'password'}
                        placeholder="Enter Password"
                        color={'#fff'}
                      />
                      <Button onClick={() => setshowpass(!showpass)}>
                        <Icon
                          color={'#949494'}
                          as={showpass ? BsEye : BsEyeSlash}
                        />
                      </Button>
                    </Box>
                  </Stack>
                  <Stack
                    alignItems={'self-end'}
                    textAlign={'right'}
                    className="cterm"
                  >
                    <Link
                      as={ReactLink}
                      fontWeight={500}
                      fontSize={'13px'}
                      color={'#834cd7'}
                      width={'max-content'}
                      to={'#'}
                    >
                      Forgot Password?
                    </Link>
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
                   bg={'transparent linear-gradient(180deg, #C086EC 0%, #7F48D6 100%) 0% 0% no-repeat padding-box;'}
                   href={'#'}
                   _hover={{
                     bg: '#3E5079',
                     color: '#fff',
                   }}
                    >
                      Login
                    </Button>
                  </Stack>
                  <Stack className="cterm">
                    <Text textAlign={'center'} fontSize={'16px'} color={'#fff'}>
                      Don't have an account yet?
                      <Link
                        as={ReactLink}
                        fontWeight={600}
                        color={'#834cd7'}
                        to={'#'}
                      >
                        {' '}
                        Sign Up
                      </Link>
                    </Text>
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
