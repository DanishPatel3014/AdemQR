import { SimpleGrid, Stack } from '@chakra-ui/react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import { STATS } from '../../utilities/constant';
import Stats from '../../components/Dashboard/Stats/Stats';
import CustTable from '../../components/Dashboard/Table/CustTable';
import Check1 from './Check1';
import Check from './Check';

export default function Reports() {
  return (
    <Stack px={4} pb={4} overflowY={'auto'}>
      <CustHeading name={'Analytics & Reports'} />
      <Stack pb={4}>
        <SimpleGrid columns={[1, 2, 4]} spacing="6">
          {STATS?.map(item => (
            <Stats data={item} />
          ))}
        </SimpleGrid>
      </Stack>
      <Check />
      <Stack pt={4}>
        <CustTable />
      </Stack>
    </Stack>
  );
}
