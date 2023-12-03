const AboutStaff = () => {
  return (
    <div className="mb-10 relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0 max-sm:mt-20">
          <div className="mx-auto max-w-2xl max-sm:text-center justify-center">
            <span className="mx-auto mb-6 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Team</span>
            <h1 className="mx-auto mb-3 text-5xl text-gray-900 font-bold">Meet our team</h1>
            <p className="text-md leading-6">Highly professional and capable of running your business across all digital channels.</p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-12 mt-0">
          <div className="mx-auto max-w-6xl items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 xl:mt-5">
              <div className="flex flex-col">
                <img src="./team/1.jpg" className="h-full" />
                <p className="mt-2 py-4 text-xl text-gray-900 max-sm:text-center">Jade Soong</p>
              </div>
              <div className="flex flex-col">
                <img src="./team/2.jpg" className="h-full" />
                <p className="mt-2 py-4 text-xl text-gray-900 max-sm:text-center">Serena Wang</p>
              </div>
              <div className="flex flex-col">
                <img src="./team/3.jpg" className="h-full" />
                <p className="mt-2 py-4 text-xl text-gray-900 max-sm:text-center">Philip Paznikov</p>
              </div>
              <div className="flex flex-col">
                <img src="./team/4.jpg" className="h-full" />
                <p className="mt-2 py-4 text-xl text-gray-900 max-sm:text-center">Alex Paznikov</p>
              </div>
              <div className="flex flex-col">
                <img src="./team/5.jpg" className="h-full" />
                <p className="mt-2 py-4 text-xl text-gray-900 max-sm:text-center">Aline Harnchan</p>
              </div>
              <div className="flex flex-col">
                <img src="./team/6.jpg" className="h-full" />
                <p className="mt-2 py-4 text-xl text-gray-900 max-sm:text-center">Tatjana Shirzada</p>
              </div>
              <div className="flex flex-col">
                <img src="./team/7.jpg" className="h-full" />
                <p className="mt-2 py-4 text-xl text-gray-900 max-sm:text-center">Temujin Shirzada</p>
              </div>
              <div className="flex flex-col">
                <img src="./team/8.jpg" className="h-full" />
                <p className="mt-2 py-4 text-xl text-gray-900 max-sm:text-center">Namuun Gangijuur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStaff;
