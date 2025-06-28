import React, { useState } from "react";
import "./confirm.css"; // CSS ֆայլը import անել
import { Heart } from "lucide-react";

const Confirm = ({ setShowConfirmModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    attending: "",
    guestCount: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAttendingChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      attending: value,
    }));
  };

  const handleConfirmSubmit = async (e) => {
    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxz3Vhwmhb7viH0E-S0Swiw9wxBWduuQQlUqGhMzfMjXrEdZ-OkhXlIvNDybQxVO8nxUw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({
            name: formData.name,
            attending: formData.attending === "yes" ? "Այո" : "Ոչ",
            guestCount: formData.attending === "yes" ? formData.guestCount : "",
          }),
        }
      );

      console.log("Տվյալները ուղարկված են");
      setIsSubmitted(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (err) {
      console.error("Սխալ:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.attending) {
      alert("Խնդրում ենք լրացնել բոլոր պարտադիր դաշտերը");
      return;
    }
    handleConfirmSubmit();
    // setIsSubmitted(true);
  };

  const handleCancelSubmit = () => {
    setShowConfirmModal(false);
  };

  // Հաջողության էջ
  if (isSubmitted) {
    setTimeout(() => {
      handleCancelSubmit();
    }, 5000);

    return (
      <div className="modal2-overlay" onClick={handleCancelSubmit}>
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
        <div className="success-container">
          <div className="success-card">
            {/* Success Icon */}
            <svg
              className="success-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h2 className="success-title">Շնորհակալություն!</h2>
            <p className="success-message">
              Ձեր գրանցումը հաջողությամբ ստացվել է:
            </p>

            {/* Heart Icon */}
            <svg
              className="heart-small"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // Գրանցման ֆորմ
  return (
    <>
      <div className="modal2-overlay">
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
        <div className="wedding-container">
          {/* <div className="wedding-form-card"> */}
          <div
            className={`wedding-form-card ${
              !isSubmitted ? "show-card" : ""
            }`}
          >
            <div className="wedding-header">
              <svg
                className="heart-icon"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>

              <h1 className="wedding-title">Գրանցում</h1>
              <p className="wedding-subtitle">
                Խնդրում ենք գրանցել ձեր մասնակցությունը
              </p>
            </div>

            <form>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Անուն Ազգանուն *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Գրեք ձեր անունը"
                />
              </div>

              <div className="form-group">
                <div className="radio-group">
                  <div
                    onClick={() => handleAttendingChange("yes")}
                    className={`radio-option ${
                      formData.attending === "yes" ? "selected-yes" : ""
                    }`}
                  >
                    {formData.attending === "yes" ? (
                      <svg
                        className={`radio-icon yes radio-icon`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ) : (
                      <div className="radio-icon no-unselected"></div>
                    )}

                    <span className="radio-text">Գալու եմ</span>
                  </div>

                  <div
                    onClick={() => handleAttendingChange("no")}
                    className={`radio-option ${
                      formData.attending === "no" ? "selected-no" : ""
                    }`}
                  >
                    {formData.attending === "no" ? (
                      <svg
                        className="radio-icon no"
                        fill="none"
                        stroke="red"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 9l-6 6m0-6l6 6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ) : (
                      <div className="radio-icon no-unselected"></div>
                    )}

                    <span className="radio-text">Չեմ կարող գալ</span>
                  </div>
                </div>
              </div>

              {formData.attending === "yes" && (
                <div className="form-group guest-count-field">
                  <label htmlFor="guestCount" className="form-label">
                    <svg
                      className="guest-label-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    Հյուրերի քանակ
                  </label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "հյուր" : "հյուր"}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={(e) => handleSubmitClick(e)}
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? (
                  <>
                    {/* Loading Icon */}
                    <svg
                      className="button-icon loading-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                      />
                    </svg>
                    <span>Ուղարկվում է...</span>
                  </>
                ) : (
                  <>
                    {/* Send Icon */}
                    <svg
                      className="button-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    <span>Գրանցվել</span>
                  </>
                )}
              </button>
              <button
                className="close-button "
                onClick={() => setShowConfirmModal(false)}
              >
                Փակել
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
