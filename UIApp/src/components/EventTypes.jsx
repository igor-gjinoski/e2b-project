import React from 'react';

const eventData = [
  {
    title: "WEDDINGS",
    description: "From the night before to the big day, see every moment of your wedding and treasure the memories forever.",
    imgSrc: "https://guestpix.com/wp-content/uploads/Guest-Pix-Aug-2024-46-copy-scaled.jpg",
    link: "#"
  },
  {
    title: "CELEBRATIONS",
    description: "From graduations and reunions to baby showers and religious celebrations. Enjoy every moment through the eyes of your guests.",
    imgSrc: "https://guestpix.com/wp-content/uploads/media-inquires-img.png",
    link: "#"
  },
  {
    title: "BUSINESS",
    description: "Hosting a corporate or community event? Increase event engagement, see the highlights, and gather testimonials.",
    imgSrc: "https://guestpix.com/wp-content/uploads/IMG_4147-scaled.jpg",
    link: "#"
  },
  {
    title: "HOLIDAY PARTIES",
    description: "From corporate Christmas parties to family gatherings. Capture all the festive moments in one gallery no matter the event.",
    imgSrc: "https://guestpix.com/wp-content/uploads/IMG_5795-1-scaled.jpg",
    link: "#"
  },
  {
    title: "MEMORIALS",
    description: "You and your memorial guests can upload their favorite memories to share and leave written messages of support for you and the family.",
    imgSrc: "https://guestpix.com/wp-content/uploads/IMG_7775-scaled.jpg",
    link: "#"
  },
  {
    title: "VACATIONS",
    description: "Capture everyone's holiday memories so no one misses out! It's so easy for you and your travel companions.",
    imgSrc: "https://guestpix.com/wp-content/uploads/2024/05/Holiday-Guestpix-10.webp",
    link: "#"
  }
];

const EventCard = ({ title, description, imgSrc, link }) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 group transform hover:-translate-y-2 transition-all duration-300">
    <img src={imgSrc} alt={title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a href={link} className="font-semibold text-pink-400 hover:text-white transition-colors">
        Learn More &rarr;
      </a>
    </div>
  </div>
);

const EventTypes = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">What event are you planning?</h2>
          <p className="text-gray-300 text-lg">
            From weddings, celebrations, and group holidays to corporate events, we've got your guest photos covered!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventData.map(event => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;