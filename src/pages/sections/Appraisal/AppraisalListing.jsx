import PropertyListing from '../../../components/PropertyListing';
const AppraisalListing = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 items-center lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Recently Sold Properties</h2>
        </div>

        <PropertyListing page="appraisal" type="" status="offmarket" />
      </div>
    </div>
  );
};

export default AppraisalListing;
