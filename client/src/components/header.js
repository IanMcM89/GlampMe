import styled from "styled-components";

function Header() {
  return (
    <header style={{ backgroundColor: "#077866", height: "10vh" }}>
      <Wrapper>
        <Logo src="/images/icons/tent.png" alt="" />
        <Brandname>GlampMe</Brandname>
      </Wrapper>
    </header>
  );
}

const Wrapper = styled.span`
  display: flex;
  height: 100%;
`;

const Brandname = styled.h1`
  display: flex;
  align-items: center;
  color: white;
  height: 100%;
  margin: auto 0;
`;

const Logo = styled.img`
  height: 70%;
  margin: auto 0;
`;

export default Header;
