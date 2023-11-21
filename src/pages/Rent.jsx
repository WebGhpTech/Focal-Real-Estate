import { RentCTA, RentHero, RentListing, Footer } from './sections/Rent';

const Rent = () => {
  return (
    <div>
      <section>
        <RentHero />
      </section>
      <section>
        <RentListing />
      </section>
      <section>
        <RentCTA />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Rent;
