import React from "react";
import Marquee from "react-fast-marquee";

const TextScrolling = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden", height: "140px" }}>
      <Marquee 
        speed={60} // Adjust the speed of scrolling
        gradient={false} // Disable gradient for continuous scrolling
        pauseOnHover={true} // Pause scrolling on hover
        direction="left" // Direction of scrolling
      >
        <span style={styles.text}>
          I AM A PROFESSIONAL WEB DEVELOPER I AM A PROFESSIONAL WEB DEVELOPER I AM
        </span>
        <span style={styles.text}>
          I AM A PROFESSIONAL WEB DEVELOPER I AM A PROFESSIONAL WEB DEVELOPER I AM
        </span>
      </Marquee>
    </div>
  );
};

const styles = {
  text: {
    fontSize: "6.5em",
    fontWeight: "200",
    textTransform: "uppercase",
    color: "rgb(45, 45, 45)",
    marginRight: "2rem",
    lineHeight: "140px",
  },
};

export default TextScrolling;
