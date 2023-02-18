import styled from "styled-components";

function Footer() {
  return (
    <Wrapper />
  );
}

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  background-color: #404040;
  color: white;
  height: 10vh;
  bottom: 10px;
`;

export default Footer;