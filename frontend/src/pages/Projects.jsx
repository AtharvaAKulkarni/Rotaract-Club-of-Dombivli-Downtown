import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaTree, FaBook, FaHeart, FaSearch, FaCalendar, FaMapMarkerAlt, FaHandHoldingHeart } from "react-icons/fa";
import azadikeshabd from "../assets/azadikeshabd.jpg";
import muskaan from "../assets/muskaan.jpeg";
import installation from "../assets/installation.jpeg";
import rotaractguru from "../assets/rotaractguru.JPG";
import azadikerang from "../assets/azadikerang.jpeg";
import charterday from "../assets/charterday.jpg";
const projects = [
  {
    id: 1,
    title: "5th Charter Day Celebration",
    desc: "Celebrated our 5th Charter Day with our members.",
    img: charterday,
    category: "community",
    status: "completed",
    volunteers: 45,
    
    date: "2026-08-23",
    location: "Dombivli East",

    
  },
  {
    id: 2,
    title: "Azadi ke Rang",
    desc: "A drawing competition at Zilla Parishad school on independence day",
    img: azadikerang,
    category: "education",
    status: "completed",
    volunteers: 120,
    impact: "500+ trees planted",
    date: "2024-02-01",
    location: "Multiple Locations"
  },
  {
    id: 3,
    title: "Azadi ke Shabd",
    desc: "A elocution competition at Zilla Parishad school on independence day",
    img: azadikeshabd,
    category: "education",
    status: "completed",
    volunteers: 35,
    impact: "80+ students benefited",
    date: "2023-11-10",
    location: "Dombivli West"
  },
  {
    id: 4,
    title: "Project Muskaan",
    desc: "A Friendship Day celebration organized with the children of a school for the deaf, fostering joy and inclusion.",
    img: muskaan,
    category: "community",
    status: "completed",
    volunteers: 25,
    impact: "60+ seniors supported",
    date: "2023-12-05",
    location: "Dombivli"
  },
  {
    id: 5,
    title: "Dear Rotaract Guru",
    desc: "A letter to Rotaract Guru to express heartfelt gratitude to Rotaract Gurus on the occasion of Guru Purnima",
    img: rotaractguru,
    category: "community",
    status: "completed",
    volunteers: 0,
    date: "2024-03-20",
    location: "Dombivli",
    whatHappened: "The aim of the project was to express heartfelt gratitude to Rotaract Gurus on the occasion of Guru Purnima for their constant guidance, support, and belief throughout the Rotaract journey, while acknowledging their role in inspiring the personal and professional growth of Rotaractors.",
  },
  {
    id: 6,
    title: "The Royal Soiree",
    desc: "Organized our 5th installation Ceremony.",
    img: installation,
    category: "",
    status: "completed",
    volunteers: 18,
    impact: "120+ participants",
    date: "2023-10-25",
    location: "Dombivli Downtown"
  }
];

const categories = [
  { id: "all", name: "All Projects", icon: FaHandHoldingHeart },
  { id: "health", name: "Health", icon: FaHeart },
  { id: "education", name: "Education", icon: FaBook },
  { id: "environment", name: "Environment", icon: FaTree },
  { id: "community", name: "Community", icon: FaUsers }
];

const statusColors = {
  completed: "bg-green-100 text-green-800",
  ongoing: "bg-blue-100 text-blue-800",
  upcoming: "bg-orange-100 text-orange-800"
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? React.createElement(category.icon, { className: "text-[#b6316c]" }) : null;
  };

  return (
    <div className="min-h-screen py-12 pt-25">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl !font-bold !text-[#b6316c] mb-4 font-default">
            OUR PROJECTS
          </h2>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between bg-white p-6 rounded-2xl shadow-lg border border-blue-100"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 rounded-pill ${selectedCategory === category.id
                  ? "bg-[#b6316c] text-white shadow-md"
                  : "bg-[#f9eaf1] text-[#b6316c] hover:bg-[#b6316c] hover:!text-white"
                  }`}
              >
                <category.icon />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border transition-all duration-300 hover:shadow-xl h-full d-flex flex-column"
              style={{height:"430px"}}
            >
              {/* Image with Status Badge */}
              <div className="relative overflow-hidden h-104">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>

                {/* Category Icon */}
                <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-full">
                  {getCategoryIcon(project.category)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#b6316c] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.desc}</p>



                {/* Action Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full mt-auto bg-[#b6316c] text-white py-2 rounded-lg font-semibold hover:bg-[#b6317c] transition-colors rounded-pill"
                >
                  {project.status === "upcoming" ? "Join This Project" : "View Details"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== PROJECT DETAILS MODAL ===== */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-black transition"
              >
                ×
              </button>

              {/* Project Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />

                {/* Status */}
                <div className="absolute bottom-4 left-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColors[selectedProject.status]
                      }`}
                  >
                    {selectedProject.status.charAt(0).toUpperCase() +
                      selectedProject.status.slice(1)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {selectedProject.title}
                </h2>

                {/* Date / Location / Volunteers
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

                  <div className="bg-[#f9f0f4] rounded-xl p-4">
                    <div className="flex items-center gap-2 text-[#b6316c] mb-1">
                      <FaCalendar />
                      <span className="font-semibold">Date</span>
                    </div>

                    <p className="text-gray-700">
                      {new Date(selectedProject.date).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>

                  <div className="bg-[#f9f0f4] rounded-xl p-4">
                    <div className="flex items-center gap-2 text-[#b6316c] mb-1">
                      <FaMapMarkerAlt />
                      <span className="font-semibold">Location</span>
                    </div>

                    <p className="text-gray-700">
                      {selectedProject.location}
                    </p>
                  </div>

                  <div className="bg-[#f9f0f4] rounded-xl p-4">
                    <div className="flex items-center gap-2 text-[#b6316c] mb-1">
                      <FaUsers />
                      <span className="font-semibold">Volunteers</span>
                    </div>

                    <p className="text-gray-700">
                      {selectedProject.volunteers}
                    </p>
                  </div>

                </div> */}

                {/* What Happened */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold !text-[#b6316c] mb-2">
                    What Happened?
                  </h4>

                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.whatHappened || selectedProject.desc}
                  </p>
                </div>

                {/* Why Conducted
                <div className="mb-6">
                  <h4 className="text-lg font-bold !text-[#b6316c] mb-2">
                    Why Was It Conducted?
                  </h4>

                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.whyConducted ||
                      "This initiative was conducted to create a positive impact in the community and address an important local need."}
                  </p>
                </div> */}

                {/* Impact
                <div className="bg-[#f9f0f4] rounded-xl p-5 text-white mb-6">
                  <div className="flex items-center gap-3 mb-2 text-[#b6316c]">
                    <FaHandHoldingHeart />
                    <h4 className="text-lg !text-[#b6316c] font-bold">
                      Impact
                    </h4>
                  </div>

                  <p className="text-black">
                    {selectedProject.impact}
                  </p>
                </div> */}

                {/* Close */}
                <div className="text-right">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2 bg-[#b6316c] text-white rounded-pill font-semibold transition"
                  >
                    Close
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-[#b6316c] rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to Make a Difference?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join Rotaract Club of Dombivli Downtown and be part of our mission to serve the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#b6316c] px-8 py-3 rounded-full font-semibold rounded-pill hover:bg-gray-100 transition-colors shadow-lg">
              Become a Volunteer
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold rounded-pill transition-colors">
              Suggest a Project
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}