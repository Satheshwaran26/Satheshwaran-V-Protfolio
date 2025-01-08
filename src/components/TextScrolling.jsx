import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./TextScrolling.css";

const TextScrolling = () => {
  // Track the scroll progress
  const { scrollYProgress } = useScroll();

  // Map scroll progress to velocity for horizontal scrolling
  const xVelocity = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <div className="marquee-w">
      <motion.div
        className="marquee"
        style={{ x: xVelocity }} // Bind horizontal scrolling to velocity
      >
        <span>
          I AM PROFFESIONAL WEB DEVELOPER I AM PROFFESIONAL WEB DEVELOPER I AM
        </span>
      
      </motion.div>
    </div>
  );
};

export default TextScrolling;
