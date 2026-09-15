import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const values = [
    {
      icon: FaUsers,
      title: "Leadership",
      description:
        "We empower young people to take initiative, lead with confidence, and create meaningful change.",
    },
    {
      icon: FaHeart,
      title: "Service",
      description:
        "We believe in giving back to our community through meaningful service and action.",
    },
    {
      icon: FaHandshake,
      title: "Friendship",
      description:
        "We build lasting friendships and create an environment where everyone feels connected.",
    },
    {
      icon: FaUsers,
      title: "Inclusion",
      description:
        "We welcome people from different backgrounds and ensure everyone has a voice.",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description:
        "We encourage new ideas and creative approaches to solving community challenges.",
    },
    {
      icon: FaAward,
      title: "Integrity",
      description:
        "We act with honesty, responsibility, and respect in everything we do.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-20">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#111111] text-white">
        {/* Decorative Elements */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#b6316c]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#b6316c]/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-[#b6316c] font-bold tracking-[0.25em] uppercase text-sm mb-5">
              About Us
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Young People.
              <br />

              <span className="text-[#b6316c]">
                Meaningful Impact.
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              Rotaract Club of Dombivli Downtown is a youth-led organization
              committed to service, leadership, friendship, and creating
              positive change in our community.
            </p>
          </motion.div>

        </div>
      </section>


      {/* ===================================================== */}
      {/* OUR STORY */}
      {/* ===================================================== */}

      <section className="py-20 md:py-28 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#b6316c] font-bold uppercase tracking-widest text-sm mb-4">
                Our Story
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
                Where Service Meets Friendship
              </h2>

              <div className="w-16 h-1 bg-[#b6316c] mb-7" />

              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Rotaract Club of Dombivli Downtown was created to bring
                together young individuals who want to serve their community,
                develop their leadership abilities, and build meaningful
                relationships.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                What began as a group of young people with a shared desire to
                make a difference has grown into a community driven by
                collaboration, service, and positive action.
              </p>
            </motion.div>


            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#b6316c] rounded-3xl p-8 md:p-12 shadow-xl">

                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-7">
                  <FaHeart className="text-[#b6316c] text-2xl" />
                </div>

                <h3 className="text-white text-3xl font-bold mb-5">
                  Driven By Purpose
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  We believe that young people have the power to create
                  meaningful change when they come together with a common
                  purpose.
                </p>

              </div>

              {/* Decorative square */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 border-4 border-[#b6316c] rounded-2xl -z-0" />

            </motion.div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* MISSION & VISION */}
      {/* ===================================================== */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-6">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white text-[#b6316c] rounded-3xl p-8 md:p-12 shadow-lg"
            >
              <p className="text-[#b6316c] font-bold uppercase tracking-widest text-sm mb-5">
                Our Mission
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Serve. Lead. Inspire.
              </h2>

              <p className="text-[#b6316c] text-lg leading-relaxed">
                To empower young people to serve their communities, develop
                leadership skills, build meaningful connections, and create
                lasting positive impact.
              </p>
            </motion.div>


            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-[#b6316c] text-white rounded-3xl p-8 md:p-12 shadow-lg"
            >
              <p className="text-white/70 font-bold uppercase tracking-widest text-sm mb-5">
                Our Vision
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Better Community Together
              </h2>

              <p className="text-white/90 text-lg leading-relaxed">
                To create a connected and empowered generation of young
                leaders who make a lasting difference in their communities and
                beyond.
              </p>
            </motion.div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* WHAT WE DO */}
      {/* ===================================================== */}

      <section className="py-20 md:py-28 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <p className="text-[#b6316c] font-bold uppercase tracking-widest text-sm mb-4">
              What We Do
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-5">
              Turning Ideas Into Action
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              We bring young people together through service projects,
              leadership opportunities, community initiatives, events, and
              experiences that create meaningful connections.
            </p>
          </motion.div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "Community Service",
                text: "We organize initiatives that address real community needs and create positive change.",
                icon: FaHeart,
              },
              {
                title: "Leadership",
                text: "We provide opportunities for young people to develop confidence and leadership skills.",
                icon: FaUsers,
              },
              {
                title: "Events",
                text: "We conduct social, educational, cultural, and networking experiences.",
                icon: FaHandshake,
              },
              {
                title: "Initiatives",
                text: "We turn ideas into meaningful projects that benefit people and communities.",
                icon: FaLightbulb,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300"
                >

                  <div className="w-14 h-14 rounded-xl bg-[#fdf3f7] text-[#b6316c] flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* WHERE WE OPERATE */}
      {/* ===================================================== */}

      <section className="py-20 bg-[#b6316c] text-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-white font-bold uppercase tracking-widest text-sm mb-4">
                Where We Operate
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Rooted In Dombivli
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                Our work is primarily focused in and around Dombivli, where we
                collaborate with local communities, organizations, and
                individuals to create meaningful social impact.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-3xl p-8"
            >

              <div className="flex items-center gap-5 mb-6">

                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                  <FaUsers className="text-[#b6316c] text-xl" />
                </div>

                <div>
                  <p className="text-white text-sm">
                    Our Community
                  </p>

                  <h3 className="text-2xl font-bold">
                    Dombivli & Beyond
                  </h3>
                </div>

              </div>

              <p className="text-white leading-relaxed">
                From local service projects to collaborative initiatives, we
                aim to create impact that reaches beyond individual projects
                and contributes to a stronger community.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* OUR VALUES */}
      {/* ===================================================== */}

      <section className="py-20 md:py-28 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[#b6316c] font-bold uppercase tracking-widest text-sm mb-4">
              Our Values
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-5">
              What We Stand For
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide our decisions, our relationships, and
              the way we serve our community.
            </p>

          </motion.div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
                >

                  <div className="w-12 h-12 rounded-xl bg-[#fdf3f7] text-[#b6316c] flex items-center justify-center mb-5 group-hover:bg-[#b6316c] group-hover:text-white transition-all duration-300">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <section className="py-20 bg-[#b6316c] text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Be Part Of The Change
            </h2>

            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Join a community of young people who believe in service,
              leadership, friendship, and creating meaningful impact.
            </p>

            <Link
              to="/join"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#b6316c] px-7 py-3 rounded-full font-bold hover:bg-[#111111] hover:text-white transition-all duration-300 shadow-lg"
            >
              Join Our Club
              <FaArrowRight size={14} />
            </Link>

          </motion.div>

        </div>

      </section>

    </div>
  );
}