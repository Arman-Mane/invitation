import { useEffect, useRef, useState } from "react";
import audio from "../../assets/audio/audio.m4a";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current && !audioRef.current.paused) return;

      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Autoplay blocked:", err));
    };

    // window.addEventListener("click", playMusic, { once: true });

    return () => {
      window.removeEventListener("click", playMusic);
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src={audio} type="audio/mpeg" />
      Ձեր բրաուզերը չի աջակցում աուդիո ֆորմատին։
    </audio>
  );
};

export default BackgroundMusic;
