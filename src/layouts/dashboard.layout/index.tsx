import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import SideNav from '../../components/side-nav';
import './index.scss';

const DashboardLayout = () => {
  return (
    <div className='dashboard-layout'>
      <Header />
      <div className='dashboard__main'>
        <SideNav />
        <main className='grow flex flex-col'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
