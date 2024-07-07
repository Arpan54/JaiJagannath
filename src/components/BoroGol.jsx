import styled from 'styled-components';

const BoroGol = () => {
  return (
    <Circle></Circle>
  );
}

export default BoroGol;

const Circle = styled.div`
  width: 400px;
  height: 400px;
  background-color: black;
  border-radius: 50%;
  position: relative;
  border: 10px solid yellow;
  
  &::before {
    content: '';
    width: 370px; /* Adjust size to create an inner border */
    height: 370px; /* Adjust size to create an inner border */
    background-color: transparent; /* or any inner background color */
    border: 2px solid white; /* This is the inner border */
    border-radius: 50%;
    position: absolute;
    top: 12.5px; /* Adjust this value based on border thickness */
    left: 12.5px; /* Adjust this value based on border thickness */

  }
`
