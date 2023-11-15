import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
font-family: 'UhBeepuding';
src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeepuding.woff') format('woff');
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
    font-family: 'UhBeepuding';
}

button {
    border: none;
    font-family: 'UhBeepuding';
}
`;
