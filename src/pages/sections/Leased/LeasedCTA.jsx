const LeasedCTA = () => {
  return (
    <div
      className="bg-focal-blue relative isolate overflow-hidden pt-5"
      style={{
        backgroundImage: `url('./src/assets/vector/blue_image_overlay.png')`,
        backgroundPosition: 'bottom right',
        backgroundSize: '80%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="mx-auto">
        <div className="py-24">
          <div className="mx-auto px-32">
            <div className="mx-auto flex flex-col justify-between lg:flex-row">
              <div className="lg:flex-2/3">
                <h1 className="text-white font-bold text-5xl mb-3 max-sm:text-4xl max-sm:text-center">Find out the price of your home</h1>
                <p className="text-md text-white max-sm:text-center max-sm:text-sm">You need to know the worth of your home, so get it from agents who know what they are doing</p>
              </div>
              <div className="lg:flex-1/3 flex flex-col max-sm:mt-4">
                <a href="/appraisal" className="btn btn-white rounded mt-2 font-semibold">
                  Get my appraisal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeasedCTA;
