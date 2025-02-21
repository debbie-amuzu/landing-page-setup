import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[rgb(30,121,71)] text-white h-[20%]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-md font-bold mb-4">JaasGrow Company Limited</h3>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ducimus perspiciatis culpa possimus numquam doloribus deserunt maxime ut laudantium, inventore enim ea animi nostrum, corporis alias. Velit rerum a esse.

    
            </p>
          </div>

          {/* Quick Links */}

          <div className="pl-56">
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/cars" className="text-gray-400 hover:text-white">
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Ashongman Estates Street</li>
                <li>Accra 12345</li>
                <li>Phone: (030) 5678901</li>
                <li>Email: info@kessshub.com</li>
              </ul>
            </div>
   */}

          <div className="flex space-x-4 pl-32">
            <Link
              to="https://www.facebook.com/profile.php?id=100063974685967"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-400 hover:text-blue-200 transition duration-200"
            >
              <FaFacebook size={25} />
            </Link>
            <Link
              to="https://www.twitter.com/YourProfile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-400 hover:text-blue-200 transition duration-200"
            >
              <FaTimes size={25} />
            </Link>
            <Link
              to="https://www.threads.net/@kess_hub_service_center?xmt=AQGzr6XHao0OMj1h9Fny4Oo4pFt96B-5dXLF3bAiaG6FZVE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-600 hover:text-blue-200 transition duration-200"
            >
              <FaInstagram size={25} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/YourProfile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-700 hover:text-blue-200 transition duration-200"
            >
              <FaLinkedin size={25} />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-white text-sm pt-8 text-center">
          <p className="text-gray-400">
            © 2025 JaasGrow Company Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
