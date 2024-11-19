import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { IoIosNotifications } from 'react-icons/io';
import { IoMdSettings } from 'react-icons/io';

function SearchNav() {
  return (
    <>
      {/* Search Bar */}
      <Box
        mx={2}
        my={5}
        bg="#00092D"
        py={4}
        px={4}
        borderRadius="14px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        h={'54px'}

      >
       <Stack>
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
            pr={{ base: '0', md: '150px' }}
          />
        </InputGroup>
       </Stack>
    <Stack display={{base:'none',  sm : 'none', md:'none', xl:'block', "2xl": 'block'}}>
    <InputGroup>
        <HStack spacing={4} align="center">
              <IoIosNotifications fontSize="24px" color="#969DA6" />
              <IoMdSettings fontSize="24px" color="#969DA6" />
              <Text fontSize="16px" color="#fff" whiteSpace="nowrap">
                Wed, Sep 09, 12:45:11
              </Text>
            </HStack>
        </InputGroup>
    </Stack>
      </Box>
      {/* Search bar */}
    </>
  );
}

export default SearchNav;
