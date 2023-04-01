import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled(Box)`
width: 100%;
margin: 0 auto;
`
export const BoxText = styled(Box)`
/* display: flex;
align-items: center;
justify-content: center; */
color: var(--primary);
`;
export const Main = styled(Box)`
display: flex;
justify-content: flex-end;
margin-right: 50px;
`
export const SideBarTop = styled.div`
`;

export const Test = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 30px;
`
