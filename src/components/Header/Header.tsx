import React, { FormEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface HeaderProps {
  handleSearch?: Function;
  hasSearch: boolean;
}

const Header: React.FC<HeaderProps> = ({ handleSearch, hasSearch }) => {
  const [term, setTerm] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (handleSearch) {
      handleSearch(term);
    }
  }

  return (
    <header className="header">
      <h1 className="header__title">Country Finder</h1>
      {hasSearch && (
        <form action="#" className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search__input"
            placeholder="Search Country"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <FaSearch className="search__icon" />
        </form>
      )}
    </header>
  );
};

export default Header;
