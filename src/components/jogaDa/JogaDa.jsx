import styled from "styled-components";
import BoroGol from "../BoroGol"
import ChotoGol from "../ChotoGol";
import Tilok from "../Tilok";
import Thot from "../Thot";
import Nakchabi from "../Nakchabi";
import Bodytrap from "../Bodytrap";
import Hat from "../Hat";
const JogaDa = () => {
  return (
    <Full>
      <Mukh>
        <BoroGol/>
        <Tilok/>
        <Cokh>
            <ChotoGol/>
            <ChotoGol/>
        </Cokh>

        <Nakchabi/>

        <Thot/>
      </Mukh>

      <Body>
        <Bodytrap/>


        <Duhat>
          <Hat/>
          <Hat/>
        </Duhat>

      </Body>
        
    </Full>
    
  );
}

export default JogaDa;

const Full = styled.div``;
const Mukh = styled.div``;
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
    left: 57px;
    justify-content: space-between;
`;
// const Moni = styled.div``;
