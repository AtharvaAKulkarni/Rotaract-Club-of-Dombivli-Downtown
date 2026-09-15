import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";


// ============================================================
// TEAM DATA
// ============================================================

const coreTeam = [
  {
    name: "Rtr. Swayam Telang",
    roles: ["President"],
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=800&q=80",
    intro:
      "Leading the organization through a year of service, leadership and community engagement.",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
  },
  {
    name: "Rtr. Atharva Kulkarni",
    roles: ["Secretary"],
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    intro:
      "Keeping the club organized, connected and moving forward throughout the year.",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
  },
  {
    name: "Rtr. Diksha Kadam",
    roles: ["Vice President"],
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    intro:
      "Driving the club's growth while strengthening its presence and connection with the community.",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
  },
  {
    name: "Rtr. Shreyansh Jaiswar",
    roles: ["Treasurer"],
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=800&q=80",
    intro:
      "Managing the club's finances and helping turn ideas into impactful initiatives.",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
  },
  {
    name: "Rtr. Naman Dhoot",
    roles: ["Seargent at Arms"],
    img: "src/assets/Core Team/Rtr. Naman.jpg",
    intro:
      "Supporting club operations while building meaningful partnerships for service.",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
  },
  {
    name: "Rtr. Aparna Iyer",
    roles: ["Training Revival and Sustenance"],
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    intro:
      "Helping members learn, grow and stay connected with the spirit of Rotaract.",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
  },
  {
    name: "Rtr. Anagha Kulkarni",
    roles: ["Immediate Past President"],
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    intro:
      "Supporting the new leadership team with experience, guidance and continuity.",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
  },
];

const boardMembers = [
  {
    name: "Rtr. Sanchita Iyer",
    roles: ["Club Service Director"],
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    intro:
      "Creating engaging experiences and strengthening the club's internal community.",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
  },
  {
    name: "Rtr. Adarsh Shinde",
    roles: ["Community Service Director"],
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    intro:
      "Leading initiatives that turn community needs into meaningful action.",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
  },
  {
    name: "Rtr. Kaivalya Kasar",
    roles: ["Career Development Director"],
    img: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=800&q=80",
    intro:
      "Creating opportunities that help members discover and develop their potential.",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
  },
  {
    name: "Rtr. Vedant Pawar",
    roles: ["International Service Director"],
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    intro:
      "Building connections and opportunities that extend beyond our local community.",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
  },
  {
    name: "Rtr. Kaushik Vinod",
    roles: ["Sports Director"],
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    intro:
      "Bringing members together through sports, activities and healthy competition.",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
  },
  {
    name: "Rtr. Diksha Kadam",
    roles: ["Partners in Service"],
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    intro:
      "Driving the club's growth while strengthening its presence and connection with the community.",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    }
  },
  {
    name: "Rtr. Shreyansh Jaiswar",
    roles: ["Digicom Director"],
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=800&q=80",
    intro:
      "Managing the club's finances and helping turn ideas into impactful initiatives.",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
  },
  {
    name: "Rtr. Naman Dhoot",
    roles: ["Seargent at Arms", "PR and Marketing"],
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
    intro:
      "Supporting club operations while building meaningful partnerships for service.",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
  },
  {
    name: "Rtr. Anagha Kulkarni",
    roles: ["Immediate Past President",  "Editor"],
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    intro:
      "Supporting the new leadership team with experience, guidance and continuity.",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "mailto:example@gmail.com",
    },
  },
];


// ============================================================
// SOCIAL ICONS
// ============================================================

function SocialLinks({ social }) {
  return (
    <div className="flex items-center gap-2 mt-4">

      <a
        href={social.linkedin}
        className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center !text-gray-500 hover:bg-blue-600 hover:!text-white hover:border-blue-600 transition-all"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={14} />
      </a>

      <a
        href={social.instagram}
        className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center !text-gray-500 hover:bg-pink-500 hover:!text-white hover:border-pink-500 transition-all"
        aria-label="Instagram"
      >
        <FaInstagram size={14} />
      </a>

      <a
        href={social.email}
        className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center !text-gray-500 hover:bg-gray-800 hover:!text-white hover:border-gray-800 transition-all"
        aria-label="Email"
      >
        <FaEnvelope size={14} />
      </a>

    </div>
  );
}


