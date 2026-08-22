import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-container">
      <Search color="var(--ink)" size={24} />
      <input 
        type="text" 
        className="search-input"
        placeholder="Pesquisar registros..." 
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
