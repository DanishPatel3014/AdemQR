import {
  Avatar,
  Button,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import { NAV_ITEMS } from '../../../utilities/constant';
import User from '../../../assets/images/avatar.png';

function Sidebar() {
  return (
    <>
      {/* Side bar */}
      <Stack
        w="20%"
        bgGradient="linear(to-b, rgba(47, 24, 98, 1) 0%, rgba(23, 17, 41, 1) 100%)"
        opacity={1}
        direction="column"
        // position={'fixed'}
        // border={'2px solid red.400'}
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
    </>
  );
}

export default Sidebar;
