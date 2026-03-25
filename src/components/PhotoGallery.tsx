import { motion } from "framer-motion";

const photos = [
{ caption: "Our first adventure together" },
{ caption: "That sunset we'll never forget" },
{ caption: "Laughing until we cried" },
{ caption: "Our favorite spot" },
{ caption: "The look of pure happiness" },
{ caption: "Forever & always" }];


const pastelColors = [
"from-rose-light to-lavender",
"from-lavender to-blush",
"from-blush to-cream",
"from-cream to-rose-light",
"from-rose-light to-blush",
"from-lavender to-cream"];


const PhotoGallery = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-center text-gradient-rose mb-16">
          loookk at thiss please se krvado ye
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer">
            
              <div className={`absolute inset-0 bg-gradient-to-br ${pastelColors[index]} flex items-center justify-center`}>
                <span className="text-4xl opacity-30">♥</span>
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-end p-4">
                <p className="text-primary-foreground font-body text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          )}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-6 font-body">
          bestest youu aree babeeeee 
    
        </p>
      </div>
    </section>);
};

export default PhotoGallery;