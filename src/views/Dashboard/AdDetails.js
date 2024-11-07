import {
  Box,
  Button,
  FormLabel,
  GridItem,
  Image,
  SimpleGrid,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import FreightlinerCard from '../../components/Dashboard/Card/FreightlinerCard';
import Dummy from '../../assets/images/dummy.png';
import CustInput from '../../components/Dashboard/CustHeading/CustInput';
import Scan from '../../assets/images/scan.svg';
import { ChevronDownIcon } from '@chakra-ui/icons';

function AdDetails() {
  const [primary, setPrimary] = useState('#A17DFF');
  const [secondary, setSecondary] = useState('#5636CB');
  return (
    <Stack px={4} pb={4} overflowY={'auto'}>
      <CustHeading name={'Ad Details & Customization'} />
      <FreightlinerCard />
      <SimpleGrid columns={3} spacing="6">
        <GridItem colSpan={2}>
          <Stack py={3}>
            <CustHeading name={'Ad Content'} />
            <Stack direction={'row'} gap={4}>
              <Stack
                w={'60%'}
                h={'145px'}
                border={'2px dashed #C086EC'}
                borderRadius={'10px'}
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                bg={'#00092D '}
              >
                <Text
                  fontSize="18px"
                  fontFamily="Rubik"
                  color="#C086EC"
                  fontWeight={400}
                >
                  Upload Logo
                </Text>
              </Stack>
              <Stack w="30%" h="145px" borderRadius={'10px'}>
                <Image
                  borderRadius={'10px'}
                  src={Dummy}
                  w={'100%'}
                  h={'100%'}
                />
              </Stack>
            </Stack>
            <Stack
              w="100%"
              flexDirection={'row'}
              alignItems={'center'}
              pt={4}
              gap={6}
            >
              <Box w="50%">
                <FormLabel
                  color={'#7E798B'}
                  fontSize={'16px'}
                  fontFamily={'Rubik'}
                  fontWeight={400}
                  px={2}
                  py={1}
                  margin={'0 !important'}
                >
                  Choose Primary Colors
                </FormLabel>
                <Box w="100%" bg="#000D41" borderRadius="10px" p="3px">
                  <InputGroup>
                    <Input
                      w={'70%'}
                      border={'none'}
                      fontSize="14px"
                      fontFamily={'Rubik'}
                      type="color"
                      onChange={e => setPrimary(e.target.value)}
                      value={primary}
                    />
                    <InputRightElement
                      pointerEvents="none"
                      children={<Icon as={ChevronDownIcon} color="white" />}
                      pr="2"
                      fontSize="18px"
                    />
                  </InputGroup>
                </Box>
              </Box>
              <Box w="50%" m={'0 !important'}>
                <FormLabel
                  color={'#7E798B'}
                  fontSize={'16px'}
                  fontFamily={'Rubik'}
                  fontWeight={400}
                  px={2}
                  py={1}
                  margin={'0 !important'}
                >
                  Choose Secondary Colors
                </FormLabel>
                <Box w="100%" bg="#000D41" borderRadius="10px" p="3px">
                  <InputGroup>
                    <Input
                      w={'70%'}
                      border={'none'}
                      fontSize="14px"
                      onChange={e => setSecondary(e.target.value)}
                      fontFamily={'Rubik'}
                      type="color"
                      value={secondary}
                    />
                    <InputRightElement
                      pointerEvents="none"
                      children={<Icon as={ChevronDownIcon} color="white" />}
                      pr="2"
                      fontSize="18px"
                    />
                  </InputGroup>
                </Box>
              </Box>
            </Stack>
            <Stack>
              <Box>
                <FormLabel
                  color={'#7E798B'}
                  fontSize={'16px'}
                  fontFamily={'Rubik'}
                  fontWeight={400}
                  px={2}
                  py={1}
                  margin={'0 !important'}
                >
                  Qr Code Destination URL
                </FormLabel>
                <CustInput name={'Type here'} />
              </Box>
              <Box>
                <FormLabel
                  color={'#7E798B'}
                  fontSize={'16px'}
                  fontFamily={'Rubik'}
                  fontWeight={400}
                  px={2}
                  py={1}
                  margin={'0 !important'}
                >
                  Ad Text
                </FormLabel>
                <CustInput name={'Type here'} />
              </Box>
            </Stack>
          </Stack>
        </GridItem>
        <GridItem colSpan={1}>
          <Stack pt={2}>
            <Stack px={4} py={4} h="300px" bg={'#00092D'} borderRadius={'10px'}>
              <CustHeading name={'Ad Preview'} />
              <Stack
                w="100%"
                h="189px"
                bg={'#C086EC'}
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
                  bg={'#7F48D6'}
                >
                  <Image src={Scan} w="110px" h="110px" />
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
            <Stack py={3}>
              <Button
                bg="transparent"
                background="linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)"
                borderRadius="10px"
                opacity="1"
                fontSize={'16px'}
                fontWeight={400}
                color={'#fff'}
                // w={'119px'}
                // h="30px"
                // p={4}
                // w={'max-content'}
                _hover={{
                  background:
                    'linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)',
                }}
              >
                Preview Link
              </Button>
            </Stack>
            <Stack>
              <Button
                bg="transparent"
                background="linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)"
                borderRadius="10px"
                opacity="1"
                fontSize={'16px'}
                fontWeight={400}
                color={'#fff'}
                _hover={{
                  background:
                    'linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)',
                }}
                // w={'119px'}
                // h="30px"
                // p={4}
                // w={'max-content'}
              >
                Finish
              </Button>
            </Stack>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Stack>
  );
}

export default AdDetails;
