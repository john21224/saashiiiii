import { motion } from "framer-motion";

const videos = [
  { caption: "Our cutest moment 💕" },
  { caption: "That time we couldn't stop laughing 😂" },
  { caption: "Us being us ❤️" },
  { caption: "My favorite video of you 🥰" },
];

const pastelColors = [
  "from-rose-light to-lavender",
  "from-lavender to-blush",
  "from-blush to-cream",
  "from-cream to-rose-light",
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
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer love-card"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${pastelColors[index]} flex items-center justify-center`}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <svg
                      className="w-8 h-8 text-primary ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-muted-foreground text-sm font-body">
                    Add your video here
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-primary-foreground font-body text-sm font-medium drop-shadow-lg">
                  {video.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
