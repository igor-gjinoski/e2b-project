import React from 'react';

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/20">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-6">What is Snapshive?</h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Snapshive™ is a private photo sharing platform for events that un-complicates the issue of receiving hundreds (or thousands) of photos, videos and guestbook messages from your guests during and after your event.
            </p>
            <p>
              Forget checking your chat apps, emails and SMS for photos then saving them all one at a time. The Snapshive™ event photo sharing platform does all the hard work for you using a QR code / private link.
            </p>
            <p>
              No matter if you're looking for a single gallery or multiple albums, Snapshive™ gives you the flexibility and organization to see your event through the eyes of your guests ready for you to download in a click. We put you in full control of your memories so you can #ditchthehashtag!
            </p>
          </div>
          <div className="text-center mt-10">
            <h3 className="text-2xl font-bold text-white">No App. No Fuss.</h3>
            <p className="text-pink-400 font-semibold text-lg mt-2">Just clever tech making your event even more memorable!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;