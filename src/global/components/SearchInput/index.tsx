import React, { useState, useEffect } from 'react';
import * as M from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { API } from '@/global/config/api';

const SearchInput = () => {
  const [text, setText] = useState("");
  const LIMIT = 20;
  const offset: any = 0; 

useEffect(() => {
  localStorage.setItem("offset", offset)
}, [])

  async function Search() {
    if (text === "") {
      alert("Preencha algo");
      setText("");
    }
    try {
      const response = await API.get(
        `https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=${LIMIT}&page[offset]=${offset}`
      );
      console.log(response);
      if (response.data.meta.count === 0) {
        alert(`Não foi encontrado nenhum anime com ${text}`);
        setText("");
      } else {
        const sArray = response.data;
        localStorage.setItem("resource", JSON.stringify(sArray));
        localStorage.setItem("title", text);
        window.location.href = `/Categories?categories=${text}`;
      }
    } catch (error) {
      console.log(error);
    }
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
          value={text}
          onChange={(e) => setText(e.target.value)}
         />

           <M.IconButton
        type="button"
        sx={{ p: "10px", color: "#FFF", padding: '0' }}
        aria-label="search"
        onClick={Search}
      >
        <SearchIcon />
      </M.IconButton>
          </M.Paper>
  );
};

export default SearchInput;