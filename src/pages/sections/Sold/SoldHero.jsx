const SoldHero = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <img src="./header.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />

      <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-55">
        <div className="text-center">
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">RECENTLY SOLD PROPERTIES</h1>
        </div>
      </div>

      <img src="./bg-graphic-01.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
    </div>
  );
};

export default SoldHero;
