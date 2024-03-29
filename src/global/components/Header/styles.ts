import { Box } from '@mui/material'
import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Svg = styled.div`
    background-color: var(--primary);
    width: 70px;
    height: 106.9rem;
    position: absolute;
    cursor: pointer;
    z-index: 1;
    top: 0;
    > svg {
        margin: 30px 0px 0 20px;
        color: var(--light);
        width: 30px;
        height: 30px;
        cursor: pointer;
        @media (max-width: 480px) {
            width: 50px;
            height: 50px;
            margin-top: 1.5rem;
            align-self: baseline;
        }
    }
`

export const Img = styled(Box)`
    & img {
        position: absolute;
        top: 0;
        left: 11rem;
        right: 0;
        z-index: 1;
    }
`
export const ImgTwo = styled(Box)`
    & img {
        position: absolute;
        top: 0;
        left: 11rem;
        right: 0;
        z-index: 1;
        cursor: pointer;
    }
`
export const ColorOrange = styled.span`
    color: var(--primary);
`
export const ColorGrenn = styled.span`
    color: var(--secundary);
`

export const ContainerTwo = styled.header`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 102px;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
`

export const SvgTwo = styled.div`
    background-color: var(--primary);
    width: 70px;
    height: 62.8rem;
    position: absolute;
    z-index: 1;
    cursor: pointer;
    top: 0;
    > svg {
        margin: 30px 0px 0 20px;
        color: var(--light);
        width: 30px;
        height: 30px;
        cursor: pointer;
        @media (max-width: 480px) {
            width: 50px;
            height: 50px;
            margin-top: 1.5rem;
            align-self: baseline;
        }
    }
`

export const ContainerThree = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 102px;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
`

export const SvgThree = styled.div`
    background-color: var(--primary);
    width: 70px;
    height: 92rem;
    position: absolute;
    z-index: 1;
    cursor: pointer;
    top: 0;
    > svg {
        margin: 30px 0px 0 20px;
        color: var(--light);
        width: 30px;
        height: 30px;
        cursor: pointer;
        @media (max-width: 480px) {
            width: 50px;
            height: 50px;
            margin-top: 1.5rem;
            align-self: baseline;
        }
    }
`
