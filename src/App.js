import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./helpers/useDarkMode";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import AllPositions from "./components/AllPositions";
import Header from "./components/Header";
import Position from "./components/Position";

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header theme={theme} toggleTheme={toggleTheme} />
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
