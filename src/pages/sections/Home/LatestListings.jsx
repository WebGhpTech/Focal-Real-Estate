import PropertyListing from '../../../components/PropertyListing';

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
            <img src="./src/assets/icons/dollar.png" className="inline" />
            Buy
          </button>
          <button className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm text-gray-800 font-medium focus:z-10 border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50">
            <img src="./src/assets/icons/house.png" className="inline" />
            Rent
          </button>
        </div>

        <PropertyListing />
      </div>
    </div>
  );
};

export default LatestListings;