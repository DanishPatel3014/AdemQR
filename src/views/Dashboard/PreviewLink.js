import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import Dummy from '../../assets/images/dummy.png';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';

function PreviewLink() {
  return (
    <Stack w="100%" overflowY={'auto'} overflowX={'hidden'}>
      <Stack w={{ xl: '90%', '2xl': '70%' }} px={4} pb={8}>
        <CustHeading name={'Preview Link'} />
        <Box>
          <Image src={Dummy} alt="dummy" w="100%" h="100%" />
        </Box>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          pb={2}
          px={2}
          pt={3}
        >
          <Heading
            fontFamily={'Montserrat'}
            fontSize={'18px'}
            fontWeight={600}
            color={'#fff'}
          >
            Truck Details
          </Heading>
          <HStack>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              w="36px"
              h="36px"
              bg="#C086EC"
              borderRadius="50%"
              cursor={'pointer'}
            >
              <FaRegThumbsUp fontSize={'20px'} color={'#fff'} />
            </Box>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              w="36px"
              h="36px"
              bg="#C086EC"
              borderRadius="50%"
              cursor={'pointer'}
            >
              <FaRegThumbsDown fontSize={'20px'} color={'#fff'} />
            </Box>
          </HStack>
        </Stack>
        <Stack p={'15px'} bg={'#000D41'} pb={4} borderRadius={'11px'}>
          <Box w="100%">
            <HStack>
              <Text fontSize={{ base : '13px',md : '16px' }} flex={1} color={'#834CD7'}>
                Company Name
              </Text>
              <Text fontSize={{ base : '13px',md : '16px' }} flex={1} color={'#834CD7'}>
                Truck
              </Text>
              <Text fontSize={{ base : '13px',md : '16px' }} flex={1} color={'#834CD7'}>
                Url
              </Text>
            </HStack>
            <HStack alignItems={'center'}>
              <Text fontSize={{ base : '13px',md : '16px' }} flex={1} color={'#fff'}>
                Abc Adertiser
              </Text>
              <Text fontSize={{ base : '13px',md : '16px' }} flex={1} color={'#fff'}>
                Volvo 560
              </Text>
              <Text w={{base : '100px' , md : '100%'}} fontSize={{ base : '13px',md : '16px' }} flex={1} color={'#fff'}>
                //viewed.com/this_is_the_preview_link
              </Text>
            </HStack>
          </Box>
        </Stack>
        <Stack w="100%" direction={{base : 'column', md: 'column',xl:'row', "2xl": 'row'}}  gap={4}>
          <Stack w={{base : '100%', md : "20%"}}>
            <Stack px={2} py={2}>
              <Heading
                fontFamily={'Montserrat'}
                fontSize={'18px'}
                fontWeight={600}
                color={'#fff'}
              >
                Ad Space
              </Heading>
            </Stack>
            <Stack
              w="100%"
              p={'15px'}
              bg={'#000D41'}
     
              m={'0 !important'}
              borderRadius={'11px'}
            >
              <HStack>
                <Text fontSize={`16px`} flex={1} color={'#834CD7'}>
                  Ad Dimensions
                </Text>
              </HStack>
              <HStack>
                <Text flex={1} color={'#fff'}>
                  10ft x 4ft
                </Text>
              </HStack>
            </Stack>
          </Stack>
          <Stack  w={{base : '100%', md : "50%"}}>
            <Stack px={2} py={2}>
              <Heading
                fontFamily={'Montserrat'}
                fontSize={'18px'}
                fontWeight={600}
                color={'#fff'}
              >
                Other Details
              </Heading>
            </Stack>
            <Stack
              w="100%"
              p={'15px'}
              bg={'#000D41'}
              h="77px"
              m={'0 !important'}
              borderRadius={'11px'}
            >
              <HStack>
                <Text fontSize={`16px`} flex={1} color={'#834CD7'}>
                  Dot
                </Text>
                <Text fontSize={`16px`} flex={1} color={'#834CD7'}>
                  MC
                </Text>
                <Text fontSize={`16px`} flex={1} color={'#834CD7'}>
                  Number
                </Text>
              </HStack>
              <HStack>
                <Text flex={1} color={'#fff'}>
                  3499157
                </Text>
                <Text flex={1} color={'#fff'}>
                  3499157
                </Text>
                <Text flex={1} color={'#fff'}>
                  123 456 789
                </Text>
              </HStack>
            </Stack>
          </Stack>
          <Stack w="30%" h="95%" justifyContent={'end'}>
            <Button
              borderRadius="6px"
              h="45px"
              bgGradient="linear(180deg, #C086EC 0%, #7F48D6 100%)"
              color={'#fff'}
              fontWeight={'400'}
              _hover={{
                bgGradient: 'linear(180deg, #C086EC 0%, #7F48D6 100%)',
              }}
              _active={{
                bgGradient: 'linear(180deg, #C086EC 0%, #7F48D6 100%)',
              }}
            >
              <Text color="#fff" fontSize="16px" as={'span'}>
                View Link
              </Text>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default PreviewLink;
