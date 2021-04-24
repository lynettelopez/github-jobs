import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";
import Header from "./components/layouts/Header";
import MainPage from "./components/pages/MainPage";
import PositionPage from "./components/pages/PositionPage";
import useDarkMode from "./hooks/useDarkMode";
import { GlobalStyles } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";

function App() {
  const [mode, toggleMode] = useDarkMode();
  let themeMode = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ModalProvider>
        <Header mode={mode} toggleMode={toggleMode} />
        <Switch>
          <Route path="/positions/:id">
            <PositionPage />
          </Route>
          <Route path="/positions">
            <MainPage />
          </Route>
          <Route path="/">
            <Redirect from="/" to="/positions" />
          </Route>
        </Switch>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
