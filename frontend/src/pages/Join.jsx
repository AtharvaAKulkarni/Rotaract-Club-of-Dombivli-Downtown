import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaComment,
  FaUsers,
  FaHeart,
  FaHandsHelping,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const CRANBERRY = "#b6316c";

export default function Join() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = React.useState(false);

  function handleChange(e) {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Contact form submitted:", form);
    setSubmitted(true);
  }

  return (
    <div className="bg-white text-dark">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          minHeight: "55vh",
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.72),
              rgba(182,49,108,0.65)
            ),
            url(https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=80)
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4"
        >
          <h1 className="display-3 fw-bold mb-3">
            Want to{" "}
            <span style={{ color: CRANBERRY }}>
              Join Us?
            </span>
          </h1>

          <p
            className="lead text-light mx-auto mb-4"
            style={{ maxWidth: "700px" }}
          >
            Be part of a community of young people working together
            to create meaningful change through service, leadership,
            and fellowship.
          </p>

          <a
            href="YOUR_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg px-5 py-3 rounded-pill fw-bold text-white d-inline-flex align-items-center"
            style={{
              backgroundColor: CRANBERRY,
              border: `2px solid ${CRANBERRY}`,
            }}
          >
            Apply Now
            <FaArrowRight className="ms-2" size={14} />
          </a>
        </motion.div>
      </section>


      {/* ================================================= */}
      {/* WHO CAN JOIN */}
      {/* ================================================= */}

      <section className="py-5 bg-white">
        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="display-6 fw-bold">
              Who Can{" "}
              <span style={{ color: CRANBERRY }}>
                Join?
              </span>
            </h2>

            <p
              className="text-muted lead mx-auto"
              style={{ maxWidth: "750px" }}
            >
              We welcome young people who are passionate about
              community service, personal growth, leadership, and
              building meaningful connections.
            </p>
          </motion.div>


          <div className="row justify-content-center">

            {/* Young Changemakers */}
            <div className="col-md-4 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="text-center p-4 h-100 rounded-4"
                style={{
                  border: "1px solid #eeeeee",
                }}
              >
                <FaUsers
                  size={45}
                  className="mb-4"
                  style={{ color: CRANBERRY }}
                />

                <h4 className="fw-bold mb-3">
                  Young Changemakers
                </h4>

                <p className="text-muted">
                  Individuals who want to contribute their time,
                  skills, and ideas towards making a difference.
                </p>
              </motion.div>
            </div>


            {/* Service Enthusiasts */}
            <div className="col-md-4 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="text-center p-4 h-100 rounded-4"
                style={{
                  border: "1px solid #eeeeee",
                }}
              >
                <FaHeart
                  size={45}
                  className="mb-4"
                  style={{ color: CRANBERRY }}
                />

                <h4 className="fw-bold mb-3">
                  Service Enthusiasts
                </h4>

                <p className="text-muted">
                  People who believe in giving back to the community
                  and creating positive social impact.
                </p>
              </motion.div>
            </div>


            {/* Community Builders */}
            <div className="col-md-4 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="text-center p-4 h-100 rounded-4"
                style={{
                  border: "1px solid #eeeeee",
                }}
              >
                <FaHandsHelping
                  size={45}
                  className="mb-4"
                  style={{ color: CRANBERRY }}
                />

                <h4 className="fw-bold mb-3">
                  Community Builders
                </h4>

                <p className="text-muted">
                  Anyone interested in meeting people, developing
                  leadership skills, and working as a team.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>


      {/* ================================================= */}
      {/* WHAT MEMBERS GET */}
      {/* ================================================= */}

      <section
        className="py-5"
        style={{
          backgroundColor: "#000000",
        }}
      >
        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="display-6 fw-bold text-white">
              What Do Members{" "}
              <span style={{ color: CRANBERRY }}>
                Get?
              </span>
            </h2>

            <p className="text-light lead">
              Membership is about more than just volunteering.
            </p>
          </motion.div>


          <div className="row g-4">

            {[
              {
                icon: FaUsers,
                title: "Leadership",
                text: "Develop leadership, communication, and organizational skills through real-world experiences.",
              },
              {
                icon: FaHandsHelping,
                title: "Community Service",
                text: "Participate in meaningful projects that create positive change in the community.",
              },
              {
                icon: FaHeart,
                title: "Fellowship",
                text: "Build lasting friendships and connections with like-minded young people.",
              },
              {
                icon: FaCheckCircle,
                title: "Opportunities",
                text: "Take part in events, workshops, initiatives, and experiences that help you grow.",
              },
            ].map((item, index) => (
              <div
                className="col-md-6 col-lg-3"
                key={index}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="bg-white text-dark rounded-4 p-4 text-center h-100 shadow"
                >
                  <item.icon
                    size={40}
                    className="mb-3"
                    style={{ color: CRANBERRY }}
                  />

                  <h5 className="fw-bold mb-3">
                    {item.title}
                  </h5>

                  <p className="text-muted mb-0">
                    {item.text}
                  </p>
                </motion.div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================================================= */}
      {/* WHAT WE DO */}
      {/* ================================================= */}

      <section className="py-5 bg-white">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6 mb-4 mb-lg-0">

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="display-6 fw-bold mb-4">
                  What{" "}
                  <span style={{ color: CRANBERRY }}>
                    We Do
                  </span>
                </h2>

                <p className="lead text-muted">
                  Rotaract Club of Dombivli Downtown brings young
                  people together to serve the community and create
                  meaningful experiences.
                </p>

                <p className="text-muted">
                  Through community service projects, leadership
                  initiatives, environmental activities, educational
                  programs, and fellowship events, we provide
                  opportunities for members to learn, contribute,
                  and grow.
                </p>
              </motion.div>

            </div>


            <div className="col-lg-6">

              <div className="row g-3">

                {[
                  "Community Service",
                  "Leadership Development",
                  "Environmental Initiatives",
                  "Educational Programs",
                  "Social Events",
                  "Fellowship",
                ].map((item, index) => (
                  <div
                    className="col-6"
                    key={index}
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      viewport={{ once: true }}
                      className="p-3 rounded-3 d-flex align-items-center gap-2"
                      style={{
                        backgroundColor: "#f8f8f8",
                        borderLeft: `4px solid ${CRANBERRY}`,
                      }}
                    >
                      <FaCheckCircle
                        style={{ color: CRANBERRY }}
                      />

                      <span className="fw-semibold small">
                        {item}
                      </span>
                    </motion.div>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================================================= */}
      {/* HOW MEMBERSHIP WORKS */}
      {/* ================================================= */}

      <section
        className="py-5"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="display-6 fw-bold">
              How Membership{" "}
              <span style={{ color: CRANBERRY }}>
                Works
              </span>
            </h2>

            <p className="text-muted lead">
              Getting involved is simple.
            </p>
          </motion.div>


          <div className="row g-4 justify-content-center">

            {[
              {
                number: "01",
                title: "Apply",
                text: "Fill out our membership application form.",
              },
              {
                number: "02",
                title: "Connect",
                text: "Our team will get in touch with you.",
              },
              {
                number: "03",
                title: "Get Involved",
                text: "Attend meetings, events, and activities.",
              },
              {
                number: "04",
                title: "Become a Member",
                text: "Start your journey with our community.",
              },
            ].map((step, index) => (
              <div
                className="col-12 col-sm-6 col-lg-3"
                key={index}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="text-center"
                >

                  <div
                    className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center fw-bold text-white"
                    style={{
                      width: "65px",
                      height: "65px",
                      fontSize: "18px",
                      backgroundColor: CRANBERRY,
                    }}
                  >
                    {step.number}
                  </div>

                  <h5 className="fw-bold">
                    {step.title}
                  </h5>

                  <p className="text-muted small">
                    {step.text}
                  </p>

                </motion.div>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================================================= */}
      {/* APPLY NOW CTA */}
      {/* ================================================= */}

      <section
        className="py-5 text-white"
        style={{
          backgroundColor: CRANBERRY,
        }}
      >
        <div className="container text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h2 className="display-6 fw-bold mb-3">
              Ready to Make a Difference?
            </h2>

            <p
              className="lead mx-auto mb-4"
              style={{ maxWidth: "650px" }}
            >
              Take the first step and become part of the
              Rotaract Club of Dombivli Downtown.
            </p>

            <a
              href="YOUR_GOOGLE_FORM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg px-5 py-3 rounded-pill fw-bold d-inline-flex align-items-center"
              style={{
                backgroundColor: "#ffffff",
                color: CRANBERRY,
                border: "2px solid #ffffff",
              }}
            >
              Apply Now
              <FaArrowRight className="ms-2" size={14} />
            </a>

          </motion.div>

        </div>
      </section>


      {/* ================================================= */}
      {/* CONTACT SECTION */}
      {/* ================================================= */}

      <section
        className="py-5 bg-gray-50"
      >
        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="display-6 fw-bold" style={{color: CRANBERRY}}>
              Get In{" "}
              <span style={{ color: CRANBERRY }}>
                Touch
              </span>
            </h2>

            <p className="text-light">
              Have a question? We'd love to hear from you.
            </p>
          </motion.div>


          <div className="row g-5">

            {/* ================================================= */}
            {/* CONTACT INFORMATION */}
            {/* ================================================= */}

            <div className="col-lg-5">

              <h4 className="fw-bold text-black mb-4">
                Contact Us
              </h4>


              {/* EMAIL */}
              <div className="d-flex gap-3 mb-4">

                <FaEnvelope
                  className="mt-1"
                  size={20}
                  style={{ color: CRANBERRY }}
                />

                <div>

                  <small className="text-secondary d-block">
                    EMAIL
                  </small>

                  <a
                    href="mailto:yourorganization@gmail.com"
                    className="text-black text-decoration-none"
                  >
                    yourorganization@gmail.com
                  </a>

                </div>

              </div>


              {/* PHONE */}
              <div className="d-flex gap-3 mb-4">

                <FaPhone
                  className="mt-1"
                  size={20}
                  style={{ color: CRANBERRY }}
                />

                <div>

                  <small className="text-secondary d-block">
                    PHONE
                  </small>

                  <a
                    href="tel:+910000000000"
                    className="text-black text-decoration-none"
                  >
                    +91 XXXXX XXXXX
                  </a>

                </div>

              </div>


              {/* LOCATION */}
              <div className="d-flex gap-3 mb-4">

                <FaMapMarkerAlt
                  className="mt-1"
                  size={20}
                  style={{ color: CRANBERRY }}
                />

                <div>

                  <small className="text-secondary d-block">
                    LOCATION
                  </small>

                  <span className="text-black">
                    Dombivli, Maharashtra, India
                  </span>

                </div>

              </div>


              {/* SOCIAL MEDIA */}
              <h5 className="fw-bold text-black mt-5 mb-3">
                Follow Us
              </h5>

              <div className="d-flex gap-3">

                {[
                  {
                    icon: FaInstagram,
                    label: "Instagram",
                  },
                  {
                    icon: FaFacebookF,
                    label: "Facebook",
                  },
                  {
                    icon: FaLinkedinIn,
                    label: "LinkedIn",
                  },
                ].map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={index}
                      href="#"
                      aria-label={social.label}
                      className="d-flex align-items-center justify-content-center rounded-circle text-black"
                      style={{
                        width: "42px",
                        height: "42px",
                        border: `1px solid ${CRANBERRY}`,
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          CRANBERRY;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "transparent";
                      }}
                    >
                      <Icon />
                    </a>
                  );
                })}

              </div>

            </div>


            {/* ================================================= */}
            {/* CONTACT FORM */}
            {/* ================================================= */}

            <div className="col-lg-7">

              {!submitted ? (

                <motion.form
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  onSubmit={handleSubmit}
                  className="bg-white text-dark rounded-4 p-4 p-md-5 shadow-lg"
                >

                  <h4
                    className="fw-bold mb-4"
                    style={{ color: CRANBERRY }}
                  >
                    Send Us a Message
                  </h4>


                  {/* NAME */}
                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Name
                    </label>

                    <div className="input-group">

                      <span
                        className="input-group-text bg-light border-end-0"
                      >
                        <FaUser style={{ color: CRANBERRY }} />
                      </span>

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="form-control border-start-0"
                        placeholder="Your name"
                        required
                      />

                    </div>

                  </div>


                  {/* EMAIL */}
                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Email
                    </label>

                    <div className="input-group">

                      <span
                        className="input-group-text bg-light border-end-0"
                      >
                        <FaEnvelope
                          style={{ color: CRANBERRY }}
                        />
                      </span>

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="form-control border-start-0"
                        placeholder="your@email.com"
                        required
                      />

                    </div>

                  </div>


                  {/* PHONE */}
                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Phone{" "}
                      <span className="text-muted fw-normal">
                        (Optional)
                      </span>
                    </label>

                    <div className="input-group">

                      <span
                        className="input-group-text bg-light border-end-0"
                      >
                        <FaPhone
                          style={{ color: CRANBERRY }}
                        />
                      </span>

                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="form-control border-start-0"
                        placeholder="+91 XXXXX XXXXX"
                      />

                    </div>

                  </div>


                  {/* MESSAGE */}
                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Message
                    </label>

                    <div className="input-group">

                      <span
                        className="input-group-text bg-light border-end-0 align-items-start pt-3"
                      >
                        <FaComment
                          style={{ color: CRANBERRY }}
                        />
                      </span>

                      <textarea
                        name="message"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        className="form-control border-start-0"
                        placeholder="How can we help you?"
                        required
                      />

                    </div>

                  </div>


                  <button
                    type="submit"
                    className="btn w-100 py-3 rounded-pill fw-bold text-white d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: CRANBERRY,
                      border: `2px solid ${CRANBERRY}`,
                    }}
                  >
                    Send Message
                    <FaArrowRight
                      className="ms-2"
                      size={14}
                    />
                  </button>

                </motion.form>

              ) : (

                /* ================================================= */
                /* SUCCESS MESSAGE */
                /* ================================================= */

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="bg-white text-dark rounded-4 p-5 shadow-lg text-center"
                >

                  <FaCheckCircle
                    size={60}
                    className="mb-4"
                    style={{ color: CRANBERRY }}
                  />

                  <h3 className="fw-bold mb-3">
                    Message Sent!
                  </h3>

                  <p className="text-muted mb-4">
                    Thank you for reaching out. We'll get back to
                    you as soon as possible.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);

                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                      });
                    }}
                    className="btn rounded-pill px-4 fw-semibold text-white"
                    style={{
                      backgroundColor: CRANBERRY,
                      border: `2px solid ${CRANBERRY}`,
                    }}
                  >
                    Send Another Message
                  </button>

                </motion.div>

              )}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}