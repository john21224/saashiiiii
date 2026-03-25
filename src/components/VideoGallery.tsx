import { motion } from "framer-motion";

const videos = [
  { src: "/videos/video1.MOV", caption: "Our cutest moment 💕" },
  { src: "/videos/video2.MP4", caption: "That time we couldn't stop laughing 😂" },
  { src: "/videos/video3.MOV", caption: "Us being us ❤️" },
  { src: "/videos/video4.MP4", caption: "My favorite video of you 🥰" },
];

const VideoGallery = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-center text-gradient-rose mb-6"
        >
          our little videosss 🎬
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-body mb-16"
        >
          every second with you is worth recording ❤️
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="overflow-hidden rounded-2xl love-card"
            >
              <video
                src={video.src}
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover"
              />
              <p className="text-center text-muted-foreground font-body text-sm py-3">
                {video.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
