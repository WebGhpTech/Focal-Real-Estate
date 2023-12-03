import Footer from '../components/Footer';

const FAQ = () => {
  return (
    <div>
      <section>
        <div className="relative isolate overflow-hidden">
          <img src="./leased_header.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />

          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-55">
            <div className="text-center">
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">FAQ'S</h1>
            </div>
          </div>

          <img src="./bg-graphic-01.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        </div>
      </section>
      <section>
        <div className="relative isolate mb-20 max-sm:m-10">
          <div className="mx-auto flex max-w-4xl items-center justify-center py-20">
            <h2 className="text-xl font-light text-center">
              You can find answers to some of the most frequently asked questions here, so feel free to send us a message if you do not find what you are looking for.
            </h2>
          </div>
          <div className="mx-auto flex max-w-4xl items-center justify-center">
            <div className="hs-accordion-group">
              <div
                className="hs-accordion hs-accordion-active:border-gray-200 active bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent"
                id="hs-active-bordered-heading-appraisal"
              >
                <button
                  className="text-focal-blue text-2xl hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-active-bordered-collapse-appraisal"
                >
                  Do I Need An Appraisal?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:block hidden w-8 h-8 lucide lucide-chevron-up"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:hidden block w-8 h-8 lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-active-bordered-collapse-appraisal"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-active-bordered-heading-appraisal"
                >
                  <div className="pb-4 px-5">
                    <p className="text-gray-800 dark:text-gray-200">
                      If you're preparing to sell your house or an investment property, an appraisal from one or more experienced real estate agents can provide you an estimate of how much your home
                      or investment property will sell for.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent"
                id="hs-active-bordered-heading-buy"
              >
                <button
                  className="text-focal-blue text-2xl hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-active-bordered-collapse-buy"
                >
                  Where Should I Buy?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:block hidden w-8 h-8 lucide lucide-chevron-up"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:hidden block w-8 h-8 lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-active-bordered-collapse-buy"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-active-bordered-heading-buy"
                >
                  <div className="pb-4 px-5">
                    <p className="text-gray-800 dark:text-gray-200">
                      Every home buyer's ideal location is different, depending on their requirements. Begin by thinking about where you'd like to live and where it would be most convenient for you to
                      commute to work and visit family and friends.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent"
                id="hs-active-bordered-heading-settlement"
              >
                <button
                  className="text-focal-blue text-2xl hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-active-bordered-collapse-settlement"
                >
                  What Is The Settlement?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:block hidden w-8 h-8 lucide lucide-chevron-up"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:hidden block w-8 h-8 lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-active-bordered-collapse-settlement"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-active-bordered-heading-settlement"
                >
                  <div className="pb-4 px-5">
                    <p className="text-gray-800 dark:text-gray-200">
                      Closing (also known as completion or settlement) is the last step in the real estate transaction process. The closing date is determined during the negotiating phase and is
                      normally several weeks after the offer is accepted formally. Ownership of the property is transferred to the buyer on the closing date.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent"
                id="hs-active-bordered-heading-properties"
              >
                <button
                  className="text-focal-blue text-2xl hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-active-bordered-collapse-properties"
                >
                  Where Do I Search For Properties?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:block hidden w-8 h-8 lucide lucide-chevron-up"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:hidden block w-8 h-8 lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-active-bordered-collapse-properties"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-active-bordered-heading-properties"
                >
                  <div className="pb-4 px-5">
                    <p className="text-gray-800 dark:text-gray-200">
                      Websites such as focalrealestate.com.au, realestate.com.au, and domain.com.au, as well as regional and local media, are good resources. Also, contact Focal Real Estate, as they
                      are local experts and may be aware of other properties for sale.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent"
                id="hs-active-bordered-heading-stamp"
              >
                <button
                  className="text-focal-blue text-2xl hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-active-bordered-collapse-stamp"
                >
                  What Is Stamp Duty?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:block hidden w-8 h-8 lucide lucide-chevron-up"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:hidden block w-8 h-8 lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-active-bordered-collapse-stamp"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-active-bordered-heading-stamp"
                >
                  <div className="pb-4 px-5">
                    <p className="text-gray-800 dark:text-gray-200">
                      Stamp duty is a tax levied by Australian state governments on the transfer of land or property. The charges levied by the state government may differ depending on the purpose of
                      the property purchased.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent"
                id="hs-active-bordered-heading-grant"
              >
                <button
                  className="text-focal-blue text-2xl hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-active-bordered-collapse-grant"
                >
                  What Is The First Home Buyer Grant?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:block hidden w-8 h-8 lucide lucide-chevron-up"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:hidden block w-8 h-8 lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-active-bordered-collapse-grant"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-active-bordered-heading-grant"
                >
                  <div className="pb-4 px-5">
                    <p className="text-gray-800 dark:text-gray-200">
                      The First Home Owner Grant (scheme) was created to assist qualifying first-time home buyers or builders with the purchase or construction of a new home by providing a grant. The
                      amount of the grant is determined by the qualified transaction's date, and each state has its own set of laws and regulations.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent"
                id="hs-active-bordered-heading-budget"
              >
                <button
                  className="text-focal-blue text-2xl hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-active-bordered-collapse-budget"
                >
                  How Can I Work Out The Budget I Can Afford To Buy A Home?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:block hidden w-8 h-8 lucide lucide-chevron-up"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:hidden block w-8 h-8 lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-active-bordered-collapse-budget"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-active-bordered-heading-budget"
                >
                  <div className="pb-4 px-5">
                    <p className="text-gray-800 dark:text-gray-200">
                      Speak with the professionals at Focal Real Estate; they can guide you through the process of evaluating your present earnings and assets and developing a plan with you.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent"
                id="hs-active-bordered-heading-cost"
              >
                <button
                  className="text-focal-blue text-2xl hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-active-bordered-collapse-cost"
                >
                  What Are The Costs Of Buying A Property?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:block hidden w-8 h-8 lucide lucide-chevron-up"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:hidden block w-8 h-8 lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-active-bordered-collapse-cost"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-active-bordered-heading-cost"
                >
                  <div className="pb-4 px-5">
                    <p className="text-gray-800 dark:text-gray-200">
                      What are the expenses of purchasing a home? Typically, a deposit of 10-20% of the total cost of the home is required. Stamp Duty varies from state to state. If you borrow more
                      than 80% of the purchase price, your lender will require mortgage insurance. Insurance for buildings Lawyers and conveyancers are kinds of legal assistance. Building, pest and
                      strata inspections Rates and levies charged by the city and strata associations
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent"
                id="hs-active-bordered-heading-ways"
              >
                <button
                  className="text-focal-blue text-2xl hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-active-bordered-collapse-ways"
                >
                  What Are The Different Ways To Buy A Home?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:block hidden w-8 h-8 lucide lucide-chevron-up"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:hidden block w-8 h-8 lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-active-bordered-collapse-ways"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-active-bordered-heading-ways"
                >
                  <div className="pb-4 px-5">
                    <p className="text-gray-800 dark:text-gray-200">
                      In Australia, there are four basic ways to purchase real estate. 1. Private treaty - When a vendor or home owner sets a price for their property and their real estate agent
                      negotiates with prospective purchasers directly to obtain a sale as near to that amount as possible. 2. Auction - which is a public sale conducted by a licensed auctioneer.
                      Property is put up for auction, and if the reserve price is met, it is sold to the highest bidder. 3. Expressions of Interest are processes in which you submit a single offer,
                      which is normally accompanied by a 5% or 10% deposit, and the vendor accepts or rejects it.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent"
                id="hs-active-bordered-heading-steps"
              >
                <button
                  className="text-focal-blue text-2xl hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-active-bordered-collapse-steps"
                >
                  What Are The Steps To Buy A Home?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:block hidden w-8 h-8 lucide lucide-chevron-up"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:hidden block w-8 h-8 lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-active-bordered-collapse-steps"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-active-bordered-heading-steps"
                >
                  <div className="pb-4 px-5">
                    <p className="text-gray-800 dark:text-gray-200">
                      Contact a Focal Real Estate agent to discuss your home-buying goals, and we can help you determine your financing capacity. 1. Make a budget and put money aside. 2. Select a home
                      loan and submit an application for pre-approval. 3. Download our Free Open Market study to learn more about the real estate market and neighbourhoods. 4. Make a list of property
                      must-haves. 5. Begin looking for a home. 6. Contract will be reviewed by a lawyer or a conveyancer. 7. Have a building inspection performed. 8. Make an offer or place a bid at an
                      auction. 9. Sign the contract and put down a deposit. 10. Organize the insurance procedure 11. Complete your move-in preparations.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent"
                id="hs-active-bordered-heading-focal"
              >
                <button
                  className="text-focal-blue text-2xl hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-active-bordered-collapse-focal"
                >
                  Why Should I Buy With Focal?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:block hidden w-8 h-8 lucide lucide-chevron-up"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hs-accordion-active:hidden block w-8 h-8 lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-active-bordered-collapse-focal"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-active-bordered-heading-focal"
                >
                  <div className="pb-4 px-5">
                    <p className="text-gray-800 dark:text-gray-200">
                      Enlisting the assistance of a reputable real estate agency can assist you in navigating the often-complicated world of residential real estate. Your Focal Real Estate agent is
                      perfectly placed to provide you with advice and assistance relevant to your local real estate market. Your Focal Real Estate agent can also assist you with every step of the
                      property purchase process, including selecting a home within your budget, arranging financing, reports and searches, conveyancing, and, in some situations, even assisting with
                      utility connections.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default FAQ;
