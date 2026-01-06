import { useState } from 'react';
import Modal from '../modal';
import SideNav from '../side-nav';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='header-mobile'>
      <button className='header-mobile__ham' onClick={() => setIsOpen(true)}>Menu</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <div className='header-logo'>
          <img src='/lendsqr.svg' alt='Lendsqr' />
        </div>
        <SideNav />
      </Modal>
    </div>
  );
};

export default MobileHeader;
