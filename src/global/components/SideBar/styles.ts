import styled from "styled-components";

export const Container = styled.section`
    background-color: var(--primary);
    position: absolute;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 280px;
    animation: showSidebar .1s;
    z-index: 999;
    height: 106.9rem;

    > svg {
        position: absolute;
        color: white;
        width: 30px;
        height: 30px;
        cursor: pointer;
        left: 15rem;
        top: 5px;
    }
    @keyframes showSidebar {
        from {
        opacity: 0;
        width: 0;
        }
        to {
        opacity: 1;
        width: 280px;
        }
    }
`;

export const Categorias = styled.div `
    display: flex;
    margin: 0 auto 10px auto;
    color: var(--light);
    font-size: 20px;
    font-weight: 700;

    > svg{
        width: 20px;
        height: 23px;
        margin-right: 7px;
    }
`;
export const DisplayFlex = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Content = styled.div `
    margin-top: 70px;
    display: flex;
    flex-direction: column;
`;

export const Item = styled.p `
    text-transform: uppercase;
`;

export const SidebarItem = styled.div `
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    color: var(--light);
    padding: 10px;
    cursor: pointer;
    margin-left: 50px;
    text-transform: capitalize;
`;

export const ContainerContent = styled.div `
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
`;