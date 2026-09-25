import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaFilter, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaHeart, FaShare, FaDownload, FaExpand } from "react-icons/fa";
// const images=import.meta.glob(
//   "../assets/Core Team/*.{png,jpg,jpeg,webp}",
//   {
//     eager: true,
//     query: "?url",
//     import: "default",
//   }
// );
const galleryData = [
  {
    id: 1,
    title: "5th Charter Day Celebration",
    category: "community",
    date: "2024-01-15",
    location: "Dombivli East",
    images: [
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1579154204601-015d927e5a2c?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1584467735871-8db9ac8d0eaa?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=500&q=80"
    ],
    volunteers: 45,
    description: "Quarterly blood donation drive in collaboration with local hospitals"
  },
  {
    id: 2,
    title: "Azadi ke Rang",
    category: "education",
    date: "2024-02-01",
    location: "Multiple Locations",
    images: [
      "https://images.unsplash.com/photo-1574269862306-1a9c4ba1b5c9?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1579546929662-711aa81148cf?auto=format&fit=crop&w=500&q=80"
    ],
    volunteers: 120,
    description: "Massive tree plantation drive across Dombivli to increase green cover"
  },
  {
    id: 3,
    title: "Azadi ke Shabd",
    category: "education",
    date: "2024-01-28",
    location: "Dombivli West",
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=500&q=80"
    ],
    volunteers: 35,
    description: "Educational support and career guidance for underprivileged students"
  },
  {
    id: 4,
    title: "Project Muskaan",
    category: "community",
    date: "2023-12-10",
    location: "Khadakpada Area",
    images: [
      "https://images.unsplash.com/photo-1550147760-44c9966d6bc7?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-15857478654-e7066d1e6f3e?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=500&q=80"
    ],
    volunteers: 80,
    description: "Beach and street cleaning initiative promoting civic responsibility"
  },
  {
    id: 5,
    title: "Dear Rotaract Guru",
    category: "education",
    date: "2023-11-20",
    location: "Dombivli",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=500&q=80"
    ],
    volunteers: 25,
    description: "Weekly visits and support program for elderly citizens"
  },
  {
    id: 6,
    title: "The Royal Soiree",
    category: "education",
    date: "2023-10-15",
    location: "Dombivli Downtown",
    images: [
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80"
    ],
    volunteers: 18,
    description: "Vocational training programs for youth and women empowerment"
  }
];

const categories = [
  { id: "all", name: "All Events", icon: FaFilter },
  { id: "health", name: "Health", icon: FaHeart },
  { id: "education", name: "Education", icon: FaUsers },
  { id: "environment", name: "Environment", icon: FaCalendarAlt },
  { id: "community", name: "Community", icon: FaMapMarkerAlt }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredEvents = galleryData.filter(event => {
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (event, imageIndex = 0) => {
    setSelectedEvent(event);
    setSelectedImageIndex(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedEvent(null);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    if (selectedEvent) {
      setSelectedImageIndex((prev) =>
        prev === selectedEvent.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? selectedEvent.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen py-12 pt-25">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Gallery
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Capturing moments of service, fellowship, and community impact
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-pill text-sm font-medium transition-all duration-200 ${selectedCategory === category.id
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
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Event Header */}
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-[#b6316c]" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-[#b6316c]" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Image Grid */}
              <div className="p-4">
                <div className="w-full grid grid-cols-2 gap-2 h-80">
                  {event.images.slice(0, 3).map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`relative overflow-hidden rounded-lg cursor-pointer group ${imgIndex === 0 ? "col-span-2" : ""
                        }`}
                      onClick={() => openLightbox(event, imgIndex)}
                    >
                      {/* IMAGE */}
                      <img
                        src={image}
                        alt={`${event.title} ${imgIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover block"
                        style={{
                          display: "block",
                          opacity: 1,
                          visibility: "visible",
                          zIndex: 1,
                        }}
                      />

                      {/* HOVER OVERLAY */}
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          backgroundColor: "transparent",
                          zIndex: 2,
                        }}
                      >
                        <FaExpand
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>

                      {/* MORE PHOTOS */}
                      {imgIndex === 2 && event.images.length > 3 && (
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            zIndex: 3,
                          }}
                        >
                          <span className="text-white font-semibold text-lg">
                            +{event.images.length - 3} more
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Event Details */}
                <div className="mt-4">
                  <p className="text-gray-600 text-sm mb-3">
                    {event.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <FaUsers className="text-[#b6316c]" />
                      <span>{event.volunteers} volunteers</span>
                    </div>

                    <button
                      onClick={() => openLightbox(event)}
                      className="text-[#b6316c] font-medium"
                    >
                      View All Photos
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-6xl mb-4">📷</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-[#b6316c] rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Have Photos to Share?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            If you have photos from our events that you'd like to share with the community,
            send them to us to be featured in our gallery.
          </p>
          <button className="bg-white text-[#b6316c] px-8 py-3 rounded-pill font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Share Your Photos
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 overflow-hidden"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl max-h-[95vh] flex flex-col items-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 md:top-0 md:right-0 z-50 
                   w-10 h-10 flex items-center justify-center
                   rounded-full bg-black/60 text-white
                   hover:bg-black/80 hover:text-gray-300
                   transition-all"
              aria-label="Close"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Main Image Area */}
            <div className="relative w-full flex justify-center items-center">

              {/* Previous */}
              {selectedEvent.images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2
                       z-20 w-10 h-10 md:w-12 md:h-12
                       flex items-center justify-center
                       rounded-full bg-black/60 text-white
                       text-3xl hover:bg-black/80
                       transition-all"
                >
                  ‹
                </button>
              )}

              {/* Main Image */}
              <img
                src={selectedEvent.images[selectedImageIndex]}
                alt={`${selectedEvent.title} ${selectedImageIndex + 1}`}
                className="max-w-full max-h-[65vh] object-contain rounded-lg"
              />

              {/* Next */}
              {selectedEvent.images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2
                       z-20 w-10 h-10 md:w-12 md:h-12
                       flex items-center justify-center
                       rounded-full bg-black/60 text-white
                       text-3xl hover:bg-black/80
                       transition-all"
                >
                  ›
                </button>
              )}

              {/* Image Counter */}
              <div
                className="absolute bottom-3 left-1/2 -translate-x-1/2
                     bg-black/70 text-white px-3 py-1
                     rounded-full text-sm"
              >
                {selectedImageIndex + 1} / {selectedEvent.images.length}
              </div>
            </div>

            {/* Event Info */}
            <div className="w-full text-white text-center mt-3 px-4">
              <h3 className="text-lg md:text-xl font-bold mb-1">
                {selectedEvent.title}
              </h3>

              <p className="text-gray-300 text-sm line-clamp-2">
                {selectedEvent.description}
              </p>
            </div>

            {/* Thumbnail Strip */}
            <div className="w-full flex justify-center mt-3 px-2">
              <div className="flex gap-2 overflow-x-auto max-w-full pb-1 scrollbar-hide">
                {selectedEvent.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`
                flex-shrink-0
                w-14 h-14 md:w-16 md:h-16
                object-cover rounded
                cursor-pointer border-2
                transition-all
                ${index === selectedImageIndex
                        ? "border-[#b6316c]"
                        : "border-transparent opacity-60 hover:opacity-100"
                      }
              `}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

// Add this FaTimes icon import at the top with others
const FaTimes = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" height="1em" width="1em">
    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
  </svg>
);