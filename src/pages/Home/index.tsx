import React from "react";
import * as M from "@mui/material";
import * as S from "./styles";
import Image from "next/image";
import Logo from "../../global/assets/img/logo.png";

export default function Home() {
  return (
    <S.Container>
      <S.Back>
        <M.Grid container sx={{ position: "absolute", top: "0", zIndex: "1" }}>
          <Image src={Logo} alt="Logo" />
          {/* <M.TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Small"
            variant="filled"
            size="small"
          /> */}
        </M.Grid>
        <M.Grid
          container
          sx={{
            color: "#FFF",
            position: "absolute",
            top: "21%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <M.Typography variant="h2" sx={{ color: "#FFF" }}>
            O <S.ColorOrange>Maior</S.ColorOrange> Catálogo de
          </M.Typography>
          <M.Typography variant="h2" sx={{ color: "#FFF" }}>
            <S.ColorGrenn>Anime</S.ColorGrenn> do Mundo
          </M.Typography>
        </M.Grid>
      </S.Back>
    </S.Container>
  );
}
