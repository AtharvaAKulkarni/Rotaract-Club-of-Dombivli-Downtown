import React from "react";
import heroImage from "../assets/hero.jpeg"; // Adjust path based on your structure

export const Home = () => {
    return (
        <>
            <section className="relative h-[calc(100vh-4rem)]">
                {/* Background Image */}
                <img
                    src={heroImage}
                    alt="RAC Team"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                {/* Centered Text */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-lg">
                        Rotaract Club of Dombivli Downtown
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl drop-shadow-md">
                        Service Before Self • Youth in Action • Empowering Change
                    </p>
                    <a
                        href="#about"
                        className="mt-6 inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition"
                    >
                        Know More
                    </a>
                </div>
            </section>


            <section className="py-16 bg-white text-blue-900">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-2">What We Stand For</h2>
                    <div className="w-4/5 h-[2px] bg-black mx-auto mb-10"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Tile 1 */}
                        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 hover:scale-105 transform transition shadow-lg hover:shadow-2xl">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-xl font-semibold mb-2">Service Before Self</h3>
                            <p className="text-sm">We work to make a difference where it's needed most.</p>
                        </div>

                        {/* Tile 2 */}
                        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 hover:scale-105 transform transition shadow-lg hover:shadow-2xl">
                            <div className="text-4xl mb-4">👥</div>
                            <h3 className="text-xl font-semibold mb-2">Fellowship & Leadership</h3>
                            <p className="text-sm">Together we grow, lead, and lift each other higher.</p>
                        </div>

                        {/* Tile 3 */}
                        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 hover:scale-105 transform transition shadow-lg hover:shadow-2xl">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold mb-2">Youth Empowerment</h3>
                            <p className="text-sm">We believe in the power of young minds to inspire change.</p>
                        </div>

                        {/* Tile 4 */}
                        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 hover:scale-105 transform transition shadow-lg hover:shadow-2xl">
                            <div className="text-4xl mb-4">🌍</div>
                            <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
                            <p className="text-sm">Creating meaningful projects that transform lives.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-blue-50 text-blue-900">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
                        Explore Our Projects
                    </h2>

                    {/* Underline */}
                    <div className="w-4/5 h-[2px] bg-black mx-auto mb-10"></div>

                    {/* Project Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
                            <img src="/assets/project1.jpg" alt="Project 1" className="h-48 w-full object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Tree Plantation Drive</h3>
                                <p className="text-sm">A community initiative to plant and nurture over 100 trees across local areas.</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
                            <img src="/assets/project2.jpg" alt="Project 2" className="h-48 w-full object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Health Awareness Camp</h3>
                                <p className="text-sm">Organized free health check-ups and awareness talks in rural neighborhoods.</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
                            <img src="/assets/project3.jpg" alt="Project 3" className="h-48 w-full object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Diwali With Kids</h3>
                                <p className="text-sm">Celebrated Diwali with underprivileged children, spreading joy and distributing gifts.</p>
                            </div>
                        </div>
                    </div>

                    {/* View More Button */}
                    <div className="mt-10 text-center">
                        <a
                            href="/projects"
                            className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
                        >
                            View More Projects
                        </a>
                    </div>
                </div>
            </section>

        </>
    );
};

