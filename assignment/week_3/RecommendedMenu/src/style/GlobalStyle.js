import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
font-family: 'UhBeeSe_hyun';
src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeSe_hyun.woff') format('woff');
font-weight: normal;
font-style: normal;
}

*{
    margin: 0;
    padding: 0;
}

body {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    font-family: 'UhBeeSe_hyun';
}

button {
    border: none;
    
    font-family: 'UhBeeSe_hyun';
}
`;

export default GlobalStyle;
