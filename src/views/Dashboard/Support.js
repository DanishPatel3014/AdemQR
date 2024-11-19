import { Box, Button, Input, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import CustInput from '../../components/Dashboard/CustHeading/CustInput';

function Support() {
  return (
    <Stack px={4} pb={4} overflowY={'auto'}>
      <CustHeading name={'Support'} />
      <Stack w={{base : '100%',md : '70%'}} h={'90vh'} bg={'#00092D '} borderRadius={'20px'}>
        <Stack
          w={'100%'}
          h={'100%'}
          direction={'column'}
          justifyContent={'space-between'}
          p={4}
        >
          <Stack w="100%" h="90%" direction={'column'} p={1}>
            <Stack>
              <Stack
                w="300px"
                direction={'row'}
                alignItems={'center'}
                h="46px"
                px={4}
                bg={'#834CD7 '}
                borderRadius={'10px'}
              >
                <Text
                  fontSize={'18px'}
                  fontFamily={'Rubik'}
                  color={'#fff'}
                  fontWeight={300}
                >
                  How may I help you
                </Text>
              </Stack>
              <Text
                w={'300px'}
                textAlign={'right'}
                color={'#7E798B'}
                fontSize={'14px'}
                fontFamily={'Rubik'}
              >
                03:15 AM
              </Text>
            </Stack>
            <Stack alignItems={'flex-end'}>
              <Stack
                w="300px"
                direction={'row'}
                alignItems={'center'}
                h="46px"
                px={4}
                bg={'#C086EC  '}
                borderRadius={'10px'}
              >
                <Text
                  fontSize={'18px'}
                  fontFamily={'Rubik'}
                  color={'#fff'}
                  fontWeight={300}
                >
                  I am kind of stuck in a problem
                </Text>
              </Stack>
              <Text
                w={'300px'}
                textAlign={'right'}
                color={'#7E798B'}
                fontSize={'14px'}
                fontFamily={'Rubik'}
              >
                03:15 AM
              </Text>
            </Stack>
          </Stack>

          <Stack direction={'row'} justifyContent={'space-between'} gap={2}>
            <CustInput name={'Type here'} />
            <Button
              w="120px"
              fontSize={'16px'}
              fontFamily={'Rubik'}
              fontWeight={400}
              bg="linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)"
              //   border="1px solid rgba(255, 255, 255, 0.35)"
              borderRadius="7px"
              color={'#fff'}
              p="3px"
              opacity="1"
              _hover={{  bg:"linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)"}}
            >
              Send
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Support;
