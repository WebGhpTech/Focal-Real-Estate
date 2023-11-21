import { LeasedCTA, LeasedHero, LeasedListing, Footer } from './sections/Leased';

const Leased = () => {
  return (
    <div>
      <section>
        <LeasedHero />
      </section>
      <section>
        <LeasedListing />
      </section>
      <section>
        <LeasedCTA />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Leased;
