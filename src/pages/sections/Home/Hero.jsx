import { Link } from 'react-router-dom';
import heroVideo from '../../../../public/Focal Real Estate.mp4';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [pageInformation, setPageInformation] = useState();
    const userdata = JSON.parse(localStorage.getItem('user_data'));
    const page_slug = "home";
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
      <title>{`${pageInformation?.meta_title}`} </title>
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
    
    <div className="main">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <video src={heroVideo} autoPlay loop muted />
      <img src="./bg-graphic-01.png" alt="" className="absolute inset-0 -z-80 h-full object-cover" />
      <div className="content">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-55">
          <div className="mt-10 py-10 text-center">
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl ease-in-text">
              The Agency that <br />
              Focuses on You
            </h1>
            <p className="mt-6 text-2xl leading-8 sm:text-md  text-white ease-in-text">Find out how much your home is worth today</p>
            <div className="mt-10 flex items-center justify-center">
              <Link to="/appraisal" className="rounded-md btn-focal-blue px-3.5 py2.5 text-sm font-semibold text-white shadow-sm ease-in-button">
                Book an Appraisal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Hero;
