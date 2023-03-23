import React from "react";
import * as S from "./styles";
import * as M from "@mui/material";
import Image from "next/image";
import Logo from "@/global/assets/img/logo.png";
import InputComponent from "@/global/components/Search";
import { FaBars } from "react-icons/fa";

export default function Header({sidebar, setSidebar}: any) {

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <S.Container>
          <S.Svg>
            <FaBars onClick={showSidebar} />
            </S.Svg>  
      <M.Grid>
        <S.Img>
          <Image src={Logo} alt="Logo" width={121} height={75} />
        </S.Img>
        <M.Grid
          sx={{ position: "absolute", top: "30%", left: "79%" }}
        >
          <InputComponent />
        </M.Grid>
      </M.Grid>
      {/* <M.Grid
        container
        sx={{
          color: "#FFF",
          position: "absolute",
          top: "24%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          left: "4px",
        }}
      >
        <M.Typography variant="h2" sx={{ color: "#FFF", fontWeight: "700" }}>
          O <S.ColorOrange>Maior</S.ColorOrange> Catálogo de
        </M.Typography>
        <M.Typography variant="h2" sx={{ color: "#FFF", fontWeight: "700" }}>
          <S.ColorGrenn>Anime</S.ColorGrenn> do Mundo
        </M.Typography>
      </M.Grid> */}
    </S.Container>
  );
}
