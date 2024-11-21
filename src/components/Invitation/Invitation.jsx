import React from "react";
import Countdown from "../CountDown/CountDown";
import Program from "../Program/Program";
import "./invitation.scss";
import poster from "../../assets/Images/1.jpg";
import wedding from "../../assets/img/wedding.png";
import RingsSvg from "../SVGs/RingsSvg";
import Confirm from "../Confirm/Confirm";

const invitation = () => {
  const data = {
    groom: "Արման",
    bride: "Մանե",
    and: "ԵՎ",
    date: "2025-03-31",
    invite: `Այս յուրահատուկ օրը ուզում ենք գտնվել մեզ հարազատ ու սիրելի մարդկանց
        շրջապատում։ Ուստի հրավիրում ենք Ձեզ կիսելու մեզ հետ այս գեղեցիկ
        հարսանյաց օրը։`,
    poster,
    months: [
      "Հունվար",
      "Փետրվար",
      "Մարտ",
      "Ապրիլ",
      "Մայիս",
      "Հունիս",
      "Հուլիս",
      "Օգոստոս",
      "Սեպտեմբեր",
      "Հոկտեմբեր",
      "Նոյեմբեր",
      "Դեկտեմբեր",
    ],

    program: {
      church: {
        time: "15:00",
        place: "Սուրբ Հռիփսիմե Եկեղեցի",
        address: "Էջմիածին Մաշտոցի փող.",
        title: "Պսակադրություն",
      },
      hall: {
        time: "17:30",
        place: "Նոր Դվին",
        address: "Էջմիածին Աշտարակի խճուղի, 1 շենք",
        title: "Հանդիսություն",
      },
    },
    isProgram: true,
    isConfirm: true,
    isCountdown: true,
  };

  const {
    groom,
    and,
    bride,
    date,
    invite,
    months,
    program,
    isProgram,
    isConfirm,
    isCountdown,
  } = data;

  const monthDay = date.split("-");
  return (
    <div className="wd-invite-1">
      <header style={{ background: `url(${poster})` }}>
        <div className="image">
          <h1>
            {groom} <span> {and} </span> {bride}
          </h1>
          <RingsSvg />
          <div className="date">
            {months[monthDay[1] - 1]}
            <span className="day"> {monthDay[2]} </span> {monthDay[0]}
          </div>
        </div>
      </header>
      <div className="content">
        {/* <img src={rose} className="flower fl1" alt="" /> */}
        {/* <img src={rose} className="flower fl2" alt="" /> */}
        {/* <img src={rose} className="flower fl3" alt="" /> */}
        <div className="text scrollAnim">{invite}</div>

        {/* <img src={rose} className="flower fl4" alt="" />
          <img src={rose} className="flower fl5" alt="" />
          <img src={rose} className="flower fl6" alt="" /> */}
        <img src={wedding} className="wedding anim" alt="" />

        {isProgram && <Program program={program} />}
      </div>
      {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7800.207380555486!2d44.29508139699375!3d40.18394836950833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a94eab4d0fb39%3A0x686139cd2968c37c!2z0J3QvtGAINCU0LLQuNC9!5e0!3m2!1sru!2sam!4v1721585990800!5m2!1sru!2sam"
          width="300px"
          height="300px"
          style={{border:0, width: "300px"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
      {isCountdown && (
        <div className="countDownBox">
          <div className="countDownBox-inner">
            <Countdown targetDate={data?.date} color="#fff" />
          </div>
        </div>
      )}

      {isConfirm && <Confirm />}
    </div>
  );
};

export default invitation;
