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
import Check1 from './Check1';
import Truck from '../../assets/images/truck.png';
import Truck2 from '../../assets/images/bg.jpg';
import Truck3 from '../../assets/images/dummy.png';
import Truck4 from '../../assets/images/truck_upload.png';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function ManageAdDetail({ name }) {
  const images = [Truck, Truck2, Truck3, Truck4];
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <Stack px={!name && 4} pb={!name && 4} overflowY={'auto'}>
      {!name && <CustHeading name={'Manage Ad Details'} />}
      <Stack
        direction={'row'}
        w="100%"
        // h={'auto'}
        pb={6}
        bg="#00092D"
        borderRadius={'10px'}
      >
        <Box w="70%">
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
              h="77px"
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
            <Stack w="100%" direction={'row'} gap={4}>
              <Stack w="30%">
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
                  h="77px"
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
              <Stack w="70%">
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
        <Box w="30%" px={2} py={4} margin={'0 !important'}>
          <Stack
            border={'1px solid #000D41'}
            bg={'#000D41 '}
            borderRadius={'20px'}
          >
            <Check1 name="manage-ads" />
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}

export default ManageAdDetail;
