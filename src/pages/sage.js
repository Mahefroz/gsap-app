// import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./sage.module.css";
import { backdropClasses, Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import personal from "../assets/personal.svg";
import coaching from "../assets/coaching.svg";
import reviews from "../assets/reviews.svg";
import improve from "../assets/improve.svg";
import learn from "../assets/learn.svg";
import community from "../assets/community.svg";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/footer";
import { isScrolledIntoView } from "../components/isScrolled";

export default function Sage() {
  const download = useRef();
  const dtxt = useRef();
  const mainLogo = useRef();
  const txt = useRef();
  const d1 = useRef();
  const d2 = useRef();
  const d3 = useRef();
  const personalRef = useRef();
  const coachingRef = useRef();
  const reviewsRef = useRef();
  const improveRef = useRef();
  const learnRef = useRef();
  const communityRef = useRef();
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }

  useEffect(() => {
    AOS.init();
  }, []);

  function pageLoad() {
    var tl = gsap
      .timeline({})
      .fromTo("#downloadBtn", { y: -100 }, { y: 0 })
      .fromTo("#downloadTxt", { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo("#logo", { opacity: 0 }, { opacity: 1, ease: "back" }, 1)
      .fromTo("#avb", { opacity: 0 }, { opacity: 1, ease: "back" }, 1)
      .to(["#desc1", "#desc2", "#desc3"], {}, 1);

    tl.play();
  }

  useEffect(() => {
    pageLoad();
  });
  useEffect(() => {
    // gsap.to
    gsap.to(personalRef.current, {
      scrollTrigger: {
        start: "top center",
        scrub: true,
        end: "bottom",
        ease: "back",
      },
      x: 800,
      duration: 500,
    });
    gsap.to(coachingRef.current, {
      scrollTrigger: {
        start: "top center",
        scrub: true,
        end: "bottom",
        ease: "back",
      },
      x: -500,
      duration: 300,
    });
    gsap.to(reviewsRef.current, {
      scrollTrigger: {
        start: "top center",
        scrub: true,
        end: "bottom 20%",
      },
      x: 600,
      duration: 500,
    });
    gsap.to(improveRef.current, {
      scrollTrigger: {
        start: "top center",
        scrub: true,
        end: "bottom",
      },
      duration: 500,
      x: -800,
    });
    gsap.to(learnRef.current, {
      scrollTrigger: {
        start: "top center",
        scrub: true,
        end: "bottom ",
      },
      x: 800,
      duration: 500,
    });
    gsap.to(communityRef.current, {
      scrollTrigger: {
        start: "top center",
        scrub: true,
        end: "bottom",
        // ease: "back",
      },
      x: -500,
      duration: 500,
    });
  });
  useEffect(() => {
    let x = document.getElementById("main");
    document.addEventListener("scroll", function (e) {
      console.log(e);
      let isVisible = isScrolledIntoView(x);
      console.log("is visible", isVisible);
    });

    return () => {
      document.removeEventListener("scroll", function () {
        console.log("removed");
      });
    };
  }, []);

  return (
    <div class="ScrollbarsCustom native trackYVisible trackXVisible">
      <div
        id="main"
        className={styles.main}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Box className={styles.head}>
          <Box sx={{ width: "26%" }}></Box>
          <Box>
            {" "}
            <img
              id="logo"
              ref={mainLogo}
              src={"/sage-logo.png"}
              alt="sage-logo.png"
              className={styles.logo}
            />
          </Box>

          <Box className={styles.download}>
            <Typography id="avb" ref={txt} className={styles.txt}>
              Available on iOS and Android
            </Typography>

            <Button
              id="downloadBtn"
              ref={download}
              className={styles.downloadBtn}
            >
              <p id="downloadTxt" ref={dtxt} className={styles.downloadTxt}>
                Download
              </p>
            </Button>
          </Box>
        </Box>
        <Box className={styles.desc}>
          <span
            id="desc1"
            ref={d1}
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-offset="300"
            data-aos-delay="1000"
          >
            Sage is an app
          </span>
          <span
            id="desc2"
            ref={d2}
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-offset="300"
            data-aos-delay="1000"
          >
            that helps you improve at
          </span>
          <span
            id="desc3"
            ref={d3}
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-offset="300"
            data-aos-delay="1000"
          >
            League of Legends
          </span>
        </Box>
        <Box
          data-aos="fade-up"
          data-aos-duration="3000"
          className={styles.downloadLink}
        >
          <a
            className={styles.downloadlinkImg}
            href="https://www.apple.com/app-store/"
          >
            <img src={"ios.gif"} alt="ios.gif" />
          </a>
          <a
            className={styles.downloadlinkImg}
            href="https://play.google.com/store/games"
          >
            <img src={"playstore.gif"} alt="playstore.gif" />
          </a>
        </Box>
      </div>
      <div className={styles.section2}>
        <img src={"sage-1.png"} className={styles.headimage} alt="sage-1.png" />
        <div
          className={styles.slidingImg}
          //   data-aos="fade-right"
          //   data-aos-anchor="#example-anchor"
          //   data-aos-offset="500"
          //   data-aos-duration="500"
        >
          <div className={styles.personal} ref={personalRef}>
            <img src={personal} alt="personal" />
          </div>
          <div className={styles.coaching} ref={coachingRef}>
            <img src={coaching} alt="coaching" />
          </div>
        </div>
      </div>
      <div className={styles.section3}>
        <h1
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          -How it Works
        </h1>
      </div>
      <div className={styles.section4}>
        <div className={styles.reviews} ref={reviewsRef}>
          <img className={styles.reviewImg} src={reviews} alt="reviews" />
        </div>
        <div className={styles.dataContainer}>
          <img src={"/sage-2.png"} alt="sage-2.png" className={styles.img} />
          <h2 className={styles.dataTxt}>
            <span>
              <span data-aos="fade-up" data-aos-offset="100">
                01.
              </span>
            </span>

            <h1 className={styles.dataTxt2}>
              <span data-aos="fade-up" data-aos-offset="100">
                Match
              </span>
            </h1>
            <h1 className={styles.dataTxt2}>
              <span data-aos="fade-up" data-aos-offset="100">
                Reviews By
              </span>
            </h1>
            <h1 className={styles.dataTxt2}>
              <span data-aos="fade-up" data-aos-offset="100">
                Professional{" "}
              </span>
            </h1>
            <h1 className={styles.dataTxt2}>
              <span data-aos="fade-up" data-aos-offset="100">
                Players{" "}
              </span>
            </h1>
            <div className={styles.dataWrap}>
              <p className={styles.dataTxt3}>
                <span data-aos="fade-up" data-aos-offset="100">
                  Choose which of your matches to
                </span>
              </p>

              <p className={styles.dataTxt3}>
                <span data-aos="fade-up" data-aos-offset="100">
                  submit for review by our network of
                </span>
              </p>
              <p className={styles.dataTxt3}>
                <span data-aos="fade-up" data-aos-offset="100">
                  professional League of Legends players
                </span>
              </p>
            </div>
          </h2>
        </div>
      </div>
      <div className={styles.section4}>
        <div className={styles.improve} ref={improveRef}>
          <img className={styles.improveImg} src={improve} alt="improve" />
        </div>
        <div className={styles.dataContainer}>
          <h2 className={styles.dataTxt}>
            <span>
              <span data-aos="fade-up" data-aos-offset="100">
                02.
              </span>
            </span>

            <h1 className={styles.dataTxt2}>
              <span data-aos="fade-up" data-aos-offset="100">
                Get
              </span>
            </h1>
            <h1 className={styles.dataTxt2}>
              <span data-aos="fade-up" data-aos-offset="100">
                Personal{" "}
              </span>
            </h1>
            <h1 className={styles.dataTxt2}>
              <span data-aos="fade-up" data-aos-offset="100">
                Feedback
              </span>
            </h1>

            <div className={styles.dataWrap}>
              <p className={styles.dataTxt4}>
                One of our coaches will compile video
                <br />
                feedback on your match, providing
                <br />
                insights on how you can improve
              </p>
            </div>
          </h2>
          <img src={"/sage-3.png"} alt="sage-3.png" className={styles.img2} />
        </div>
      </div>
      <div className={styles.section4}>
        <div className={styles.learn} ref={learnRef}>
          <img className={styles.learnImg} src={learn} alt="reviews" />
        </div>
        <div className={styles.dataContainer}>
          <img src={"/sage-4.png"} alt="sage-4.png" className={styles.img3} />
          <h2 className={styles.dataTxt5}>
            <span>
              <span data-aos="fade-up" data-aos-offset="100">
                03.
              </span>
            </span>

            <h1 className={styles.dataTxt2}>
              <span data-aos="fade-up" data-aos-offset="100">
                Explore
              </span>
            </h1>
            <h1 className={styles.dataTxt2}>
              <span data-aos="fade-up" data-aos-offset="100">
                and
              </span>
            </h1>
            <h1 className={styles.dataTxt2}>
              <span data-aos="fade-up" data-aos-offset="100">
                Learn{" "}
              </span>
            </h1>

            <div className={styles.dataWrap}>
              <p className={styles.dataTxt6}>
                Search other player's reviews <br /> and learn about different
                champions, <br /> roles, combos, and more
              </p>
            </div>
          </h2>
        </div>
      </div>
      <div className={styles.section4}>
        <div className={styles.community} ref={communityRef}>
          <img
            className={styles.communityImg}
            src={community}
            alt="community"
          />
        </div>
        <div className={styles.dataContainer}>
          <h2 className={styles.dataTxt}>
            <span>
              <span data-aos="fade-up" data-aos-offset="100">
                04.
              </span>
            </span>

            <h1 className={styles.dataTxt2}>
              <span data-aos="fade-up" data-aos-offset="100">
                Help
              </span>
            </h1>
            <h1 className={styles.dataTxt2}>
              <span data-aos="fade-up" data-aos-offset="100">
                Other
              </span>
            </h1>
            <h1 className={styles.dataTxt2}>
              <span data-aos="fade-up" data-aos-offset="100">
                Players
              </span>
            </h1>

            <div className={styles.dataWrap}>
              <p className={styles.dataTxt4}>
                Join a community of League of Legends <br />
                players that want to improve.
                <br /> Comment on other player’s reviews,
                <br /> offer advice, and earn karma
              </p>
            </div>
          </h2>
          <img src={"/sage-5.png"} alt="sage-5.png" className={styles.img2} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
