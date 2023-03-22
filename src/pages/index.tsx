import React, { useEffect, useState } from "react";
import * as M from "@mui/material";
import * as S from "../styles/styles";
import Header from "@/global/components/Header";
import CardListComponent from "@/global/components/CardListComponent";
import Slider from "@/global/components/Slider";
import { Star } from "@/global/assets/Icons/Star";
import { Like } from "@/global/assets/Icons/Like";



export default function Home() {
 

  return (
    <S.Container>
      <S.Back>
        <Header />
        <S.ContantSlider>
        <CardListComponent sort="user_count" icon={<Star/>}/>
        </S.ContantSlider>
        <M.Box sx={{margin: '50px auto', width: '80%'}}>
          <Slider/>
          </M.Box>  
          <S.ContainerSlider>
          <CardListComponent sort="average_rating" icon={<Like/>}/>    
          </S.ContainerSlider> 
      </S.Back>
    </S.Container>
  );
}
