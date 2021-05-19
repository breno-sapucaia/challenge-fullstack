import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { ApolloProvider } from "@apollo/client/react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BookContextProvider } from "./hooks/useBooks";
import { Create } from "./pages/Create";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { FontFace } from "./styles/fonts";
import { GlobalStyle, MainContainer } from "./styles/global";

function App() {
  return (
    <MainContainer>
      <ApolloProvider
        client={
          new ApolloClient({
            uri: "http://localhost:3333/graphql",
            cache: new InMemoryCache(),
          })
        }
      >
        <Router>
          <Switch>
            <Route path="/" exact>
              <BookContextProvider>
                <Home />
              </BookContextProvider>
            </Route>
            <Route path="/book/:id" exact>
              <Detail />
            </Route>
            <Route path="/book/create" exact>
              <Create />
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
      <GlobalStyle />
      <FontFace />
    </MainContainer>
  );
}

export default App;
