import { useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import p7 from '../../images/cycle1.png';
import p2 from '../../images/cycle2.png';
import p3 from '../../images/moderncooler.png';
import p4 from '../../images/speaker.png';
import p6 from '../../images/speaker1.png';
import p8 from '../../images/speaker2.png';
import p5 from '../../images/studio.png';
import p1 from '../../images/weact.png';
import "./Slides.css";

const Slides = () => {
  const wrapper = useRef(null);
  const firstRow = useRef(null);
  const secondtRow = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      firstRow.current,
      {
        x: "-10%",
      },
      {
        x: "5%",
        scrollTrigger: {
          trigger: firstRow.current,
          scrub: 1.5,
        },
      }
    );
    gsap.fromTo(
      secondtRow.current,
      {
        x: "10%",
      },
      {
        x: "-5%",
        scrollTrigger: {
          trigger: secondtRow.current,
          scrub: 1.5,
        },
      }
    );
  }, []);

  return (
    <section ref={wrapper} className="s-wrapper">
      <div ref={firstRow} className="first-row">
        <div className="box">
          <img src={p1} alt="p1" />
        </div>
        <div className="box">
          <img src={p2} alt="p2" />
        </div>
        <div className="box">
          <img src={p3} alt="p3" />
        </div>
        <div className="box">
          <img src={p4} alt="p4" />
        </div>
      </div>
      <div ref={secondtRow} className="second-row">
        <div className="box">
          <img src={p5} alt="p5" />
        </div>
        <div className="box">
          <img src={p6} alt="p6" />
        </div>
        <div className="box">
          <img src={p7} alt="p7" />
        </div>
        <div className="box">
          <img src={p8} alt="p8" />
        </div>
      </div>
      {/* <motion.div style={{ height }} className="circle-container">
        <div className="circle"></div>
      </motion.div> */}
    </section>
  );
};

export default Slides;
