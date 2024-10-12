import {
  Box,
  FormLabel,
  GridItem,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import FreightlinerCard from '../../components/Dashboard/Card/FreightlinerCard';
import Dummy from '../../assets/images/dummy.png';
import CustInput from '../../components/Dashboard/CustHeading/CustInput';
function AdDetails() {
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
            <Stack pt={4}>
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
          <Stack pt={4}>
            <Stack px={4} py={2} h="200px" bg={'#00092D'} borderRadius={'10px'}>
              <CustHeading name={'Ad Preview'} />
            </Stack>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Stack>
  );
}

export default AdDetails;
