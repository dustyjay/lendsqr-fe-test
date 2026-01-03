import { useState, type FormEvent } from 'react';
import SearchIcon from '../../assets/search-white.svg';
import './index.scss';

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <input
        name='searchbar'
        placeholder='Search for anything'
        className='searchbar-input'
        type='text'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className='searchbar-button' type='submit'>
        <img src={SearchIcon} alt='Search across dashboard' />
      </button>
    </form>
  );
};

export default Searchbar;
