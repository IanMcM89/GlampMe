import styled from "styled-components";

function About() {
  return (
    <Wrapper>
      <h3 style={{ margin: "1%" }}>ABOUT US</h3>
      <Divider />
      <p style={{ margin: "4%" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <span>
        <Image src="/images/backgrounds/about.jpg" alt="" />
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: dimgray;
  height: fit-content;
  padding: 4%;
`;

const Divider = styled.hr`
  border-top: 4px solid #077866;
  border-radius: 5px;
  width: 25%;
  margin: 4%;
`;

const Image = styled.img`
  border: solid 1px gray;
  width: 90%;
  margin 5%;
`;

export default About;
