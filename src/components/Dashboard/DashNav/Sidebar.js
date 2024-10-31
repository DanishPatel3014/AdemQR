import {
  Avatar,
  Button,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  Image
} from '@chakra-ui/react';
import React from 'react';
import { NAV_ITEMS } from '../../../utilities/constant';
import User from '../../../assets/images/avatar.png';
import logo from '../../../assets/images/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
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
          <Image alt={'Logo'} src={logo} draggable={false}  />
            {/* <Text fontSize="32px" fontWeight="200" color="#fff">
              Your
              <Text as="span" color="rgba(131, 76, 215, 1)">
                Logo
              </Text>
            </Text> */}
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
            {NAV_ITEMS.map((val, ind) => (
              <ListItem key={ind} mb={'10px !important'}>
                <Stack>
                  <Button
                    px={4}
                    onClick={() => navigate(val.value)}
                    // onClick={() => handleUrlChange(val.url)}
                    borderRadius="0px 10px 10px 0px"
                    // borderRadius={'21.5px'}
                    bgGradient={
                      val.value === location.pathname
                        ? 'linear(180deg, #C086EC 0%, #7F48D6 100%)'
                        : 'transparent'
                    }
                    _hover={{ bg: 'linear(180deg, #C086EC 0%, #7F48D6 100%)' }}
                    bg={'none'}
                    justifyContent={'flex-start'}
                    color={'#000'}
                    fontWeight={'400'}
                  >
                    <Text color="#fff" fontSize="18px" as={'span'}>
                      {val?.name}
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
            bgGradient="linear(180deg, #C086EC 0%, #7F48D6 100%)"
            color={'#fff'}
            fontWeight={'400'}
            _hover={{ bgGradient: 'linear(180deg, #7F48D6 0%, #C086EC 100%)' }}
            _active={{ bgGradient: 'linear(180deg, #7F48D6 0%, #C086EC 100%)' }}
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
