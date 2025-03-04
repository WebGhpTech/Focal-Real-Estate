import { Link } from "react-router-dom";
import heroVideo from "../../../../public/Focal Real Estate.mp4";
import { Helmet } from 'react-helmet';
const Hero = () => {
  
  return (
    <>
      
      <div className="grid grid-cols-1 main">
      <Helmet>
        <title>Property Management Underwood | The Agency That Focuses on You</title>
        <meta httpEquiv="content-language" content="en-us" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content='Property Management Underwood | The Agency That Focuses on You' />
        <meta name="description" content='Property Management Underwood | The Agency That Focuses on You' />
        
        <link rel="icon" type="image/png" href="" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="generator" content="Focal Real Estate" />
        <meta name="author" content="Focal Real Estate" />
        
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://focalrealestate.com.au" />
       
        <meta property="og:site_name" content="Focal Real Estate" />
        <meta property="og:type" content="website" />
      </Helmet>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover w-full h-full"
        />
        <img
          src="./bg-graphic-01.png"
          alt=""
          className="absolute inset-0 object-cover h-full -z-80"
        />
        <div className="grid content place-items-center">
          <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-55">
            <div className="py-10 mt-20 text-center md:mt-10">
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl ease-in-text">
                The Agency that <br />
                Focuses on You
              </h1>
              <p className="mt-3 text-2xl leading-8 text-white md:mt-6 sm:text-md ease-in-text">
                Find out how much your home is worth today
              </p>
              <div className="flex items-center justify-center mt-4 md:mt-10">
                <Link
                  to="/appraisal"
                  className="rounded-md btn-focal-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ease-in-button"
                >
                  Book an Appraisal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="main">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <video src={heroVideo} autoPlay loop muted />
      <img src="./bg-graphic-01.png" alt="" className="absolute inset-0 object-cover h-full -z-80" />
      <div className="content">
        <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-55">
          <div className="py-10 mt-20 text-center md:mt-10">
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl ease-in-text">
              The Agency that <br />
              Focuses on You
            </h1>
            <p className="mt-3 text-2xl leading-8 text-white md:mt-6 sm:text-md ease-in-text">Find out how much your home is worth today</p>
            <div className="flex items-center justify-center mt-4 md:mt-10">
              <Link to="/appraisal" className="rounded-md btn-focal-blue px-3.5 py2.5 text-sm font-semibold text-white shadow-sm ease-in-button">
                Book an Appraisal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Hero;
