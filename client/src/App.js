import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <Main>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Main>
  );
}

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
`;

export default App;
