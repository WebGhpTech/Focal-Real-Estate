import PropertyListing from '../../../components/PropertyListing';

const LatestListings = () => {

  return (
    <>
    <div className="py-20 bg-slate-100 sm:py-32">
      <div className="items-center px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-3xl mx-auto mb-6 text-center">
          <span className="inline-flex items-center px-2 py-1 mb-6 text-xs font-medium text-blue-700 rounded-md bg-blue-50 ring-1 ring-inset ring-blue-700/10 animate-on-scroll">
            Featured Properties
          </span>
          <h2 className="text-3xl font-bold text-gray-600 lg:text-5xl animate-on-scroll">Check Out Latest Listings</h2>
        </div>
        
        <PropertyListing page="home" type="residential" status="listing" pg={1} limit="12" />
      </div>
    </div>
    </>
  );
};

export default LatestListings;
