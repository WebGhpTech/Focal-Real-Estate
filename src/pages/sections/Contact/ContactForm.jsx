const ContactForm = () => {
  return (
    <div className="mb-10 relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl lg:mx-0 max-sm:mt-20">
          <div className="max-w-5xl">
            <span className="mb-6 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">CONTACT US</span>
            <h1 className="mb-6 text-4xl text-gray-900 font-bold">Got a question? Get in touch with our team today</h1>
          </div>
          <div className="relative mt-5 xl:absolute xl:inset-0 xl:left-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 xl:mt-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
