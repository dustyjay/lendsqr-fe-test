import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import SideNav from '../../components/side-nav';

const DashboardLayout = () => {
  return (
    <div className='dashboard-layout'>
      <Header />
      <div className='flex'>
        <SideNav />
        <main className='grow flex flex-col'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
