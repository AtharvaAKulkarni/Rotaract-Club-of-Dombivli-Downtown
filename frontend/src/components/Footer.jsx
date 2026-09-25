import React from "react";
import { Link } from "react-router-dom";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaYoutube,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-600 py-2">

            {/* Main Footer */}
            <div className="container py-5">
                <div className="row g-5">

                    {/* Organization Info */}
                    <div className="col-lg-4 col-md-6">
                        <h4 className="fw-bold mb-3">
                            Rotaract Club of{" "}
                            <span className="">Dombivli Downtown</span>
                        </h4>

                        <p className="text-gray-600 mb-4" style={{ maxWidth: "400px" }}>
                            A youth-led organization committed to community service,
                            leadership development, fellowship, and creating meaningful
                            positive change in our community.
                        </p>

                        {/* Social Media */}
                        <div className="d-flex gap-3">
                            <a
                                href="https://www.instagram.com/rotaract_downtown/"
                                className="!text-gray-600 d-flex align-items-center justify-content-center rounded-circle border border-secondary"
                                style={{ width: "40px", height: "40px" }}
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>

                            {/* <a
                                href="#"
                                className="!text-gray-600 d-flex align-items-center justify-content-center rounded-circle border border-secondary"
                                style={{ width: "40px", height: "40px" }}
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a> */}

                            <a
                                href="https://www.linkedin.com/in/rotaractdombivlidowntown/"
                                className="!text-gray-600 d-flex align-items-center justify-content-center rounded-circle border border-secondary"
                                style={{ width: "40px", height: "40px" }}
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>

                            {/* <a
                                href="#"
                                className="!text-gray-600 d-flex align-items-center justify-content-center rounded-circle border border-secondary"
                                style={{ width: "40px", height: "40px" }}
                                aria-label="YouTube"
                            >
                                <FaYoutube />
                            </a> */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="fw-bold mb-4">Quick Links</h5>

                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <Link to="/" className="!text-gray-600 text-decoration-none">
                                    Home
                                </Link>
                            </li>

                            <li className="mb-3">
                                <Link to="/about" className="!text-gray-600 text-decoration-none">
                                    About
                                </Link>
                            </li>

                            <li className="mb-3">
                                <Link to="/team" className="!text-gray-600 text-decoration-none">
                                    Team
                                </Link>
                            </li>

                            <li className="mb-3">
                                <Link to="/projects" className="!text-gray-600 text-decoration-none">
                                    Projects
                                </Link>
                            </li>

                            <li className="mb-3">
                                <Link to="/events" className="!text-gray-600 text-decoration-none">
                                    Events
                                </Link>
                            </li>

                            <li>
                                <Link to="/join" className="!text-gray-600 text-decoration-none">
                                    Join Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="fw-bold mb-4">Get In Touch</h5>

                        <div className="d-flex align-items-start gap-3 mb-3">
                            <FaMapMarkerAlt className="text-gray-600 mt-1" />
                            <span className="text-gray-600">
                                Dombivli, Maharashtra, India
                            </span>
                        </div>

                        <div className="d-flex align-items-center gap-3 mb-3">
                            <FaEnvelope className="!text-gray-600" />
                            <a
                                href="mailto:dombivlidowntownrc@gmail.com"
                                className="!text-gray-600 text-decoration-none"
                            >
                                dombivlidowntownrc@gmail.com
                            </a>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <FaPhone className="!text-gray-600" />
                            <a
                                href="tel:+910000000000"
                                className="!text-gray-600 text-decoration-none"
                            >
                                +91 XXXXX XXXXX
                            </a>
                        </div>
                    </div>

                    {/* Join Us */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="fw-bold mb-4">Be Part of the Movement</h5>

                        <p className="text-gray-600 mb-4">
                            Want to make a difference? Join us and be a part of our
                            community of young changemakers.
                        </p>

                        <Link
                            to="/join"
                            className="btn !border-2 !border-gray-600 !text-gray-600 rounded-pill px-4 py-2 fw-semibold"
                        >
                            Join Us
                        </Link>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-top border-secondary">
                <div className="container py-3">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">

                        <p className="text-black mb-0 small opacity-55">
                            © {new Date().getFullYear()} Rotaract Club of Dombivli Downtown.
                            All Rights Reserved.
                        </p>

                        <p className="text-black opacity-55 mb-0 small">
                            Service Above Self • Fellowship Through Service
                        </p>

                    </div>
                </div>
            </div>

        </footer>
    );
}