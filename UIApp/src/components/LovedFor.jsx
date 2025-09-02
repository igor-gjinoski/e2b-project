import React from 'react';

const events = [
  "Weddings", "Christmas & NYE Parties", "Birthdays", "Corporate Events",
  "Holidays", "Award Ceremonies", "Engagement Parties", "Reunions",
  "Baby Showers", "Scavenger Hunts", "Thanksgiving"
];

const Marquee = ({ items, direction = 'left' }) => (
    <div className="flex space-x-4 animate-marquee" style={{ animationDirection: direction === 'left' ? 'normal' : 'reverse' }}>
      {items.map((item, index) => (
        <div key={index} className="flex-shrink-0 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20 text-white font-semibold">
          {item}
        </div>
      ))}
    </div>
  );

const LovedFor = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-sm font-bold text-pink-400 uppercase tracking-widest mb-8">
          Loved & Used For
        </h2>
      </div>
      <div className="relative flex flex-col space-y-4">
        <div className="w-full overflow-hidden">
            <div className="flex space-x-4">
                <Marquee items={[...events, ...events]} />
            </div>
        </div>
        <div className="w-full overflow-hidden">
            <div className="flex space-x-4">
                <Marquee items={[...events.slice().reverse(), ...events.slice().reverse()]} direction="right" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default LovedFor;