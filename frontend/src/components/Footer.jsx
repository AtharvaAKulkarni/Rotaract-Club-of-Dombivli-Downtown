import { Instagram, Facebook, Mail, Globe } from "lucide-react";
export const Footer = () => {
    return (
        <>
            <footer className="bg-blue-100 text-blue-900 pt-10 pb-6 mt-16">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">

                    {/* Left - Club Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Rotaract Club of Dombivli Downtown</h3>
                        <p className="text-sm">Service Before Self | Empowering Youth | Building Leaders</p>
                    </div>

                    {/* Middle - Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-blue-700 transition">Home</a></li>
                            <li><a href="#about" className="hover:text-blue-700 transition">About</a></li>
                            <li><a href="#projects" className="hover:text-blue-700 transition">Projects</a></li>
                            <li><a href="#contact" className="hover:text-blue-700 transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Right - Social Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-3">Connect With Us</h4>
                        <div className="flex space-x-4 text-blue-700">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="mailto:example@email.com" className="hover:text-blue-900 transition">
                                <Mail className="w-6 h-6" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition">
                                <Facebook className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom line */}
                <div className="mt-8 text-center text-sm text-blue-700 border-t border-blue-300 pt-4">
                    © {new Date().getFullYear()} Rotaract Club of Dombivli Downtown. All rights reserved.
                </div>
            </footer>
        </>
    )
}
