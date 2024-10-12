import React from 'react';
import {
  Box,
  VStack,
  Text,
  Badge,
  Stack,
  Button,
  List,
  ListItem,
  ListIcon,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

function Packages() {
  return (
    <Box
      border="2px solid #C086EC"
      background="linear-gradient(180deg, #2F1862 0%, #171129 100%)"
      boxShadow="0px 10px 20px #02027829"
      borderRadius="16px"
      opacity="1"
      h={{ xl: '535px', '2xl': '545px' }}
      mixBlendMode="normal"
      mx={'auto'}
      pos={'relative'}
      py={6}
      px={4}
      fontFamily={'Rubik'}
    >
      {/* Recommended Badge */}
      {/* <Badge
              bg="linear-gradient(90deg, rgba(141, 90, 255, 1) 0%, rgba(192, 105, 255, 1) 100%)"
              color="white"
              borderRadius="full"
              px={4}
              py={1}
              position="absolute"
              top="-20px"
              left="50%"
              transform="translateX(-50%)"
              fontSize="sm"
              fontWeight="bold"
            >
              Recommended
            </Badge> */}
      <Stack direction={'column'} justifyContent={'space-between'} gap={2}>
        <Stack>
          <Stack
            direction={'row'}
            align={'center'}
            justifyContent={'space-between'}
          >
            <Text fontSize="20px" fontWeight="normal" color="white">
              Standard Package
            </Text>
            <Stack
              w="101px"
              h="45px"
              background="linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)"
              borderRadius="10px"
              direction={'row'}
              align={'center'}
              justifyContent={'center'}
            >
              <Text fontSize="18px" fontWeight="normal" color="white">
                $100{' '}
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack lineHeight={'1'}>
          <Text
            fontFamily={'Rubik'}
            fontSize="18px"
            color=" #7E798B"
            textAlign="left"
          >
            for individuals or small teams looking to explore the
          </Text>
          <Text
            fontFamily={'Rubik'}
            fontSize="18px"
            color=" #7E798B"
            textAlign="left"
          >
            platform's capabilities.
          </Text>
        </Stack>
        <Stack py={4}>
          <Box bg="#2F1862" borderRadius="10px" h="1px" w="100%" />
        </Stack>
        <Stack h={'250px'} overflowY={'auto'}>
          <List>
            <ListItem
              my={4}
              fontFamily={'Rubik'}
              fontSize={'18px'}
              color="#7E798B"
            >
              <ListIcon
                width={'20px'}
                h="20px"
                as={CheckCircleIcon}
                color="#C086EC "
              />
              Fixed content does not require updates.
            </ListItem>
            <ListItem
              my={4}
              fontFamily={'Rubik'}
              fontSize={'18px'}
              color="#7E798B"
            >
              <ListIcon
                width={'20px'}
                h="20px"
                as={CheckCircleIcon}
                color="#C086EC "
              />
              Standard QR code with no customization.
            </ListItem>
            <ListItem
              my={4}
              fontFamily={'Rubik'}
              fontSize={'18px'}
              color="#7E798B"
            >
              <ListIcon
                width={'20px'}
                h="20px"
                as={CheckCircleIcon}
                color="#C086EC "
              />
              Fixed content does not require updates.
            </ListItem>
            <ListItem
              my={4}
              fontFamily={'Rubik'}
              fontSize={'18px'}
              color="#7E798B"
            >
              <ListIcon
                width={'20px'}
                h="20px"
                as={CheckCircleIcon}
                color="#C086EC "
              />
              Standard QR code with no customization.
            </ListItem>
            <ListItem
              my={4}
              fontFamily={'Rubik'}
              fontSize={'18px'}
              color="#7E798B"
            >
              <ListIcon
                width={'20px'}
                h="20px"
                as={CheckCircleIcon}
                color="#C086EC "
              />
              Fixed content does not require updates.
            </ListItem>
            <ListItem
              my={4}
              fontFamily={'Rubik'}
              fontSize={'18px'}
              color="#7E798B"
            >
              <ListIcon
                width={'20px'}
                h="20px"
                as={CheckCircleIcon}
                color="#C086EC "
              />
              Standard QR code with no customization.
            </ListItem>
            <ListItem
              my={4}
              fontFamily={'Rubik'}
              fontSize={'18px'}
              color="#7E798B"
            >
              <ListIcon
                width={'20px'}
                h="20px"
                as={CheckCircleIcon}
                color="#C086EC "
              />
              Fixed content does not require updates.
            </ListItem>
            <ListItem
              my={4}
              fontFamily={'Rubik'}
              fontSize={'18px'}
              color="#7E798B"
            >
              <ListIcon
                width={'20px'}
                h="20px"
                as={CheckCircleIcon}
                color="#C086EC "
              />
              Standard QR code with no customization.
            </ListItem>
          </List>
        </Stack>

        <Stack mt={{ xl: '20px !important' }}>
          <Button
            bg="linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)"
            borderRadius="10px"
            color={'#fff'}
            fontSize={'20px'}
            fontWeight={400}
          >
            Proceed
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Packages;
