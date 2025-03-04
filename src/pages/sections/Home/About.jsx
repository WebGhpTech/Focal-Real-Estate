const About = () => {
  return (
    <>
    <div className="relative overflow-hidden isolate bg-slate-200">
      <div className="px-6 mx-auto max-w-7xl sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="lg:max-w-lg xl:max-w-xl">
            <span className="inline-flex items-center px-2 py-1 mb-6 text-xs font-medium text-blue-700 rounded-md bg-blue-50 ring-1 ring-inset ring-blue-700/10 animate-on-scroll">
              About Us
            </span>
            <h1 className="mb-6 text-3xl font-bold lg:text-5xl animate-on-scroll">
              We're the Easy Choice for Real Estate
            </h1>
            <p className="text-lg leading-8 text-gray-600 animate-on-scroll">
              We Make The Entire Process As Easy As Possible.
            </p>

            <div className="mt-16">
              <dl className="grid gap-10">
                {/** Repeat this block for each item */}
                <div className="relative pl-16 animate-on-scroll">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 text-white rounded-lg bg-focal-blue">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    Locally Trusted Agency
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    We've been around long enough to gain the trust of thousands
                    within southeast Queensland. At Focal Real Estate, our focal
                    point is you.
                  </dd>
                </div>
                
            <div className="relative pl-16 mb-10 animate-on-scroll">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 text-white rounded-lg bg-focal-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                Residential & Commercial
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">Whether you're looking for a new place to call home or a new focal point for your business, we've got you covered.</dd>
            </div>

            <div className="relative pl-16 mb-10 animate-on-scroll">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 text-white rounded-lg bg-focal-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                No Hidden Fees
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Focal takes the guess work and surprises out of selling, leasing, buying and overall real estate assistance. We'll walk you through the entire process and ensure you have the
                right agents tending to your needs.
              </dd>
            </div>

            <div className="relative pl-16 mb-10 animate-on-scroll">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 text-white rounded-lg bg-focal-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                Trusted by Thousands
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We've been in the real estate business since 1978 and since then have helped thousands of local residents sell and lease their homes while helping many others with professional
                real estate advice.
              </dd>
            </div>
              </dl>
            </div>
          </div>

          <div className="flex items-center justify-center h-full">
            <img
              src="./fre-bg-02.png"
              className="object-cover h-full max-w-lg px-20 mt-10 animate-on-scroll md:h-1/2 xl:h-full rounded-2xl sm:mt-16 lg:mt-0 lg:max-w-none scroll-animation"
              alt="Underwood property rentals"
            />
          </div>
        </div>
      </div>
    </div>

{/* <div className="relative overflow-hidden isolate bg-slate-200">
<div className="px-6 mx-auto max-w-7xl sm:py-20 lg:px-8">
  <div className="flex items-center justify-between gap-2 mx-auto lg:mx-0 max-sm:mt-20">
    <div className="lg:max-w-lg xl:max-w-xl">
      <span className="inline-flex items-center px-2 py-1 mb-6 text-xs font-medium text-blue-700 rounded-md bg-blue-50 ring-1 ring-inset ring-blue-700/10 animate-on-scroll">About Us</span>
      <h1 className="mb-6 text-3xl font-bold lg:text-5xl animate-on-scroll">We're the Easy Choice for Real Estate</h1>
      <p className="text-lg leading-8 text-gray-600 animate-on-scroll">We Make The Entire Process As Easy As Possible.</p>
      <div className="mx-auto">
        <div className="mx-auto mt-16">
          <dl className="grid max-w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="relative pl-16 mb-10 animate-on-scroll">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 text-white rounded-lg bg-focal-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                Locally Trusted Agency
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We've been around long enough to gain the trust of thousands within southeast Queensland. At Focal Real Estate, our focal point is you.
              </dd>
            </div>

            <div className="relative pl-16 mb-10 animate-on-scroll">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 text-white rounded-lg bg-focal-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                Residential & Commercial
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">Whether you're looking for a new place to call home or a new focal point for your business, we've got you covered.</dd>
            </div>

            <div className="relative pl-16 mb-10 animate-on-scroll">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 text-white rounded-lg bg-focal-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                No Hidden Fees
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Focal takes the guess work and surprises out of selling, leasing, buying and overall real estate assistance. We'll walk you through the entire process and ensure you have the
                right agents tending to your needs.
              </dd>
            </div>

            <div className="relative pl-16 mb-10 animate-on-scroll">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 text-white rounded-lg bg-focal-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                Trusted by Thousands
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We've been in the real estate business since 1978 and since then have helped thousands of local residents sell and lease their homes while helping many others with professional
                real estate advice.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <div className="flex items-center h-full">
      <img
        src="./fre-bg-02.png"
        className="top-0 right-0 object-cover max-w-lg mt-10  animate-on-scroll h-1/2 xl:h-full rounded-2xl sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 max-md:hidden"
      />
    </div>
  </div>
</div>
</div> */}
</>
  );
};

export default About;
