import Accordion from '../components/Accordion';
import Footer from '../components/Footer';

const FAQ = () => {

  const faqItems = [
    {
      question: "Do I Need An Appraisal?",
      answer: "If you're preparing to sell your house or an investment property, an appraisal from one or more experienced real estate agents can provide you an estimate of how much your home or investment property will sell for.",
    },
    {
      question: "Where Should I Buy?",
      answer: "Every home buyer's ideal location is different, depending on their requirements. Begin by thinking about where you'd like to live and where it would be most convenient for you to commute to work and visit family and friends.",
    },
    {
      question: "What Is The Settlement?",
      answer: "Closing (also known as completion or settlement) is the last step in the real estate transaction process. The closing date is determined during the negotiating phase and is normally several weeks after the offer is accepted formally. Ownership of the property is transferred to the buyer on the closing date.",
    },
    {
      question: "Where Do I Search For Properties?",
      answer: "Websites such as focalrealestate.com.au, realestate.com.au, and domain.com.au, as well as regional and local media, are good resources. Also, contact Focal Real Estate, as they are local experts and may be aware of other properties for sale.",
    },
    {
      question: "What Is Stamp Duty?",
      answer: "Stamp duty is a tax levied by Australian state governments on the transfer of land or property. The charges levied by the state government may differ depending on the purpose of the property purchased.",
    },
    {
      question: "What Is The First Home Buyer Grant?",
      answer: "The First Home Owner Grant (scheme) was created to assist qualifying first-time home buyers or builders with the purchase or construction of a new home by providing a grant. The amount of the grant is determined by the qualified transaction's date, and each state has its own set of laws and regulations.",
    },
    {
      question: "How Can I Work Out The Budget I Can Afford To Buy A Home?",
      answer: "Speak with the professionals at Focal Real Estate; they can guide you through the process of evaluating your present earnings and assets and developing a plan with you.",
    },
    {
      question: "What Are The Costs Of Buying A Property?",
      answer: "What are the expenses of purchasing a home? Typically, a deposit of 10-20% of the total cost of the home is required. Stamp Duty varies from state to state. If you borrow more than 80% of the purchase price, your lender will require mortgage insurance. Insurance for buildings Lawyers and conveyancers are kinds of legal assistance. Building, pest and strata inspections Rates and levies charged by the city and strata associations",
    },
    {
      question: "What Are The Different Ways To Buy A Home?",
      answer: "In Australia, there are four basic ways to purchase real estate. 1. Private treaty - When a vendor or home owner sets a price for their property and their real estate agent negotiates with prospective purchasers directly to obtain a sale as near to that amount as possible. 2. Auction - which is a public sale conducted by a licensed auctioneer. Property is put up for auction, and if the reserve price is met, it is sold to the highest bidder. 3. Expressions of Interest are processes in which you submit a single offer, which is normally accompanied by a 5% or 10% deposit, and the vendor accepts or rejects it.",
    },
    {
      question: "What Are The Steps To Buy A Home?",
      answer: "Contact a Focal Real Estate agent to discuss your home-buying goals, and we can help you determine your financing capacity. 1. Make a budget and put money aside. 2. Select a home loan and submit an application for pre-approval. 3. Download our Free Open Market study to learn more about the real estate market and neighbourhoods. 4. Make a list of property must-haves. 5. Begin looking for a home. 6. Contract will be reviewed by a lawyer or a conveyancer. 7. Have a building inspection performed. 8. Make an offer or place a bid at an auction. 9. Sign the contract and put down a deposit. 10. Organize the insurance procedure 11. Complete your move-in preparations.",
    },
    {
      question: "Why Should I Buy With Focal?",
      answer: "Enlisting the assistance of a reputable real estate agency can assist you in navigating the often-complicated world of residential real estate. Your Focal Real Estate agent is perfectly placed to provide you with advice and assistance relevant to your local real estate market. Your Focal Real Estate agent can also assist you with every step of the property purchase process, including selecting a home within your budget, arranging financing, reports and searches, conveyancing, and, in some situations, even assisting with utility connections.",
    },
  ];

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
            <Accordion items={faqItems} />
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
