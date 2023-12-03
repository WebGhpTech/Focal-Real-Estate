import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div>
      <section>
        <div className="relative isolate overflow-hidden">
          <img src="./leased_header.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />

          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-55">
            <div className="text-center">
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Terms and Conditions</h1>
            </div>
          </div>

          <img src="./bg-graphic-01.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        </div>
      </section>
      <section>
        <div className="relative isolate">
          <div className="items-center justify-center py-20 p-20">
            <p className="text-md font-light mb-8 leading-6">
              These terms and conditions (the "Terms and Conditions") govern the use of focalrealestate.com.au (the "Site"). This Site is owned and operated by Focal Real Estate Pty Ltd. This Site is
              a Real Estate Agency website website. By using this Site, you indicate that you have read and understand these Terms and Conditions and agree to abide by them at all times.
            </p>
            <h2 className="text-xl font-semibold text-focal-blue mb-3">Intellectual Property</h2>
            <p className="text-md font-light mb-8 leading-6">
              All content published and made available on our Site is the property of Focal Real Estate and the Site's creators. This includes, but is not limited to images, text, logos, documents,
              downloadable files and anything that contributes to the composition of our Site.
            </p>
            <h2 className="text-xl font-semibold text-focal-blue mb-3">Accounts</h2>
            <p className="text-md font-light mb-2 leading-6">
              When you create an account on our Site, you agree to the following:
              <ol className="ml-4 mt-2">
                <li>1. You are solely responsible for your account and the security and privacy of your account, including passwords or sensitive information attached to that account; and</li>
                <li>2. All personal information you provide to us through your account is up to date, accurate, and truthful and that you will update your personal information if it changes.</li>
              </ol>
            </p>
            <p className="text-md font-light mb-8 leading-6">
              We reserve the right to suspend or terminate your account if you are using our Site illegally or if you violate these Terms and Conditions.
            </p>
            <h2 className="text-xl font-semibold text-focal-blue mb-3">Third Party Goods and Services</h2>
            <p className="text-md font-light mb-8 leading-6">
              Our Site may offer goods and services from third parties. We cannot guarantee the quality or accuracy of goods and services made available by third parties on our Site.
            </p>
            <h2 className="text-xl font-semibold text-focal-blue mb-3">Links to Other Websites</h2>
            <p className="text-md font-light mb-8 leading-6">
              Our Site contains links to third party websites or services that we do not own or control. We are not responsible for the content, policies, or practices of any third party website or
              service linked to on our Site. It is your responsibility to read the terms and conditions and privacy policies of these third party websites before using these sites.
            </p>
            <h2 className="text-xl font-semibold text-focal-blue mb-3">Limitation of Liability</h2>
            <p className="text-md font-light mb-8 leading-6">
              Focal Real Estate and our directors, officers, agents, employees, subsidiaries, and affiliates will not be liable for any actions, claims, losses, damages, liabilities and expenses
              including legal fees from your use of the Site.
            </p>
            <h2 className="text-xl font-semibold text-focal-blue mb-3">Indemnity</h2>
            <p className="text-md font-light mb-8 leading-6">
              Except where prohibited by law, by using this Site you indemnify and hold harmless Focal Real Estate and our directors, officers, agents, employees, subsidiaries, and affiliates from any
              actions, claims, losses, damages, liabilities and expenses including legal fees arising out of your use of our Site or your violation of these Terms and Conditions.
            </p>
            <h2 className="text-xl font-semibold text-focal-blue mb-3">Applicable Law</h2>
            <p className="text-md font-light mb-8 leading-6">These Terms and Conditions are governed by the laws of the State of Queensland.</p>
            <h2 className="text-xl font-semibold text-focal-blue mb-3">Severability</h2>
            <p className="text-md font-light mb-8 leading-6">
              If at any time any of the provisions set forth in these Terms and Conditions are found to be inconsistent or invalid under applicable laws, those provisions will be deemed void and will
              be removed from these Terms and Conditions. All other provisions will not be affected by the removal and the rest of these Terms and Conditions will still be considered valid.
            </p>
            <h2 className="text-xl font-semibold text-focal-blue mb-3">Changes</h2>
            <p className="text-md font-light mb-8 leading-6">
              These Terms and Conditions may be amended from time to time in order to maintain compliance with the law and to reflect any changes to the way we operate our Site and the way we expect
              users to behave on our Site. We will notify users by email of changes to these Terms and Conditions or post a notice on our Site.
            </p>
            <h2 className="text-xl font-semibold text-focal-blue mb-3">Contact Details</h2>
            <p className="text-md font-light mb-8 leading-6">Please contact us if you have any questions or concerns. Our contact details are as follows:</p>
            <h2 className="text-xl font-bold text-focal-blue mb-3">Focal Real Estate</h2>
            <p className="text-md font-light mb-8 leading-6">
              e: admin@focalrealestate.com.au ph: (07) 3208 6222
              <br />
              18 Springwood Road, Underwood, 4119
              <br />
              You can also contact us through the feedback form available on our Site.
            </p>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};
export default Terms;
