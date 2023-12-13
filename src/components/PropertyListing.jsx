import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const PropertyListing = ({type, status, limit}) => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  // fetch('https://focalrealestate.com.au/internal_api/properties.php?type=rental&status=current&limit=9')
  // .then((response) => response.json())
  // .then((data) => {
  //   setProperties(data.slice(0, 9));
  // })
  // .catch((error) => console.error('Error fetching data: ', error));

  useEffect(() => {
    fetchData();
  }, [type, status]);

  const fetchData = async() => {
    try {
      let apiUrl = 'https://focalrealestate.com.au/internal_api/properties.php';
      let params = [];

      if(type) {
        params.push(`type=${type}`);
      }

      if(status) {
        params.push(`status=${status}`);
      }

      if(limit) {
        params.push(`limit=${limit}`);
      }

      if(params.length > 0) {
        apiUrl += `?${params.join('&')}`;
      }

      const response = await fetch(apiUrl);
      const result = await response.json();

      setProperties(result);
    } catch (error) {
      console.error('Error fetching data');
    }
  }

  const navigateToProperty = (property) => {
    if(property) {
      navigate(`/property/${property.id}`, {state: {property}});
    }
  }


  return (
    <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
    {properties?.map((property, index) => (
      <div key={index} className="flex flex-col bg-white border shadow-sm rounded-xl">
        <img className="w-full h-auto rounded-t-xl" src={property.images[0]} alt="" />
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800">{property.headline}</h3>
          <p className="mt-1 text-gray-500 text-sm">{property.streetNumber} {property.street} {property.state} {property.suburb}  {property.country} {property.postcode}</p>
          {/* <p className="mt-3 text-gray-500">{property.description}</p> */}
          <a href="" className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-regular rounded-lg border border-transparent bg-blue-600 text-white">
            {property.status}
          </a>
        </div>
        <div className="bg-white inline border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5">
          <img src="./icons/bed.png" className="inline" />
          <p className="mr-2 mt-1 text-sm text-gray-500 inline"> {property.bedrooms} </p>
          <img src="./icons/bath.png" className="inline" />
          <p className="mr-2 mt-1 text-sm text-gray-500 inline"> {property.bathrooms} </p>
          <img src="./icons/car.png" className="inline" />
          <p className="mr-2 mt-1 text-sm text-gray-500 inline"> {property.carports} </p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default PropertyListing;
