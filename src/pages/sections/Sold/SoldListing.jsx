import PropertyListing from '../../../components/PropertyListing';

const SoldListing = () => {
  return (
    <div className="bg-slate-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 items-center lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Browse through our recently sold properties</h2>
        </div>

        <div className="mb-8 mx-auto flex justify-center items-center max-sm:flex-col">
          <p className="inline text-md font-semibold mr-4 max-sm:mb-2">Filters: </p>
          <button
            type="button"
            className="btn-filter py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:ms-0 text-sm font-medium focus:z-10 border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 max-sm:mb-2"
          >
            <img src="./icons/bed.png" className="inline" />
            2-4 Bedrooms
          </button>
          <button
            type="button"
            className="btn-filter py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:ms-0 text-sm font-medium focus:z-10 border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 max-sm:mb-2"
          >
            <img src="./icons/bath.png" className="inline" />
            Bathrooms
          </button>
          <button
            type="button"
            className="btn-filter py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:ms-0 text-sm font-medium focus:z-10 border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 max-sm:mb-2"
          >
            <img src="./icons/car.png" className="inline" />
            Car Spaces
          </button>
          <button
            type="button"
            className="btn-filter py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:ms-0 text-sm font-medium focus:z-10 border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 max-sm:mb-2"
          >
            <img src="./icons/dollar.png" className="inline" />
            Price
          </button>
        </div>

        <PropertyListing />
      </div>
    </div>
  );
};

export default SoldListing;
