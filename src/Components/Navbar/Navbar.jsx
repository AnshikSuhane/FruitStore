import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useAuth } from '../../Context/AuthContext';
import { useCart } from '../../Context/CartContext';
import { FaLeaf } from 'react-icons/fa';

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const { items } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl">
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                        <p className="text-primary">Fruit</p>
                        <p className="text-secondary">Store</p>
                        <FaLeaf className="text-green-500" />
                      </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-green-200">Home</Link>
            <Link to="/shop" className="hover:text-green-200">Shop</Link>
            
            <Link to="/about" className="hover:text-green-200">About</Link>
            <Link to="/contact" className="hover:text-green-200">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {items.length}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/my-orders" className="hover:text-green-200">My Orders</Link>
                <span>{user?.email}</span>
                <button onClick={logout} className="hover:text-green-200">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 hover:text-green-200">
                <User className="h-6 w-6" />
                <span>Login</span>
              </Link>
            )}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-green-200">Home</Link>
              <Link to="/shop" className="hover:text-green-200">Shop</Link>
              <Link to="/products" className="hover:text-green-200">Products</Link>
              <Link to="/about" className="hover:text-green-200">About</Link>
              <Link to="/contact" className="hover:text-green-200">Contact</Link>
              <Link to="/cart" className="hover:text-green-200">Cart ({items.length})</Link>
              {isAuthenticated ? (
                <>
                  <Link to="/my-orders" className="hover:text-green-200">My Orders</Link>
                  <button onClick={logout} className="hover:text-green-200 text-left">Logout</button>
                </>
              ) : (
                <Link to="/login" className="hover:text-green-200">Login</Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}