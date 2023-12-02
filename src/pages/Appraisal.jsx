import { AppraisalHero, AppraisalFeature, AppraisalListing, Testimonials, Footer, AppraisalWizard } from './sections/Appraisal';

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
        <AppraisalWizard />
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
