const AboutFeature = () => {
  return (
    // <div
    //   className="section-bg-dark py-24 sm:py-32"
    //   style={{
    //     backgroundImage: `url('./vector/about_image_overlay.png')`,
    //     backgroundPosition: "top left",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //   }}
    // >
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="mx-auto max-w-3xl text-center">
    //       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
    //         Our Focal Point is <span className="text-heading-blue">You</span>
    //       </h1>
    //       <p className="mt-10 text-xl md:text-2xl leading-8 text-white">
    //         We are an independent private real estate agency that truly believes
    //         everything we can achieve is defined by our character.
    //       </p>
    //       <p className="mt-6 text-sm md:text-md leading-6 text-white">
    //         {/* Established in 1978. We are Queensland's boutique real estate agency providing unmatched client satisfaction. Find your next home with us today. */}
    //         Established in 1978. We are Queensland's boutique real estate agency
    //         providing unmatched client satisfaction. Contact us if you are
    //         needing the best service for sales and property management today.
    //       </p>
    //     </div>
    //     <div className="mx-auto max-w-3xl text-center">
    //       <div className="mx-auto mt-10 grid grid-cols-3 md:grid-cols-3 max-sm:grid-cols-1">
    //         <div className="mx-auto text-center mb-8">
    //           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
    //             2800+
    //           </h1>
    //           <p className="text-white">CLIENTS HELPED</p>
    //         </div>
    //         <div className="mx-auto text-center mb-8">
    //           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
    //             $0
    //           </h1>
    //           <p className="text-white">IN HIDDEN FEES</p>
    //         </div>
    //         <div className="mx-auto text-center mb-8">
    //           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
    //             12-18 Days
    //           </h1>
    //           <p className="text-white">AVERAGE LISTING PERIOD</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div
      className="section-bg-dark py-24 sm:py-32"
      style={{
        backgroundImage: `url('./vector/about_image_overlay.png')`,
        backgroundPosition: "top left",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Our Focal Point is <span className="text-heading-blue">You</span>
          </h1>
          <p className="mt-10 text-xl md:text-2xl leading-8 text-white">
          We are an independent, privately-owned real estate agency in Underwood that believes our success is defined by our strong values and commitment to client satisfaction.
          </p>
          <p className="mt-6 text-sm md:text-md leading-6 text-white">
          Founded in 1978, we are Queensland's boutique real estate agency, offering unparalleled service in property management and sales. If you're looking for top-notch property management services in Underwood, get in touch with us today for the best results.
          </p>
          
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                2800+
              </h1>
              <p className="text-white">CLIENTS HELPED</p>
            </div>
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                $0
              </h1>
              <p className="text-white">IN HIDDEN FEES</p>
            </div>
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                12-18 
              </h1>
              <p className="text-white">Days AVERAGE LISTING PERIOD</p>
            </div>
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                40+
              </h1>
              <p className="text-white">Years in the real estate industry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFeature;
