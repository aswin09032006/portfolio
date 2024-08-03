import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import prof from '../../images/prof.jpg';
import Magnetic from '../Magnetic';
import Rounded from '../RoundedButton';
import styles from './style.module.scss';

export default function Index() {
    const container = useRef(null);
    const emojiRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

    const handleMouseMove = (e) => {
        if (emojiRef.current) {
            emojiRef.current.style.left = `${e.clientX}px`;
            emojiRef.current.style.top = `${e.clientY}px`;
        }
    };

    return (
        <motion.div style={{ y }} ref={container} className={styles.contact} onMouseMove={handleMouseMove}>
            <div className={styles.emoji} ref={emojiRef}>💡</div>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <img src={prof} alt="" />
                        </div>
                        <h2>Let's work</h2>
                    </span>
                    <h2>together</h2>
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{ rotate, scale: 2 }} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                    <Rounded>
                        <p><a href="mailto:vkaswinkanan@gmail.com" style={{color:'white'}}>vkaswinkanan@gmail.com</a></p>
                    </Rounded>
                    <Rounded>
                        <p><a href="tel:+919488512807" style={{color:'white'}}>+91 94885 12807</a></p>
                    </Rounded>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2024 © Edition</p>
                        </span>
                        <span>
                            <h3>Version</h3>
                            <p>11:11 PM GMT+5:30</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>Socials</h3>
                            <Magnetic>
                            <p> <a href="https://github.com/aswin09032006" style={{color:'white'}}>GitHub</a></p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p><a href="https://www.instagram.com/aswxn._03" style={{color:'white'}}>Instagram</a></p>
                        </Magnetic>
                        {/* <Magnetic>
                            <p>Dribbble</p>
                        </Magnetic> */}
                        <Magnetic>
                            <p><a href="https://www.linkedin.com/in/vkaswin" style={{color:'white'}}>Linkedin</a></p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
