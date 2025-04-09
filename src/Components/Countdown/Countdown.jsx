import React, { useState, useEffect } from "react";
import "./Countdown.css"; // Optional: For styling

const Countdown = ({ targetDate, color }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = new Date(targetDate).getTime() - now;

    if (distance <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdownBox">
        <h2 className="countdown-title">Հարսանիքին մնաց՝</h2>
      <div id="countdown" style={{ color: color }}>
        <div className="countdown-item">
          <p>{timeLeft?.days}</p> <span>Օր</span>
        </div>
        <div className="countdown-item">
          <p>{timeLeft?.hours}</p> <span>Ժամ</span>
        </div>
        <div className="countdown-item">
          <p>{timeLeft?.minutes}</p> <span>Րոպե</span>
        </div>
        <div className="countdown-item">
          <p>{timeLeft?.seconds}</p> <span>Վրկ</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
