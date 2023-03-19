import * as React from "react";
import * as M from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function InputComponent() {
  return (
    <M.Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 230,
        height: 31,
        borderRadius: "20px",
        border: "1px solid #fff",
        backgroundColor: "transparent",
      }}
    >
      <M.InputBase
        sx={{ ml: 1, flex: 1, color: "white" }}
        placeholder="Buscar"
      />
      <M.IconButton
        type="button"
        sx={{ p: "10px", color: "white" }}
        aria-label="search"
      >
        <SearchIcon />
      </M.IconButton>
    </M.Paper>
  );
}
