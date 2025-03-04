import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const AppraisalHero = () => {
  const [pageInformation, setPageInformation] = useState();
    const userdata = JSON.parse(localStorage.getItem('user_data'));
    const page_slug = "book-appraisal";
    const BASE_URL = "https://focalrealestate.com.au";
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
    </Helmet>
    <div className="relative isolate overflow-hidden">
      <img src="./6.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-55">
        <div className="text-center">
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">BOOK AN APPRAISAL</h1>
        </div>
      </div>

      <img src="./bg-graphic-01.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
    </div>
    </>
  );
};

export default AppraisalHero;
