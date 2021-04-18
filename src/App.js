import { Switch, Route, Redirect } from "react-router-dom";
import { useDarkMode } from "./hooks/useDarkMode";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";

import MainPage from "./components/pages/MainPage";
import PositionPage from "./components/pages/PositionPage";
import Header from "./components/Header";

function App() {
  const [mode, toggleMode] = useDarkMode();

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header mode={mode} toggleMode={toggleMode} />
      <Switch>
        <Route path="/positions/:id">
          <PositionPage />
        </Route>
        <Route path="/positions">
          <MainPage />
        </Route>
        <Route path="/">
          <Redirect exact from="/" to="/positions" />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
