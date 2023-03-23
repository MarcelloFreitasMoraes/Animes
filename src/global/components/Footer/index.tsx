import React from "react";
import * as S from "./styles";
import Image from "next/image";
import Cat from "../../assets/img/cat.png";
import Abacaxi from "../../assets/img/logoWhite.png";
import * as M from "@mui/material";

export default function FooterComponent() {
  return (
    <S.Container>
      <S.BoxImg>
        <div>
        <Image src={Cat} alt="Cat" />
        </div>
        <M.Grid sx={{textAlign: 'center'}}>
        <M.Typography variant="h6" sx={{color: '#FFFFFF', fontWeight: '700', fontSize: '14px'}} >Ainda está procurando algo pra assistir?</M.Typography>
        <M.Typography variant="h6" sx={{color: '#34AC40', fontWeight: '700', fontSize: '14px'}}>Confira o nosso acervo completo</M.Typography>
        </M.Grid>
        <S.BoxButton>
        <S.Button>VER TUDO</S.Button>
        </S.BoxButton>
      </S.BoxImg>
      <S.Footer>
        <M.Typography variant="h6" sx={{color: '#FFFFFF', fontWeight: '400', fontSize: '12px'}}>© 2023 FPR Animes - Todos os direitos reservados.</M.Typography>
        <Image src={Abacaxi} alt="Cat" />
      </S.Footer>
    </S.Container>
  );
}
