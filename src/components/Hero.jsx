import React from 'react';

const Hero = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-lg sm:text-xl font-semibold text-pink-400 uppercase tracking-wider mb-4">
          Capture the memories forever with Snapshive.
        </h2>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Digital Photo Gallery and Guestbook
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
          Save the memories from your event to enjoy for a lifetime
        </p>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Because it only happens once!
        </p>
        <a
          href="#"
          className="bg-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/30"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;