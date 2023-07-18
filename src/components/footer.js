import React, { useEffect } from "react";

// import IOSButton from "../assets/IOSlogo";
// import AndroidButton from "../assets/AndroidDownl;oad";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box } from "@mui/material";
import styles from "./footer.module.css";

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.imageDiv}></div>
      <div className={styles.contentHolder}>
        <h1 data-aos="fade-up">DOWNLOAD FOR FREE</h1>
        <Box className={styles.downloadLink1}>
          <a
            className={styles.downloadlink1Img}
            href="https://www.apple.com/app-store/"
          >
            <img src={"ios.gif"} alt="ios.gif" />
          </a>
          <a
            className={styles.downloadlink1Img}
            href="https://play.google.com/store/games"
          >
            <img src={"playstore.gif"} alt="playstore.gif" />
          </a>
        </Box>

        <div className={styles.zelos}>
          <div className={styles.zelosImgContainer}>
            <div className={styles.zelosLogo}>
              <svg
                fill="none"
                viewBox="0 0 36 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m35.815 27.779-3.0912-3.6875-0.5685 2.3178-2.6292 0.4566 1.6699-2.7042-25.653-24.162 0.49743 6.216 13.075 11.87-12.791-8.9903 0.49742 5.8999 9.913 6.7779-9.7709-5.022 0.39083 4.5654 9.3446 4.8815-9.238-3.6523 0.49743 3.8279 11.263 4.9166-18.867 8.288-0.3553 0.1405 19.293-3.8982 1.8831 1.7208-9.3801 2.4583 13.928-0.4917-1.8476-5.2677 5.756-1.756 1.3146-2.5987 1.0304-0.3512 1.7055 1.194 2.1318-2.9499z"
                  fill="#fff"
                />
              </svg>
            </div>

            <p>Zelos Gaming Inc.</p>
          </div>

          <div className={styles.links}>
            <a> Business Inquiry</a>
            <a>Terms of Service</a>
            <a>Privacy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
