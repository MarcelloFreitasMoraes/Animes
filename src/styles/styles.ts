import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled(Box)`
width: 100%;
margin: 0 auto;
`
export const ContantSlider = styled(Box)`
margin-top: -50px;
`;
export const Back = styled(Box)`
width: 100%;
height: 32rem;

:before {
    content: ' ';
    display: block;
    position: relative;  
    width: 100%;
    height: 32rem;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.3);
    background-image: url('topo.png');
    background-repeat: no-repeat;
    background-size: cover;
    top: -22%;
}
`
export const ColorOrange = styled.span`
color: var(--primary);
`;
export const ColorGrenn = styled.span`
color: var(--secundary);
`;
export const ContainerSlider = styled(Box)`
Svg {
    margin-left: 10px
}
`;