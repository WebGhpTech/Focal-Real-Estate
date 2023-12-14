import PropertyListing from '../../../components/PropertyListing';

const LatestListings = () => {

  return (
    <div className="bg-slate-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 items-center lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-6">
          <span className="mb-6 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 animate-on-scroll">
            Featured Properties
          </span>
          <h1 className="text-5xl font-bold text-gray-600 animate-on-scroll">Check Out Latest Listings</h1>
        </div>

        <PropertyListing page="home" type="buy" status="current" limit="6" />
      </div>
    </div>
  );
};

export default LatestListings;
