import { useEffect } from 'react';
import { Hero, Features, LatestListings, About, Stats, Partners, Testimonial, Footer } from './sections/Home';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewPortHeight = window.innerHeight;

        if (elementPosition < viewPortHeight) {
          element.classList.add('scroll-animation');
        } else {
          element.classList.remove('scroll-animation');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll;

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
