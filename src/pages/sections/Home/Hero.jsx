const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <img src="./fre-hero-01.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-55">
        <div className="mt-10 py-10 text-center">
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            The Agency that <br />
            Focuses on You
          </h1>
          <p className="mt-6 text-2xl leading-8 sm:text-md  text-white">Find out how much your home is worth today</p>
          <div className="mt-10 flex items-center justify-center">
            <a href="" className="rounded-md btn-focal-blue px-3.5 py2.5 text-sm font-semibold text-white shadow-sm">
              Book an Appraisal
            </a>
          </div>
        </div>
      </div>

      <img src="./bg-graphic-01.png" alt="" className="absolute inset-0 -z-10 h-full object-cover" />
    </div>
  );
};

export default Hero;
