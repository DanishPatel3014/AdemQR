import { SimpleGrid, Stack } from '@chakra-ui/react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import { Trucker_STATS } from '../../utilities/constant';
import Stats from '../../components/Dashboard/Stats/Stats';
import CustTable from '../../components/Dashboard/Table/CustTable';
import Check from '../Dashboard/Check';
import Chart from '../TruckerDashboard/Chart';
import ChartNew from '../TruckerDashboard/ChartNew';

function Home() {
  const dataHeaders = ['Referral Name', 'Tier', 'Type', 'Amount Earned'];
  const dataColumns = [
    {
      name: 'John Doe',
      tier: 'Tier 1',
      type: 'New Referral',
      amountEarned: '$100',
    },
    {
      name: 'John Doe',
      tier: 'Tier 2',
      type: 'New Referral',
      amountEarned: '$100',
    },
    { name: 'John Doe', tier: 'Silver', type: 'Referral', amountEarned: '$50' },
    { name: 'John Doe', tier: 'Silver', type: 'Referral', amountEarned: '$50' },
    { name: 'John Doe', tier: 'Silver', type: 'Referral', amountEarned: '$50' },
    { name: 'John Doe', tier: 'Silver', type: 'Referral', amountEarned: '$50' },
  ];
  return (
    <Stack px={4} pb={4} overflowY={'auto'} overflowX={'hidden'}>
      <CustHeading name={'Trucker Dashboard'} />
      <Stack pb={4}>
        <SimpleGrid columns={[1, 2, 4]} spacing="6">
          {Trucker_STATS?.map(item => (
            <Stats data={item} />
          ))}
        </SimpleGrid>
      </Stack>
      <Stack w={'100%'} direction={'row'} gap={4}>
        <Check name="trucker" />
        <ChartNew />
      </Stack>
      <Stack w="100%" py={4} direction={'row'}>
        <Stack w="80%">
          <CustTable header={dataHeaders} data={dataColumns} />
        </Stack>
        <Stack w="20%">
          <Chart />
        </Stack>
      </Stack>
    </Stack>
  );
}
export default Home;
