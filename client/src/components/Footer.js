import styled from "styled-components";

function Footer() {
  return (
    <Wrapper />
  );
}

const Wrapper = styled.footer`
  display: flex;
  background-color: rgba(10, 10, 10, 0.8);
  width: 100%;
  padding: 4vh;
`;

export default Footer;