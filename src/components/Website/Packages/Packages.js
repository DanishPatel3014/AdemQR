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
  Flex,
  UnorderedList,
  ListItem,
  Icon,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { IoMdCheckmark } from 'react-icons/io';

export default function Packages() {
  const Packagelist = [
    {
      Packagename: 'Basic Package',
      rate: '$100',
      package: [
        { name: 'Fixed content that does not require updates.' },
        { name: 'Standard QR code with no customization.' },
        { name: 'Access to basic performance metrics.' },
        { name: 'Option to include basic customization.' },
        { name: 'Fixed content that does not require updates.' },
        { name: 'Standard QR code with no .' },
        { name: 'Access to basic performance .' },
        { name: 'Option to include basic .' },
      ],
    },
    {
      Packagename: 'Standard Package',
      rate: '$250',
      package: [
        { name: 'Fixed content that does not require updates.' },
        { name: 'Standard QR code with no customization.' },
        { name: 'Access to basic performance metrics.' },
        { name: 'Option to include basic customization.' },
        { name: 'Fixed content that does not require updates.' },
        { name: 'Standard QR code with no .' },
        { name: 'Access to basic performance .' },
        { name: 'Option to include basic .' },
      ],
    },
    {
      Packagename: 'Premium Package',
      rate: '$500',
      package: [
        { name: 'Fixed content that does not require updates.' },
        { name: 'Standard QR code with no customization.' },
        { name: 'Access to basic performance metrics.' },
        { name: 'Option to include basic customization.' },
        { name: 'Fixed content that does not require updates.' },
        { name: 'Standard QR code with no .' },
        { name: 'Access to basic performance .' },
        { name: 'Option to include basic .' },
      ],
    },
  ];

  return (
    <>
      <Stack py={{ base: 12, md: 24 }}>
        <Container maxW={{ base: '100%', lg:'1400px',  '2xl': '1600px' }} gap={{ base: 6, md: 20 }}>
          <Stack className="animate__animated  animate__fadeInLeft animate__delay-2s">
            <Heading
              fontSize={{ base: '30px', md: '64px' }}
              fontWeight={'500'}
              fontFamily={'"Raleway", sans-serif'}
              color={'#fff'}
            >
              Our
              <Box
                verticalAlign={'middle'}
                as="span"
                w={{ base: '90px', md: '202px' }}
                h={{ base: '25px', md: '59px' }}
                display={'inline-flex'}
                bg={
                  'transparent linear-gradient(180deg, #C086EC 0%, #7F48D6 100%) 0% 0% no-repeat padding-box;'
                }
                mx={3}
                borderRadius={'30px'}
              ></Box>
              <Text as={'span'} color={'#C086EC'}>
                Affordable
              </Text>{' '}
              <br />
              <Text as={'span'} color={'#C086EC'}>
                Payment
              </Text>{' '}
              <Box
                verticalAlign={'middle'}
                as="span"
                w={{ base: '90px', md: '202px' }}
                h={{ base: '25px', md: '59px' }}
                display={'inline-flex'}
                bg={
                  'transparent linear-gradient(180deg, #C086EC66 0%, #7F48D64F 100%) 0% 0% no-repeat padding-box;'
                }
                mx={3}
                borderRadius={'30px'}
              ></Box>
              Structure
            </Heading>
          </Stack>
          <SimpleGrid
            columns={{ base: 1, md: 3, xl: 3 }}
            gap={10}
            pt={{ base: 12, md: 24 }}
            alignItems={'center'}
            className="animate__animated  animate__fadeInUp animate__delay-2s"
          >
            {Packagelist?.length > 0 &&
              Packagelist?.map((v, k) => {
                return (
                 <Stack  role="group">
                   <Stack
                    key={k}
                    gap={4}
                    px={6}
                    py={6}
                    borderRadius={'15px'}
                    border={'1px solid #DDDDDD'}
                    bg={
                      'transparent linear-gradient(180deg, #2F1862 0%, #171129 100%) 0% 0% no-repeat padding-box;'
                    }
                   
                    _groupHover={{
                      border : '1px solid #C086EC',
                    }}
                  >
                    <Flex
                      alignItems={'center'}
                      justifyContent={'space-between'}
                    >
                      <Heading
                        fontWeight={500}
                        color={'#fff'}
                        fontSize={'25px'}
                      >
                        {v?.Packagename}
                      </Heading>
                      <Tag
                        justifyContent={'center'}
                        w={'120px'}
                        h={'55px'}
                        color={'#fff'}
                        fontSize={'23px'}
                        bg={
                          'transparent linear-gradient(180deg, #C086EC 0%, #7F48D6 100%) 0% 0% no-repeat padding-box;'
                        }
                        mx={3}
                        borderRadius={'15px'}
                      >
                        {v?.rate}
                      </Tag>
                    </Flex>
                    <Text
                      borderBottom={'1px solid #C086EC'}
                      pb={2}
                      color={'#c3c3c3'}
                      fontSize={'16px'}
                    >
                      For individuals or small teams looking to explore the
                      platform's capabilities.
                    </Text>
                    <UnorderedList
                      listStyleType={'none'}
                      color={'#fff'}
                      spacing={4}
                    >
                      {v.package?.length > 0 &&
                        v.package?.map((item, index) => {
                          return (
                            <ListItem key={index}>
                              <Flex alignItems={'center'} gap={2}>
                                <Box
                                  bg={'#C086EC'}
                                  w={'20px'}
                                  h={'20px'}
                                  borderRadius={'50%'}
                                  justifyContent={'center'}
                                  alignItems={'center'}
                                  display="flex"
                                >
                                  <Icon fontSize={'14px'} as={IoMdCheckmark} />
                                </Box>
                                <Text color={'#fff'} fontSize={'15px'}>
                                  {item?.name}
                                </Text>
                              </Flex>
                            </ListItem>
                          );
                        })}
                    </UnorderedList>
                    <Link to={'/register'} as={ReactLink}>
                      <Button
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'15px'}
                        w={'full'}
                        p={'25px 30px'}
                        fontWeight={400}
                        color={'white'}
                      
                        borderRadius={'10px'}
                        bg={
                          'transparent linear-gradient(180deg, #C086EC66 0%, #7F48D64F 100%) 0% 0% no-repeat padding-box;'
                        }
                        _hover={{
                          bg: 'transparent linear-gradient(180deg, #C086EC 0%, #7F48D6 100%) 0% 0% no-repeat padding-box;',
                          color: '#fff',
                        }}
                        _groupHover={{
                          bg: 'transparent linear-gradient(180deg, #C086EC 0%, #7F48D6 100%) 0% 0% no-repeat padding-box;',
                        }}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </Stack>
                 </Stack>
                );
              })}
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  );
}
