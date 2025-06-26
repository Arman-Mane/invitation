import "./App.css";
import InspectElemDis from "./Components/InspectElemDis/InspectElemDis";
import { useEffect } from "react";
import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import InviteModal from "./Components/InviteModal/IniteModal";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <Header />
      <Container />
      <InviteModal />
      <InspectElemDis />
    </>
  );
}

export default App;
