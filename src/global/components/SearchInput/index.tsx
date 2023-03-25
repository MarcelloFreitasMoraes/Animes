import React, { useState } from 'react';
import useDebounce from './useDebounce';
import * as M from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({ value, onChange, action }:any) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(event: { target: { value: any; }; }) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }

  return (
    <M.Paper
    sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: '205px',
        height: '31px',
        border: "1px solid #FFF",
        borderRadius: '10px',
        backgroundColor: "transparent",
      }}
    >
    <M.InputBase
        sx={{ ml: 1, flex: 1, color: "#FFF" }}
        placeholder="Buscar"
          type="search"
          value={displayValue}
          onChange={handleChange} />
           <M.IconButton
        type="button"
        sx={{ p: "10px", color: "#FFF", padding: '0' }}
        aria-label="search"
        onClick={action}
      >
        <SearchIcon />
      </M.IconButton>
          </M.Paper>
  );
};

export default SearchInput;