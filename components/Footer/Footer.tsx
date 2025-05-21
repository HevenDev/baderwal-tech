import React from "react";
import Link from "next/link";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 b_container py-12 md:flex md:justify-between md:space-x-8">
                {/* Section 1 - Logo & Description */}
                <div className="mb-10 md:mb-0 md:w-1/3">
                    <h2 className="text-2xl font-bold mb-4">YourLogo</h2>
                    <p className="text-sm leading-relaxed max-w-xs">
                        We provide the best services with excellent customer support and
                        innovative solutions tailored just for you.
                    </p>
                </div>

                {/* Section 2 - Links */}
                <div className="mb-10 md:mb-0 md:w-1/3">
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="text-xs space-y-2 max-w-xs">
                        <li>
                            <Link href="/" className="hover:text-white transition">Home</Link>

                        </li>
                        <li>
                            <Link href="/about" className="hover:text-white transition">About Us</Link>

                        </li>
                        <li>

                            <Link href="/services" className="hover:text-white transition">Services</Link>

                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-white transition">Blog</Link>

                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-white transition">Contact</Link>

                        </li>
                        <li>

                            <Link href="/faq" className="hover:text-white transition">FAQ</Link>

                        </li>
                        <li>

                            <Link href="/careers" className="hover:text-white transition">Careers</Link>

                        </li>
                    </ul>
                </div>

                {/* Section 3 - Contact Info */}
                <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p className="text-sm mb-2">
                        Address: 1234 Street Name, City, State, Country
                    </p>
                    <p className="text-sm mb-2">Phone: +1 (234) 567-8901</p>
                    <p className="text-sm mb-2">Email: info@example.com</p>
                </div>
            </div>

            {/* Bottom copyright and social links */}
            <div className="border-t border-gray-700 mt-8 py-6">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-xs text-gray-500 mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
                    </p>

                    <div className="flex space-x-6 text-gray-400 text-lg">
                        <Link href="#" className="hover:text-white transition" aria-label="Facebook">
                            <FaFacebookF />
                        </Link>
                        <Link href="#" className="hover:text-white transition" aria-label="Twitter">
                            <FaTwitter />
                        </Link>
                        <Link href="#" className="hover:text-white transition" aria-label="Instagram">
                            <FaInstagram />
                        </Link>
                        <Link href="#" className="hover:text-white transition" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </Link>
                        <Link href="#" className="hover:text-white transition" aria-label="GitHub">
                            <FaGithub />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
