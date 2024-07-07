import styled from "styled-components";
const JogaDa = () => {
  return (
    <Full>
      <Mukh>
        <BoroGol></BoroGol>
        <Tilok>
          <HalfOval>
            <Circle></Circle>
          </HalfOval>
        </Tilok>
        <Cokh>
          <CokhCircle>
            <ChotoCircle></ChotoCircle>
          </CokhCircle>

          <CokhCircle>
            <ChotoCircle></ChotoCircle>
          </CokhCircle>
        </Cokh>

        <Na>
          <Chabi></Chabi>
          <Bal></Bal>
        </Na>

        <Ovalia></Ovalia>
      </Mukh>

      <Body>
        <Trapi>
        </Trapi>


        <Duhat>
          <HatC>
          </HatC>
          <HatC>
          </HatC>
        </Duhat>

      </Body>
    </Full>
  );
};

export default JogaDa;

const Full = styled.div``;
const Mukh = styled.div``;

const HatC = styled.div`
    width: 100px;
    height: 100px;
    background-color: #d0980a;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 12px solid #483400;
`

const Trapi = styled.div`
  width: 400px;
  height: 350px;
  background-color: #c6c6c6;
  /* border: 2px solid black; */
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  position: absolute;
  z-index: -1;
  top: 32%;
  left: 870px;

`;

const Na = styled.div`
    display: flex;
`;
const Chabi = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: #ffeb00;
    border-radius: 200px 200px 200px 200px;
    overflow: hidden;
    top: 265px;
    left: 65pc;
`;
const Bal = styled.div`
        width: 20px;
    height: 20px;
    position: absolute;
    border: 5px solid #ffeb00;
    border-radius: 200px 200px 200px 200px;
    overflow: hidden;
    top: 250px;
    left: 65pc;
`;

const Ovalia = styled.div`
      width: 170px;
    height: 60px;
    border-radius: 0px 0px 200px 200px;
    overflow: hidden;
    position: absolute;
    top: 300px;
    left: 61.2pc;
    border-bottom: 8px solid red;
`;

const Tilok = styled.div``;
const HalfOval = styled.div`
  width: 35px;
    height: 155px;
    position: absolute;
    border-radius: 0px 0px 200px 200px;
    border-left: 10px solid white;
    overflow: hidden;
    top: 40px;
    left: 64.5pc;
    border-right: 10px solid white;
`;
const Circle = styled.div`
  width: 20px;
    height: 20px;
    position: absolute;
    background-color: red;
    border-radius: 200px 200px 200px 200px;
    overflow: hidden;
    top: 120px;
    right: 7px;
`;

const BoroGol = styled.div`
  width: 400px;
  height: 400px;
  background-color: #c6c6c6;
  border-radius: 50%;
  position: relative;
  border: 10px solid red;
  
  &::before {
    content: '';
    width: 370px; /* Adjust size to create an inner border */
    height: 370px; /* Adjust size to create an inner border */
    background-color: transparent; /* or any inner background color */
    border: 2px solid yellow; /* This is the inner border */
    border-radius: 50%;
    position: absolute;
    top: 12.5px; /* Adjust this value based on border thickness */
    left: 12.5px; /* Adjust this value based on border thickness */

  }
`;

const Body = styled.div``;
const Duhat = styled.div`
    width: 420px;
    display: flex;
    justify-content: space-between;
`;
const Cokh = styled.div`
  position: absolute;
    width: 305px;
    display: flex;
    top: 140px;
    left: 56.7pc;
    justify-content: space-between;
`;
const CokhCircle = styled.div`
  width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 12px solid red;
`;
const ChotoCircle = styled.div`
      width: 70px;
    height: 70px;
    background-color: black;
    border-radius: 50%;
    left: 550px;
    z-index: 1;
`;
