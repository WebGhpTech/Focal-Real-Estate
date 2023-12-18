import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FilterBox = ({ onClose }) => {
  // const [priceRange, setPriceRange] = useState([0, 1000]);
  const [bedroomRange, setBedroomRange] = useState([0, 25]);
  const [bathroomRange, setBathroomRange] = useState([0, 25]);
  const [carportRange, setCarportRange] = useState([0, 5]);

  const handleApplyFilter = () => {
    onClose({
      // price: priceRange[0],
      bedrooms: bedroomRange[0],
      bathrooms: bathroomRange[0],
      carports: carportRange[0],
    })
  }

  return (
    <div className='mx-auto rounded-lg w-full absolute top-full -mt-8 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 shadow-md p-4 sm:w-auto max-sm:w-1/2 max-sm:text-center max-sm:p-0'>
      <div className='mx-auto flex max-sm:flex-col max-sm:m-5'>
        <div className='mb-6'>
          <label className='block mb-2'>Bedrooms: </label>
          <div className='p-2'>
            <input type="range" min="0" max="25" step="1" value={bedroomRange[0]} onChange={(e) => setBedroomRange(e.target.value.split(',').map(Number))} />
            <div className='text-xs'>
              <span>0 - {bedroomRange[0]}</span>
            </div>
          </div>
        </div>
        <div className='mb-6'>
          <label className='block mb-2'>Bathrooms: </label>
          <div className='p-2'>
            <input type="range" min="0" max="25" step="1" value={bathroomRange[0]} onChange={(e) => setBathroomRange(e.target.value.split(',').map(Number))} />
            <div className='text-xs'>
              <span>0 - {bathroomRange[0]}</span>
            </div>
          </div>
        </div>
        <div className='mb-6'>
          <label className='block mb-2'>Car Spaces: </label>
          <div className='p-2'>
            <input type="range" min="0" max="5" step="1" value={carportRange[0]} onChange={(e) => setCarportRange(e.target.value.split(',').map(Number))} />
            <div className='text-xs'>
              <span>0 - {carportRange[0]}</span>
            </div>
          </div>
        </div>
        {/* <div className='mb-2'>
          <label className='block mb-2'>Price: </label>
          <div className='p-2'>
            <input type="range" min="0" max="1000" step="1" value={priceRange[0]} onChange={(e) => setPriceRange(e.target.value.split(',').map(Number))} />
            <div className='text-xs'>
              <span>$0 - ${priceRange[0]}</span>
            </div>
          </div>
        </div> */}
      </div>
      <button className='bg-focal-blue text-white mb-4 p-2 w-full rounded sm:w-auto max-sm:w-40' onClick={handleApplyFilter}>Apply Filter</button>
    </div>
  )
}


const PropertyListing = ({ page, type, status, limit }) => {
  const [propertyType, setPropertyType] = useState(type);
  const [properties, setProperties] = useState([]);
  // const [price, setPrice] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [carports, setCarports] = useState(0);
  const [showFilterBox, setShowFilterBox] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [propertyType, status, bathrooms, bedrooms, carports]);

  const fetchData = async () => {
    try {
      let apiUrl = 'https://focalrealestate.com.au/internal_api/properties.php';
      let params = [];

      if (propertyType) {
        params.push(`type=${propertyType}`);
      }
      if (status) {
        params.push(`status=${status}`);
      }
      if (limit) {
        params.push(`limit=${limit}`);
      }

      //filter
      // if (price) {
      //   params.push(`price=${price}`);
      // }
      if (bathrooms) {
        params.push(`bathrooms=${bathrooms}`);
      }
      if (bedrooms) {
        params.push(`bedrooms=${bedrooms}`);
      }
      if (carports) {
        params.push(`carports=${carports}`);
      }

      if (params.length > 0) {
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
    if (property) {
      navigate(`/property/${property.id}`, { state: { property } });
    }
  }

  const handleFilter = () => {
    setShowFilterBox(!showFilterBox);
  }

  const handleFilterValues = (filterValues) => {
    setBathrooms(filterValues.bathrooms);
    setBedrooms(filterValues.bedrooms);
    setCarports(filterValues.carports);
    // setPrice(filterValues.price);
    setShowFilterBox(false);
  }

  const handleTypeChange = (type) => {
    setPropertyType(type)
  }

  return (
    <div>
      {page === "home" ? (
        <div className="mb-6 mx-auto flex justify-center items-center animate-on-scroll">
          <button type="button" onClick={() => handleTypeChange("buy")} className={`py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm ${propertyType === "buy" ? "text-focal-blue" : "text-gray-800"} font-medium focus:z-10 border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50`}
          >
            <img src="./icons/dollar.png" className="inline" />
            Buy
          </button>
          <button type="button" onClick={() => handleTypeChange("rental")} className={`py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm ${propertyType === "rental" ? "text-focal-blue" : "text-gray-800"} font-medium focus:z-10 border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50`}>
            <img src="./icons/house.png" className="inline" />
            Rent
          </button>
        </div>)
        : (<div className="mb-8 mx-auto flex justify-center items-center max-sm:flex-col">
          <p className="inline text-md font-semibold mr-4 max-sm:mb-2">Filters: </p>
          <button
            type="button"
            onClick={handleFilter}
            className="btn-filter py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:ms-0 text-sm font-medium focus:z-10 border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 max-sm:mb-2"
          >
            <img src="./icons/bed.png" className="inline" />
            {bedrooms === 0 ? "" : bedrooms} Bedrooms
          </button>
          <button
            type="button"
            onClick={handleFilter}
            className="btn-filter py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:ms-0 text-sm font-medium focus:z-10 border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 max-sm:mb-2"
          >
            <img src="./icons/bath.png" className="inline" />
            {bathrooms === 0 ? "" : bathrooms} Bathrooms
          </button>
          <button
            type="button"
            onClick={handleFilter}
            className="btn-filter py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:ms-0 text-sm font-medium focus:z-10 border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 max-sm:mb-2"
          >
            <img src="./icons/car.png" className="inline" />
            {carports === 0 ? "" : carports} Car Spaces
          </button>
          {/* <button
            type="button"
            onClick={handleFilter}
            className="btn-filter py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:ms-0 text-sm font-medium focus:z-10 border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 max-sm:mb-2"
          >
            <img src="./icons/dollar.png" className="inline" />
            {price === 0 ? "" : price} Price
          </button> */}

          {showFilterBox && <FilterBox onClose={handleFilterValues} />}

        </div>
        )}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
        {properties?.map((property, index) => (
          <div key={index} className="flex flex-col bg-white border shadow-sm rounded-xl" onClick={() => navigateToProperty(property)}>
            <img className="w-full h-auto rounded-t-xl" src={property.images[0]} alt="" />
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800">{property.headline}</h3>
              <p className="mt-1 text-gray-500 text-sm">{property.streetNumber} {property.street} {property.address_state} {property.suburb}  {property.country} {property.postcode}</p>
              {/* <p className="mt-3 text-gray-500">{property.description}</p> */}
              <a href="#" className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-regular rounded-lg border border-transparent bg-blue-600 text-white">
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
    </div>
  );
};

export default PropertyListing;
