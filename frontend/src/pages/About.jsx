import React from "react";

const coreTeam = [
    {
        name: "Anagha Kulkarni",
        position: "President",
        img: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
        name: "Swayam Telang",
        position: "Secretary",
        img: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
        name: "Naman Dhoot",
        position: "Vice President",
        img: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
        name: "Isha Chavan",
        position: "Joint Secretary",
        img: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
        name: "Aparna Iyer",
        position: "SAA",
        img: "https://randomuser.me/api/portraits/women/62.jpg",
    },
    {
        name: "Atharva Kulkarni",
        position: "Treasurer",
        img: "https://randomuser.me/api/portraits/men/39.jpg",
    },
    {
        name: "Shreyansh Jaiswar",
        position: "TRS",
        img: "https://randomuser.me/api/portraits/men/78.jpg",
    },
];



export const bodMembers = [
    {
        name: "Amit Kulkarni",
        position: "Club Service",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Priya Deshmukh",
        position: "Community Service",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Rahul Patil",
        position: "Career Development",
        img: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
        name: "Sneha Reddy",
        position: "Sports",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        name: "Karan Mehta",
        position: "International Service",
        img: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
        name: "Neha Joshi",
        position: "Partner In Service",
        img: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
        name: "Vikram Shah",
        position: "Digicom",
        img: "https://randomuser.me/api/portraits/men/43.jpg",
    },
    {
        name: "Riya Kapoor",
        position: "Editorial",
        img: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
        name: "Sameer Khan",
        position: "PR and Marketing Director",
        img: "https://randomuser.me/api/portraits/men/50.jpg",
    },
];


export const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            <div className="max-w-5xl mx-auto px-6 py-12">
                {/* Header */}
                <h1 className="text-4xl font-bold mb-6 text-blue-600 border-b-4 border-blue-300 inline-block">
                    About Us
                </h1>

                {/* What We Are / History */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Who We Are</h2>
                    <p className="mb-4 leading-relaxed">
                        The Rotaract Club of Dombivli Downtown is a dynamic community of young leaders committed to service, leadership, and personal development. We work together to make a positive impact in our local community and beyond through various service projects, fellowship, and professional growth.
                    </p>
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our History</h2>
                    <p className="leading-relaxed">
                        Founded in 2005, our club has grown steadily to become a vibrant hub for young changemakers in Dombivli. Over the years, we have initiated numerous projects ranging from health camps, educational drives, environmental awareness, and youth empowerment, guided by the core values of Rotary International.
                    </p>
                </section>

                {/* Meet Our Team */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-8 border-b-2 border-blue-300 pb-2">
                        Meet Our Team
                    </h2>

                    {/* Core Team */}
                    <div className="mb-10 text-center bg-blue-50 rounded-lg p-8">
                        <h3 className="text-xl font-semibold mb-6">Core Team</h3>

                        {/* First row: President & Secretary */}
                        <div className="flex justify-center gap-8 mb-8">
                            {coreTeam.slice(0, 2).map(({ name, position, img }) => (
                                <div
                                    key={name}
                                    className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md w-64 transform transition duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <img
                                        src={img}
                                        alt={name}
                                        className="rounded-full w-28 h-28 object-cover mb-4 border-4 border-blue-300"
                                    />
                                    <h4 className="font-semibold text-lg text-blue-800">{name}</h4>
                                    <p className="text-sm text-blue-600 text-center">{position}</p>
                                </div>
                            ))}
                        </div>

                        {/* Second row: remaining members */}
                        <div className="flex flex-wrap justify-center gap-8">
                            {coreTeam.slice(2).map(({ name, position, img }) => (
                                <div
                                    key={name}
                                    className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md w-64 transform transition duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <img
                                        src={img}
                                        alt={name}
                                        className="rounded-full w-28 h-28 object-cover mb-4 border-4 border-blue-300"
                                    />
                                    <h4 className="font-semibold text-lg text-blue-800">{name}</h4>
                                    <p className="text-sm text-blue-600 text-center">{position}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Board of Directors (BOD) */}
                    <div className="mb-10 text-center bg-gray-100 rounded-lg p-8">
                        <h3 className="text-xl font-semibold mb-6">Board of Directors (BOD)</h3>

                        <div className="flex flex-wrap justify-center gap-8">
                            {bodMembers.map(({ name, position, img }) => (
                                <div
                                    key={name}
                                    className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md w-56 transform transition duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <img
                                        src={img}
                                        alt={name}
                                        className="rounded-full w-24 h-24 object-cover mb-4 border-4 border-blue-300"
                                    />
                                    <h4 className="font-semibold text-lg text-blue-800">{name}</h4>
                                    <p className="text-sm text-blue-600 text-center">{position}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
