import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    setPlaying(!playing);
    // Users can add an audio element with their own romantic song
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
