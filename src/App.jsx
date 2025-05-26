import "./App.css";
import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import InspectElemDis from "./Components/InspectElemDis/InspectElemDis";
import ParticleBackground from "./Components/ParticleBackground/ParticleBackground";
import BackgroundMusic from "./Components/BackgroundMusic/BackgroundMusic";

function App() {
  return (
    <>
      <ParticleBackground className="particles" />
      <InspectElemDis />
      <Header />
      <Container />
      <BackgroundMusic/>
    </>
  );
}

export default App;
