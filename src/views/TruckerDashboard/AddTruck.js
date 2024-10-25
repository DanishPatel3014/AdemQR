import {
  Box,
  Button,
  FormLabel,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import TruckUpload from '../../assets/images/truck_upload.png';
import CustInput from '../../components/Dashboard/CustHeading/CustInput';

function AddTruck() {
  return (
    <Stack px={4} pb={4} overflowY={'auto'} overflowX={'hidden'}>
      <CustHeading name={'Add Truck'} />
      <Stack direction={'row'} gap={4} pb={16} cursor={'pointer'}>
        <Stack
          w={'40%'}
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
            Upload Pics
          </Text>
        </Stack>
        <Stack w="60%" direction={'row'} gap={4}>
          <Image w="145px" h="145px" src={TruckUpload} alt="truck_upload" />
          <Image w="145px" h="145px" src={TruckUpload} alt="truck_upload" />
          <Image w="145px" h="145px" src={TruckUpload} alt="truck_upload" />
          <Image w="145px" h="145px" src={TruckUpload} alt="truck_upload" />
          <Image w="145px" h="145px" src={TruckUpload} alt="truck_upload" />
        </Stack>
        {/* <Stack w="30%" h="145px" borderRadius={'10px'}>
          <Image borderRadius={'10px'} src={Dummy} w={'100%'} h={'100%'} />
        </Stack> */}
      </Stack>
      <Stack direction={'column'} gap={6}>
        <HStack
          w={'100%'}
          direction={'row'}
          //   justifyContent={'space-between'}
          alignItems={'center'}
          gap={10}
          flexWrap={'wrap'}
          //   pr={4}
        >
          <Box w={'30%'}>
            <FormLabel
              color={'#7E798B'}
              fontSize={'16px'}
              fontFamily={'Rubik'}
              fontWeight={400}
              px={2}
              py={1}
              margin={'0 !important'}
            >
              Model
            </FormLabel>
            <CustInput name={'Type here'} />
          </Box>
          <Box w={'30%'}>
            <FormLabel
              color={'#7E798B'}
              fontSize={'16px'}
              fontFamily={'Rubik'}
              fontWeight={400}
              px={2}
              py={1}
              margin={'0 !important'}
            >
              License Plate
            </FormLabel>
            <CustInput name={'1234-4567-8910-1112'} />
          </Box>
          <Box w={'30%'}>
            <FormLabel
              color={'#7E798B'}
              fontSize={'16px'}
              fontFamily={'Rubik'}
              fontWeight={400}
              px={2}
              py={1}
              margin={'0 !important'}
            >
              Capacity
            </FormLabel>
            <CustInput name={'1234-4567-8910-1112'} />
          </Box>
        </HStack>
        <HStack
          w={'100%'}
          direction={'row'}
          //   justifyContent={'space-between'}
          alignItems={'center'}
          gap={10}
          flexWrap={'wrap'}
          //   pr={4}
        >
          <Box w={'30%'}>
            <FormLabel
              color={'#7E798B'}
              fontSize={'16px'}
              fontFamily={'Rubik'}
              fontWeight={400}
              px={2}
              py={1}
              margin={'0 !important'}
            >
              Route from
            </FormLabel>
            <CustInput name={'Type here'} />
          </Box>
          <Box w={'30%'}>
            <FormLabel
              color={'#7E798B'}
              fontSize={'16px'}
              fontFamily={'Rubik'}
              fontWeight={400}
              px={2}
              py={1}
              margin={'0 !important'}
            >
              Route to
            </FormLabel>
            <CustInput name={'1234-4567-8910-1112'} />
          </Box>
          <Box w={'30%'}>
            <FormLabel
              color={'#7E798B'}
              fontSize={'16px'}
              fontFamily={'Rubik'}
              fontWeight={400}
              px={2}
              py={1}
              margin={'0 !important'}
            >
              Ad Space
            </FormLabel>
            <CustInput name={'1234-4567-8910-1112'} />
          </Box>
        </HStack>
        <HStack
          w={'100%'}
          direction={'row'}
          //   justifyContent={'space-between'}
          alignItems={'center'}
          gap={10}
          flexWrap={'wrap'}
          //   pr={4}
        >
          <Box w={'30%'}>
            <FormLabel
              color={'#7E798B'}
              fontSize={'16px'}
              fontFamily={'Rubik'}
              fontWeight={400}
              px={2}
              py={1}
              margin={'0 !important'}
            >
              Driver
            </FormLabel>
            <CustInput name={'Type here'} />
          </Box>

          <Box w={'30%'} pt={4}>
            <Button
              width={'100%'}
              bg="linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)"
              color="#fff"
              fontWeight={400}
              borderRadius={'7px'}
            >
              Pay Now
            </Button>
          </Box>
          <Box w={'30%'}></Box>
        </HStack>
      </Stack>
    </Stack>
  );
}

export default AddTruck;
