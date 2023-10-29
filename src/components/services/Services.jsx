import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}
        >
            {/* <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div> */}
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/whatiknow.png" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Some Tech</motion.b> Stack
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>That I  </motion.b> Know.
                    </h1>
                    <button>WHAT I KNOW?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div
                    className="box"

                >
                    <h2>Frotend</h2>

                    <div className="minibox">
                        <h3>HTML</h3>
                        <h3>CSS</h3>
                        <h3>tailwind</h3>
                        <h3>bootstrap</h3>
                        <h3>reactjs</h3>
                        <h3>nextjs</h3>
                        <h3>javascript</h3>
                    </div>


                </motion.div>
                <motion.div
                    className="box"
                // whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Backend</h2>
                    <div className="minibox">
                        <h3>Node Js</h3>
                        <h3>Express Js</h3>

                    </div>

                </motion.div>
                <motion.div
                    className="box"
                // whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Database</h2>
                    <div className="minibox">
                        <h3>mongodb</h3>
                        <h3>mysql</h3>

                    </div>

                </motion.div>
                <motion.div
                    className="box"
                // whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2> Programming</h2>
                    <div className="minibox">

                        <h3>C</h3>
                        <h3>javascript</h3>
                        <h3>Python</h3>
                        <h3>Java</h3>
                    </div>

                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;