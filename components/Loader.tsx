import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "../styles/Loader.module.scss";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Loader = () => {
  const { scroll } = useLocomotiveScroll();

  const visibleOpacity = {
    hidden: {
      opacity: 1,
      // pointerEvents: "all",
    },
    visible: {
      opacity: 0,
      // pointerEvents: "none",
      transition: { delay: 0, duration: 1.5, ease: "linear" },
    },
  };

  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <motion.div
      className={styles.container}
      // initial={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 0.75, delay: 0, ease: "easeInOut" }}

      initial="hidden"
      whileInView="visible"
      variants={visibleOpacity}
      style={Loaded === true ? { zIndex: -1 } : { zIndex: 9999 }}
    ></motion.div>
  );
};

export default Loader;
