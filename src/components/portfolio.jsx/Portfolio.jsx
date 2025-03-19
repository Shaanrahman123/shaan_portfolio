import { useRef } from "react";
import "./portfolio.scss";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "First Flight",
    img: project1,
    desc: "Developed a full fledge Flight booking platform using React, Tailwind CSS, SCSS, NodeJs, ExpressJs, MongoDB. Integrated API of Travelport (Galillio),  The system ensures seamless search, booking, and management of Flight Booking, optimizing user experience and efficiency.",
    URL: "https://firstflightfrontendren.vercel.app/",
  },
  {
    id: 2,
    title: "The Skytrails",
    img: project3,
    desc: "Developed a comprehensive booking platform using React, Tailwind CSS, NodeJs and MongoDB. Integrated multiple APIs, including Amadeus, Kafila, and TBO for flight bookings, TBO for bus reservations, and GRN and TBO for hotel bookings. The system ensures seamless search, booking, and management of travel services, optimizing user experience and efficiency.",
    URL: "https://theskytrails.com/holidaypackages",
  },
  {
    id: 3,
    title: "Movie List React",
    img: project2,
    desc: "A movie discovery app using TMDB API that allows users to search and filter movies by genre. Clicking a movie opens a details page with title, genres, duration, rating, price, overview, cast, recommendations, similar movies/TV shows, and a trailer.",
    URL: "https://shaan-movieflix.vercel.app/",
  },
  //   {
  //     id: 4,
  //     title: "E Commerce",
  //     img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //   },
  //   {
  //     id: 5,
  //     title: "Non Government Organisation",
  //     img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //   },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 150]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={`${item.URL}`} target="_blank">
              See Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
