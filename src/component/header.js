import { useState } from "react";
import { FaGlobe } from "react-icons/fa";

const Header = () => {
  const [language, setLanguage] = useState("EN");

  return (
    <header className="bg-[#101012] text-white px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-4xl font-bold text-yellow-500 mr-6">GODEX</div>
      
      {/* Navigation */}
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-gray-300">How it Works</a>
        <a href="#" className="hover:text-gray-300">About Us</a>
        <a href="#" className="hover:text-gray-300">Exchange Rate</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
        <a href="#" className="hover:text-gray-300">FAQ</a>
        <a href="#" className="hover:text-gray-300">Blog</a>
        <div className="relative group">
          <a href="#" className="hover:text-gray-300">Affiliate Program ▼</a>
          <div className="absolute hidden group-hover:block bg-black text-white py-2 px-4 mt-2 shadow-lg">
            <a href="#" className="block hover:text-gray-300">Option 1</a>
            <a href="#" className="block hover:text-gray-300">Option 2</a>
          </div>
        </div>
      </nav>
      
      {/* Right Side */}
      <div className="flex items-center space-x-6">
        {/* Language Selector */}
        <div className="relative group flex items-center space-x-2">
          <button className="flex items-center space-x-2 hover:text-gray-300">
            <FaGlobe />
            <span>{language}</span>
          </button>
          <div className="absolute hidden group-hover:block bg-black text-white py-2 px-4 mt-2 shadow-lg">
            <button onClick={() => setLanguage("EN")} className="block hover:text-gray-300">English</button>
            <button onClick={() => setLanguage("ES")} className="block hover:text-gray-300">Español</button>
          </div>
        </div>

        {/* Buttons */}
        <button className="border border-blue-500 px-6 py-2 rounded hover:bg-blue-500">Dashboard</button>
        <button className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-600">Become a Partner</button>
      </div>
    </header>
  );
};

export default Header;
