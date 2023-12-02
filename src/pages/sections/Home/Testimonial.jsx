const Testimonial = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto flex max-w-7xl flex-col bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img className="h-100 w-full flex-none rounded object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm animate-on-scroll" src="./fre-team-01.jpg" />
            <div className="w-full flex-auto">
              <span className="mb-6 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 animate-on-scroll">Testimonials</span>
              <p className="text-4xl font-regular leading-14 text-gray-600 animate-on-scroll">
                Very little communication was necessary during the short term of the agreement. Philip seemed to handle it all.
              </p>
              <p className="mt-6 text-xl font-regular text-gray-600 animate-on-scroll">Colin Lamond</p>
              <p className="text-sm font-semibold text-gray-600 animate-on-scroll">CEO & Co-Founder at Flex.co</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
