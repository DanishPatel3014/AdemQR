import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import logo from '../../assets/images/logo.png';
import { Link as ReactLink } from 'react-router-dom';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Stack
        zIndex={'2'}
        direction={'row'}
        bg={'transparent !important'}
        position={'absolute'}
        w={'100%'}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 4, md: 6 }}
        px={{ base: 4, md: 30 }}
        align={'center'}
        justifyContent={'space-between'}
      >
        <Flex ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Box
          as={ReactLink}
          to={'/'}
          rel="home"
          width={{ base: '36%', lg: '11%' }}
        >
          <Image alt={'Logo'} src={logo} draggable={false}  />
        </Box>
        <Flex
          justify={{ base: 'center', md: 'center' }}
          display={{ base: 'none', lg: 'flex' }}
        >
          <Flex
            justify={'center'}
            display={{ base: 'none', lg: 'flex' }}
            ml={10}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          alignItems={'center'}
        >
          <Link
            to={'/login'}
            as={ReactLink}
          >
               <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'15px'}
              w={'154px'}
              p={'25px 30px'}
              border={'2px solid #FFFFFF59'}
              borderRadius={'30px'}
              fontWeight={400}
              color={'white'}
              bg={'transparent'}
              href={'#'}
              _hover={{
                bg: '#3E5079',
                color: '#fff',
              }}
            >
              Get Started
            </Button>
          </Link>
          <Link to={'/login'} as={ReactLink}>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'15px'}
              w={'154px'}
              p={'25px 30px'}
              fontWeight={400}
              color={'white'}
              border={'2px solid #FFFFFF59'}
              borderRadius={'30px'}
              bg={'transparent linear-gradient(180deg, #C086EC 0%, #7F48D6 100%) 0% 0% no-repeat padding-box;'}
              href={'#'}
              _hover={{
                bg: '#3E5079',
                color: '#fff',
              }}
            >
              Login
            </Button>
          </Link>

    
        </Stack>
      </Stack>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'16px'}
                fontWeight={500}
                color={'#fff'}
                _hover={{
                  textDecoration: 'none',
                  color: '#3E5079',
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
 
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Advertisers',
    href: '/advertisers',
  },
  {
    label: 'Trucker',
    href: '/trucker',
  },
 
  {
    label: 'Faqs',
    href: '/faqs',
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },

];
