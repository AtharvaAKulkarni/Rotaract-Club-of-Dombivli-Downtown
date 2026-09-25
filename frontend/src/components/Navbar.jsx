import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import clubLogo from "../assets/Rotaract Logo_EN21_DynamicSize_FontUpdate.png";
import aagazLogo from "../assets/aagaz logo.png";
export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar when at the top
      if (currentScrollY <= 10) {
        setHidden(false);
        setShowNavbar(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Scrolling down → hide navbar
      if (currentScrollY > lastScrollY) {
        setHidden(true);
      }

      lastScrollY = currentScrollY;
    };

    const handleMouseMove = (e) => {
      // If mouse is near the top of the screen
      if (e.clientY <= 80) {
        setHidden(false);
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/projects", label: "Projects" },
    { path: "/team", label: "Our Team" },
    // { path: "/gallery", label: "Gallery" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-lg shadow-md border-b border-gray-200 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ================= LOGOS ================= */}
          <Link
            to="/"
            className="flex items-center gap-1 group"
          >
            {/* Club Logo */}
            <img
              src={clubLogo}
              alt="Club Logo"
              className="w-52 h-52 object-contain"
            />

            {/* Theme Logo */}
            <div className="border-l border-gray-300">
              <img
                src={aagazLogo}
                alt="Theme Logo"
                className="w-42 h-20 object-contain"
              />
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-6">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-medium !text-black transition-colors duration-200 ${isActive
                    ? "text-[#b6316c]"
                    : "text-gray-700 hover:text-[#b6316c]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    {/* Active underline */}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-[#b6316c] transition-all duration-300 ${isActive ? "w-full" : "w-0"
                        }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            {/* Divider */}
            <div className="w-px h-6 bg-gray-300 ml-2"></div>

            {/* Join Us */}
            <NavLink
              to="/join"
              className={({ isActive }) =>
                `relative py-2 text-sm font-semibold transition-colors duration-200 ${isActive
                  ? "text-[#b6316c]"
                  : "text-gray-800 hover:text-[#b6316c]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Join Us

                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-[#b6316c] transition-all duration-300 ${isActive ? "w-full" : "w-0"
                      }`}
                  />
                </>
              )}
            </NavLink>
          </nav>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <div className="lg:hidden">
            <MobileMenu
              currentPath={location.pathname}
              navItems={navItems}
            />
          </div>

        </div>
      </div>
    </header>
  );
}


/* ========================================================= */
/*                       MOBILE MENU                         */
/* ========================================================= */

function MobileMenu({ currentPath, navItems }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <div className="relative">

      {/* Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        {open ? (
          <FaTimes className="h-5 w-5 text-gray-800" />
        ) : (
          <FaBars className="h-5 w-5 text-gray-800" />
        )}
      </button>


      {/* ================= MOBILE OVERLAY ================= */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">

          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Menu */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl">

            <div className="flex flex-col h-full">

              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-200">

                {/* Logos */}
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3"
                >
                  <img
                    src="/club-logo.png"
                    alt="Club Logo"
                    className="w-11 h-11 object-contain"
                  />

                  <div className="border-l border-gray-300 pl-3">
                    <img
                      src="/theme-logo.png"
                      alt="Theme Logo"
                      className="w-11 h-11 object-contain"
                    />
                  </div>
                </Link>

                {/* Close */}
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FaTimes className="h-5 w-5 text-gray-700" />
                </button>

              </div>


              {/* ================= MENU ITEMS ================= */}
              <nav className="flex-1 p-5">

                <div className="flex flex-col">

                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`relative py-4 text-base font-medium border-b border-gray-100 transition-colors ${currentPath === item.path
                        ? "text-[#b6316c] font-semibold"
                        : "text-gray-800 hover:text-[#b6316c]"
                        }`}
                    >
                      {item.label}

                      {/* Active underline */}
                      {currentPath === item.path && (
                        <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-[#b6316c]" />
                      )}
                    </Link>
                  ))}

                  {/* Join Us */}
                  <Link
                    to="/join"
                    onClick={() => setOpen(false)}
                    className={`relative py-4 text-base font-semibold border-b border-gray-100 ${currentPath === "/join"
                      ? "text-[#b6316c]"
                      : "text-gray-800 hover:text-[#b6316c]"
                      }`}
                  >
                    Join Us

                    {currentPath === "/join" && (
                      <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-[#b6316c]" />
                    )}
                  </Link>

                </div>

              </nav>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}