import { Link } from 'react-router-dom';
import heroVideo from '../../../../public/Focal Real Estate.mp4';

const Hero = () => {
  return (
    <div className="main">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <video src={heroVideo} autoPlay loop muted />
      <img src="./bg-graphic-01.png" alt="" className="absolute inset-0 -z-80 h-full object-cover" />
      <div className="content">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-55">
          <div className="mt-10 py-10 text-center">
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl ease-in-text">
              The Agency that <br />
              Focuses on You
            </h1>
            <p className="mt-6 text-2xl leading-8 sm:text-md  text-white ease-in-text">Find out how much your home is worth today</p>
            <div className="mt-10 flex items-center justify-center">
              <Link to="/appraisal" className="rounded-md btn-focal-blue px-3.5 py2.5 text-sm font-semibold text-white shadow-sm ease-in-button">
                Book an Appraisal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
