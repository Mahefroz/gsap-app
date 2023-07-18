// import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./animate.module.css";
import { Box } from "@mui/material";

export default function Animate() {
  const box1 = useRef();
  const box2 = useRef();

  useEffect(() => {
    gsap.to(box1.current, {
      x: 100,
      rotation: "+=360",
      repeat: -1,
      repeatDelay: 1,
    });
    gsap.to(box2.current, {
      duration: 2.5,
      ease: "bounce.out",
      y: 200,
      repeat: -1,
      yoyo: true,
    });
    // gsap.fromTo(
    //   box2.current,
    //   { backgroundColor: "#28a92b", x: 1 },
    //   { backgroundColor: "red", x: 300 }
    // );
  }, []);
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#e77614" });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#28a92b" });
  };
  return (
    <div className={styles.App}>
      <Box className={styles.box} ref={box1}>
        Rotate
      </Box>
      <Box className={styles.box} ref={box2}>
        Blink
      </Box>
      <Box className={styles.box} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        Hover Me
      </Box>
    </div>
  );
}
