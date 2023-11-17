import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'insungitCutelivelyjisu';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/insungitCutelivelyjisu.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

* {
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
    
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.white};
    font-family: 'insungitCutelivelyjisu';
}

section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 2rem 3rem;
    border-radius: 2rem;

    background-color: ${({ theme }) => theme.colors.darkPink};
}

input {
    font-family: 'insungitCutelivelyjisu';
}

button {
    border: none;
    font-family: 'insungitCutelivelyjisu';
}
`;
