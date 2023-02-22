import styled from "styled-components";

function Packages() {
  return (
    <Wrapper>
      <h3 style={{ margin: "1%" }}>PACKAGES</h3>
      <p style={{ margin: "1%" }}>Choose the best options for your stay</p>
      <Divider />
      <Package>
        <Image src="/images/packages/standard.jpg" alt="" />
        <Details>
          <Title>Standard</Title>
          <Info>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </Info>
        </Details>
      </Package>
      <Package>
        <Image src="/images/packages/couples.jpg" alt="" />
        <Details>
          <Title>Couples Package</Title>
          <Info>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </Info>
        </Details>
      </Package>
      <Package>
        <Image src="/images/packages/girls.jpg" alt="" />
        <Details>
          <Title>Girls' Night</Title>
          <Info>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </Info>
        </Details>
      </Package>
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
  margin-bottom: 25%;
`;

const Package = styled.div`
  position: relative;
`;

const Details = styled.div`
  position: absolute;
  background-color: white;
  text-align: center;
  width: 80%;
  bottom: 0;
  right: 10%;
`;

const Title = styled.header`
  background-color: #333333;
  color: white;
  margin-bottom: 0;
  padding 2%;
`;

const Info = styled.p`
  border: 1px solid darkgray;
  padding 4%;
  margin-top: 0;
`;

export default Packages;
