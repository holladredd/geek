import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const PageTransition = ({ children }) => {
  const widthAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        // delay: 2,
        // type: "spring",
        // damping: 15,
        // stiffness: 500,
      },
    },

    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={widthAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
