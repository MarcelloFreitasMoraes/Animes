import React from "react";
import * as S from "./styles";
import * as M from "@mui/material";
import Image from "next/image";
import Logo from "@/global/assets/img/logo.png";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import SearchInput from "@/global/components/SearchInput";

export default function Header({sidebar, setSidebar, text, setText, info}: any) {
  const { push } = useRouter()
  const showSidebar = () => setSidebar(!sidebar)
  
  return (
    <S.Container>
          <S.Svg>
            <FaBars onClick={showSidebar} />
            </S.Svg>  
      <M.Grid>
        <S.Img        
        onClick={() => push(`/`)}
        >
          <Image src={Logo} alt="Logo" width={121} height={75} />
        </S.Img>
        <M.Grid
          sx={{ position: "absolute", top: "20px", left: "78%" }}
        >
           <SearchInput/>        
        </M.Grid>
      </M.Grid>  
    </S.Container>
  );
}
