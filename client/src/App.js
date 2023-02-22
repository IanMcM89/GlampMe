import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Packages from "./components/pages/Packages";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Main>
        {/* <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes> */}
        <Home />
        <Packages />
        <About />
        <Contact />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 90vh;
  overflow-y: scroll;
`;

export default App;
