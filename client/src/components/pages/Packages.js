import styled from "styled-components";

function Packages() {
  return (
    <Wrapper>
      <h3 style={{ margin: '1%' }}>PACKAGES</h3>
      <p style={{ margin: '1%' }}>Choose the best options for your stay</p>
      <Divider />
      <div>
        <Image src="/images/packages/standard.jpg" alt=""/>
        <div></div>
      </div>
      <div>
        <Image src="/images/packages/couples.jpg" alt=""/>
      </div>
      <div>
        <Image src="/images/packages/girls.jpg" alt=""/>
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

const Image = styled.img`
  box-shadow: 5px 5px 5px darkgray;
  border: solid 1px lightgray;
  width: 90%;
  margin 5%;
`;

export default Packages;
