'use client'

import React, { useState } from 'react'

const TrustedPartners = () => {
    const [showAll, setShowAll] = useState(false)
    const partners = [
        { name: 'Amazon', src: 'https://www.amazon.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
        { name: 'Flipkart', src: 'https://www.flipkart.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Flipkart_logo_2018.png' },
        { name: 'Meesho', src: 'https://www.meesho.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Meesho_Logo_2020.png' },
        { name: 'Myntra', src: 'https://www.myntra.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Myntra_logo.svg' },
        { name: 'Snapdeal', src: 'https://www.snapdeal.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Snapdeal_logo.png' },
        { name: 'Ajio', src: 'https://www.ajio.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Ajio_Logo.png' },
        { name: 'Nykaa', src: 'https://www.nykaa.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Nykaa_logo.png' },
        { name: 'TataCliq', src: 'https://www.tatacliq.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/TataCliq_Logo.png' },
        { name: 'Paytm Mall', src: 'https://paytmmall.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Paytm_Mall_logo.png' },
        { name: 'BigBasket', src: 'https://www.bigbasket.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Big_Basket_logo.png' },
        { name: 'JioMart', src: 'https://www.jiomart.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/JioMart_logo.png' },
        { name: 'Pepperfry', src: 'https://www.pepperfry.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Pepperfry_logo.png' },
    ]


    const visiblePartners = showAll ? partners : partners.slice(0, 12)

    return (
        <section className="bg-[#f0f6ff] py-16 px-4 text-center relative overflow-hidden">
            <div className="max-w-6xl mx-auto z-10 relative">
                <div className="mb-4">
                    <span className="text-xs uppercase font-semibold text-white bg-blue-900 px-3 py-1 rounded-full tracking-wide hover:bg-blue-600 hover:text-white">
                        Our Partners
                    </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Trusted By Leading Brands
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-10">
                    We've partnered with thousands of retailers and hundreds of charitable organizations to create a seamless giving experience.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 s-wave-motion">
                    {visiblePartners.map((partner, index) => (
                        <a
                            href={partner.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-200 motion-div"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-12 w-auto mx-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                            />
                            <span className="block text-center text-gray-700 mt-3">{partner.name}</span>
                        </a>
                    ))}
                </div>

                <div className="mt-10">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-6 py-2 text-sm font-medium text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition duration-300"
                    >
                        {showAll ? 'View Less' : 'View All'} Partners →
                    </button>
                </div>
            </div>

            {/* Mild animation for logos */}
            <style jsx>{`
                @keyframes logoHover {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.05);
                        opacity: 0.8;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                .motion-div {
                    animation: logoHover 1.5s ease-in-out infinite;
                }

                /* Apply a smooth hover effect on the logo cards */
                .motion-div:hover {
                    animation: logoHover 0.4s ease-out;
                }

                .s-wave-motion > div:nth-child(odd) {
                    animation-delay: 0.2s;
                }

                .s-wave-motion > div:nth-child(even) {
                    animation-delay: 0.4s;
                }
            `}</style>
        </section>
    )
}

export default TrustedPartners
