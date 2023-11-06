import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import Header from "./components/header";
import theme from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
