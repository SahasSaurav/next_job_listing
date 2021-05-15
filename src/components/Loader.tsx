import { motion } from 'framer-motion'

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2
    }
  },
  end: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const loadingCircleVariants = {
  start: {
    y: "50%"
  },
  end: {
    y: "150%"
  }
};

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut"
};

const Loader:React.FC = () => {
  return (
    <motion.div className="w-14 h-14 flex justify-around" variants = { loadingContainerVariants } initial = "start" animate = "end" >
      <motion.span className="block w-4 h-4 bg-desaturated-cyan rounded-full" variants = { loadingCircleVariants } transition = { loadingCircleTransition } />
      <motion.span className="block w-4 h-4 bg-desaturated-cyan rounded-full" variants = { loadingCircleVariants } transition = { loadingCircleTransition } />
      <motion.span className="block w-4 h-4 bg-desaturated-cyan rounded-full" variants = { loadingCircleVariants } transition = { loadingCircleTransition } />
    </motion.div>
  )
}

export default Loader
