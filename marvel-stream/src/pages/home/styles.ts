import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Img = styled.img`
    width: 60rem;
    height: 30rem;
`;

export const MainPoster = styled.div`
    display: flex;
    position: relative;
`;

export const Content = styled.div`
    background: none;
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
`;
