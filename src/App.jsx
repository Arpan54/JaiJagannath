// import ChotoGol from "./components/ChotoGol"
// import BoroGol from "./components/BoroGol"
import styled, { createGlobalStyle } from 'styled-components';
import JogaDa from "./components/jogaDa/JogaDa"
import SuvadraDidi from "./components/suvadraDidi/SuvadraDidi"
import BoloramDa from "./components/boloramDa/BoloramDa"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Dancing Script", cursive;
    
  }
`;
const Title = styled.h1`
  font-size: 10rem;
  font-weight: 700;
  color: #120200;
`
function App() {

  return (
    <Fullchobi>
      <GlobalStyle/>
    <Pasapasi>
      <JogaDa/>
      <SuvadraDidi/>
      <BoloramDa/>
    </Pasapasi>
    <Title>Happy Rath Yatra</Title>
    </Fullchobi>
  )
}

export default App

const Fullchobi = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(165, 31, 31, 0.313) url('../public/1_wIJcq5Hu-sTgPAeakQZSGQ.jpg');
  background-size: cover; /* Ensures the image covers the entire container */
  background-position: center; /* Centers the image */
  z-index: -1; /* Sends the image to the background */
  
`

const Pasapasi = styled.div`
      display: flex;
    align-items: flex-end;
    gap: 40px;


`
