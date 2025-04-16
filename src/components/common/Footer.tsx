import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
                <div>
                    <h2 className="text-lg font-bold mb-4">Shop4Donate</h2>
                    <p className="text-gray-400">Shop smart. Donate with heart.</p>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/shop">Shop</Link></li>
                        <li><Link href="/donate">Donate</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Legal</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/terms">Terms & Conditions</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Subscribe</h3>
                    <form className="flex flex-col gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-3 py-2 rounded-md bg-white text-black outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-pink-600 hover:bg-pink-700 text-white rounded-md py-2 font-semibold"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                <p>© {new Date().getFullYear()} Shop4Donate. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white"><FaFacebookF /></a>
                    <a href="#" className="hover:text-white"><FaInstagram /></a>
                    <a href="#" className="hover:text-white"><FaTwitter /></a>
                    <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
