import type { FC, PropsWithChildren } from 'react';
import './index.scss';

type Props = PropsWithChildren & {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: FC<Props> = ({ isOpen, children, onClose }) => {
  return isOpen ? (
    <div className='modal'>
      <div className='modal-overlay' onClick={onClose}></div>
      <div className='modal-content'>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
