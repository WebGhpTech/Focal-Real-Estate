import { AppraisalHero, AppraisalFeature, AppraisalListing, Testimonials, Footer } from './sections/Appraisal';

const Appraisal = () => {
  return (
    <div>
      <section>
        <AppraisalHero />
      </section>
      <section>
        <AppraisalFeature />
      </section>
      <section>
        <AppraisalListing />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Appraisal;
