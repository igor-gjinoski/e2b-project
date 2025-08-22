import React from 'react';

const StatCard = ({ value, label, description }) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center transform hover:scale-105 hover:border-pink-500/50 transition-all duration-300">
    <p className="text-5xl font-extrabold text-pink-400 mb-2">{value}</p>
    <h3 className="text-xl font-bold text-white mb-2">{label}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Stats = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Trusted by over 100k hosts just like you</h2>
            <p className="text-gray-300 text-lg">
            Helping you capture the moments you may have missed - one photo, video, and guestbook message at a time.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            value="100k+"
            label="Global Events"
            description="In over 100 countries worldwide."
          />
          <StatCard
            value="Millions"
            label="of Happy Guests"
            description="Capturing moments you don't want to miss."
          />
          <StatCard
            value="#1"
            label="World Leading"
            description="The original QR Code photo sharing platform."
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;