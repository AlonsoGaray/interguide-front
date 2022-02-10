import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
// import CloseIcon from '@mui/icons-material/Close';
import { SearchInputs, Input } from './styled';

const SearchBar = () => {
  return (
    <SearchInputs>
      <Input type="text" placeholder="Enter a Company Name..." />
      <SearchIcon />
    </SearchInputs>
  );
};
export default SearchBar;
