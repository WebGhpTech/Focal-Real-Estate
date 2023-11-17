const LatestListings = () => {
  return (
    <div className="bg-slate-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 items-center lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-6">
          <span className="mb-6 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Featured Properties</span>
          <h1 className="text-5xl font-bold text-gray-600">Check Out Latest Listings</h1>
        </div>

        <div className="mb-6 mx-auto flex justify-center items-center">
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm text-focal-blue font-medium focus:z-10 border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50"
          >
            Buy
          </button>
          <button className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm text-gray-800 font-medium focus:z-10 border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50">
            Rent
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl">
            <img className="w-full h-auto rounded-t-xl" src="./src/assets/fre-property-01.jpg" alt="" />
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800">Luxury 4 Bed 2 Bath Home in Pimpana</h3>
              <p className="mt-1 text-gray-500 text-sm">11 Peak Crescent, PIMPANA, QLD, 4209</p>
              <p className="mt-3 text-gray-500">Modern rendered concrete build with high-end finishes</p>
              <a href="" className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-regular rounded-lg border border-transparent bg-blue-600 text-white">
                Featured
              </a>
            </div>
            <div className="bg-white border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5">
              <p className="mt-1 text-sm text-gray-500">Bed 2 Bath 1 Car 2</p>
            </div>
          </div>

          <div className="flex flex-col bg-white border shadow-sm rounded-xl">
            <img className="w-full h-auto rounded-t-xl" src="./src/assets/fre-property-01.jpg" alt="" />
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800">Luxury 4 Bed 2 Bath Home in Pimpana</h3>
              <p className="mt-1 text-gray-500 text-sm">11 Peak Crescent, PIMPANA, QLD, 4209</p>
              <p className="mt-3 text-gray-500">Modern rendered concrete build with high-end finishes</p>
              <a href="" className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-regular rounded-lg border border-transparent bg-blue-600 text-white">
                Featured
              </a>
            </div>
            <div className="bg-white border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5">
              <p className="mt-1 text-sm text-gray-500">Bed 2 Bath 1 Car 2</p>
            </div>
          </div>

          <div className="flex flex-col bg-white border shadow-sm rounded-xl">
            <img className="w-full h-auto rounded-t-xl" src="./src/assets/fre-property-01.jpg" alt="" />
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800">Luxury 4 Bed 2 Bath Home in Pimpana</h3>
              <p className="mt-1 text-gray-500 text-sm">11 Peak Crescent, PIMPANA, QLD, 4209</p>
              <p className="mt-3 text-gray-500">Modern rendered concrete build with high-end finishes</p>
              <a href="" className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-regular rounded-lg border border-transparent bg-blue-600 text-white">
                Featured
              </a>
            </div>
            <div className="bg-white border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5">
              <p className="mt-1 text-sm text-gray-500">Bed 2 Bath 1 Car 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestListings;
