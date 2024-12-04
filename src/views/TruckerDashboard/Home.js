import { SimpleGrid, Stack, Grid, GridItem } from '@chakra-ui/react';
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
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(12, 1fr)"
        gap={4}
        pb={4}
      >
        <GridItem colSpan={{ base: 12, sm: 6, md: 6, xl: 6, '2xl': 7 }}>
          <Check name="trucker" />
        </GridItem>

        <GridItem colSpan={{ base: 12, sm: 6, md: 6, xl: 6, '2xl': 5 }}>
          <ChartNew />
        </GridItem>
      </Grid>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(12, 1fr)"
        gap={4}
      >
        <GridItem colSpan={{ base: 12, sm: 12, md: 9, xl: 9, '2xl': 10 }}>
          <CustTable header={dataHeaders} data={dataColumns} name={'ad'} />
        </GridItem>

        <GridItem colSpan={{ base: 12, sm: 12, md: 3, xl: 3, '2xl': 2 }}>
          <Chart />
        </GridItem>
      </Grid>
    </Stack>
  );
}
export default Home;
