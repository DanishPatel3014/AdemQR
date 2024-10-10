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
} from '@chakra-ui/react';
import { SearchIcon, SettingsIcon } from '@chakra-ui/icons';
import User from '../assets/images/avatar.png';
import { IoIosNotifications } from 'react-icons/io';
import { IoMdSettings } from 'react-icons/io';

import { NAV_ITEMS } from '../utilities/constant';

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
      </Stack>

      {/* Search Bar */}
    </Stack>
  );
}
