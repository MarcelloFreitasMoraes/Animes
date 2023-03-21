import styled from "styled-components";

export const Container = styled.section`
width: 100%;
margin: 0 auto;
`
export const Back = styled.section`
width: 100%;
height: 32rem;

:before {
    content: ' ';
    display: block;
    position: relative;  
    width: 100%;
    height: 32rem;
    z-index: 0;
    opacity: #000000 30%;
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
export const ContainerSlider = styled.div`
margin-top: 50px;
`;