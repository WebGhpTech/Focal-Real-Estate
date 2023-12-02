import { ContactHero, ContactForm, Footer, ContactMap } from './sections/Contact';

const Contact = () => {
  return (
    <div>
      <section>
        <ContactHero />
      </section>
      <section>
        <ContactForm />
      </section>
      <section>
        <ContactMap />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Contact;
