import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import Header from "./components/header";
import theme from "./style/theme";
import OnBoarding from "./components/OnBoarding";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <OnBoarding />
    </ThemeProvider>
  );
}

export default App;
