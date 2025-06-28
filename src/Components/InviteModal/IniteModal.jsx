import React, { useState, useEffect } from "react";
import { Heart, Sparkles, Gift } from "lucide-react";
import "./InviteModal.css";

const InviteModal = ({ onOpenInvitation }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Մոդալի հայտնվելու անիմացիա
    setTimeout(() => setIsAnimating(true), 100);
  }, []);

  const handleOpenClick = () => {
    if (onOpenInvitation) {
      setIsVisible(false);
      setTimeout(() => onOpenInvitation(), 400);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="particles-container">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <Heart className="particle-heart" />
          </div>
        ))}
      </div>

      {/* Բացիկ */}
      <div
        className={`wedding-card ${
          isAnimating ? "card-visible" : "card-hidden"
        }`}
      >
        {/* Վերևի դեկորատիվ գիծ */}
        <div className="card-top-border"></div>

        {/* Հիմնական բովանդակություն */}
        <div className="card-content">
          {/* Դեկորատիվ էլեմենտներ */}
          <div className="decoration decoration-1"></div>
          <div className="decoration decoration-2"></div>
          <div className="decoration decoration-3"></div>

          {/* Կենտրոնական պատկեր */}
          <div className="heart-container">
            <div className="heart-wrapper">
              <div className="heart-glow"></div>
              <div className="heart-bg">
                <Heart className="main-heart" />
              </div>
            </div>
          </div>

          {/* Գլխավոր գրություն */}
          <div className="title-section">
            <h1 className="main-title">💍 Հարսանյաց հրավիրատոմս</h1>
          </div>

          {/* Հրավիրական տեքստ */}
          <div className="invitation-text">
            <p className="main-text">
              <Sparkles className="sparkle sparkle-left" /> Արման Մանե{" "}
              <Sparkles className="sparkle sparkle-right" />
            </p>
          </div>

          {/* Բացելու կոճակ */}
          <button onClick={handleOpenClick} className="open-button">
            <div className="button-overlay"></div>
            <div className="button-content" onClick={() => setIsVisible(false)}>
              <span className="button-text">Բացել հրավիրատոմսը</span>
            </div>
          </button>

          {/* Ներքևի դեկորատիվ տեքստ */}
          <p className="hint-text">Սեղմեք բացելու համար</p>
        </div>
      </div>
    </div>
  );
};

export default InviteModal;
