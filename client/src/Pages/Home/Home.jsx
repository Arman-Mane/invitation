import React from "react";
import Header from "../../Components/Header/Header";
import Container from "../../Components/Container/Container";
import InviteModal from "../../Components/InviteModal/IniteModal";
import BackgroundMusic from "../../Components/BackgroundMusic/BackgroundMusic";

const Home = () => {
  return (
    <div>
      <Header />
      <Container />
      <BackgroundMusic />
      <InviteModal />
    </div>
  );
};

export default Home;
