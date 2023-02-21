import styled from "styled-components";

function Explore() {
  return (
    <Wrapper>
      <h3 style={{ margin: "1%" }}>Explore</h3>
      <p style={{ margin: "1%" }}>Search for campsites in your area</p>
      <Divider />
      <div>
        <Map />
      </div>
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

const Map = styled.div`
  display: flex;
  background-color: lightgray;
  border: solid 1px lightgray;
  width: 90%;
  height: 500px;
  margin 5%;
`;

export default Explore;
