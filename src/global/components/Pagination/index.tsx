import * as React from 'react';
import * as M from "@mui/material";
import { PagComponentProps } from './type';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

export default function PaginationComponent({
  total,
  offset,
  setOffset
}: PagComponentProps) {

  const LIMIT = 20;
  const current = offset ? offset / LIMIT + 1 : 1;
  const pages = Math.ceil(total / LIMIT);

  function onPageChange(page: number) {
    setOffset((page - 1) * LIMIT);
  }
  return (
    <ul className="pagination">
      <div>
        <button
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          Anterior
        </button>
        <M.Button  startIcon={<ArrowBack />}></M.Button>
      </div> 
      <div>    
        <button
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          Próxima
        </button>
        <M.Button  startIcon={<ArrowForward />}></M.Button>
      </div>
    </ul>
  );
}