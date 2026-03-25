import { motion } from "framer-motion";

const videos = [
{ src: "/videos/video1.MOV", caption: "Our cutest moment 💕" },
{ src: "/videos/video2.MP4", caption: "That time we couldn't stop laughing 😂" },
{ src: "/videos/video3.MOV", caption: "Us being us ❤️" },
{ src: "/videos/video4.MP4", caption: "My favorite video of you 🥰" }];


const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, type: "spring", stiffness: 80 } }
};

const VideoGallery = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-display font-bold text-center text-gradient-rose mb-6">i have soo many  very hard to decide


        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground font-body mb-16">


        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {videos.map((video, index) =>
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -6, boxShadow: "0 12px 40px hsl(340 60% 65% / 0.15)" }}
            className="overflow-hidden rounded-2xl love-card transition-shadow duration-300">
            
              <video
              src={video.src}
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-video object-cover" />
            
              <p className="text-center text-muted-foreground font-body text-sm py-3">
                {video.caption}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

};

export default VideoGallery;