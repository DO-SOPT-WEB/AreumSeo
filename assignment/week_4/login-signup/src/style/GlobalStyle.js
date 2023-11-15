import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'ONE-Mobile-POP';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

* {
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
    
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.white};
    font-family: 'ONE-Mobile-POP';
}

section {
    background-color: ${({ theme }) => theme.colors.darkPink};
}

button {
    border: none;
    font-family: 'ONE-Mobile-POP';
}
`;
