import styled from "styled-components";

function Header() {
  return (
    <header style={{ backgroundColor: "#077866", height: "10vh" }}>
      <Wrapper>
        <Icon
          src="/images/icons/tent.png"
          alt="Menu icon"
          style={{ marginLeft: "2%" }}
        />
        <Logo>GlampMe</Logo>
        <Nav>
          <Icon src="/images/icons/profile.png" alt="Profile Icon" />
          <Icon src="/images/icons/menu.png" alt="Menu icon" />
        </Nav>
      </Wrapper>
    </header>
  );
}

const Wrapper = styled.span`
  display: flex;
  height: 100%;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  font-size: 26px;
  color: white;
  height: 100%;
  margin: auto 0;
`;

const Icon = styled.img`
  height: 60%;
  margin: auto 0;
`;

const Nav = styled.nav`
  display: flex;
  height: 100%;
  margin: auto 2% auto auto;
`;

export default Header;
