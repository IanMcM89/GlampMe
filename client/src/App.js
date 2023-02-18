import React from "react";
import { Routes ,Route } from 'react-router-dom';
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/services" />
        <Route path="/contact" />
        <Route path="/about" />
        <Route path="/" element={<div/>}/>
      </Routes>
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
