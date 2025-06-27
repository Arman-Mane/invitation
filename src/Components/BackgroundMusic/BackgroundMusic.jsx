import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import audio from "../../assets/audio/audio.mp3"; // MP3 strongly recommended

const BackgroundMusic = forwardRef((props, ref) => {
  const audioRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: () => {
      if (audioRef.current) return audioRef.current.play();
    },
    pause: () => {
      if (audioRef.current) return audioRef.current.pause();
    },
    isPlaying: () => {
      return audioRef.current && !audioRef.current.paused;
    },
  }));

   useEffect(() => {
    const tryPlay = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log("Autoplay blocked:", err);
        });
      }
    };

    window.addEventListener("click", tryPlay, { once: true });
    return () => {
      window.removeEventListener("click", tryPlay);
    };
  }, []);
  return (
    <audio ref={audioRef} loop preload="auto" playsInline>
      <source src={audio} type="audio/mpeg" />
      Ձեր բրաուզերը չի աջակցում։
    </audio>
  );
});

export default BackgroundMusic;
