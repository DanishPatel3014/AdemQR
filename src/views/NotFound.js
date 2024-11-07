import { Box, Text, Stack, Button, Flex } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Main.css';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Flex minH="100vh" p={3} alignItems="center" justifyContent="center">
          <Stack spacing={8} justifyContent="center">
            <Text
              fontSize={160}
              color={'#fff'}
              fontWeight={800}
              className="bgText"
            >
              Ooops
            </Text>
            <Text fontSize={26} color={'#fff'} fontWeight={700}>
              404 - Page Not Found
            </Text>
            <Text fontSize="sm" color={'#fff'}>
              The page you are looking for might have been removed <br /> had
              its name changed or is temporarily unavailable.
            </Text>
            <Box>
              {/* <Link to> */}
              <Button
                onClick={() => navigate(-1)}
                leftIcon={<ArrowBackIcon />}
                variant="outline"
                colorScheme="white"
                color={'#fff'}
                w="140px"
                h="45px"
                _hover={{
                  background:
                    'linear-gradient(180deg, #C086EC 0%, #7F48D6 100%)',
                }}
              >
                Go Back
              </Button>
              {/* </Link> */}
            </Box>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
