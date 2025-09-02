import React from 'react';
import Logo from './Logo';

const Footer = () => {
  const footerLinks = {
    'Product': ['How it Works', 'Pricing', 'Features', 'Events'],
    'Company': ['About Us', 'Blog', 'Contact', 'Partners'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
  };

  return (
    <footer className="bg-black/20 backdrop-blur-lg mt-20 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <Logo />
              <span className="ml-3 text-2xl font-bold text-white">Snapshive</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Capture the memories forever. The #1 QR Code Event Photo Collection Platform.
            </p>
          </div>
          {Object.keys(footerLinks).map(category => (
            <div key={category}>
              <h3 className="text-white font-semibold tracking-wider uppercase">{category}</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks[category].map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Snapshive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;