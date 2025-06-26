import React, { useEffect, useRef, useState } from "react";
import "./PlayStopMusic.css";
import BackgroundMusic from "../BackgroundMusic/BackgroundMusic";
import { Play, Pause } from "@phosphor-icons/react";

const PlayStopMusic = () => {
  const musicRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [autoplayTried, setAutoplayTried] = useState(false);

  const togglePlay = () => {
    if (!musicRef.current) return;

    if (musicRef.current.isPlaying()) {
      musicRef.current.pause();
      setIsPlaying(false);
    } else {
      musicRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const tryAutoplay = () => {
      if (!autoplayTried && musicRef.current) {
        musicRef?.current
          ?.play()
          ?.then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log(
              "Autoplay blocked. Will wait for user interaction.",
              err
            );
          });
        setAutoplayTried(true);
      }
    };

    window.addEventListener("click", tryAutoplay, { once: true });

    return () => {
      window.removeEventListener("click", tryAutoplay);
    };
  }, [autoplayTried]);

  return (
    <div className="button-row">
      <button
        className={`button button--toggle button--play ${
          isPlaying ? "is-active" : ""
        }`}
        onClick={togglePlay}
        aria-label={isPlaying ? "Դադարեցնել" : "Նվագարկել"}
      >
        {isPlaying ? <Pause size={32} color="aqua" /> : <Play size={32} color="aqua"  />}
      </button>

      <BackgroundMusic ref={musicRef} />
    </div>
  );
};

export default PlayStopMusic;