// ============================================================
// BOARD CARD
// ============================================================
function BoardCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col">

        {/* FIXED IMAGE SIZE */}
        <div className="relative h-[300px] flex-shrink-0 overflow-hidden bg-gray-100">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* FIXED CONTENT AREA */}
        <div className="p-6 flex flex-col flex-1">

          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {member.name}
          </h3>

          <div className="flex flex-wrap gap-1 mb-3">
            {member.roles.map((role, idx) => (
              <React.Fragment key={idx}>
                <span className="text-sm font-semibold !text-[#b6316c]">
                  {role}
                </span>

                {idx !== member.roles.length - 1 && (
                  <span className="text-gray-300 mx-1">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
            {member.intro}
          </p>

          {/* Social icons stay at bottom */}
          <div className="mt-auto">
            <SocialLinks social={member.social} />
          </div>

        </div>
      </div>
    </motion.div>
  );
}


// ============================================================
// CORE MEMBER ROW
// ============================================================

function CoreMember({ member, reverse = false, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: reverse ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-[380px]`}
      >

        {/* FIXED IMAGE */}
        <div className="md:w-[40%] w-full h-[260px] md:h-full flex-shrink-0 overflow-hidden bg-gray-100">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* FIXED CONTENT */}
        <div className="flex-1 p-8 md:p-10 flex flex-col justify-center overflow-hidden">

          <p className="text-sm font-bold tracking-widest text-[#b6316c] uppercase mb-3">
            {member.roles.join(" • ")}
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {member.name}
          </h3>

          <p className="text-gray-500 leading-relaxed max-w-xl line-clamp-3">
            {member.intro}
          </p>

          <SocialLinks social={member.social} />

        </div>

      </div>
    </motion.div>
  );
}

// ============================================================
// MAIN TEAM PAGE
// ============================================================

export default function Team() {

  const president = coreTeam[0];

  const remainingCore = coreTeam.slice(1);

  return (

    <div className="min-h-screen bg-[#f8fafc] pt-20">


      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-[#0f172a] text-white">

        


        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Meet Our
              <span className="text-[#b6316c]"> Team.</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              A group of passionate young leaders working together
              to create meaningful experiences and lasting impact
              in our community.
            </p>

          </motion.div>

        </div>

      </section>


      {/* ================================================= */}
      {/* PRESIDENT */}
      {/* ================================================= */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >

            <p className="text-[#b6316c] font-bold tracking-widest uppercase text-sm mb-3">
              Leadership
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Leading The Club
            </h2>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
          >

            <div className="grid md:grid-cols-2">

              {/* President Image */}
              <div className="relative h-[420px] md:h-[520px]">

                <img
                  src={president.img}
                  alt={president.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent md:hidden" />

              </div>


              {/* President Content */}
              <div className="p-8 md:p-14 flex flex-col justify-center">

                <p className="text-[#b6316c] font-bold tracking-[0.25em] uppercase text-sm mb-4">
                  President
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                  {president.name}
                </h2>

                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  {president.intro}
                </p>

                <div className="w-16 h-1 bg-[#b6316c] mb-6" />

                <p className="text-gray-400 text-sm">
                  Rotaract Club of Dombivli Downtown
                </p>

                <SocialLinks social={president.social} />

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* ================================================= */}
      {/* CORE TEAM */}
      {/* ================================================= */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12"
          >

            <p className="text-[#b6316c] font-bold tracking-widest uppercase text-sm mb-3">
              Leadership Team
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Core Team
            </h2>

            <p className="text-gray-500 max-w-2xl text-lg">
              The team working behind the scenes to keep the
              organization moving forward.
            </p>

          </motion.div>


          <div className="space-y-6">

            {remainingCore.map((member, index) => (
              <CoreMember
                key={member.name}
                member={member}
                index={index}
                reverse={index % 2 !== 0}
              />
            ))}

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* BOARD OF DIRECTORS */}
      {/* ================================================= */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >

            <p className="text-[#b6316c] font-bold tracking-widest uppercase text-sm mb-3">
              The Team
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Board of Directors
            </h2>

            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Dedicated leaders overseeing different areas of
              service, development and engagement.
            </p>

          </motion.div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {boardMembers.map((member, index) => (
              <BoardCard
                key={member.name}
                member={member}
                index={index}
              />
            ))}

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* BOTTOM CTA */}
      {/* ================================================= */}

      <section className="py-20 bg-[#0f172a] text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">
              Be Part Of Something Bigger
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Want to join the team?
            </h2>

            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Bring your ideas, energy and passion for service.
              There is always room for another changemaker.
            </p>

            <a
              href="/join"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Join Us
              <FaArrowRight />
            </a>

          </motion.div>

        </div>

      </section>

    </div>
  );
}