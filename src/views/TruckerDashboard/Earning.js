import { SimpleGrid, Stack } from '@chakra-ui/react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import { Trucker_STATS } from '../../utilities/constant';
import Stats from '../../components/Dashboard/Stats/Stats';
import CustTable from '../../components/Dashboard/Table/CustTable';
import Check from '../Dashboard/Check';
import Chart from '../TruckerDashboard/Chart';
import ChartNew from '../TruckerDashboard/ChartNew';
import Check1 from '../Dashboard/Check1';

function Earning() {
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
      <CustHeading name={'My Trucks Earnings'} />

      <Stack w={'100%'} direction={{base : 'column', md: 'row'}} gap={4}>
       <Stack  w={{base:'100%',  sm : '100%', md:'40%', xl:'40%', "2xl": '70%'}}>
       <Check name="trucker" />
       </Stack>
        <Stack w={{base:'100%',  sm : '100%', md:'50%', xl:'50%', "2xl": '30%'}}>
        <ChartNew />
        </Stack>
      </Stack>
      <Stack w="100%" py={4} direction={'row'}>
        <Stack w={{base:'100%',  sm : '100%', md:'70%', xl:'75%', "2xl": '75%'}}>
          <CustTable header={dataHeaders} data={dataColumns} />
        </Stack>
        <Stack w={{base:'100%',  sm : '100%', md:'25%', xl:'25%', "2xl": '25%'}}>
          <Check1 />
        </Stack>
      </Stack>
      <Stack w="100%" py={4} direction={'row'}>
        <Stack w={{base:'100%',  sm : '100%', md:'70%', xl:'75%', "2xl": '75%'}}>
          <CustTable header={dataHeaders} data={dataColumns} />
        </Stack>
        <Stack w={{base:'100%',  sm : '100%', md:'25%', xl:'25%', "2xl": '25%'}}>
          <Chart />
        </Stack>
      </Stack>
    </Stack>
  );
}
export default Earning;
