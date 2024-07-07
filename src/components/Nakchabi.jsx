import styled from "styled-components";

const Nakchabi = () => {
  return (
    // <Fulli>
        
    // </Fulli>
    <Na>
      <Chabi>
      
      </Chabi>
      <Bal></Bal>
    </Na>
    
  );
}

export default Nakchabi;

const Na = styled.div`
    display: flex;
`;
const Chabi = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    border: 5px solid gold;
    border-radius: 200px 200px 200px 200px;
    overflow: hidden;
    top: 250px;
    left: 180px;
`;
const Bal = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: gold;
    /* border: 5px solid gold; */
    border-radius: 200px 200px 200px 200px;
    overflow: hidden;
    top: 265px;
    left: 180px;
`;
