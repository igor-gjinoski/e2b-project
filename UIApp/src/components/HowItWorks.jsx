import React from 'react';

const HowItWorks = () => {
  return (
    <main className="mt-20 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">It's all done for you.</h1>
          <p className="text-xl mb-8">
            We instantly create a private QR code for your event that saves all full resolution photos to your live photo gallery or albums.
          </p>
          <h2 className="text-2xl font-semibold mb-4">No App. No Fuss.</h2>
          <p className="text-lg">USE IT FOR PHOTOS + VIDEOS + GUESTBOOK + SLIDESHOW</p>
        </div>
      </section>

      {/* How it Works for Guests */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works For Guests</h2>
          
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">STEP 1: GUESTS SCAN QR CODE</h3>
              <p className="text-lg">
                Guests scan your QR code to upload pictures or click your private link.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/placeholder.jpg" alt="QR Code scanning" className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-16 gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">STEP 2: UPLOAD</h3>
              <p className="text-lg">
                Guests add their name (no registration required) before uploading photos and videos from their gallery or in the moment. Compatible with any device.
                A title and description can be added to photos. Guests can also leave you a written guestbook message or a fun video guestbook message.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/placeholder.jpg" alt="Upload interface" className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">STEP 3: ENJOY</h3>
              <p className="text-lg">
                You and your guests will keep checking the gallery in the days and weeks after your event to relive all the best moments.
                Your digital gallery will be the go-to-destination everyone will be loving the day after the event!
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/placeholder.jpg" alt="Gallery view" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">With Snapshive You'll Enjoy...</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">1000's of Photos & Videos</h3>
            <p>Collect unlimited photos and videos from guests from every angle.</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Photo & Video Slideshow</h3>
            <p>Activate the slideshow feature and watch as photos are automatically added.</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Written & Video Guestbook</h3>
            <p>Receive written and video guestbook messages in a convenient format.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <a href="/pricing" className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            View Pricing
          </a>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
