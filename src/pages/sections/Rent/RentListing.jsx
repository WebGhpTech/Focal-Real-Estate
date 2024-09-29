import PropertyListing from '../../../components/PropertyListing';
import { useEffect, useState } from 'react';
import Pagination from '../../../components/Pagination';
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
    <div className="mx-auto rounded-lg w-1/2 bg-white border border-gray-300 shadow-md p-4 items-center justify-center max-sm:text-center max-sm:justify-center">
      <div className='mx-auto w-full flex flex-row'>
        <div className='mx-auto flex max-sm:flex-col'>
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
        </div>
      </div>
      <div className='mx-auto w-full'>
        <button className='bg-focal-blue text-white p-2 rounded sm:w-auto max-sm:w-40' onClick={handleApplyFilter}>Apply Filter</button>
      </div>
    </div>
  )
}


const RentListing = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 21; 
  const navigate = useNavigate();
  const [showFilterBox, setShowFilterBox] = useState(false);
  // const [price, setPrice] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [carports, setCarports] = useState(0);


  useEffect(() => {
    fetchProperties();
  }, [currentPage,bathrooms, bedrooms, carports]); 
  
  const fetchProperties = async () => {
  try {
    let apiUrl = 'https://focalrealestate.com.au/internal_api/framework/api/property-listing';
    // let apiUrl = 'https://focalrealestate.com.au/internal_api/properties.php';
    // let apiUrl = 'http://localhost/auclient/quarantine/internal_api/properties.php';
    let params = [];
    // console.log(apiUrl)
    
    params.push(`type=residential`);
    params.push(`status=Rental`);
    params.push(`page=${currentPage}`);
    params.push(`limit=${itemsPerPage}`);
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

    const response = await fetch(`${apiUrl}?${params.join('&')}`); 
    if (!response.ok) {
      throw new Error('Failed to fetch properties');
    }
    const data = await response.json();
    // console.log(data)
    setProperties(data.properties);
    setTotalItems(data.total); 
    // console.log('Properties after update:', properties);
    // console.log('Total Items after update:', totalItems);
  } catch (error) {
    console.error('Error fetching properties:', error);
  }
}
const handlePageChange = (page) => {
  setCurrentPage(page);
};

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


const navigateToProperty = (property) => {
  if (property) {
    navigate(`/property/${property.id}`, { state: { property } });
  }
}

  return (
    // <div className="bg-slate-100 py-24 sm:py-32">
    //   <div className="mx-auto max-w-7xl px-6 items-center lg:px-8">
    //     <div className="mx-auto max-w-3xl text-center mb-8">
    //       <h2 className="text-4xl font-bold text-gray-900">Browse through our properties for rent</h2>
    //     </div>

    //     <PropertyListing page="rent" type="rental" status="current" pg={1} limit={50} />
    //   </div>
    // </div>

    <div className="bg-slate-100 py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 items-center lg:px-8">
      <div className="mx-auto max-w-3xl text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900">Browse through our recently Rent properties</h2>
      </div>
      <div className="mb-8 mx-auto flex-row justify-center items-center max-sm:flex-col text-center">
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

      {/* <PropertyListing page="leased" type="" status="management" pg={1} limit={21} /> */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
          {(Object.values(properties)?.map((property, index) => (
        <div key={index} className="mx-2">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl" onClick={() => navigateToProperty(property)}>
            {property.images === undefined || property.images === null || property.images === "" || !property.images ? <img className="w-full rounded-t-xl h-[250px] object-cover" src="no-image.jpg" alt="" />
            :<img className="w-full rounded-t-xl h-[250px] object-cover" src={property.images[0]} alt="" />}
            <div className="p-4 md:p-5 h-44">
              <h3 className="text-lg font-bold text-gray-800">{property.headline}</h3>
              {/* <p className="mt-1 text-gray-500 text-sm">{property.streetNumber} {property.street} {property.address_state} {property.suburb}  {property.country} {property.postcode}</p> */}
              <p className="mt-1 text-gray-500 text-sm">{property.displayAddress}</p>
              {/* <p className="mt-3 text-gray-500">{property.description}</p> */}
              <button className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-regular rounded-lg border border-transparent bg-blue-600 text-white">
                {property.status}
              </button>
            </div>
            <div className="bg-white inline border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5">
              <img src="./icons/bed.png" className="inline mx-2" />
              <p className="mr-2 mt-1 text-sm text-gray-500 inline"> {property.bedrooms} </p>
              <img src="./icons/bath.png" className="inline mx-2" />
              <p className="mr-2 mt-1 text-sm text-gray-500 inline"> {property.bathrooms} </p>
              <img src="./icons/car.png" className="inline mx-2" />
              <p className="mr-2 mt-1 text-sm text-gray-500 inline"> {property.carports} </p>
            </div>
          </div>
        </div>
      )))}
  </div>
  <Pagination currentPage={currentPage} totalItems={totalItems} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
        {/* <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md focus:outline-none"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage * itemsPerPage >= totalItems}
            className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md focus:outline-none"
          >
            Next
          </button>
        </div> */}
  </div>
  </div>
  );
};

export default RentListing;
