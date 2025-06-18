import "./App.css";
import InspectElemDis from "./Components/InspectElemDis/InspectElemDis";
import { useEffect } from "react";
import AppRouter from "./Router/AppRouter";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <AppRouter />
      <InspectElemDis />
    </>
  );
}

export default App;
