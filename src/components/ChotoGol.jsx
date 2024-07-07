import styled from 'styled-components';

const ChotoGol = () => {
  return (
    <Circle>
      <ChotoCircle></ChotoCircle>
    </Circle>
  );
}

export default ChotoGol;

const Circle = styled.div`
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
