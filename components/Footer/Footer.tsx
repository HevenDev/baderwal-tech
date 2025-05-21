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
    <footer className="bg-[#0d0d0d] text-gray-300">
      {/* Top section with 4 columns */}
      <div className="max-w-7xl mx-auto  px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Baderwals</h2>
          <p className="text-m leading-relaxed">
            We provide excellent digital solutions to elevate your business online and offline.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-m space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-m mb-2">1234 Example St, City, Country</p>
          <p className="text-m mb-2">Phone: +1 (234) 567-890</p>
          <p className="text-m">Email: info@example.com</p>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-m mb-4">
            Get the latest news and updates directly to your inbox.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded text-white w-full flex-1 outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white hover:bg-gray-200 px-4 py-2 rounded text-black w-full cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom: Copyright & Socials */}
      <div className="border-t border-gray-700 mt-8 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Baderwals. All rights reserved.
          </p>
          <div className="flex gap-4 text-gray-400 text-lg">
            <a href="#" className="hover:text-white transition" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white transition" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
