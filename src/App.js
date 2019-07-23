import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import Header from "./component/Header";
import Navigation from "./component/Navigation";
import News from "./component/Pages/News";
import New from "./component/Pages/New";
import Popups from "./component/Pop-ups";

import { initialState, Context, appReducer } from "./data/store";
import { LightTheme, DarkTheme } from "./styles/Themes";
import GlobalStyle from "./styles/Global";

function App() {
  const [store, dispatch] = useReducer(appReducer, initialState);

  return (
    <Router>
      <Context.Provider value={{ store, dispatch }}>
        <ThemeProvider theme={LightTheme}>
          <div className="App">
            <GlobalStyle />
            <Header />
            <Switch>
              <Route path="/" component={News} exact />
              <Route path="/news/:id" component={New} exact />
            </Switch>
            <Navigation />
            <Popups />
          </div>
        </ThemeProvider>
      </Context.Provider>
    </Router>
  );
}

export default App;
