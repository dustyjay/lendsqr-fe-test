import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div>My Dashboard Header</div>
      <main className='grow flex flex-col'>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
