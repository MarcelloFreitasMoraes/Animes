import styled from "styled-components";
import { Box, Button } from "@mui/material";

export const Container = styled(Box)`
width: fit-content;
margin: 0 auto;
`
export const ContantSlider = styled(Box)`
margin-top: -50px;
`;
export const Main = styled(Box)`
display: flex;
flex-direction: column;
//justify-content: center;
padding: 0 100px;
text-align: center;
text-align: center;
width: 421px;
margin-top: -100px;
`

export const Banner = styled.img`
height: 505px;
`;
export const Capa = styled.img`
width: 221px;
height: 313px;
`;
export const SideBarTop = styled.div`
`;
export const ButtonTrailler = styled(Button)`
background-color: #F46D1B;
color: #FFFFFF;
width: 190px;
height: 49px;

> svg {
    margin-right: 18px
}
button: {    
    '&:hover': {
        background: 'none',
    },
}
`;
