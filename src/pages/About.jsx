import { AboutFeature, AboutHero, AboutStaff, AboutTeam, Footer, Testimonials } from './sections/About';

const About = () => {
  return (
    <div>
      <section>
        <AboutHero />
      </section>
      <section>
        <AboutFeature />
      </section>
      <section>
        <AboutTeam />
      </section>
      <section>
        <AboutStaff />
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

export default About;
