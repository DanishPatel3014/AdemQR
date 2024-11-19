import {
  Box,
  Button,
  GridItem,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import Truck from '../../assets/images/truck.png';
import Truck2 from '../../assets/images/bg.jpg';
import Truck3 from '../../assets/images/dummy.png';
import Truck4 from '../../assets/images/truck_upload.png';
import Check1 from '../Dashboard/Check1';
import Scan from '../../assets/images/scan.svg';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function TruckerDetail({ name }) {
  const navigate = useNavigate();
  const images = [Truck, Truck2, Truck3, Truck4];
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <Stack px={!name && 4} pb={!name && 4} overflowY={'auto'}>
      <CustHeading name={'My Truck'} />
      {/* {!name && <CustHeading name={'Manage Ad Details'} />} */}
      <Stack
        direction={{base : 'column', md: 'column',xl:'row', "2xl": 'row'}}
        w="100%"
        // h={'auto'}
        pb={6}
        bg="#00092D"
        borderRadius={'10px'}
      >
        <Box w={{base:'100%',  sm : '100%', md:'100%', xl:'70%', "2xl": '70%'}}>
          <Stack
            w={'100%'}
            direction={'row'}
            alignItems="center"
            justifyContent={'space-between'}
            px={4}
            pt={4}
          >
            <Heading
              fontSize={'32px'}
              color={'#fff'}
              // pb={4}
              fontWeight={400}
              letterSpacing={'0px'}
              fontFamily={'Montserrat'}
              // px={3}
            >
              Freightliner
            </Heading>
            <Button
              bg="transparent"
              background="linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)"
              borderRadius="full"
              opacity="1"
              fontSize={'16px'}
              w="78px"
              fontWeight={400}
              color={'#fff'}
              _hover={{
                background: 'linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)',
              }}
              // w={'119px'}
              // h="30px"
              // p={4}
              // w={'max-content'}
            >
              Active
            </Button>
          </Stack>
          <Stack
            w="100%"
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'center'}
            my={4}
          >
            <Box borderBottom={'1px solid #969DA6'} h={'1px'} w={'97%'}></Box>
          </Stack>
          <Stack px={4}>
            <Stack
              // border={'1px solid #969DA6'}
              borderRadius={'10px'}
              w="100%"
              h={'420px'}
              direction={'row'}
              gap={6}
              mb={2}
            >
              <Stack
                borderRadius={'10px'}
                width={'20%'}
                p={0}
                h={'100%'}
                direction={'column'}
              >
                {images?.map((item, index) => (
                  <Box
                    cursor={'pointer'}
                    mb={1}
                    key={index}
                    width={'100%'}
                    h="100px"
                    onClick={() => setImageIndex(index)}
                  >
                    <Image
                      borderRadius={'12px'}
                      src={item}
                      w={'100%'}
                      h={'100%'}
                    />
                  </Box>
                ))}
              </Stack>

              <Stack width={'80%'} h={'100%'}>
                <Image
                  borderRadius={'12px'}
                  src={images[imageIndex]}
                  w={'100%'}
                  h={'100%'}
                />
              </Stack>
            </Stack>
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
                  w="28px"
                  h="28px"
                  bg="#C086EC"
                  borderRadius="50%"
                  cursor={'pointer'}
                  onClick={() => {
                    if (imageIndex === 0) {
                      setImageIndex(images.length - 1);
                    } else {
                      setImageIndex(imageIndex - 1);
                    }
                  }}
                >
                  <ChevronLeftIcon fontSize={'24px'} color={'#fff'} />
                </Box>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  w="28px"
                  h="28px"
                  bg="#C086EC"
                  borderRadius="50%"
                  cursor={'pointer'}
                  onClick={() => {
                    if (imageIndex === images.length - 1) {
                      setImageIndex(0);
                    } else {
                      setImageIndex(imageIndex + 1);
                    }
                  }}
                >
                  <ChevronRightIcon fontSize={'24px'} color={'#fff'} />
                </Box>
              </HStack>
            </Stack>
            <Stack
              w="100%"
              p={'15px'}
              bg={'#000D41'}
              
              pb={4}
              borderRadius={'11px'}
            >
              <HStack>
                <Text flex={2} color={'#834CD7'}>
                  Route
                </Text>
                <Text flex={1} color={'#834CD7'}>
                  Driver:
                </Text>
                <Text flex={1} color={'#834CD7'}>
                  Driver:
                </Text>
              </HStack>
              <HStack alignItems={'center'}>
                <Text fontSize={{ xl: '16px' }} flex={2} color={'#fff'}>
                  New York, NY → Los Angeles, CA
                </Text>
                <Text fontSize={{ xl: '16px' }} flex={1} color={'#fff'}>
                  John Doe
                </Text>
                <Text fontSize={{ xl: '16px' }} flex={1} color={'#fff'}>
                  John Doe
                </Text>
              </HStack>
            </Stack>
            <Stack w="100%" direction={{base : 'column', md: 'column',xl:'row', "2xl": 'row'}} gap={4}>
              <Stack w={{base:'100%',  sm : '100%', md:'100%', xl:'30%', "2xl": '30%'}}>
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
              <Stack w={{base:'100%',  sm : '100%', md:'100%', xl:'70%', "2xl": '70%'}}>
                <Stack px={2} py={2}>
                  <Heading
                    fontFamily={'Montserrat'}
                    fontSize={'18px'}
                    fontWeight={600}
                    color={'#fff'}
                  >
                    Stats
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
                      Impressions
                    </Text>
                    <Text fontSize={`16px`} flex={1} color={'#834CD7'}>
                      QR Scans
                    </Text>
                    <Text fontSize={`16px`} flex={1} color={'#834CD7'}>
                      Reach
                    </Text>
                  </HStack>
                  <HStack>
                    <Text flex={1} color={'#fff'}>
                      140000
                    </Text>
                    <Text flex={1} color={'#fff'}>
                      2,500
                    </Text>
                    <Text flex={1} color={'#fff'}>
                      40,000
                    </Text>
                  </HStack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Box
          w={{base:'100%',  sm : '100%', md:'100%', xl:'30%', "2xl": '30%'}}
          px={2}
          py={4}
          display={'flex'}
          flexDirection={'column'}
          gap={12}
          margin={'0 !important'}
        >
          <Stack
            border={'1px solid #000D41'}
            bg={'#000D41 '}
            borderRadius={'20px'}
          >
            <Check1 name="manage-ads" />
          </Stack>
          <Stack
            border={'1px solid #000D41'}
            bg={'#000D41 '}
            borderRadius={'20px'}
            h="270px"
            px={4}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Stack
              w="100%"
              direction={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              my={4}
            >
              <Text fontSize={'22px'} fontFamily={'Montserrat'} color={'#fff'}>
                Current Ad
              </Text>
              <Box
                w="102px"
                h="24px"
                bgGradient="linear(180deg, #C086EC 0%, #7F48D6 100%)"
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'12px'}
              >
                <Text fontSize={'14px'} fontFamily={'Rubik'} color={'#fff'}>
                  09/01/2024
                </Text>
              </Box>
            </Stack>
            <Stack
              w="100%"
              h="160px"
              my={4}
              bgGradient="linear(180deg, #468D00 0%, #003A0A 100%)"
              // bg={'#C086EC'}
              // bg={'linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)'}
              borderRadius={'10px'}
              px={3}
              direction={'row'}
              alignItems={'center'}
            >
              <Stack
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                w="134px"
                h="100%"
                bg="#000D41"
                opacity={0.39}
              >
                <Image src={Scan} color={'#fff'} w="71px" h="91px" />
                <Text fontSize={'18px'} fontFamily={'Rubik'} color={'#fff'}>
                  Scan Me
                </Text>
              </Stack>
              <Stack
                lineHeight={1}
                px={3}
                direction={'column'}
                justifyContent={'center'}
              >
                <Text fontSize={'20px'} fontFamily={'Rubik'} color={'#fff'}>
                  Get Fashion
                </Text>
                <Text fontSize={'20px'} fontFamily={'Rubik'} color={'#fff'}>
                  Discounts Upto
                </Text>
                <Text
                  fontSize={'22px'}
                  fontWeight={'bold'}
                  fontFamily={'Rubik'}
                  color={'#fff'}
                >
                  80% Off
                </Text>
              </Stack>
            </Stack>
          </Stack>
          <Button
            onClick={() => navigate('/trucker/edit-truck')}
            borderRadius="6px"
            bgGradient="linear(180deg, #C086EC 0%, #7F48D6 100%)"
            color={'#fff'}
            fontWeight={'400'}
            _hover={{ bgGradient: 'linear(180deg, #7F48D6 0%, #C086EC 100%)' }}
            _active={{ bgGradient: 'linear(180deg, #7F48D6 0%, #C086EC 100%)' }}
          >
            <Text color="#fff" fontSize="18px" as={'span'}>
              Edit
            </Text>
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}

export default TruckerDetail;
