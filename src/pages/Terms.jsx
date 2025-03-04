import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Terms = () => {
  const [pageInformation, setPageInformation] = useState();
  const userdata = JSON.parse(localStorage.getItem('user_data'));
    const page_slug = "terms";
    const BASE_URL = "https://focalrealestate.com.au"
    useEffect(()=>{
      if(userdata){
        axios.post(`${BASE_URL}/internal_api/admin/api/v1/focal-data`,{page_slug:page_slug}).then(response => {
          setPageInformation(response.data.api_data)
        })
      }
    },[])
  return (
    <>
    <Helmet>
      <title>{`${pageInformation?.meta_title}`}</title>
      <meta httpEquiv="content-language" content="en-us" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="title" content={pageInformation?.meta_title} />
      <meta name="description" content={pageInformation?.meta_description} />
      <link rel="canonical" href={pageInformation?.canonical_tag} /> 
      <link rel="icon" type="image/png" href="" />
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
      <meta name="generator" content="Focal Real Estate" />
      <meta name="author" content="Focal Real Estate" />
      <meta name="og:image" content={`${BASE_URL}/storage/${pageInformation?.og_image??""}`}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={pageInformation?.twitter_title??""}/>  
      <meta name="twitter:description" content={pageInformation?.twitter_description??""}/>  
      <meta name="twitter:image" content={`${BASE_URL}/storage/${pageInformation?.twitter_image??""}`}/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      <meta property="og:url" content={BASE_URL}/>
      <meta property="og:site_name" content="Focal Real Estate"/>
      <meta property="og:type" content="website"/>
      <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "BlogPosting",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://focalrealestate.com.au/"
              },
              "headline": "Latest Real Estate Insights for Underwood",
              "image": {
                "@type": "ImageObject",
                "url": "https://focalrealestate.com.au/images/blog-featured.jpg",
                "width": "1200",
                "height": "630"
              },
              "author": {
                "@type": "Person",
                "name": "Focal Real Estate Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Focal Real Estate",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://focalrealestate.com.au/images/logo.png",
                  "width": "600",
                  "height": "60"
                }
              },
              "datePublished": "${new Date().toISOString().split('T')[0]}"
            }
          `}
        </script>
    </Helmet>
    <div>
      <section>
        <div className="relative overflow-hidden isolate">
          <img src="./leased_header.jpg" alt="" className="absolute inset-0 object-cover w-full h-full -z-10" />

          <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-55">
            <div className="text-center">
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Terms and Conditions</h1>
            </div>
          </div>

          <img src="./bg-graphic-01.png" alt="" className="absolute inset-0 object-cover w-full h-full -z-10" />
        </div>
      </section>
      <section>
        <div className="relative isolate">
          <div className="items-center justify-center p-20 py-20">
            <p className="mb-8 font-light leading-6 text-md">
              These terms and conditions (the "Terms and Conditions") govern the use of focalrealestate.com.au (the "Site"). This Site is owned and operated by Focal Real Estate Pty Ltd. This Site is
              a Real Estate Agency website website. By using this Site, you indicate that you have read and understand these Terms and Conditions and agree to abide by them at all times.
            </p>
            <h2 className="mb-3 text-xl font-semibold text-focal-blue">Intellectual Property</h2>
            <p className="mb-8 font-light leading-6 text-md">
              All content published and made available on our Site is the property of Focal Real Estate and the Site's creators. This includes, but is not limited to images, text, logos, documents,
              downloadable files and anything that contributes to the composition of our Site.
            </p>
            <h2 className="mb-3 text-xl font-semibold text-focal-blue">Accounts</h2>
            <p className="mb-2 font-light leading-6 text-md">
              When you create an account on our Site, you agree to the following:
              <ol className="mt-2 ml-4">
                <li>1. You are solely responsible for your account and the security and privacy of your account, including passwords or sensitive information attached to that account; and</li>
                <li>2. All personal information you provide to us through your account is up to date, accurate, and truthful and that you will update your personal information if it changes.</li>
              </ol>
            </p>
            <p className="mb-8 font-light leading-6 text-md">
              We reserve the right to suspend or terminate your account if you are using our Site illegally or if you violate these Terms and Conditions.
            </p>
            <h2 className="mb-3 text-xl font-semibold text-focal-blue">Third Party Goods and Services</h2>
            <p className="mb-8 font-light leading-6 text-md">
              Our Site may offer goods and services from third parties. We cannot guarantee the quality or accuracy of goods and services made available by third parties on our Site.
            </p>
            <h2 className="mb-3 text-xl font-semibold text-focal-blue">Links to Other Websites</h2>
            <p className="mb-8 font-light leading-6 text-md">
              Our Site contains links to third party websites or services that we do not own or control. We are not responsible for the content, policies, or practices of any third party website or
              service linked to on our Site. It is your responsibility to read the terms and conditions and privacy policies of these third party websites before using these sites.
            </p>
            <h2 className="mb-3 text-xl font-semibold text-focal-blue">Limitation of Liability</h2>
            <p className="mb-8 font-light leading-6 text-md">
              Focal Real Estate and our directors, officers, agents, employees, subsidiaries, and affiliates will not be liable for any actions, claims, losses, damages, liabilities and expenses
              including legal fees from your use of the Site.
            </p>
            <h2 className="mb-3 text-xl font-semibold text-focal-blue">Indemnity</h2>
            <p className="mb-8 font-light leading-6 text-md">
              Except where prohibited by law, by using this Site you indemnify and hold harmless Focal Real Estate and our directors, officers, agents, employees, subsidiaries, and affiliates from any
              actions, claims, losses, damages, liabilities and expenses including legal fees arising out of your use of our Site or your violation of these Terms and Conditions.
            </p>
            <h2 className="mb-3 text-xl font-semibold text-focal-blue">Applicable Law</h2>
            <p className="mb-8 font-light leading-6 text-md">These Terms and Conditions are governed by the laws of the State of Queensland.</p>
            <h2 className="mb-3 text-xl font-semibold text-focal-blue">Severability</h2>
            <p className="mb-8 font-light leading-6 text-md">
              If at any time any of the provisions set forth in these Terms and Conditions are found to be inconsistent or invalid under applicable laws, those provisions will be deemed void and will
              be removed from these Terms and Conditions. All other provisions will not be affected by the removal and the rest of these Terms and Conditions will still be considered valid.
            </p>
            <h2 className="mb-3 text-xl font-semibold text-focal-blue">Changes</h2>
            <p className="mb-8 font-light leading-6 text-md">
              These Terms and Conditions may be amended from time to time in order to maintain compliance with the law and to reflect any changes to the way we operate our Site and the way we expect
              users to behave on our Site. We will notify users by email of changes to these Terms and Conditions or post a notice on our Site.
            </p>
            <h2 className="mb-3 text-xl font-semibold text-focal-blue">Contact Details</h2>
            <p className="mb-8 font-light leading-6 text-md">Please contact us if you have any questions or concerns. Our contact details are as follows:</p>
            <h2 className="mb-3 text-xl font-bold text-focal-blue">Focal Real Estate</h2>
            <p className="mb-8 font-light leading-6 text-md">
              e: enquiries@focalrealestate.com.au ph: (07) 3208 6222
              <br />
              10C/11-21 Kingston Rd, Underwood QLD 4119, Australia
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
    </>
  );
};
export default Terms;
