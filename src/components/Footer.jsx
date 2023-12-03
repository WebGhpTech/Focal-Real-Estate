import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="section-bg-dark relative"
      style={{
        backgroundImage: `url('./vector/dark_image_overlay.png')`,
        backgroundPosition: 'bottom right',
        backgroundSize: '700px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <Link to="/">
                  <img src="./fre-logo-reverse.svg" className="pr-10" />
                </Link>
                <p className="mt-2 text-xs text-white leading-5">
                  10C/11-21 Kingston Rd, Underwood <br />
                  QLD 4119, Australia
                </p>
                <p className="mt-4 text-xs text-white leading-5">
                  (07) 3208 6222 <br /> enquiries@focalrealestate.com.au
                </p>
              </div>
              <div className="mt-10 ml-3 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">For Sale</h3>
                <ul role="list" className="mt-4 space-y-2">
                  <li>
                    <Link to="/buy" className="text-sm leading-6 text-gray-300">
                      Properties for Sale
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-sm leading-6 text-gray-300">
                      Inspection Times
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ml-3 md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">For Rent</h3>
                <ul role="list" className="mt-4 space-y-2">
                  <li>
                    <Link to="/rent" className="text-sm leading-6 text-gray-300">
                      Homes for Rent
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-sm leading-6 text-gray-300">
                      Inspection Times
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-sm leading-6 text-gray-300">
                      Property Alerts
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 ml-3 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Quick Links</h3>
                <ul role="list" className="mt-4 space-y-2">
                  <li>
                    <Link to="/about" className="text-sm leading-6 text-gray-300">
                      Property Alerts
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-sm leading-6 text-gray-300">
                      Frequently Asked Questions
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-sm leading-6 text-gray-300">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-and-conditions" className="text-sm leading-6 text-gray-300">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ml-3 mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">Subscribe</h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">Don't Worry. We Don't Spam</p>
            <form className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                name="email_address"
                id="email_address"
                autoComplete="email"
                required
                className="w-full min-w-0 rounded-md appearance-none border-0 bg-white/5 px-3 py-1.5 text-white shadow-sm placeholder:text-gray-500"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button type="submit" className="flex w-full items-center justify-center rounded-md bg-focal-blue px-3 py-2 text-sm font-semibold text-white shadow-sm">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 items-center justify-center sm:mt-20 md:flex md:items-center lg:mt-24">
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">&copy; 2021 Focal Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
