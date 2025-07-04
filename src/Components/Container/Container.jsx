import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import Confirm from "../Confirm/Confirm";
import Countdown from "../Countdown/Countdown";
import FooterText from "../FooterText/FooterText";
import InvitationText from "../InvitationText/InvitationText";
import Line from "../Line/Line";
import Program from "../Program/Program";
import "./Container.css";
import PlayStopMusic from "../PlayStopMusic/PlayStopMusic";
import PhotosComp from "../PhotosComp/PhotosComp";

const Container = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  return (
    <main className="container">
      <PlayStopMusic />
      <InvitationText />
      <Line />
      <Countdown targetDate={"2025-08-07T09:00"} />
      <Calendar />
      <Line />
      <PhotosComp />
      <Line />
      <Program />
      <Line />
      <FooterText />
      <Line />

      <div className="footer">
        <div className="modalBtn" onClick={() => setShowConfirmModal(true)}>
         Հաստատեք ձեր ներկայությունը
        </div>
      </div>
      {showConfirmModal && (
        <Confirm setShowConfirmModal={setShowConfirmModal} />
      )}
    </main>
  );
};

export default Container;
