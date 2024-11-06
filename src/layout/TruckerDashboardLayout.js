import { Stack } from '@chakra-ui/react';
import Sidebar from '../components/Dashboard/DashNav/Sidebar';
import SearchNav from '../components/Dashboard/DashNav/SearchNav';
import { Outlet } from 'react-router-dom';
import { NAV_ITEMS_TRUCKER } from '../utilities/constant';

export default function TruckerDashboardLayout() {
  return (
    <Stack
      w={'100vw'}
      h={`100vh`}
      bg="#171129"
      backgroundRepeat="no-repeat"
      backgroundPosition="0% 0%"
      backgroundSize="auto"
      opacity={1}
      direction="row"
      gap={2}
    >
      <Sidebar data={NAV_ITEMS_TRUCKER} />
      <Stack width={'100%'}>
        <SearchNav />
        <Outlet />
      </Stack>
    </Stack>
  );
}