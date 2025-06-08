import "./App.css";
import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import InspectElemDis from "./Components/InspectElemDis/InspectElemDis";
import ParticleBackground from "./Components/ParticleBackground/ParticleBackground";
import BackgroundMusic from "./Components/BackgroundMusic/BackgroundMusic";
import InviteModal from "./Components/InviteModal/IniteModal";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])
  return (
    <>
      {/* <ParticleBackground id="particles" /> */}
      <InspectElemDis />
      <Header />
      <Container />
      <InviteModal/>
      <BackgroundMusic/>
    </>
  );
}

export default App;
