import PropertyListing from '../../../components/PropertyListing';

const RentListing = () => {
  return (
    <div className="bg-slate-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 items-center lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Browse through our properties for rent</h2>
        </div>

        <PropertyListing page="rent" type="rental" status="current" />
      </div>
    </div>
  );
};

export default RentListing;
