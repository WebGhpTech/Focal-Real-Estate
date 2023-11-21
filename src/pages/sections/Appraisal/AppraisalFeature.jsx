const AppraisalFeature = () => {
  return (
    <div className="relative isolate overflow-hidden section-bg-dark ">
      <div className="mx-auto max-w-7xl px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 max-sm:mt-20">
          <div className="mx-auto max-w-xl py-10">
            <h1 className="mx-auto mb-6 text-3xl text-white font-bold max-sm:text-center">Everything you need to know for a seamless selling experience.</h1>
            <p className="mx-auto mb-10 mr-5 text-md leading-6 text-white max-sm:text-center">
              Your comprehensive marketing appraisal by Focal Real Estate will include your estimated property value compared to your location's historical sales data. We'll also give you our expert
              opintion on when the best time to sell would be for you.
            </p>
          </div>
          <div className="relative items-center py-10 max-sm:px-5 max-sm:py-10 mt-5 ml-5 xl:absolute xl:inset-0 xl:left-1/2">
            <img src="./src/assets/appraisal_feature_image.jpg" className="mt-4 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppraisalFeature;
