import {
  Box,
  Button,
  FormLabel,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import CustInput from '../../components/Dashboard/CustHeading/CustInput';
import { useLocation } from 'react-router-dom';
import { SmallCloseIcon } from '@chakra-ui/icons';

function AddTruck() {
  const location = useLocation();
  const checkPath = location.pathname.split('/')[2];
  const [imageURLs, setImageURLs] = useState([]);
  const handleImageUpload = event => {
    const files = event.target.files;

    const newImageURLs = Array.from(files).map(file =>
      URL.createObjectURL(file)
    );
    setImageURLs(prevImageURLs => [...prevImageURLs, ...newImageURLs]);
  };

  useEffect(() => {
    return () => {
      imageURLs.forEach(url => URL.revokeObjectURL(url));
    };
  }, [imageURLs]);

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
          cursor={'pointer'}
          onClick={() => document.getElementById('fileId').click()}
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
        <Input
          type="file"
          multiple
          id="fileId"
          onChange={handleImageUpload}
          display={'none'}
        />
        <Stack w="60%" direction={'row'} gap={4}>
          {imageURLs.map((url, index) => (
            <Stack position={'relative'} key={index}>
              <Image
                borderRadius={'12px'}
                w="145px"
                h="145px"
                src={url}
                alt={`Preview ${index + 1}`}
              />
              <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                w="17px"
                h="17px"
                bg="#C086EC"
                borderRadius={'50%'}
                pos={'absolute'}
                right={2}
                top={0}
                onClick={() => setImageURLs(prevImageURLs => prevImageURLs.slice(0, index).concat(prevImageURLs.slice(index + 1)))}
              >
                <SmallCloseIcon color={'#fff'} />
              </Box>
            </Stack>
          ))}
        </Stack>
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
