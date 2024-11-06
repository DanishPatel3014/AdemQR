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
import { useLocation } from 'react-router-dom';

function AddTruck() {
  const location = useLocation();
  const checkPath = location.pathname.split('/')[2];
  return (
    <Stack px={4} pb={16} overflowY={'auto'} overflowX={'hidden'}>
      <CustHeading
        name={checkPath === 'add-truck' ? 'Add Truck' : 'Edit Truck'}
      />
      <Stack direction={'row'} gap={4} pb={6} cursor={'pointer'}>
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
        </Stack>
        {/* <Stack w="30%" h="145px" borderRadius={'10px'}>
          <Image borderRadius={'10px'} src={Dummy} w={'100%'} h={'100%'} />
        </Stack> */}
      </Stack>
      <Stack direction={'column'} gap={4}>
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

          <Box
            w={'30%'}
            h={'89%'}
            display={'flex'}
            alignItems={'end'}
            flexDirection={'row'}
          >
            <Button
              width={'100%'}
              bg="linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)"
              color="#fff"
              fontWeight={400}
              borderRadius={'7px'}
              _hover={{
                bgGradient: 'linear(180deg, #7F48D6 0%, #C086EC 100%)',
              }}
            >
              {checkPath === 'add-truck' ? 'Post Truck' : 'Save Edits'}
            </Button>
          </Box>
          {checkPath === 'add-truck' ? (
            <Box w={'30%'}></Box>
          ) : (
            <Box
              w={'30%'}
              h={'89%'}
              display={'flex'}
              alignItems={'end'}
              flexDirection={'row'}
            >
              <Button
                width={'100%'}
                bgGradient="linear(180deg, #FC0045 0%, #6E0016 100%)"
                borderRadius="7px"
                color="#fff"
                fontWeight={400}
                _hover={{
                  bgGradient: 'linear(180deg, #FC0045 0%, #6E0016 100%)',
                }}
              >
                Cancel Edit
              </Button>
            </Box>
          )}
        </HStack>
      </Stack>
    </Stack>
  );
}

export default AddTruck;
