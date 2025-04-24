import { useEffect } from 'react';
import { AppraisalHero, AppraisalFeature, AppraisalListing, Testimonials, Footer, AppraisalWizard } from './sections/Appraisal';
import { useLocation } from 'react-router-dom';

const Appraisal = () => {
  const location = useLocation()
  useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }, [location]);
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
