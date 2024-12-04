import {
  Avatar,
  Button,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  Image,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import { NAV_ITEMS } from '../../../utilities/constant';
import User from '../../../assets/images/avatar.png';
import logo from '../../../assets/images/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

function Sidebar({ data }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('left');
  console.log(location);
  return (
    <>
      {/* Side bar */}
      <Stack
        pt={5}
        px={5}
        display={{
          base: 'block',
          sm: 'block',
          md: 'block',
          xl: 'none',
          '2xl': 'none',
        }}
      >
        <SimpleGrid columns={2} spacing={10} alignItems={'center'}>
          <Stack>
            <Image w={'100px'} alt={'Logo'} src={logo} draggable={false} />
          </Stack>
          <Stack alignItems={'end'}>
            <Button
              borderRadius="10px"
              w={'max-content'}
              bgGradient="linear(180deg, #C086EC 0%, #7F48D6 100%)"
              color={'#fff'}
              fontWeight={'400'}
              _hover={{
                bgGradient: 'linear(180deg, #7F48D6 0%, #C086EC 100%)',
              }}
              _active={{
                bgGradient: 'linear(180deg, #7F48D6 0%, #C086EC 100%)',
              }}
              fontSize={'16px'}
              colorScheme="blue"
              onClick={onOpen}
            >
              <MdMenu />
            </Button>
          </Stack>
        </SimpleGrid>
      </Stack>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p={0}>
            <Stack
              m={'0 !important'}
              bgGradient="linear(to-b, rgba(47, 24, 98, 1) 0%, rgba(23, 17, 41, 1) 100%)"
              opacity={1}
              direction="column"
              height={'100%'}
            >
              <Stack mx={6} direction="row" align="center" my={6}>
                <Stack>
                  <Image alt={'Logo'} src={logo} draggable={false} />
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
                  {(data ? data : NAV_ITEMS).map((val, ind) => (
                    <ListItem key={ind} mb={'10px !important'}>
                      <Stack>
                        <Button
                          px={4}
                          onClick={() => {
                            navigate(val.value);
                            onClose();
                          }}
                          // onClick={() => handleUrlChange(val.url)}
                          borderRadius="0px 10px 10px 0px"
                          // borderRadius={'21.5px'}
                          bgGradient={
                            val.value === location.pathname
                              ? 'linear(180deg, #C086EC 0%, #7F48D6 100%)'
                              : 'transparent'
                          }
                          _hover={{
                            bg: 'linear(180deg, #C086EC 0%, #7F48D6 100%)',
                          }}
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
                  _hover={{
                    bgGradient: 'linear(180deg, #7F48D6 0%, #C086EC 100%)',
                  }}
                  _active={{
                    bgGradient: 'linear(180deg, #7F48D6 0%, #C086EC 100%)',
                  }}
                >
                  <Text color="#fff" fontSize="18px" as={'span'}>
                    logout
                  </Text>
                </Button>
              </Stack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Stack
        m={'0 !important'}
        display={{
          base: 'none',
          sm: 'none',
          md: 'none',
          xl: 'flex',
          '2xl': 'flex',
        }}
        w="20%"
        bgGradient="linear(to-b, rgba(47, 24, 98, 1) 0%, rgba(23, 17, 41, 1) 100%)"
        opacity={1}
        direction="column"
      >
        <Stack mx={6} direction="row" align="center" my={6}>
          <Stack>
            <Image alt={'Logo'} src={logo} draggable={false} />
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
            {(data ? data : NAV_ITEMS).map((val, ind) => (
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
