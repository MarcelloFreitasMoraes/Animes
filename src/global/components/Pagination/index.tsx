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
    <div>
      <div>      
        <M.Button  
         onClick={() => onPageChange(current - 1)}
         disabled={current === 1}
        startIcon={<ArrowBack />}
        />
      </div> 
      <div> 
       <M.Button  
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
          startIcon={<ArrowForward />}/>       
      </div>
    </div>
  );
}