import { Hero, Features, LatestListings, About, Stats, Partners, Testimonial, Footer } from './sections/Home';

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <LatestListings />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Stats />
      </section>
      <section>
        <Partners />
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
