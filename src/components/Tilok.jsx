import styled from "styled-components";

const Tilok = () => {
  return (
    <HalfOval >
      <Circle></Circle>
    </HalfOval>
  );
}

export default Tilok;

const HalfOval = styled.div`
    width: 35px;
    height: 155px;
    position: absolute;
    background-color: black;
    border-radius: 0px 0px 200px 200px;
    border-left: 10px solid white;
    overflow: hidden;
    top: 40px;
    left: 182px;
    border-right: 10px solid white;
`
const Circle = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: red;
    border-radius: 200px 200px 200px 200px;
    overflow: hidden;
    top: 120px;
    right: 7px;
`

