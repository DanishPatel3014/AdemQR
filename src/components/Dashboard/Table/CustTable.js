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
} from '@chakra-ui/react';
import React from 'react';

function CustTable() {
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
              // w={'119px'}
              // h="30px"
              // p={4}
              // w={'max-content'}
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
                <Th fontSize={'14px'} fontWeight={500} color={'#fff'}>
                  Campaign Name
                </Th>
                <Th fontSize={'14px'} fontWeight={500} color={'#fff'}>
                  Truck ID
                </Th>
                <Th fontSize={'14px'} fontWeight={500} color={'#fff'}>
                  Start Date
                </Th>
                <Th fontSize={'14px'} fontWeight={500} color={'#fff'}>
                  End Date
                </Th>
                <Th fontSize={'14px'} fontWeight={500} color={'#fff'}>
                  Trucker/Truck Company
                </Th>
                <Th fontSize={'14px'} fontWeight={500} color={'#fff'}>
                  Total QR Scans
                </Th>
                <Th fontSize={'14px'} fontWeight={500} color={'#fff'}>
                  Ad Spent
                </Th>
                <Th fontSize={'14px'} fontWeight={500} color={'#fff'}>
                  Ad Status
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>Winter Sale</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>TRK123</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>01-Sep-24</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>30-Sep-24</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>John Doe</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>250</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>$1,500</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>Active</Td>
              </Tr>
              <Tr>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>Winter Sale</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>TRK123</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>01-Sep-24</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>30-Sep-24</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>John Doe</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>250</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>$1,500</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>Active</Td>
              </Tr>
              <Tr>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>Winter Sale</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>TRK123</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>01-Sep-24</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>30-Sep-24</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>John Doe</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>250</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>$1,500</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>Active</Td>
              </Tr>
              <Tr>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>Winter Sale</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>TRK123</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>01-Sep-24</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>30-Sep-24</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>John Doe</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>250</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>$1,500</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>Active</Td>
              </Tr>
              <Tr>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>Winter Sale</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>TRK123</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>01-Sep-24</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>30-Sep-24</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>John Doe</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>250</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>$1,500</Td>
                <Td fontSize={{ xl: '15px', '2xl': '16px' }}>Active</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Stack>
      {/* Table */}
    </>
  );
}

export default CustTable;
