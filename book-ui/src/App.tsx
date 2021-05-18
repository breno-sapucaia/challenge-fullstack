import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Create } from "./pages/Create";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { FontFace } from "./styles/fonts";
import { GlobalStyle, MainContainer } from "./styles/global";

function App() {
  return (
    <MainContainer>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/book/:id" exact>
            <Detail />
          </Route>
          <Route path="/book/create" exact>
            <Create />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
      <FontFace />
    </MainContainer>
  );
}

export default App;
