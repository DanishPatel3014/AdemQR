import React from 'react';
import { Stack, Heading, Container, SimpleGrid, Text } from '@chakra-ui/react';

export default function Tir() {
  return (
    <>
      <Stack py={{base:12,md:24}} className="animate__animated  animate__fadeInUpBig animate__delay-2s">
        <Container maxW={'1600px'} gap={20}>
          <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap={6} alignItems={'center'}>
            <Stack gap={4} className="animate__animated  animate__fadeInUp animate__delay-2s">
              <Heading fontSize={'20px'} fontWeight={500} color={'#C086EC'}>
                Targeted Reach
              </Heading>
              <Text color={'#c3c3c3'} fontSize={'16px'}>
                Choose specific routes and regions to ensure your ads are seen
                by your ideal audience. Reach local and regional markets
                effectively.
              </Text>
            </Stack>
            <Stack
              pl={6}
              gap={4}
              borderLeft={'1px solid #C086EC'}
              borderRight={'1px solid #C086EC'}
              className="animate__animated  animate__fadeInUp animate__delay-3s"
            >
              <Heading fontSize={'20px'} fontWeight={500} color={'#C086EC'}>
                Interactive Engagement
              </Heading>
              <Text color={'#c3c3c3'} fontSize={'16px'}>
                Choose specific routes and regions to ensure your ads are seen
                by your ideal audience. Reach local and regional markets
                effectively.
              </Text>
            </Stack>
            <Stack gap={4} className="animate__animated  animate__fadeInUp animate__delay-4s">
              <Heading fontSize={'20px'} fontWeight={500} color={'#C086EC'}>
                Real-Time Analytics
              </Heading>
              <Text color={'#c3c3c3'} fontSize={'16px'}>
                Choose specific routes and regions to ensure your ads are seen
                by your ideal audience. Reach local and regional markets
                effectively.
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  );
}
