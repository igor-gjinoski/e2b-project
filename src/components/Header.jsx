import React, { useState } from 'react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);

  const navLinks = [
    { name: 'How it Works', href: '/how-it-works' },
    { 
      name: 'Events', 
      href: '#',
      dropdownItems: [
        { name: 'Weddings', href: '/weddings' },
        { name: 'Parties', href: '/party' },
        { name: 'Business', href: '/business' },
        { name: 'Memorials', href: '/memorials' },
        { name: 'Vacations', href: '/vacations' },
        { name: 'Christmas Holiday Parties', href: '/christmas-holiday-parties' }
      ]
    },
    { 
      name: 'Pricing', 
      href: '#',
      dropdownItems: [
        { name: 'Wedding Pricing', href: '/weddings-pricing' },
        { name: 'Party Pricing', href: '/party-pricing' },
        { name: 'Business Pricing', href: '/business-pricing' },
        { name: 'Memorial Pricing', href: '/memorials-pricing' },
        { name: 'Vacation Pricing', href: '/pricing' }
      ]
    },
    { name: 'About', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20 bg-white/10 backdrop-blur-lg rounded-full mt-4 px-8 border border-white/20 shadow-lg">
          <div className="flex items-center">
            <Logo />
            <span className="ml-3 text-2xl font-bold text-white">Snapshive</span>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                <a
                  href={link.href}
                  className="text-gray-200 hover:text-white transition-colors duration-300 flex items-center"
                  onMouseEnter={() => link.dropdownItems && setOpenDropdown(link.name)}
                  onClick={(e) => link.dropdownItems && e.preventDefault()}
                >
                  {link.name}
                  {link.dropdownItems && (
                    <svg 
                      className="w-4 h-4 ml-1" 
                      viewBox="0 0 320 512" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        fill="currentColor" 
                        d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                      />
                    </svg>
                  )}
                </a>
                {link.dropdownItems && openDropdown === link.name && (
                  <div 
                    className="absolute left-0 mt-2 w-56 bg-gray-900/90 backdrop-blur-xl rounded-xl border border-white/20 py-2 shadow-xl"
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-200 hover:text-white hover:bg-white/10 transition-colors duration-300"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="hidden lg:flex items-center">
            <a
              href="#"
              className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden mt-2 mx-4 p-6 bg-gray-900/90 backdrop-blur-xl rounded-xl border border-white/20">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="w-full">
                <a
                  href={link.href}
                  className="text-gray-200 hover:text-white transition-colors duration-300 text-lg flex items-center justify-center"
                  onClick={(e) => {
                    if (link.dropdownItems) {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === link.name ? null : link.name);
                    }
                  }}
                >
                  {link.name}
                  {link.dropdownItems && (
                    <svg 
                      className={`w-4 h-4 ml-1 transform transition-transform ${
                        openDropdown === link.name ? 'rotate-180' : ''
                      }`}
                      viewBox="0 0 320 512" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        fill="currentColor" 
                        d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                      />
                    </svg>
                  )}
                </a>
                {link.dropdownItems && openDropdown === link.name && (
                  <div className="mt-2 space-y-2">
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-gray-200 hover:text-white transition-colors duration-300 text-base text-center py-2"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#"
              className="w-full text-center bg-pink-500 text-white mt-4 px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;