import { AboutFeature, AboutHero, AboutStaff, AboutTeam, AboutTestimonial, Footer } from './sections/About';

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
        <AboutTestimonial />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default About;
