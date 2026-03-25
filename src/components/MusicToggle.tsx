import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const START_TIME = 160; // 2:40
const END_TIME = 220;   // 3:40

const MusicToggle = () => {
  const [playing, setPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio/background.mp3");
    audio.loop = true;
    audioRef.current = audio;

    const setStart = () => {
      audio.currentTime = START_TIME;
    };

    audio.addEventListener("loadedmetadata", () => {
      audio.currentTime = START_TIME;
      audio.play().catch(() => setPlaying(false));
    });

    const handleTimeUpdate = () => {
      if (audio.currentTime < START_TIME || audio.currentTime >= END_TIME) {
        audio.currentTime = START_TIME;
      }
    };
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.pause();
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.currentTime = START_TIME;
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-primary hover:scale-110 transition-transform"
      aria-label="Toggle music"
    >
      {playing ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
    </motion.button>
  );
};

export default MusicToggle;
