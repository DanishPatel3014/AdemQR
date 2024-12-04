import { SimpleGrid, Stack } from '@chakra-ui/react';
import CustHeading from '../../components/Dashboard/CustHeading/CustHeading';
import { STATS } from '../../utilities/constant';
import Stats from '../../components/Dashboard/Stats/Stats';
import CustTable from '../../components/Dashboard/Table/CustTable';
import Check1 from './Check1';
import Check from './Check';

export default function Reports() {
  const dataHeaders = [
    'Campaign Name',
    'Truck ID',
    'Start Date',
    'End Date',
    'Trucker/Truck Company',
    'Total QR Scans',
    'Ad Spent',
    'Ad Status',
  ];
  const dataColumns = [
    {
      name: 'Winter Sale',
      id: 'TRK123',
      startDate: '01-Sep-24',
      endDate: '30-Sep-24',
      trucker: 'John Doe',
      totalQRScans: '250',
      adSpent: '$1,500',
      adStatus: 'Active',
    },
    {
      name: 'Winter Sale',
      id: 'TRK123',
      startDate: '01-Sep-24',
      endDate: '30-Sep-24',
      trucker: 'John Doe',
      totalQRScans: '250',
      adSpent: '$1,500',
      adStatus: 'Active',
    },
    {
      name: 'Winter Sale',
      id: 'TRK123',
      startDate: '01-Sep-24',
      endDate: '30-Sep-24',
      trucker: 'John Doe',
      totalQRScans: '250',
      adSpent: '$1,500',
      adStatus: 'Active',
    },
    {
      name: 'Winter Sale',
      id: 'TRK123',
      startDate: '01-Sep-24',
      endDate: '30-Sep-24',
      trucker: 'John Doe',
      totalQRScans: '250',
      adSpent: '$1,500',
      adStatus: 'Active',
    },
  ];
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
        <CustTable header={dataHeaders} data={dataColumns} name={'Ad'} />
      </Stack>
    </Stack>
  );
}
