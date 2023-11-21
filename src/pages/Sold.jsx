import { SoldCTA, SoldHero, SoldListing, Footer } from './sections/Sold';

const Sold = () => {
  return (
    <div>
      <section>
        <SoldHero />
      </section>
      <section>
        <SoldListing />
      </section>
      <section>
        <SoldCTA />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Sold;
