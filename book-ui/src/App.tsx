import React from "react";
import { Route, Switch } from "react-router-dom";
import { Create } from "./pages/Create";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { MainContainer } from "./styles/global";

function App() {
  return (
    <MainContainer>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/book/:id">
          <Detail />
        </Route>
        <Route path="/book/create">
          <Create />
        </Route>
      </Switch>
    </MainContainer>
  );
}

export default App;
