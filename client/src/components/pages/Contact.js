import Footer from "../Footer";
import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <h3 style={{ margin: "2%", color: "white" }}>CONTACT US</h3>
      <Article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </Article>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: #064546;
  background-image: linear-gradient(
      to bottom,
      rgba(9, 57, 53, 0.5) 26%,
      rgba(100, 100, 100, 0.6) 74%
    ),
    url("images/backgrounds/camp-mountains.png");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
`;

const Article = styled.article`
  background-color: white;
  color: dimgray;
  margin: 5%;
  padding: 5%;
`;

export default Contact;
