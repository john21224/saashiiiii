import { motion } from "framer-motion";

const photos = [
  { src: "/images/photo1.JPG", caption: "" },
  { src: "/images/photo2.JPG", caption: "" },
  { src: "/images/photo3.JPG", caption: "" },
  { src: "/images/photo4.JPG", caption: "" },
  { src: "/images/photo5.JPG", caption: "" },
  { src: "/images/photo6.JPG", caption: "" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(6px)" },
  show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.6, type: "spring", stiffness: 80 } },
};

const PhotoGallery = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-display font-bold text-center text-gradient-rose mb-16"
        >
          look at thissss whattt a shawtyy hawtyyy
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <motion.p
                  initial={{ y: 10 }}
                  className="text-primary-foreground font-body text-sm font-medium drop-shadow-lg"
                >
                  {photo.caption}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-6 font-body"
        >
          bestest youu aree babeeeee
        </motion.p>
      </div>
    </section>
  );
};

export default PhotoGallery;
