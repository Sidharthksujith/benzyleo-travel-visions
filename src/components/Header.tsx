
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 dark:bg-gray-900/95 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/d76a6127-d89f-4b05-999d-f968245ebd8f.png" 
              alt="Benzyleo" 
              className="h-8 w-8 object-contain"
            />
            <span className="font-bold text-xl text-gray-900 dark:text-white">Benzyleo Holidays</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Home</Link>
            <Link to="/visa-services" className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Visa Services</Link>
            <Link to="/holiday-packages" className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Holiday Packages</Link>
            <Link to="/document-checklist" className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Documents</Link>
            <Link to="/visa-process" className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Process</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <DarkModeToggle />
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              className="text-gray-900 dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Home</Link>
              <Link to="/visa-services" className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Visa Services</Link>
              <Link to="/holiday-packages" className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Holiday Packages</Link>
              <Link to="/document-checklist" className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Documents</Link>
              <Link to="/visa-process" className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Process</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400">Contact</Link>
              <Button asChild className="w-fit bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">Get Started</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
