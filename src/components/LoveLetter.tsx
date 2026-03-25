import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const LoveLetter = () => {
  return (
    <section className="section-padding romantic-gradient relative overflow-hidden">
      {/* Single decorative heart */}
      <div className="absolute text-primary/10 top-1/4 left-[10%] text-4xl">♥</div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-display font-bold text-center text-gradient-rose mb-12"
        >
          A Letter For You
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -2, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, type: "spring" }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="love-card p-8 md:p-12 transform -rotate-1 shimmer"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <Heart className="w-8 h-8 text-primary/30 fill-primary/20" />
          </motion.div>

          <div className="font-handwriting text-lg md:text-xl leading-loose text-foreground/80 space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              My Dearest,
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              ​you are literally perfect saashiiii dont you worry i am with you everytime . share everything w me baeee. i lovee youu soo soo muchhhhh merii jannn .
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              literally my heart babe srsly my heart youuu areee.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              i can write soo much but rn i am soo full of emotions babee
              you are so bestt girlfriend saashii i am soo happy with you
              tang kara krr ekoo pleaseeeeeeeeeeeeeeeeeeeeeeeee.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
              className="text-right mt-8"
            >
              john aka jaanveerrrrrrrrr<br />
              <span className="text-primary text-2xl">kyaaaaaaaaaaaaaaaaaaa</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetter;
