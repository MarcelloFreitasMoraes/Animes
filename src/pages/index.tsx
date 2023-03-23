import React, { useEffect, useRef, useState } from "react";
import * as M from "@mui/material";
import * as S from "../styles/styles";
import Header from "@/global/components/Header";
import CardListComponent from "@/global/components/CardListComponent";
import Slider from "@/global/components/Slider";
import { Star } from "@/global/assets/Icons/Star";
import { Like } from "@/global/assets/Icons/Like";
import FooterComponent from "@/global/components/Footer";
import Sidebar from "@/global/components/SideBar";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);
  const ref = useRef(null);

  const closeSidebar = (event: any) => {
    //@ts-ignore
    if (ref.current && !ref.current.contains(event.target)) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeSidebar, true);
    return () => {
      document.removeEventListener("click", closeSidebar, true);
    };
  }, []);
  
  return (
    <S.Container>
      <S.Back/>
      <S.SideBarTop ref={ref} onClick={closeSidebar}>
            {sidebar && <Sidebar active={setSidebar} />}
          </S.SideBarTop>
        <Header sidebar={sidebar} setSidebar={setSidebar} />
        <S.ContantSlider>
        <CardListComponent sort="user_count" icon={<Star/>}/>
        </S.ContantSlider>
        <M.Box sx={{margin: '50px auto', width: '80%'}}>
          <Slider/>
          </M.Box>  
          <S.ContainerSlider>
          <CardListComponent sort="average_rating" icon={<Like/>}/>    
          </S.ContainerSlider> 
          <S.ContainerFooter>
      <FooterComponent/>
      </S.ContainerFooter>  
    </S.Container>
  );
}
