import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Rounded from '../RoundedButton';
import { opacity, slideUp } from './animation';
import styles from './style.module.scss';
export default function index() {

    const phrase = "Empowering brands to thrive in the digital landscape. Let's redefine expectations and innovate together—no fluff, just results.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>My unique blend of design, coding, and interaction expertise sets me apart in the web development landscape.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
