import styled from "styled-components";

export const Container = styled.section`
    background-color: var(--primary);
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 300px;
    animation: showSidebar .5s;
    
    > svg {
        position: fixed;
        color: white;
        margin: 30px 0px 0 20px;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
    @keyframes showSidebar {
        from {
        opacity: 0;
        width: 0;
        }
        to {
        opacity: 1;
        width: 300px;
        }
    }
`;

export const DisplayFlex = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Content = styled.div `
    margin-top: 100px;
    display: flex;
    flex-direction: column;
`;

export const Item = styled.p `
    text-transform: uppercase;
`;

export const DivRouter = styled.div `
    margin-bottom: 10%;
`;

export const RouterGitHub = styled.img `
    width: 30%;
    margin: 0 35%;
    border-radius: 50%;
    &:hover {
        background-color: rgb(255, 12, 24, 0.3);
    }
`;

export const SidebarItem = styled.div `
    display: flex;
    align-items: center;
    background-color: green; 
    font-size: 20px;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 15px 20px;
    text-transform: uppercase;
    &:hover {
        background-color: #911111;
    }
`;

export const Icon = styled.img `
    width: 35px;
    margin-right: 10px;
`;

export const ContainerContent = styled.div `
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
`;