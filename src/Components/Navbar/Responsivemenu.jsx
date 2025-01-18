import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ open }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full h-screen z-20 bg-gray-100 backdrop-blur-sm" // Added background and blur
          >
            <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
              <ul className="flex flex-col items-center gap-10">
                <Link to="/" className="text-white hover:text-gray-200">Home</Link>
                <Link to="/shop" className="text-white hover:text-gray-200">Shop</Link>
                <Link to="/about" className="text-white hover:text-gray-200">About</Link>
                <Link to="/cart" className="text-white hover:text-gray-200">Cart</Link>
                <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
                <Link to="/login" className="text-white hover:text-gray-200">Login</Link> 
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResponsiveMenu;