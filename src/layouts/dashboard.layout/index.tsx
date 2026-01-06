import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import SideNav from '../../components/side-nav';
import './index.scss';

const DashboardLayout = () => {
  return (
    <div className='dashboard-layout'>
      <Header />
      <div className='dashboard__main'>
        <div className='dashboard__side-nav'>
          <SideNav />
        </div>
        <main className='dashboard__content'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
