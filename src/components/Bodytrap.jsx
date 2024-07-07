import styled from "styled-components";


const Body = () => {
  return (
    <FullBody>
        <Trapi>
        </Trapi>
      
    </FullBody>
  );
}

export default Body;

const FullBody = styled.div``;
const Trapi = styled.div`
  width: 400px;
  height: 350px;
  background-color: black;
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  position: absolute;
  z-index: -1;
  top: 32%;
  left: 15px;
`;
