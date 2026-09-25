// src/components/Carousel.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousel = () => {
  const slides = [
    {
      title: "Tree Plantation Drive",
      desc: "Planted 200 trees across our community parks to encourage sustainability and cleaner surroundings.",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Independence Day Celebration",
      desc: "An inspiring day with local children — singing patriotic songs, raising the flag, and spreading joy.",
      img: "https://images.unsplash.com/photo-1608889175123-8e1f93f09f0d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Fun Family Night",
      desc: "A night of laughter, games, and stronger bonds between Rotarians and Rotaractors.",
      img: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="w-100">

      <div
        id="projectsCarousel"
        className="carousel slide w-100"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >

        {/* Carousel Slides */}
        <div className="carousel-inner w-100">

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="row g-0 w-100"
                style={{ height: "320px"}}
              >

                {/* ===== IMAGE ===== */}
                <div className="col-md-7"
                style={{ height: "320px", overflow: "hidden" }}>

                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                    }}
                  />

                </div>


                {/* ===== CONTENT ===== */}
                <div
                  className="col-md-5 d-flex align-items-center"
                  style={{
                    backgroundColor: "#ffffff",
                  }}
                >

                  <div className="p-4 p-md-5">

                    <h3
                      className="fw-bold mb-3"
                      style={{
                        color: "black",
                        fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                      }}
                    >
                      {slide.title}
                    </h3>

                    <p
                      className="mb-4"
                      style={{
                        color: "#666",
                        fontSize: "1.05rem",
                        lineHeight: "1.7",
                      }}
                    >
                      {slide.desc}
                    </p>

                    <button
                      className="btn rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2 text-white"
                      style={{
                        backgroundColor: "#b6316c",
                        borderColor: "#b6316c",
                      }}
                    >
                      View Details
                      <FaArrowRight size={13} />
                    </button>

                  </div>

                </div>

              </motion.div>

            </div>
          ))}

        </div>


        {/* ===== PREVIOUS ===== */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#projectsCarousel"
          data-bs-slide="prev"
          style={{ width: "7%" }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{
              filter: "brightness(0)"
            }}
          />

          <span className="visually-hidden">
            Previous
          </span>
        </button>


        {/* ===== NEXT ===== */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#projectsCarousel"
          data-bs-slide="next"
          style={{ width: "7%" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{
              filter: "brightness(0)"
            }}
          />

          <span className="visually-hidden">
            Next
          </span>
        </button>


        {/* ===== INDICATORS ===== */}
        <div className="carousel-indicators mb-3">

          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#projectsCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}

        </div>

      </div>

    </div>
  );
};

export default Carousel;