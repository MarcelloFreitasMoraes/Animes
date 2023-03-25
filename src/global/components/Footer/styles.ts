import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled(Box)`
width: 100%;
height: 278px;
background: var(--background);
position: absolute;
z-index: 1;
`;
export const BoxImg = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;
img {
    margin-top: -40px
}
`;
export const BoxButton = styled(Box)`
    margin-top: 16px;
`;
export const Button = styled.button`
width: 140px;
height: 39px;
border: 3px solid var(--primary);
background: var(--background);
color: var(--primary);
font-size: 20px;
font-weight: 700;
cursor: pointer;
`;
export const Footer = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 0 8%;
    margin-top: 4%;
`;
