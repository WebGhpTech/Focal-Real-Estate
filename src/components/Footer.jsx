import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [messageSent, setMessageSent] = useState("");
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("https://focalrealestate.com.au/internal_api/subscribe.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        setMessageSent(true);
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Failed to send data.");
        }
      })
      .then((responseData) => {
        // console.log('Data sent successfully!', responseData);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  return (
    <footer
      className="section-bg-dark relative"
      style={{
        backgroundImage: `url('/vector/dark_image_overlay.png')`,
        backgroundPosition: "bottom right",
        backgroundSize: "700px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:pt-14 lg:px-8 lg:pt-32">
        <div className="mb-10 flex items-center">
          <a
            href="https://www.google.com/search?q=focal+real+estate&oq=focal+real+estate&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMg0IARAuGK8BGMcBGIAEMgYIAhAjGCcyBwgDEAAYgAQyBwgEEAAYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGD3SAQgyNDYwajBqOagCALACAQ&sourceid=chrome&ie=UTF-#lrd=0x6b9143bdce77864f:0x534b95063854696e,3"
            className="text-lg font-semibold decoration-transparent bg-white px-4 py-2 rounded-md flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Please Leave A Review</span>
            <span className="flex gap-1 ml-2">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="orange"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                ))}
            </span>
          </a>
        </div>

        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <Link to="/">
                  <img src="/fre-logo-reverse.svg" className="pr-10" />
                </Link>
                <p className="mt-2 text-xs text-white leading-5">
                  10C/11-21 Kingston Rd, Underwood <br />
                  QLD 4119, Australia
                </p>
                <p className="mt-4 text-xs text-white leading-5">
                  <Link to="tel:0732086222">(07) 3208 6222</Link> <br />{" "}
                  <Link to="mailto:admin@focalrealestate.com.au">
                    admin@focalrealestate.com.au
                  </Link>
                </p>
              </div>
              <div className="mt-10 ml-3 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  For Sale
                </h3>
                <ul role="list" className="mt-4 space-y-2">
                  <li>
                    <Link to="/buy" className="text-sm leading-6 text-gray-300">
                      Properties for Sale
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/inspections"
                      className="text-sm leading-6 text-gray-300"
                    >
                      Inspection Times
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ml-3 md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  For Rent
                </h3>
                <ul role="list" className="mt-4 space-y-2">
                  <li>
                    <Link
                      to="/rent"
                      className="text-sm leading-6 text-gray-300"
                    >
                      Homes for Rent
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/inspections"
                      className="text-sm leading-6 text-gray-300"
                    >
                      Inspection Times
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/alerts"
                      className="text-sm leading-6 text-gray-300"
                    >
                      Property Alerts
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 ml-3 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Quick Links
                </h3>
                <ul role="list" className="mt-4 space-y-2">
                  <li>
                    <Link
                      to="/alerts"
                      className="text-sm leading-6 text-gray-300"
                    >
                      Property Alerts
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-sm leading-6 text-gray-300">
                      Frequently Asked Questions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-sm leading-6 text-gray-300"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms-and-conditions"
                      className="text-sm leading-6 text-gray-300"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ml-3 mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">
              Subscribe
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Don't Worry. We Don't Spam
            </p>
            <form className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full min-w-0 rounded-md appearance-none border-0 bg-white/5 px-3 py-1.5 text-white shadow-sm placeholder:text-gray-500"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex w-full items-center justify-center rounded-md bg-focal-blue px-3 py-2 text-sm font-semibold text-white shadow-sm"
                >
                  Subscribe
                </button>
              </div>
            </form>
            {messageSent && (
              <div className="mt-4">
                <p className="text-white font-semibold text-md">
                  Thank you for subscribing!
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 items-center justify-center sm:mt-20 md:flex md:items-center lg:mt-24">
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; 2024 Focal Real Estate. All rights reserved. Website by{" "}
            <Link to="https://ghptech.com.au/">GHP Tech</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
