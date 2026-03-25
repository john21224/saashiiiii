import { motion } from "framer-motion";

const photos = [
  { src: "/images/photo1.JPG", caption: "Our first adventure together" },
  { src: "/images/photo2.JPG", caption: "That sunset we'll never forget" },
  { src: "/images/photo3.JPG", caption: "Laughing until we cried" },
  { src: "/images/photo4.JPG", caption: "Our favorite spot" },
  { src: "/images/photo5.JPG", caption: "The look of pure happiness" },
  { src: "/images/photo6.JPG", caption: "Forever & always" },
];

const PhotoGallery = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-center text-gradient-rose mb-16"
        >
          look at thissss whattt a shawtyy hawtyyy
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-end p-4">
                <p className="text-primary-foreground font-body text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-6 font-body">
          bestest youu aree babeeeee
        </p>
      </div>
    </section>
  );
};

export default PhotoGallery;
