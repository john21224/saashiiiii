import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const RomanticFooter = () => {
  return (
    <footer className="py-12 romantic-gradient text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2 text-muted-foreground font-body"
      >
        <span>Made with</span>
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <Heart className="w-4 h-4 text-primary fill-primary" />
        </motion.div>
        <span>just for you obvvv </span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-2 text-sm text-muted-foreground/60 font-body"
      >
        Because you deserve the worldddddddddd ❤️
      </motion.p>
    </footer>
  );
};

export default RomanticFooter;
