const RentHero = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <img src="./for_rent_header.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-55">
        <div className="text-center">
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">PROPERTIES FOR RENT</h1>
        </div>
      </div>

      <img src="./bg-graphic-01.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
    </div>
  );
};

export default RentHero;
