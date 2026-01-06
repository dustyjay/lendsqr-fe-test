import ReactPaginate, { type ReactPaginateProps } from 'react-paginate';
import ChevronDownIcon from '../../assets/chevron-down.svg';
import './index.scss';
import Dropdown, { type DropdownItemType } from '../dropdown';
import { useMemo } from 'react';

export type PageSize = 20 | 50 | 100;

export type PaginateProps = Omit<ReactPaginateProps, 'pageCount'> & {
  pageSize: PageSize;
  onPageSizeChange: (pageSize: PageSize) => void;
  totalCount: number;
};

export function Paginate({
  pageSize,
  onPageSizeChange,
  totalCount,
  ...paginateProps
}: PaginateProps) {
  const pageCount = useMemo(() => {
    return Math.ceil(totalCount / pageSize);
  }, [pageSize, totalCount]);

  const pageSizeMenu: DropdownItemType[] = [
    { label: '20', active: pageCount === 20, onClick: () => onPageSizeChange(20) },
    { label: '50', active: pageCount === 50, onClick: () => onPageSizeChange(50) },
    { label: '100', active: pageCount === 100, onClick: () => onPageSizeChange(100) }
  ];

  return (
    <div className={`pagination__wrapper`}>
      <div>
        Showing
        <Dropdown menuItems={pageSizeMenu}>
          <span className='pagination__dropdown'>
            {pageSize} <img src={ChevronDownIcon} alt='Select page size' />
          </span>
        </Dropdown>
        out of {totalCount}
      </div>
      <ReactPaginate
        {...paginateProps}
        pageCount={pageCount}
        previousLabel={<img src={ChevronDownIcon} alt='Go back' />}
        nextLabel={<img src={ChevronDownIcon} alt='Go back' />}
        breakLabel={<span>..</span>}
        marginPagesDisplayed={2}
        containerClassName='pagination'
        previousLinkClassName='prev_link'
        nextLinkClassName='next_link'
        disabledClassName='pagination__link--disabled'
        activeClassName='pagination__link--active'
      />
    </div>
  );
}
