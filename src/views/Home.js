import {
  Avatar,
  Button,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
  IconButton,
  InputRightElement,
  Heading,
  SimpleGrid,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import { SearchIcon, SettingsIcon } from '@chakra-ui/icons';
import User from '../assets/images/avatar.png';
import { IoIosNotifications } from 'react-icons/io';
import { IoMdSettings } from 'react-icons/io';

import { NAV_ITEMS } from '../utilities/constant';
import Check from './Check';

export default function Home() {
  return (
    <Stack
      w={'100vw'}
      h={`100vh`}
      bg="#171129"
      backgroundRepeat="no-repeat"
      backgroundPosition="0% 0%"
      backgroundSize="auto"
      opacity={1}
      direction="row"
      gap={2}
    >
      {/* Side bar */}
      <Stack
        w="20%"
        h="100%"
        bgGradient="linear(to-b, rgba(47, 24, 98, 1) 0%, rgba(23, 17, 41, 1) 100%)"
        opacity={1}
        direction="column"
      >
        <Stack mx={6} direction="row" align="center" my={6}>
          <Stack>
            <Text fontSize="32px" fontWeight="200" color="#fff">
              Your
              <Text as="span" color="rgba(131, 76, 215, 1)">
                Logo
              </Text>
            </Text>
          </Stack>
        </Stack>
        <Stack direction="row" align="center" m={'10px 24px !important'}>
          <Stack w="54px" h="54px">
            <Avatar src={User} />
          </Stack>
          <Stack lineHeight="0.8">
            <Text fontSize="16px" fontWeight="200" color="#fff">
              Emily Johnson
            </Text>
            <Text fontSize="14px" fontWeight="200" color="#7E798B">
              emily@yourweb.com
            </Text>
          </Stack>
        </Stack>
        <Stack flexGrow={1}>
          <UnorderedList
            mx={'0 !important'}
            // className="sidemenu"
            listStyleType={'none'}
            maxHeight={{
              lg: '400px',
              xl: '490px',
              '2xl': '800px',
            }}
            w={'90%'}
          >
            {NAV_ITEMS.map(val => (
              <ListItem key={val} mb={'10px !important'}>
                <Stack>
                  <Button
                    px={4}
                    // onClick={() => handleUrlChange(val.url)}
                    borderRadius="0px 10px 10px 0px"
                    // borderRadius={'21.5px'}
                    bgGradient={
                      val === 'Dashboard'
                        ? 'linear(to-b, var(--unnamed-color-c086ec) 0%, #7F48D6 100%)'
                        : 'transparent'
                    }
                    bg={'none'}
                    justifyContent={'flex-start'}
                    color={'#000'}
                    fontWeight={'400'}
                  >
                    <Text color="#fff" fontSize="18px" as={'span'}>
                      {val}
                    </Text>
                  </Button>
                </Stack>
              </ListItem>
            ))}
          </UnorderedList>
        </Stack>
        <Stack justifyContent={'flex-end'} mx={6}>
          <Button
            borderRadius="10px"
            m="10px 20px"
            bgGradient={
              'linear(to-b, var(--unnamed-color-c086ec) 0%, #7F48D6 100%)'
            }
            color={'#fff'}
            fontWeight={'400'}
          >
            <Text color="#fff" fontSize="18px" as={'span'}>
              logout
            </Text>
          </Button>
        </Stack>
      </Stack>
      {/* Side bar */}
      {/* Search Bar */}

      <Stack width="80%">
        {/* Search Bar */}
        <Box
          mx={2}
          my={4}
          bg="#00092D"
          py={2}
          px={4}
          borderRadius="14px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="#969DA6" />
            </InputLeftElement>
            <Input
              border="none"
              outline="none"
              type="text"
              fontSize="16px"
              placeholder="Search trucks by location"
              borderRadius="14px"
              color="#fff"
              bg="transparent"
              _placeholder={{ color: '#969DA6' }}
              pr="150px"
            />
            <InputRightElement width="auto" pointerEvents="none">
              <HStack spacing={4} align="center">
                <IoIosNotifications fontSize="24px" color="#969DA6" />
                <IoMdSettings fontSize="24px" color="#969DA6" />
                <Text fontSize="16px" color="#fff" whiteSpace="nowrap">
                  Wed, Sep 09, 12:45:11
                </Text>
              </HStack>
            </InputRightElement>
          </InputGroup>
        </Box>
        {/* Search bar */}

        {/* Heading */}
        <Heading
          fontSize={'32px'}
          color={'#fff'}
          pb={4}
          fontWeight={400}
          letterSpacing={'0px'}
          px={3}
        >
          Advertiser Dashboard
        </Heading>
        {/* Heading */}
        {/* Stats */}
        <Stack px={2} pb={4}>
          <SimpleGrid columns={[1, 2, 4]} spacing="6">
            <Box
              bg="#00092D"
              p="6"
              borderRadius="20px"
              color="white"
              display="flex"
              alignItems="center"
              boxShadow="lg"
            >
              {/* Vertical Bar */}
              <Box
                h="full"
                w="4px"
                bg="purple.400"
                borderRadius="full"
                mr="4"
              />

              {/* Content */}
              <Box>
                <Text fontSize="32px" fontWeight="bold">
                  3
                </Text>
                <Text fontSize="16px" color="#E0E4EA" fontWeight={300}>
                  Active Ads
                </Text>
              </Box>
            </Box>
            <Box
              bg="#00092D"
              p="6"
              borderRadius="20px"
              color="white"
              display="flex"
              alignItems="center"
              boxShadow="lg"
            >
              {/* Vertical Bar */}
              <Box
                h="full"
                w="4px"
                bg="purple.400"
                borderRadius="full"
                mr="4"
              />

              {/* Content */}
              <Box>
                <Text fontSize="32px" fontWeight="bold">
                  1,234
                </Text>
                <Text fontSize="16px" color="#E0E4EA" fontWeight={300}>
                  Total QR Scans
                </Text>
              </Box>
            </Box>
            <Box
              bg="#00092D"
              p="6"
              borderRadius="20px"
              color="white"
              display="flex"
              alignItems="center"
              boxShadow="lg"
            >
              {/* Vertical Bar */}
              <Box
                h="full"
                w="4px"
                bg="purple.400"
                borderRadius="full"
                mr="4"
              />

              {/* Content */}
              <Box>
                <Text fontSize="32px" fontWeight="bold">
                  $7,500
                </Text>
                <Text fontSize="16px" color="#E0E4EA" fontWeight={300}>
                  Total Ad Spend
                </Text>
              </Box>
            </Box>
            <Box
              bg="#00092D"
              p="6"
              borderRadius="20px"
              color="white"
              display="flex"
              alignItems="center"
              boxShadow="lg"
            >
              {/* Vertical Bar */}
              <Box
                h="full"
                w="4px"
                bg="purple.400"
                borderRadius="full"
                mr="4"
              />

              {/* Content */}
              <Box>
                <Text fontSize="32px" fontWeight="bold">
                  10,450
                </Text>
                <Text fontSize="16px" color="#E0E4EA" fontWeight={300}>
                  Total Impressions
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Stack>
        {/* Stats */}
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
                  <Td>Winter Sale</Td>
                  <Td>TRK123</Td>
                  <Td>01-Sep-24</Td>
                  <Td>30-Sep-24</Td>
                  <Td>John Doe</Td>
                  <Td>250</Td>
                  <Td>$1,500</Td>
                  <Td>Active</Td>
                </Tr>
                <Tr>
                  <Td>Winter Sale</Td>
                  <Td>TRK123</Td>
                  <Td>01-Sep-24</Td>
                  <Td>30-Sep-24</Td>
                  <Td>John Doe</Td>
                  <Td>250</Td>
                  <Td>$1,500</Td>
                  <Td>Active</Td>
                </Tr>
                <Tr>
                  <Td>Winter Sale</Td>
                  <Td>TRK123</Td>
                  <Td>01-Sep-24</Td>
                  <Td>30-Sep-24</Td>
                  <Td>John Doe</Td>
                  <Td>250</Td>
                  <Td>$1,500</Td>
                  <Td>Active</Td>
                </Tr>
                <Tr>
                  <Td>Winter Sale</Td>
                  <Td>TRK123</Td>
                  <Td>01-Sep-24</Td>
                  <Td>30-Sep-24</Td>
                  <Td>John Doe</Td>
                  <Td>250</Td>
                  <Td>$1,500</Td>
                  <Td>Active</Td>
                </Tr>
                <Tr>
                  <Td>Winter Sale</Td>
                  <Td>TRK123</Td>
                  <Td>01-Sep-24</Td>
                  <Td>30-Sep-24</Td>
                  <Td>John Doe</Td>
                  <Td>250</Td>
                  <Td>$1,500</Td>
                  <Td>Active</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Stack>
        {/* Table */}

        {/* Chart */}
        {/* <Check /> */}
        {/* Chart */}
      </Stack>
      {/* Search Bar */}
    </Stack>
  );
}
