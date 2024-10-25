import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Link,
  Box,
  Icon,
  Image,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';

export default function Footer() {
  return (
    <>
      <Stack
        // bg={
        //   '#171129 radial-gradient(closest-side at 50% 50%, #6432A699 0%, #6432A61F 68%, #6432A600 100%) 0% 0% no-repeat padding-box'
        // }
      >
        <Container maxW={{base:'100%', md:'1200px', xl:'1200px', "2xl": '1600px'}} gap={20}>
          <Stack py={{base:8,md:20}} borderBottom={'1px solid #C086EC'}>
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 2 }}
              spacing={10}
              alignItems={'center'}
            >
              <Stack>
                <Heading color={'#fff'} fontSize={{base : '20px',md:'35px'}}>
                  Join our newsletter to stay up
                  <br /> to date on features and releases.
                </Heading>
              </Stack>
              <Stack alignItems={{ base: 'start', md: 'self-end' }}>
                <Flex gap={2} alignItems={'center'}>
                  <Box w={{base:'100%', md:'400px', xl:'400px', "2xl": '500px'}} position={'relative'}>
                    <Icon
                      position={'absolute'}
                      color={'#fff'}
                      fontSize={'18px'}
                      as={FaRegUser}
                      left={5}
                      top={0}
                      bottom={0}
                      margin={'auto'}
                    />
                    <Input
                      fontSize={'15px'}
                      borderRadius={'30px'}
                      color={'#fff'}
                      pl={12}
                      height={'60px'}
                      placeholder="Enter your email"
                      size="lg"
                    />
                  </Box>
                  <Link to={'/register'} as={ReactLink}>
                    <Button
                      fontSize={'18px'}
                      w={'154px'}
                      p={'30px 40px'}
                      fontWeight={500}
                      color={'#7125D6'}
                     
                      borderRadius={'30px'}
                      bg={
                        '#fff'
                      }
                      href={'#'}
                      _hover={{
                        bg: '#3E5079',
                        color: '#fff',
                      }}
                    >
                      Subscribe
                    </Button>
                  </Link>
                </Flex>
              </Stack>
            </SimpleGrid>
          </Stack>
          <Stack py={{base:8,md:20}} borderBottom={'1px solid #C086EC'}>
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 2 }}
              spacing={10}
              alignItems={'center'}
            >
              <Stack gap={4}>
                <Box
                  as={ReactLink}
                  to={'/'}
                  rel="home"
                  width={{ base: '36%', lg: '20%' }}
                >
                  <Image alt={'Logo'} src={Logo} draggable={false} />
                </Box>

                <Text color={'#c3c3c3'} fontSize={'16px'} maxW={'500px'}>
                  Choose specific routes and regions to ensure your ads are seen
                  by your ideal audience. Reach local and regional markets
                  effectively.
                </Text>
              </Stack>

              <Stack alignItems={{base : 'start',md :'self-end'}}>
                <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} spacing={{base:'10', md:'10',xl:'10', "2xl": '40'}}>
                  <Stack>
                    <Text color={'#c3c3c3'} fontSize={'13px'} maxW={'500px'}>
                      Platform
                    </Text>
                    <UnorderedList spacing={2} listStyleType={'none'}>
                      <ListItem>
                        <Link
                          as={ReactLink}
                          to={'/'}
                          color={'#fff'}
                          fontSize={'16px'}
                          maxW={'500px'}
                        >
                          Plans & Pricing
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          as={ReactLink}
                          to={'/'}
                          color={'#fff'}
                          fontSize={'16px'}
                          maxW={'500px'}
                        >
                          Personal AI Manager
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          as={ReactLink}
                          to={'/'}
                          color={'#fff'}
                          fontSize={'16px'}
                          maxW={'500px'}
                        >
                          AI Business Writer
                        </Link>
                      </ListItem>
                    </UnorderedList>
                  </Stack>
                  <Stack>
                    <Text color={'#c3c3c3'} fontSize={'16px'} maxW={'500px'}>
                      Company
                    </Text>
                    <UnorderedList spacing={2} listStyleType={'none'}>
                      <ListItem>
                        <Link
                          as={ReactLink}
                          to={'/'}
                          color={'#fff'}
                          fontSize={'16px'}
                          maxW={'500px'}
                        >
                          Blog
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          as={ReactLink}
                          to={'/'}
                          color={'#fff'}
                          fontSize={'16px'}
                          maxW={'500px'}
                        >
                          Careers
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          as={ReactLink}
                          to={'/'}
                          color={'#fff'}
                          fontSize={'16px'}
                          maxW={'500px'}
                        >
                          News
                        </Link>
                      </ListItem>
                    </UnorderedList>
                  </Stack>
                  <Stack>
                    <Text color={'#c3c3c3'} fontSize={'16px'} maxW={'500px'}>
                      Resources
                    </Text>
                    <UnorderedList spacing={2} listStyleType={'none'}>
                      <ListItem>
                        <Link
                          as={ReactLink}
                          to={'/'}
                          color={'#fff'}
                          fontSize={'16px'}
                          maxW={'500px'}
                        >
                          Documentation
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          as={ReactLink}
                          to={'/'}
                          color={'#fff'}
                          fontSize={'16px'}
                          maxW={'500px'}
                        >
                          Paper
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          as={ReactLink}
                          to={'/'}
                          color={'#fff'}
                          fontSize={'16px'}
                          maxW={'500px'}
                        >
                          Press Conferences
                        </Link>
                      </ListItem>
                    </UnorderedList>
                  </Stack>
                </SimpleGrid>
              </Stack>
            </SimpleGrid>
          </Stack>
          <Stack py={{base : 6 ,md :12}}>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} spacing={{base : 6 ,md:40}}>
              <Stack>
                <Text color={'#c3c3c3'} fontSize={'16px'} maxW={'500px'} textAlign={{base : 'center',md :'start'}}>
                  {' '}
                  2024 Ⓒ All rights reserved
                </Text>
              </Stack>
              <Stack alignItems={{base : 'center',md :'self-end'}}>
                <UnorderedList
                  gap={{base : 4 ,md :12}}
                  display={'flex'}
                  alignItems={'center'}
                  listStyleType={'none'}
                >
                  <ListItem>
                    <Link
                      as={ReactLink}
                      to={'/'}
                      color={'#fff'}
                      fontSize={'16px'}
                      maxW={'500px'}
                    >
                      Term of Service
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      as={ReactLink}
                      to={'/'}
                      color={'#fff'}
                      fontSize={'16px'}
                      maxW={'500px'}
                    >
                      Privacy Policy
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      as={ReactLink}
                      to={'/'}
                      color={'#fff'}
                      fontSize={'16px'}
                      maxW={'500px'}
                    >
                      Cookies Policy
                    </Link>
                  </ListItem>
                </UnorderedList>
              </Stack>
            </SimpleGrid>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
