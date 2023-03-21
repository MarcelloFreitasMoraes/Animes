import React, { useEffect, useState } from "react";
import * as M from "@mui/material";
import * as S from "../styles/styles";
import Header from "@/global/components/Header";
import CardListComponent from "@/global/components/CardListComponent";
import Slider from "@/global/components/Slider";


export default function Home() {
 

  return (
    <S.Container>
      <S.Back>
        <Header />
        <CardListComponent sort="user_count"/>
        <S.ContainerSlider>
          <Slider/>
          </S.ContainerSlider>       
      </S.Back>
    </S.Container>
  );
}
