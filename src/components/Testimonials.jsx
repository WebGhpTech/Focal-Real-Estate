const Testimonials = () => {
  return (
    <div
      className="relative overflow-hidden section-bg-slate-100"
      style={{
        backgroundImage: `url('./vector/light_image_overlay.png')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0 max-sm:mt-20">
          <div className="mx-auto max-w-2xl max-sm:text-center justify-center">
            <span className="mx-auto mb-6 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Testimonials</span>
            <h1 className="text-5xl font-bold">
              Don't just take our word for it, <span className="text-heading-blue">see what others have to say...</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-0">
        <div className="mx-auto max-w-6xl items-center">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 mb-20 max-sm:mt-10">
            <div className="flex flex-col bg-white rounded-lg p-10 ml-10 mr-10">
              <p className="text-lg text-semibold text-gray-900">The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.</p>
              <p className="mt-20 text-md text-sm text-bold text-gray-900">
                Macauley Herring <br /> <span className="text-gray-400">Google Review</span>
              </p>
            </div>
            <div className="flex flex-col bg-white rounded-lg p-10 ml-10 mr-10">
              <p className="text-lg text-semibold text-gray-900">The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.</p>
              <p className="mt-20 text-md text-sm text-bold text-gray-900">
                Macauley Herring <br /> <span className="text-gray-400">Google Review</span>
              </p>
            </div>
            <div className="flex flex-col bg-white rounded-lg p-10 ml-10 mr-10">
              <p className="text-lg text-semibold text-gray-900">You won't regret it. We've seen amazing results already. Thanks guys, keep up the good work!</p>
              <p className="mt-20 text-md text-sm text-bold text-gray-900">
                Elen Benitez <br /> <span className="text-gray-400">Google Review</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
