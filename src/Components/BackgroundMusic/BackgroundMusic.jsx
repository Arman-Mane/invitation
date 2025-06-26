import { forwardRef, useImperativeHandle, useRef } from "react";
import audio from "../../assets/audio/audio.mp3";

const BackgroundMusic = forwardRef((props, ref) => {
  const audioRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: () => {
      if (audioRef.current) audioRef.current.play();
    },
    pause: () => {
      if (audioRef.current) audioRef.current.pause();
    },
    isPlaying: () => {
      return audioRef.current && !audioRef.current.paused;
    },
  }));

  return (
    <audio ref={audioRef} loop playsInline >
      <source src={audio} type="audio/mp4" />
      Ձեր բրաուզերը չի աջակցում աուդիո ֆորմատին։
    </audio>
  );
});

export default BackgroundMusic;
