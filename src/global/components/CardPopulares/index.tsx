import * as React from 'react';
import * as M from "@mui/material";
import { CardComponentProps } from './type';

export default function CardComponent(props: CardComponentProps) {

  return (
    <M.Card 
     onClick={props.action}
    sx={{ maxWidth: 345, cursor: "pointer", borderRadius: 'none' }}   >
    <M.CardMedia
      sx={{ height: 319, width: 225, margin: '0 10px' }}
      image={props.image}
    />
     </M.Card>
  );
}