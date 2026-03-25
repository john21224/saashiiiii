import { motion } from "framer-motion";

const LoveLetter = () => {
  return (
    <section className="section-padding romantic-gradient">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-center text-gradient-rose mb-12">
          
          A Letter For You
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="love-card p-8 md:p-12 transform -rotate-1">
          
          <div className="font-handwriting text-lg md:text-xl leading-loose text-foreground/80 space-y-6">
            <p>My Dearest,</p>
            <p>
              ​you are literally perfect saashiiii dont you worry i am with you everytime . share everything w me baeee. i lovee youu soo soo muchhhhh merii jannn .                             
            

            </p>
            <p>
              literally my heart babe srsly my heart youuu areee.        
            

            </p>
            <p>
              i can write soo much but rn i am soo full of emotions babee 
you are so bestt girlfriend saashii i am soo happy with you 
tang kara krr  ekoo pleaseeeeeeeeeeeeeeeeeeeeeeeee.       
             
              
            
            </p>
            <p className="text-right mt-8">
              Forever yours,<br />
              <span className="text-primary text-2xl">With all my love ❤️</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>);};export default LoveLetter;