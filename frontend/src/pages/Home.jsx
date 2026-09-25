// src/pages/Home.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaUsers, FaTree, FaBook, FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Carousel from "../components/Carousel";
import { useState } from "react";
import { Link } from "react-router-dom";

import yogaday from "../assets/home-what-we-do/yoga-day.jpg";
import rangeentitliya from "../assets/home-what-we-do/rangeen-titliya.jpeg";
import bd from "../assets/home-what-we-do/bd.jpeg";

import image1 from "../assets/home-carousel/1.jpeg";
import image2 from "../assets/home-carousel/2.jpeg";
import image3 from "../assets/home-carousel/3.JPG";
import serving from "../assets/home-carousel/serving.jpeg";

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * numericValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, numericValue]);

  return (
    <motion.span
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true }}
    >
      {count}
      {suffix}
    </motion.span>
  );
};


const Home = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

const bgImages = [
  image1,
  image2,
  image3,
];

  const impactStats = [
    { number: "50+", label: "Volunteers", icon: FaUsers },
    { number: "150+", label: "Projects Completed", icon: FaHandHoldingHeart },
    { number: "500+", label: "Lives Impacted", icon: FaBook },
    { number: "15+", label: "Collaborators", icon: FaTree },
  ];

  const upcomingEvents = [
    {
      title: "Blood Donation Camp",
      date: "2024-03-15",
      location: "Dombivli East",
      type: "Health"
    },
    {
      title: "Tree Plantation Drive",
      date: "2024-03-20",
      location: "Khadakpada Area",
      type: "Environment"
    },
    {
      title: "Education Fair",
      date: "2024-03-25",
      location: "Dombivli West",
      type: "Education"
    }
  ];

  return (
    <div className="text-white">
      {/* ===== HERO CAROUSEL ===== */}
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-inner">
          {bgImages.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="4000"
            >
              <div
                className="vh-100 d-flex align-items-center justify-content-center text-center bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                {/* Text overlay */}
                <div className="position-relative z-2 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-6"
                  >
                    <h1 className="display-4 fw-bold mb-3 text-white">
                      Rotaract Club of <span className="text-white">Dombivli Downtown</span>
                    </h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      className="lead text-light mx-auto fs-5"
                      style={{ maxWidth: "600px" }}
                    >
                      Service Above Self • Fellowship Through Service • Community Development
                    </motion.p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center mt-5"
                  >
                    <Link
                      to="/join"
                      className="btn !bg-[#b6316c] btn-lg px-5 py-3 fw-semibold rounded-pill text-white"
                    >
                      Join Our Club
                    </Link>

                    <Link
                      to="/projects"
                      className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold rounded-pill"
                    >
                      View Projects
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ===== IMPACT STATS SECTION ===== */}
      <section className="py-2 bg-[#b6316c]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="row g-4"
          >
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="col-6 col-md-3 text-center d-flex flex-column align-items-center py-3"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-white mb-3 d-flex justify-content-center align-items-center"
                >
                  <stat.icon size={30} />
                </motion.div>

                <h3 className="text-white fw-bold">
                  <AnimatedNumber value={stat.number} />
                </h3>

                <p className="text-light mb-0">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-5 bg-light text-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="display-5 fw-bold text-dark mb-4">
                  Serving <span className="text-black">Community</span> Since 2022
                </h2>
                <p className="lead mb-4">
                  The Rotaract Club of Dombivli Downtown is a Dombivli based community organization dedicated to
                  serving the people through various social initiatives, community development
                  projects, and youth empowerment programs.
                </p>
                {/* <div className="row g-3 mb-4">
                  {[
                    "Community Service Projects",
                    "Youth Leadership Development",
                    "Health & Wellness Initiatives",
                    "Environmental Sustainability"
                  ].map((item, index) => (
                    <div key={index} className="col-6">
                      <div className="d-flex align-items-center gap-2">
                        <FaHandHoldingHeart className="text-dark" />
                        <span className="text-[#b6316c]">{item}</span>
                      </div>
                    </div>
                  ))}
                </div> */}
                <button className="btn !border-[#b6316c] btn-lg px-4 rounded-pill !text-[#b6316c]">
                  Learn More About Us
                </button>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  src={serving}
                  alt="Rotaract Club Members"
                  className="img-fluid rounded-3 shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="position-relative overflow-hidden">

        {/* ===== 3 PHOTO BACKGROUND ===== */}
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex">

          {/* Photo 1 */}
          <div className="w-100 h-100">
            <img
              src={rangeentitliya}
              alt="Community service"
              className="w-100 h-100 object-fit-cover"
            />
          </div>

          {/* Photo 2 */}
          <div className="w-100 h-100">
            <img
              src={yogaday}
              alt="Teamwork"
              className="w-100 h-100 object-fit-cover"
            />
          </div>

          {/* Photo 3 */}
          <div className="w-100 h-100">
            <img
              src={bd}
              alt="Leadership"
              className="w-100 h-100 object-fit-cover"
            />
          </div>

        </div>


        {/* ===== DARK OVERLAY ===== */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "rgba(0, 0, 0, 0.62)",
          }}
        />


        {/* ===== CONTENT ===== */}
        <div
          className="position-relative text-white py-5"
          style={{ zIndex: 2 }}
        >

          <div className="container">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-5"
            >

              <h2 className="display-4 fw-bold mb-3">
                What We Do
              </h2>

            </motion.div>


            {/* ===== CAROUSEL ===== */}
            <div
              id="whatWeDoCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="4000"
            >

              {/* Carousel Content */}
              <div className="carousel-inner text-center">


                {/* COMMUNITY SERVICE */}
                <div className="carousel-item active">

                  <div className="d-flex flex-column align-items-center">

                    <FaHandHoldingHeart
                      size={50}
                      className="text-white mb-4"
                    />

                    <h3 className="fw-bold mb-3">
                      Community Service
                    </h3>

                    <p
                      className="lead text-light mx-auto"
                      style={{ maxWidth: "700px" }}
                    >
                      We organize initiatives and projects that create
                      meaningful positive change in our community.
                    </p>

                  </div>

                </div>


                {/* LEADERSHIP */}
                <div className="carousel-item">

                  <div className="d-flex flex-column align-items-center">

                    <FaUsers
                      size={50}
                      className="text-white mb-4"
                    />

                    <h3 className="fw-bold mb-3">
                      Leadership
                    </h3>

                    <p
                      className="lead text-light mx-auto"
                      style={{ maxWidth: "700px" }}
                    >
                      We provide young people with opportunities to
                      develop leadership skills and make an impact.
                    </p>

                  </div>

                </div>


                {/* EVENTS */}
                <div className="carousel-item">

                  <div className="d-flex flex-column align-items-center">

                    <FaCalendarAlt
                      size={50}
                      className="text-white mb-4"
                    />

                    <h3 className="fw-bold mb-3">
                      Events
                    </h3>

                    <p
                      className="lead text-light mx-auto"
                      style={{ maxWidth: "700px" }}
                    >
                      We conduct social, cultural, educational, and
                      networking events that bring people together.
                    </p>

                  </div>

                </div>


                {/* ENVIRONMENT */}
                <div className="carousel-item">

                  <div className="d-flex flex-column align-items-center">

                    <FaTree
                      size={50}
                      className="text-white mb-4"
                    />

                    <h3 className="fw-bold mb-3">
                      Environment
                    </h3>

                    <p
                      className="lead text-light mx-auto"
                      style={{ maxWidth: "700px" }}
                    >
                      We promote environmental responsibility through
                      sustainability and conservation initiatives.
                    </p>

                  </div>

                </div>

              </div>


              {/* Previous */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#whatWeDoCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">
                  Previous
                </span>
              </button>


              {/* Next */}
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#whatWeDoCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">
                  Next
                </span>
              </button>


              {/* Indicators */}
              <div className="carousel-indicators position-static mt-4 mb-4">

                <button
                  type="button"
                  data-bs-target="#whatWeDoCarousel"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                />

                <button
                  type="button"
                  data-bs-target="#whatWeDoCarousel"
                  data-bs-slide-to="1"
                />

                <button
                  type="button"
                  data-bs-target="#whatWeDoCarousel"
                  data-bs-slide-to="2"
                />

                <button
                  type="button"
                  data-bs-target="#whatWeDoCarousel"
                  data-bs-slide-to="3"
                />

              </div>


              {/* KNOW MORE — ALWAYS VISIBLE */}
              <div className="text-center">
                <Link
                  to="/about-us"
                  className="btn btn-m px-3 py-1 rounded-pill d-inline-flex align-items-center gap-2 text-white bg-transparent border-white hover:bg-white hover:text-dark transition"
                >
                  Know More
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ===== PROJECTS SECTION ===== */}
      <section className="py-5 bg-white">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5 px-4"
        >
          <h2 className="display-5 fw-bold text-black mb-3">
            Our Impactful Projects
          </h2>

          <p className="lead text-black">
            Transforming communities through dedicated service
          </p>
        </motion.div>

        {/* Full Width Carousel */}
        <div className="w-100">
          <Carousel />
        </div>
      </section>


      {/* ===== UPCOMING EVENTS ===== */}
      {/* <section className="py-5 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold text-black mb-3">Upcoming Events</h2>
            <p className="text-light text-black lead">Join us in our upcoming community initiatives</p>
          </motion.div>

          <div className="row g-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="col-md-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card h-100 border-0 shadow-lg bg-white !text-[#b6316c]"
                >
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className="badge bg-[#bc316c]">{event.type}</span>
                      <FaCalendarAlt className="text-[#b6316c]" />
                    </div>
                    <h5 className="card-title fw-bold text-black">{event.title}</h5>
                    <div className="d-flex align-items-center gap-2 text-light mb-2 text-black">
                      <FaCalendarAlt size={14} />
                      <small>{new Date(event.date).toLocaleDateString()}</small>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-light mb-3 text-black">
                      <FaMapMarkerAlt size={14} />
                      <small>{event.location}</small>
                    </div>
                    <button className="btn btn-sm w-100 !rounded-3xl !text-[#b6316c] !border-[#b6316c] hover:!bg-[#b6316c] hover:!text-white transition-all duration-300">
                      Register Now
                    </button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-5"
          >
            <button className="btn btn-m !bg-[#b6316c] px-5 rounded-pill d-inline-flex align-items-center justify-content-center text-white">
              View All Events
              <FaArrowRight className="ms-2" />
            </button>
          </motion.div>
        </div>
      </section> */}


      {/* ===== CALL TO ACTION ===== */}
      <section className="py-5 bg-white text-black">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="display-5 fw-bold mb-4">Ready to Make a Difference?</h2>
            <p className="lead mb-4 fs-5">
              Join Rotaract Club of Dombivli Downtown and be part of something bigger than yourself.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <button className="btn !bg-[#b6316c] btn-mm px-3 py-1 rounded-pill fw-semibold text-white">
                Become a Member
              </button>
              <button className="btn !border-[#b6316c] btn-m px-3 py-1 rounded-pill fw-semibold !text-[#b6316c]">
                Volunteer Today
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;