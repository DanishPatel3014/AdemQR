import React from 'react';
import InnerBanner from '../../components/Website/Banner/InnerBanner';
import {
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Flex,
  Box,
  Icon,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Link,
  Button,
} from '@chakra-ui/react';
import { IoIosCall, IoIosMail } from 'react-icons/io';
import { FaLocationArrow, FaClock } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';

export default function ContactUs() {
  return (
    <>
      <InnerBanner title="Contact Us" />
      <Stack py={32}>
        <Container maxW={'1600px'}>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap={12} alignItems={'center'}>
            <Stack gap={8}>
              <Stack>
                <Heading color={'#fff'} fontSize={{base : '30px',md:'70px'}}>
                  Contact Us
                </Heading>
                <Text color={'#c3c3c3'} pr={28}>
                  We're here to help with all your inquiries, whether you're a
                  truck driver looking to earn through ads or an advertiser
                  seeking to boost your brand's visibility. Please don’t
                  hesitate to reach out—we're just a message away!
                </Text>
              </Stack>
              <UnorderedList spacing={6}>
                <ListItem>
                  <Flex alignItems={'center'} gap={2}>
                    <Box
                      bg={'#C086EC'}
                      w={'50px'}
                      h={'50px'}
                      borderRadius={'50%'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      display="flex"
                    >
                      <Icon fontSize={'25px'} color={'#fff'} as={IoIosCall} />
                    </Box>
                    <Text color={'#fff'} fontSize={'16px'}>
                      +1 123 456 879
                    </Text>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex alignItems={'center'} gap={2}>
                    <Box
                      bg={'#C086EC'}
                      w={'50px'}
                      h={'50px'}
                      borderRadius={'50%'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      display="flex"
                    >
                      <Icon fontSize={'25px'} color={'#fff'} as={IoIosMail} />
                    </Box>
                    <Text color={'#fff'} fontSize={'16px'}>
                      info@adem.com
                    </Text>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex alignItems={'center'} gap={2}>
                    <Box
                      bg={'#C086EC'}
                      w={'50px'}
                      h={'50px'}
                      borderRadius={'50%'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      display="flex"
                    >
                      <Icon
                        fontSize={'25px'}
                        color={'#fff'}
                        as={FaLocationArrow}
                      />
                    </Box>
                    <Text color={'#fff'} fontSize={'16px'} maxW={'300px'}>
                      ABC Headquarters 123 Main Street, Suite 100 City, State,
                      ZIP Code
                    </Text>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex alignItems={'center'} gap={2}>
                    <Box
                      bg={'#C086EC'}
                      w={'50px'}
                      h={'50px'}
                      borderRadius={'50%'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      display="flex"
                    >
                      <Icon fontSize={'25px'} color={'#fff'} as={FaClock} />
                    </Box>
                    <Text color={'#fff'} fontSize={'16px'}>
                      Mon-Fri, 9:00 AM - 6:00 PM (EST)
                    </Text>
                  </Flex>
                </ListItem>
              </UnorderedList>
            </Stack>
            <Stack
              py={12}
              px={10}
              gap={6}
              border={'1px solid #c086ec'}
              borderRadius={8}
              bg={
                'transparent linear-gradient(180deg, #2F1862 0%, #171129 100%) 0% 0% no-repeat padding-box;'
              }
            >
              <FormControl>
                <FormLabel color={'#fff'} fontSize={'14px'}>
                  Name
                </FormLabel>
                <Input
                  py={10}
                  px={6}
                  color={'#fff'}
                  outlineColor={'#00092D'}
                  border={'0'}
                  bg={'#00092D'}
                  type="text"
                  fontSize={'16px'}
                  placeholder="Enter Your Name"
                />
              </FormControl>
              <FormControl>
                <FormLabel color={'#fff'} fontSize={'14px'}>
                  Phone
                </FormLabel>
                <Input
                  py={10}
                  px={6}
                  color={'#fff'}
                  outlineColor={'#00092D'}
                  border={'0'}
                  bg={'#00092D'}
                  type="number"
                  fontSize={'16px'}
                  placeholder="Enter Your Phone"
                />
              </FormControl>
              <FormControl>
                <FormLabel color={'#fff'} fontSize={'14px'}>
                  Email
                </FormLabel>
                <Input
                  py={10}
                  px={6}
                  color={'#fff'}
                  outlineColor={'#00092D'}
                  border={'0'}
                  bg={'#00092D'}
                  type="email"
                  fontSize={'16px'}
                  placeholder="Enter Your Email"
                />
              </FormControl>
              <FormControl>
                <FormLabel color={'#fff'} fontSize={'14px'}>
                  Email
                </FormLabel>
                <Textarea
                  px={6}
                  height={'200px'}
                  color={'#fff'}
                  outlineColor={'#00092D'}
                  border={'0'}
                  bg={'#00092D'}
                  type="email"
                  fontSize={'16px'}
                  placeholder="Enter Here"
                />
              </FormControl>
              <Link to={'/register'} as={ReactLink}>
                <Button
          
                  fontSize={'15px'}
                  w={'full'}
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
                  Submit
                </Button>
              </Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  );
}
