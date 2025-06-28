import "./App.css";
import InspectElemDis from "./Components/InspectElemDis/InspectElemDis";
import { useEffect } from "react";
import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import InviteModal from "./Components/InviteModal/IniteModal";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });

    AOS.init({
    duration: 1000, // անիմացիայի տևողությունը միլիվայրկյաններով
    once: true, // միան անիմացվի մեկ անգամ
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
