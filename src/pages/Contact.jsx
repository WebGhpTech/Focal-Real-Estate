import { ContactHero, ContactForm, Footer } from './sections/Contact';

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
        <Footer />
      </section>
    </div>
  );
};

export default Contact;
