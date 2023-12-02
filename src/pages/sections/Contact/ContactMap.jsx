const ContactMap = () => {
  return (
    <div className="mx-auto flex items-center justify-center mb-10" style={{ width: '85%', height: '400px' }}>
      <iframe
        title="10c/11 Kingston Rd"
        width="100%"
        height="100%"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10464.769776254596!2d153.10204664491542!3d-27.60897748948009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91437fb566385b%3A0xc798107977a9f7c4!2s10c%2F11%20Kingston%20Rd%2C%20Underwood%20QLD%204119%2C%20Australia!5e0!3m2!1sen!2sus!4v1701497542634!5m2!1sen!2sus"
      ></iframe>
    </div>
  );
};

export default ContactMap;
