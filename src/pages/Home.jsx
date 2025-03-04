import {useState, useEffect } from 'react';
import axios from "axios";

import { Hero, Features, LatestListings, About, Stats, Partners, Testimonial, Footer } from './sections/Home';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [pageInformation, setPageInformation] = useState();
  const userdata = JSON.parse(localStorage.getItem("user_data"));
  const page_slug = "home";
  const BASE_URL = "https://focalrealestate.com.au";
  useEffect(() => {
    if (userdata) {
      axios
        .post(`${BASE_URL}/internal_api/admin/api/v1/focal-data`, {
          page_slug: page_slug,
        })
        .then((response) => {
          setPageInformation(response.data.api_data);
        });
    }

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

    
    
    // localStorage.setItem('items', JSON.stringify(items));

  
  return (
    <>
    <Helmet>
        <title>{`${pageInformation?.meta_title??"Focal Real Estate"}`} </title>
        <meta httpEquiv="content-language" content="en-us" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content={pageInformation?.meta_title} />
        <meta name="description" content={pageInformation?.meta_description} />
        <link rel="canonical" href={pageInformation?.canonical_tag} />
        <link rel="icon" type="image/png" href="" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="generator" content="Focal Real Estate" />
        <meta name="author" content="Focal Real Estate" />
        <meta
          name="og:image"
          content={`${BASE_URL}/storage/${pageInformation?.og_image ?? ""}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={pageInformation?.twitter_title ?? ""}
        />
        <meta
          name="twitter:description"
          content={pageInformation?.twitter_description ?? ""}
        />
        <meta
          name="twitter:image"
          content={`${BASE_URL}/storage/${
            pageInformation?.twitter_image ?? ""
          }`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={BASE_URL} />
        <meta property="og:site_name" content="Focal Real Estate" />
        <meta property="og:type" content="website" />
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
    </>
  );
};

export default Home;
