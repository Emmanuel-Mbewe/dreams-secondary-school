import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section: Branding, Navigation & Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Dreams Secondary School</h2>
            <p className="text-gray-400">
              Empowering minds. Building futures.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex space-x-4">
              <a href="/" className="hover:text-gray-400">Home</a>
              <a href="/about" className="hover:text-gray-400">About Us</a>
              <a href="/academics" className="hover:text-gray-400">Academics</a>
              <a href="/admissions" className="hover:text-gray-400">Admissions</a>
              <a href="/contact" className="hover:text-gray-400">Contact</a>
            </div>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/profile.php?id=100095368848132" className="hover:text-gray-400">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Middle Section: Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4">
            <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-400">Terms &amp; Conditions</a>
            <a href="/location" className="hover:text-gray-400">Location</a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Dreams Secondary School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
