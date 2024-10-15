import React from 'react';
import InnerBanner from '../../components/Website/Banner/InnerBanner';
import QrAds from '../../components/Website/About/QrAds';
import Tir from '../../components/Website/About/Tir';
import {
  Container,
  Heading,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Box,
  AccordionIcon,
  Link,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

export default function Faqs() {
  const faqs = [
    {
      question: 'How do I sign up?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      question: 'What do I need to get started?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      question: 'How much can I earn by displaying ads?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      question: 'How and when will I get paid?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      question: 'Are there any limits to how much I can earn?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      question: 'How do advertisers choose my truck?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      question : 'What types of ads will I display?',
      answer : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      question : 'How do I apply the ads to my truck?',
      answer : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      question : 'Can I remove the ad if needed?',
      answer : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
  ];

  return (
    <>
      <InnerBanner title="FAQs" />
      <Stack py={{base:12,md:24}}>
        <Container maxW={'1600px'}>
          <Stack gap={{base:12,md:24}}>
            <Heading
              textAlign={'center'}
              fontSize={{base : '30px',md:'70px'}}
              fontWeight={'500'}
              color={'#fff'}
            >
              Frequently Asked Questions
            </Heading>
            <Stack>
              <Accordion defaultIndex={[0]} allowMultiple>
                {faqs?.length > 0 &&
                  faqs.map((v, k) => {
                    return (
                      <AccordionItem key={k} mb={4} border={'none'}>
                        <h2>
                          <AccordionButton
                            boxShadow="base"
                            mb={2}
                            py={8}
                            bg={'#00092D'}
                            borderRadius={8}
                            color={'#fff'}
                            _expanded={{ bg: '#7125D6', color: 'white' }}
                          >
                            <Box as="span" flex="1" textAlign="left">
                              <Heading fontSize={'16px'} noOfLines={2}>
                                {v?.question}
                              </Heading>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          bg={'#00092D'}
                          borderRadius={6}
                          p={0}
                          pb={4}
                        >
                          <Text
                            borderRadius={6}
                            py={4}
                            px={6}
                            boxShadow="base"
                            fontSize={'15px'}
                            fontWeight={500}
                            color={'#fff'}
                          >
                            {' '}
                            {v?.answer}
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  })}
              </Accordion>
            </Stack>
          </Stack>
        </Container>
      </Stack>
      <QrAds />
      <Tir />
    </>
  );
}
