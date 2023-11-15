import { ThemeProvider } from "styled-components";
import Router from "./components/Router";
import theme from "./style/theme";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
