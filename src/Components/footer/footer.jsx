import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Github,
} from "lucide-react";
import { FaLeaf } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
              <p className="text-primary">Fruit</p>
              <p className="text-secondary">Store</p>
              <FaLeaf className="text-green-500" />
            </div>
            <p className="text-green-200">
              Your one-stop shop for fress, organic fruits delivered right to
              your doorstep
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-green-200 hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-green-200 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-200 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/trackorder"
                  className="text-green-200 hover:text-white"
                >
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flext items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+91 96558 74120</span>
              </li>
              <li className="flext items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>FruitStore23@gmail.com</span>
              </li>
              <li className="flext items-center space-x-2">
                <MapPin />
                <span>123 fruitStore rahul bagh street ,katni City</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                className="hover:text-green-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="hover:text-green-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.twiter.com/"
                className="hover:text-green-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.github.com/"
                className="hover:text-green-200"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
            <div>
              <h3>Newsletters</h3>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="py-2 px-4 rounded-l focus:outline-none"
                />
                <button className="bg-green-600 py-2 px-4 rounded-r hover:bg-green-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p>
            &copy;{new Date().getFullYear()} FruitStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
