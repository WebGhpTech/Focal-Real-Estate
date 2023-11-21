import { BuyCTA, BuyHero, BuyListing, Footer } from './sections/Buy';

const Buy = () => {
  return (
    <div>
      <section>
        <BuyHero />
      </section>
      <section>
        <BuyListing />
      </section>
      <section>
        <BuyCTA />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Buy;
