import styled from "styled-components";

function Packages() {
  return (
    <Wrapper>
      <Intro>
        <p>GlampMe Camping Adventures</p>
        <h2 style={{ width: '60%' }}>ENJOY YOUR STAY</h2>
        <Button>Book Now</Button>
      </Intro>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-image: linear-gradient(
      to bottom,
      rgba(9, 57, 53, 0.5) 26%,
      rgba(100, 100, 100, 0.6) 74%
    ),
    url("images/backgrounds/bonfire.jpg");
  background-size: cover;
  height: fit-content;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 10%;
  color: rgb(255, 255, 255, 80%);
  text-align: center;
  margin: 0;
`;

const Button = styled.button`
  background-color: transparent;
  border: solid rgb(255, 255, 255, 80%) 2px;
  color: rgb(255, 255, 255, 80%);
  margin: 5%;
  padding: 4%;
`;

export default Packages;
