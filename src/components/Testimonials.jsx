import Carousel from "react-multi-carousel";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


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
        <div className="mx-auto max-w-3xl lg:mx-0 max-sm:mt-8">
          <div className="mx-auto max-w-2xl max-sm:text-center justify-center">
            <span className="mx-auto mb-6 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Testimonials</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Don't just take our word for it, <span className="text-heading-blue">see what others have to say...</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-0 mb-20">
        <div className="mx-auto max-w-6xl items-center">
          {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 mb-20 max-sm:mt-10"> */}
    <Carousel
      arrows={false}
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={300}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px py-6"
    >
      {/* item start  */}
      <div className="px-2">
          <div className="w-full flex-auto  bg-white rounded-lg px-10 py-2 h-[650px]">
              <span className="mb-10 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 animate-on-scroll">
                Testimonials
              </span>

              <blockquote className="relative max-w-lg mb-10">
                <svg
                  className="absolute -top-8 -start-8 h-16 w-16 text-gray-100 sm:h-24 sm:w-24 dark:text-gray-700"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>

                <div className="relative z-10">
                  <p className="text-gray-800 text-2xl font-regular leading-14 ">
                    <em>I had an outstanding experience with Focal Real Estate! Their team went above and beyond to help me find the perfect property. From the initial search to closing the deal, their expertise and professionalism shone through. They were responsive, attentive, and genuinely cared about my needs.</em>
                  </p>
                </div>

                <footer className="mt-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                        alt="Image Description"
                      />
                    </div>
                    <div className="ms-4">
                      <div className="text-base font-bold text-gray-800 dark:text-gray-400">- Anthony M</div>
                      <div className="text-xs text-gray-500">
                      <div className="flex gap-2 mt-2">
                      {Array(5).fill().map((_, index) => (
                          <svg key={index} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orange" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                        ))}
                        
                        
                      </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
        </div>
        {/* end start  */}
      {/* item start  */}
      <div className="px-2">
          <div className="w-full flex-auto bg-white rounded-lg px-10 py-2 h-[650px]">
              <span className="mb-10 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 animate-on-scroll">
                Testimonials
              </span>

              <blockquote className="relative max-w-lg mb-10">
                <svg
                  className="absolute -top-8 -start-8 h-16 w-16 text-gray-100 sm:h-24 sm:w-24 dark:text-gray-700"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>

                <div className="relative z-10">
                  <p className="text-gray-800 text-2xl font-regular leading-14 ">
                    <em>I had an incredible experience with Jade and the entire team at Focal Real Estate. From the moment I reached out, their professionalism and friendliness stood out. They were extremely knowledgeable and always ready to assist me with any questions or concerns I had. Thanks to their expertise and guidance, I had great outcomes that exceeded my expectations</em>
                  </p>
                </div>

                <footer className="mt-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                        alt="Image Description"
                      />
                    </div>
                    <div className="ms-4">
                      <div className="text-base font-bold text-gray-800 dark:text-gray-400">- Antonella Upton</div>
                      <div className="text-xs text-gray-500">
                      <div className="flex gap-2 mt-2">
                      {Array(5).fill().map((_, index) => (
                          <svg key={index} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orange" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                        ))}
                        
                        
                      </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
      </div>
        {/* end start  */}
      {/* item start  */}
      <div className="px-2">
          <div className="w-full flex-auto bg-white rounded-lg px-10 py-2 h-[650px]">
              <span className="mb-10 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 animate-on-scroll">
                Testimonials
              </span>

              <blockquote className="relative max-w-lg mb-10">
                <svg
                  className="absolute -top-8 -start-8 h-16 w-16 text-gray-100 sm:h-24 sm:w-24 dark:text-gray-700"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>

                <div className="relative z-10">
                  <p className="text-gray-800 text-2xl font-regular leading-14 ">
                    <em>Phillip was very knowledgable and very helpful in enabling me a buyer, to understand the market.
Thanks to Phillip, I’m able to go into my first home of hopefully many under a solid price and a good healthy home-life. I’m super happy for the outcome of it all and I really recommend everyone to work with these guys.</em>
                  </p>
                </div>

                <footer className="mt-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                        alt="Image Description"
                      />
                    </div>
                    <div className="ms-4">
                      <div className="text-base font-bold text-gray-800 dark:text-gray-400">- Joshua Foster</div>
                      <div className="text-xs text-gray-500">
                      <div className="flex gap-2 mt-2">
                      {Array(5).fill().map((_, index) => (
                          <svg key={index} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orange" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                        ))}
                        
                        
                      </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        {/* end start  */}
      {/* item start  */}
      <div className="px-2">
          <div className="w-full flex-auto bg-white rounded-lg px-10 py-2 h-[650px]">
              <span className="mb-10 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 animate-on-scroll">
                Testimonials
              </span>

              <blockquote className="relative max-w-lg mb-10">
                <svg
                  className="absolute -top-8 -start-8 h-16 w-16 text-gray-100 sm:h-24 sm:w-24 dark:text-gray-700"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>

                <div className="relative z-10">
                  <p className="text-gray-800 text-2xl font-regular leading-14 ">
                    <em>Philip and the Focal team took on our property about a year ago and helped us secure a high rental return with fantastic tenants and since then has done a great job with maintaining our property with efficiency and clear communication.</em>
                  </p>
                </div>

                <footer className="mt-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                        alt="Image Description"
                      />
                    </div>
                    <div className="ms-4">
                      <div className="text-base font-bold text-gray-800 dark:text-gray-400">- Ankur Popat</div>
                      <div className="text-xs text-gray-500">
                      <div className="flex gap-2 mt-2">
                      {Array(5).fill().map((_, index) => (
                          <svg key={index} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orange" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                        ))}
                        
                        
                      </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        {/* end start  */}
      {/* item start  */}
      <div className="px-2">
          <div className="w-full flex-auto bg-white rounded-lg px-10 py-2 h-[650px]">
              <span className="mb-10 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 animate-on-scroll">
                Testimonials
              </span>

              <blockquote className="relative max-w-lg mb-10">
                <svg
                  className="absolute -top-8 -start-8 h-16 w-16 text-gray-100 sm:h-24 sm:w-24 dark:text-gray-700"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>

                <div className="relative z-10">
                  <p className="text-gray-800 text-2xl font-regular leading-14 ">
                    <em>Philip is a very warm and professional agent. He maintained effective communication throughout the process and make you feel at ease. Philip was patient and knowledgeable in helping me understand when I have concerns, especially being a first home buyer. I would fully recommend his service to anyone.</em>
                  </p>
                </div>

                <footer className="mt-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                        alt="Image Description"
                      />
                    </div>
                    <div className="ms-4">
                      <div className="text-base font-bold text-gray-800 dark:text-gray-400">- Faye Ye</div>
                      <div className="text-xs text-gray-500">
                      <div className="flex gap-2 mt-2">
                      {Array(5).fill().map((_, index) => (
                          <svg key={index} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orange" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                        ))}
                        
                        
                      </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            </div>
        {/* end start  */}
      {/* item start  */}
      <div className="px-2">
          <div className="w-full flex-auto bg-white rounded-lg px-10 py-2  h-full">
              <span className="mb-10 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 animate-on-scroll">
                Testimonials
              </span>

              <blockquote className="relative max-w-lg mb-10">
                <svg
                  className="absolute -top-8 -start-8 h-16 w-16 text-gray-100 sm:h-24 sm:w-24 dark:text-gray-700"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>

                <div className="relative z-10">
                  <p className="text-gray-800 text-2xl font-regular leading-14 ">
                    <em>Highly recommend! After trying to buy a house with a different real estate firm, I felt like I wasn’t being looked after correctly. Then I came across Focal Realestate, Phillip was incredible to deal with, helped me secure my first home, guided me through every step of the way and made me feel valued as a client. Will definitely be going back.</em>
                  </p>
                </div>

                <footer className="mt-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                        alt="Image Description"
                      />
                    </div>
                    <div className="ms-4">
                      <div className="text-base font-bold text-gray-800 dark:text-gray-400">- Luke Chipizbov</div>
                      <div className="text-xs text-gray-500">
                      <div className="flex gap-2 mt-2">
                        {/* {Array(5).fill(<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orange" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>)} */}
                        {Array(5).fill().map((_, index) => (
                          <svg key={index} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orange" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                        ))}
                        
                      </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
      </div>
        {/* end start  */}
            
</Carousel>



            {/* <div className="flex flex-col bg-white rounded-lg p-10 ml-10 mr-10">
              <p className="text-lg text-semibold text-gray-900">My property was rented to a quality tenant with zero downtime in between tenants. Very smooth process with no hassles and friendly to deal with. Highly recommended</p>
              <p className="mt-20 text-md text-sm text-bold text-gray-900">
              Wissam Alayan <br /> <span className="text-gray-400">Google Review</span>
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
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
