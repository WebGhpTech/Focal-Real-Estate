const AboutFeature = () => {
  return (
    <div
      className="section-bg-dark py-24 sm:py-32"
      style={{
        backgroundImage: `url('./vector/about_image_overlay.png')`,
        backgroundPosition: 'top left',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-white">
            Our Focal Point is <span className="text-heading-blue">You</span>
          </h1>
          <p className="mt-10 text-2xl leading-8 text-white">We are an independent private real estate agency that truly believes everything we can achieve is defined by our character.</p>
          <p className="mt-6 text-md leading-6 text-white">
            Established in 1978. We are Queensland's boutique real estate agency providing unmatched client satisfaction. Find your next home with us today.
          </p>
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mt-10 grid grid-cols-3 md:grid-cols-3 max-sm:grid-cols-1">
            <div className="mx-auto text-center mb-8">
              <h1 className="text-5xl font-bold text-white mb-2">2800+</h1>
              <p className="text-white">CLIENTS HELPED</p>
            </div>
            <div className="mx-auto text-center mb-8">
              <h1 className="text-5xl font-bold text-white mb-2">$0</h1>
              <p className="text-white">IN HIDDEN FEES</p>
            </div>
            <div className="mx-auto text-center mb-8">
              <h1 className="text-5xl font-bold text-white mb-2">12-18 Days</h1>
              <p className="text-white">AVERAGE LISTING PERIOD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFeature;
