import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
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
        <Home src="/images/bonfire.jpg" alt="" />
        <Services />
        <About />
        <Contact />
        <Footer />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 90vh;
  overflow-y: hidden;
`;

const Home = styled.img`
  display: flex;
  flex-direction: column;
  height: 500px;
`;

const Services = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #d9f2e5;
  height: 500px;
`;

const About = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #c6ebd8;
  height: 500px;
`;

const Contact = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #b4e4cb;
  height: 500px;
`;

export default App;
