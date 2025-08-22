import React from 'react';

const FeatureCard = ({ title, subtitle, description, image, reverse = false }) => (
  <div className={`flex flex-col \${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}>
    <div className="lg:w-1/2">
      <div className="bg-white/10 backdrop-blur-lg p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl">
        {subtitle && <h3 className="text-sm font-bold text-pink-400 uppercase tracking-widest mb-4">{subtitle}</h3>}
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
    <div className="lg:w-1/2 mt-8 lg:mt-0">
      <img src={image} alt={title} className="rounded-2xl shadow-xl w-full h-auto object-cover" />
    </div>
  </div>
);

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 space-y-24">
        <div className="text-center max-w-3xl mx-auto">
            <p className="text-pink-400 font-semibold mb-2">USE IT FOR PHOTOS + VIDEOS + GUESTBOOK + SLIDESHOW</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">We instantly create a private event QR code for you.</h2>
            <p className="text-gray-300 text-lg">
            Saves all full resolution photos to your live event photo gallery or albums. No App. No Fuss.
            </p>
            <a href="#" className="mt-6 inline-block text-pink-400 font-semibold hover:text-white transition-colors">
                How it Works &rarr;
            </a>
        </div>

        <FeatureCard 
            title="Receive Unforgettable Memories"
            subtitle="DIGITAL EVENT GALLERY"
            description="Capture the best moments from your guests in your digital event gallery, or have everything organized in Albums. You'll receive guest photos, videos and guestbook messages. You can even stream your photos at the event by activating the slideshow feature!"
            image="https://guestpix.com/wp-content/uploads/2024/05/Website-Device-Showcase-1-1024x576.webp"
        />

        <FeatureCard 
            title="Hola, Bonjour, Hallo!"
            subtitle="WHAT'S NEW"
            description="Host and Guest Experience Now Available in Spanish, French & German! We want all our hosts and your special guests to have a localized experience, so we're thrilled to announce our latest update."
            image="https://guestpix.com/wp-content/uploads/2024/03/want-to-know-more-image.webp"
            reverse={true}
        />

        <FeatureCard 
            title="No App & No Guest Registration"
            subtitle="IT'S AS EASY AS"
            description="With Snapshive there's no need to ask all guests to download a photo sharing app or register! Your Snapshive event QR code / private link is how they add their best photos, videos and guestbook messages. Everyone will instantly enjoy the memories and you can download everything in a click."
            image="https://guestpix.com/wp-content/uploads/Platform-UX-Wedding-Phone-large-1024x1024.webp"
        />

      </div>
    </section>
  );
};

export default Features;