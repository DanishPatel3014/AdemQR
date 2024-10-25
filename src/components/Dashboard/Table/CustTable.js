import {
  Text,
  Box,
  Button,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  TableContainer,
} from '@chakra-ui/react';
import React from 'react';

function CustTable({ header, data }) {
  return (
    <>
      {/* Table */}
      <Stack px={2} pb={4}>
        <Box
          bg="#00092D"
          px="6"
          py={4}
          borderRadius="20px"
          color="white"
          display="flex"
          alignItems="center"
          boxShadow="lg"
          flexDirection={'column'}
          w={'100%'}
          overflowX="auto"
        >
          <Stack
            w={'100%'}
            direction={'row'}
            align="center"
            justifyContent={'space-between'}
          >
            <Text fontSize={'20px'} fontWeight={500}>
              Ad Campaigns
            </Text>
            <Button
              bg="transparent"
              background="linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)"
              borderRadius="full"
              opacity="1"
              fontSize={'16px'}
              fontWeight={400}
            >
              view All
            </Button>
          </Stack>
          <Table variant="simple" colorScheme="whiteAlpha" mt={5}>
            <Thead
              bg="linear-gradient(180deg, #361F6A 0%, #2A1B57 100%)"
              borderRadius={'12px !important'}
            >
              <Tr textDecoration={'none'}>
                {header?.map((item, index) => (
                  <Th
                    fontSize={'14px'}
                    fontWeight={500}
                    color={'#fff'}
                    key={index}
                  >
                    {item}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((item, index) => (
                <Tr key={index}>
                  {Object.keys(item).map((key, index) => (
                    <Td fontSize={{ xl: '15px', '2xl': '16px' }} key={index}>
                      {item[key]}
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Stack>
      {/* Table */}
    </>
  );
}

export default CustTable;
