import React, { useRef, useState } from "react";
import "./PlayStopMusic.css";
import BackgroundMusic from "../BackgroundMusic/BackgroundMusic";
import { Play, Pause } from "@phosphor-icons/react";

const PlayStopMusic = () => {
  const musicRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = async () => {
    if (!musicRef.current) return;

    if (musicRef.current.isPlaying()) {
      musicRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await musicRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Play failed:", err);
      }
    }
  };

  return (
    <div className="button-row">
      <button
        className={`button button--toggle button--play ${isPlaying ? "is-active" : ""}`}
        onClick={togglePlay}
        aria-label={isPlaying ? "Դադարեցնել" : "Նվագարկել"}
      >
        {isPlaying ? <Pause size={32} color="aqua" /> : <Play size={32} color="aqua" />}
      </button>

      <BackgroundMusic ref={musicRef} />
    </div>
  );
};

export default PlayStopMusic;
