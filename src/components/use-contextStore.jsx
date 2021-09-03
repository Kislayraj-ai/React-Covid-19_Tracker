import React, { useState, useContext } from 'react';

const SearchContext = React.createContext({
  searchInput: '',
  setSearch: '',
});

export const SearchProvider = (props) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ searchInput: search, setSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export const useValue = () => {
  return useContext(SearchContext);
};

export default SearchContext;
