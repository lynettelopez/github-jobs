import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./hooks/useDarkMode";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import AllPositions from "./components/AllPositions";
import Header from "./components/Header";
import Position from "./components/Position";

function App() {
  const [mode, toggleMode] = useDarkMode();

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header mode={mode} toggleMode={toggleMode} />
      <Switch>
        <Route path="/positions/:id">
          <Position />
        </Route>
        <Route path="/positions">
          <AllPositions />
        </Route>
        <Route path="/">
          <Redirect exact from="/" to="/positions" />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
