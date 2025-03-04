import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import citiyList from "./cityList.json"

const PropertyAlerts = () => {
  // const cities = []
  const [messageSent, setMessageSent] = useState("");
  const [minBedroomRange, setMinBedroomRange] = useState([0, 10]);
  const [maxBedroomRange, setMaxBedroomRange] = useState([0, 10]);
  const [minBathroomRange, setMinBathroomRange] = useState([0, 10]);
  const [maxBathroomRange, setMaxBathroomRange] = useState([0, 10]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    min_bedrooms: minBedroomRange[0],
    max_bedrooms: maxBedroomRange[0],
    min_bathrooms: minBathroomRange[0],
    max_bathrooms: maxBathroomRange[0],
    cities_suburbs: "",
  });

  useEffect(() => {
    setFormData({
      ...formData,
      min_bedrooms: minBedroomRange[0],
      max_bedrooms: maxBedroomRange[0],
      min_bathrooms: minBathroomRange[0],
      max_bathrooms: maxBathroomRange[0],
    });
  }, [
    minBedroomRange[0],
    maxBedroomRange[0],
    minBathroomRange[0],
    maxBathroomRange[0],
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("https://focalrealestate.com.au/internal_api/alerts.php", {
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
        // console.log("Data sent successfully!", responseData);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };
  const [pageInformation, setPageInformation] = useState();
  const userdata = JSON.parse(localStorage.getItem("user_data"));
  const page_slug = "property-alerts";
  const BASE_URL = "https://focalrealestate.com.au";
  useEffect(() => {
    if (userdata) {
      axios
        .post(
          `${BASE_URL}/internal_api/admin/api/v1/focal-data`,
          { page_slug: page_slug }
        )
        .then((response) => {
          setPageInformation(response.data.api_data);
        });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${pageInformation?.meta_title}`}</title>
        <meta httpEquiv="content-language" content="en-us" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content={pageInformation?.meta_title} />
        <meta name="description" content={pageInformation?.meta_description} />
        <link rel="canonical" href={pageInformation?.canonical_tag} />
        <link rel="icon" type="image/png" href="" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="generator" content="Focal Real Estate" />
        <meta name="author" content="Focal Real Estate" />
        <meta name="og:image" content={`${BASE_URL}/storage/${pageInformation?.og_image??""}`}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={pageInformation?.twitter_title??""}/>  
        <meta name="twitter:description" content={pageInformation?.twitter_description??""}/>  
        <meta name="twitter:image" content={`${BASE_URL}/storage/${pageInformation?.twitter_image??""}`}/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:url" content={BASE_URL}/>
        <meta property="og:site_name" content="Focal Real Estate"/>
        <meta property="og:type" content="website"/>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "BlogPosting",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://focalrealestate.com.au/"
              },
              "headline": "Latest Real Estate Insights for Underwood",
              "image": {
                "@type": "ImageObject",
                "url": "https://focalrealestate.com.au/images/blog-featured.jpg",
                "width": "1200",
                "height": "630"
              },
              "author": {
                "@type": "Person",
                "name": "Focal Real Estate Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Focal Real Estate",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://focalrealestate.com.au/images/logo.png",
                  "width": "600",
                  "height": "60"
                }
              },
              "datePublished": "${new Date().toISOString().split('T')[0]}"
            }
          `}
        </script>
      </Helmet>
      <div>
        <section>
          <div className="relative overflow-hidden isolate">
            <img
              src="./5.png"
              alt=""
              className="absolute inset-0 object-cover w-full h-full -z-10"
            />

            <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-55">
              <div className="text-center">
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                  Property Alerts
                </h1>
              </div>
            </div>

            <img
              src="./bg-graphic-01.png"
              alt=""
              className="absolute inset-0 object-cover w-full h-full -z-10"
            />
          </div>
        </section>
        <section>
          <div className="relative p-10 mx-auto isolate">
            <div className="items-center justify-center mx-auto mt-10 mb-10">
              <h2 className="text-center text-gray-700">
                Simply enter your name and email address to receive property
                alerts the moment they're available.
              </h2>
            </div>
            <form className="mx-auto">
              <div className="items-center justify-center max-w-xl mx-auto mb-6">
                <label
                  htmlFor="first_name"
                  className="block text-sm text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full p-2 mt-1 border rounded-md"
                />
              </div>
              <div className="items-center justify-center max-w-xl mx-auto mb-6">
                <label
                  htmlFor="last_name"
                  className="block text-sm text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full p-2 mt-1 border rounded-md"
                />
              </div>
              <div className="items-center justify-center max-w-xl mx-auto mb-6">
                <label htmlFor="email" className="block text-sm text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-2 mt-1 border rounded-md"
                />
              </div>
              <div className="items-center justify-center max-w-xl mx-auto mb-6">
                <label htmlFor="phone" className="block text-sm text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full p-2 mt-1 border rounded-md"
                />
              </div>
              <div className="items-center justify-center max-w-xl mx-auto mb-6">
                <label
                  htmlFor="min_bedrooms"
                  className="block text-sm text-gray-700"
                >
                  Min. Bedrooms
                </label>
                <input
                  type="range"
                  id="min_bedrooms"
                  name="min_bedrooms"
                  min="0"
                  max="10"
                  step="1"
                  value={minBedroomRange[0]}
                  onChange={(e) =>
                    setMinBedroomRange(e.target.value.split(",").map(Number))
                  }
                  className="w-full p-2 mt-1"
                />
                <div className="text-xs">
                  <span>{minBedroomRange[0]} bedrooms</span>
                </div>
              </div>
              <div className="items-center justify-center max-w-xl mx-auto mb-6">
                <label
                  htmlFor="max_bedrooms"
                  className="block text-sm text-gray-700"
                >
                  Max. Bedrooms
                </label>
                <input
                  type="range"
                  id="max_bedrooms"
                  name="max_bedrooms"
                  min="0"
                  max="10"
                  step="1"
                  value={maxBedroomRange[0]}
                  onChange={(e) =>
                    setMaxBedroomRange(e.target.value.split(",").map(Number))
                  }
                  className="w-full p-2 mt-1"
                />
                <div className="text-xs">
                  <span>{maxBedroomRange[0]} bedrooms</span>
                </div>
              </div>
              <div className="items-center justify-center max-w-xl mx-auto mb-6">
                <label
                  htmlFor="min_bathrooms"
                  className="block text-sm text-gray-700"
                >
                  Min. Bathrooms
                </label>
                <input
                  type="range"
                  id="min_bathrooms"
                  name="min_bathrooms"
                  min="0"
                  max="10"
                  step="1"
                  value={minBathroomRange[0]}
                  onChange={(e) =>
                    setMinBathroomRange(e.target.value.split(",").map(Number))
                  }
                  className="w-full p-2 mt-1"
                />
                <div className="text-xs">
                  <span>{minBathroomRange[0]} bathrooms</span>
                </div>
              </div>
              <div className="items-center justify-center max-w-xl mx-auto mb-6">
                <label
                  htmlFor="max_bathrooms"
                  className="block text-sm text-gray-700"
                >
                  Max. Bathrooms
                </label>
                <input
                  type="range"
                  id="max_bathrooms"
                  name="max_bathrooms"
                  min="0"
                  max="10"
                  step="1"
                  value={maxBathroomRange[0]}
                  onChange={(e) =>
                    setMaxBathroomRange(e.target.value.split(",").map(Number))
                  }
                  className="w-full p-2 mt-1"
                />
                <div className="text-xs">
                  <span>{maxBathroomRange[0]} bathrooms</span>
                </div>
              </div>
              <div className="items-center justify-center max-w-xl mx-auto mb-6">
                <label
                  htmlFor="cities_suburbs"
                  className="block text-sm text-gray-700"
                >
                  Cities / Suburbs
                </label>
                <select
                  id="cities_suburbs"
                  name="cities_suburbs"
                  value={formData.cities_suburbs}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md"
                >
                  <option>Select</option>
                  {/* {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))} */}
                  {citiyList?.cities?.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="items-center justify-center max-w-xl mx-auto mb-6">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full px-4 py-2 text-white rounded bg-focal-blue"
                >
                  Send
                </button>
              </div>
              {messageSent && (
                <div className="items-center justify-center max-w-xl mx-auto mb-6">
                  <p className="font-semibold text-focal-blue text-md">
                    Thank you, you will receive property alerts the moment
                    they're available!
                  </p>
                </div>
              )}
            </form>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default PropertyAlerts;
