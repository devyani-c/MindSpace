import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Heart, BookOpen, Users, LifeBuoy, LogOut, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import AuthModal from './AuthModal';

const Navbar = () => {
  const location = useLocation();
  const { user, signOut } = useAuthStore();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/meditation', icon: Heart, label: 'Meditate' },
    { path: '/journal', icon: BookOpen, label: 'Journal' },
    { path: '/community', icon: Users, label: 'Community' },
    { path: '/resources', icon: LifeBuoy, label: 'Resources' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="text-purple-600" size={24} />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              MindSpace
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <button
              className="md:hidden text-gray-600 hover:text-purple-600 transition-colors"
              onClick={() => setIsDrawerOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>

            <div className="hidden md:flex md:space-x-4">
              {navItems.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="relative px-3 py-2 rounded-md text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  <div className="flex flex-col items-center gap-1">
                    <Icon size={20} />
                    <span className="text-xs">{label}</span>
                  </div>
                  {location.pathname === path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {user ? (
              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <LogOut size={20} />
                <span className="text-sm">Sign Out</span>
              </button>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <User size={20} />
                <span className="text-sm">Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsDrawerOpen(false)}>
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-4">
            <button
              className="text-gray-600 hover:text-purple-600 transition-colors mb-4"
              onClick={() => setIsDrawerOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:text-purple-600 transition-colors duration-200"
                onClick={() => setIsDrawerOpen(false)}
              >
                <Icon size={20} />
                <span className="text-sm">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;