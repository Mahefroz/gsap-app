// import React from "react";
import styles from "./cube.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Typography } from "@mui/material";

const Cube = () => {
  const sq = useRef();
  function pageLoad() {
    var tl = gsap
      .timeline({})
      .to("#one", { rotate: 90 })
      .to("#one", { rotate: -90 });
    tl.play();
  }

  useEffect(() => {
    pageLoad();
  });
  return (
    <div>
      <div id="one" ref={sq} className={styles.square}>
        <Typography className={styles.txt}>1</Typography>
      </div>
    </div>
  );
};

export default Cube;
