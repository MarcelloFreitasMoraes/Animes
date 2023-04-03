import * as React from 'react';
import * as M from "@mui/material";
import * as S from "./styles";
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
    <S.Container>
      <S.ContainerButton>      
        <M.Button  
        sx={{color: '#FFFFFF', marginRight: '10px'}} 
         onClick={() => onPageChange(current - 1)}
         disabled={current === 1}
        startIcon={<ArrowBack />}
        />
      </S.ContainerButton> 
      <S.ContainerButton> 
       <M.Button 
       sx={{color: '#FFFFFF'}} 
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
          startIcon={<ArrowForward />}/>       
      </S.ContainerButton>
    </S.Container>
  );
}