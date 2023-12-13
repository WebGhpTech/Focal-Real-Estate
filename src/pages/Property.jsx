import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const Property = () => {
    const location = useLocation();
    const { state } = location;
    const property = state?.property;

    if (!property) {
        return <div>No property data available</div>;
    }

    const [messageSent, setMessageSent] = useState('');

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { type, status, headline, images, streetNumber, street, postcode, suburb, address_state, country, description, bedrooms, bathrooms, carports, name, telephone } = property;

    const [title, setTitle] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch('https://focalrealestate.com.au/internal_api/post.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                setMessageSent(true);
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Failed to send data.');
                }
            })
            .then(responseData => {
                console.log('Data sent successfully!', responseData);
            })
            .catch(error => {
                console.error('Error: ', error);
            });
    }

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        if (type === 'Rental') {
            setTitle("PROPERTIES FOR RENT");
        }
        if (type !== 'Rental' && status === "Current") {
            setTitle("PROPERTIES FOR SALE");
        }
        if (status === "Leased") {
            setTitle("LEASED PROPERTIES");
        }
        if (status === "Offmarket") {
            setTitle("RECENTLY SOLD PROPERTIES");
        }
    }, []);

    return (
        <div>
            <section>
                <div className="relative isolate overflow-hidden">
                    <img src="/leased_header.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-55">
                        <div className="text-center">
                            <h1 className="mt-3 text-5xl leading-8 font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
                        </div>
                    </div>
                    <img src="/bg-graphic-01.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                </div>
            </section>
            <section>
                <div className="mb-10 relative isolate overflow-hidden bg-white">
                    <div className="mx-auto max-w-7xl flex px-6 sm:py-20 lg:px-8">
                        <div className="mx-auto flex-grow flex-shrink-0 max-sm:flex-col max-sm:mx-auto mr-20">
                            <div className="relative mr-20 max-w-5xl">
                                <button type="button" onClick={goToPreviousImage} className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 bg-gray-200">
                                    <span className="text-2xl" aria-hidden="true">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                    </span>
                                    <span className="sr-only">Previous</span>
                                </button>
                                <img
                                    src={images[currentImageIndex]}
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: '500px',
                                    }}
                                    alt={`Slide ${currentImageIndex + 1}`}
                                />

                                <button type="button" onClick={goToNextImage} className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 bg-gray-200">
                                    <span className="sr-only">Next</span>
                                    <span className="text-2xl" aria-hidden="true">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div className='mx-auto mt-5 max-w-4xl'>
                                <h1 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-2xl">{headline}</h1>
                                <h3 className="mt-4 text-md font-light tracking-tight text-gray-500 sm:text-md">{streetNumber} {street}, {address_state}, {suburb}, {country} {postcode}</h3>
                                <a href="#" className="mt-3 mb-4 py-2 px-2 inline-flex justify-center items-center gap-x-2 text-sm font-regular rounded-lg border border-transparent bg-focal-blue text-white">
                                    {status}
                                </a>
                                <hr />
                                <div className="mt-4 mb-4 text-gray-500 font-light text-md">
                                    <img src="/icons/bed.png" className="inline mr-1" /> {bedrooms} Bed
                                    <img src="/icons/bath.png" className="inline mr-1 ml-3" /> {bathrooms} Bath
                                    <img src="/icons/car.png" className="inline mr-1 ml-3" /> {carports} Garage
                                </div>
                                <hr />
                                <p className="mt-10 mb-10 text-gray-500 font-light text-md">
                                    {description}
                                </p>
                                <div className="mt-5 flex flex-col">
                                    <div className="-m-1.5 overflow-x-auto">
                                        <div className="p-1.5 min-w-full inline-block align-middle">
                                            <div className="overflow-hidden">
                                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                        <tr>
                                                            <td className="bg-gray-100 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-800">Address</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{streetNumber} {street}</td>
                                                            <td className="bg-gray-100 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-800">Suburb</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{suburb}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="bg-gray-100 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-800">Post Code</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{postcode}</td>
                                                            <td className="bg-gray-100 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-800">State</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{address_state}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto flex items-center justify-center mt-10 mb-10" style={{ width: '100%', height: '400px' }}>
                                    <iframe width="100%"
                                        height="100%"
                                        allowFullScreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10464.769776254596!2d153.10204664491542!3d-27.60897748948009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91437fb566385b%3A0xc798107977a9f7c4!2s10c%2F11%20Kingston%20Rd%2C%20Underwood%20QLD%204119%2C%20Australia!5e0!3m2!1sen!2sus!4v1701497542634!5m2!1sen!2sus" frameBorder="0"></iframe>
                                </div>
                            </div>
                        </div>
                        <form className="w-full p-0">
                            <div className="border p-5 rounded-md">
                                <div className="mb-8">
                                    <img src="/philip.jpeg" className='w-20 mb-2' />
                                    <label className="block text-focal-blue font-semibold text-2xl">
                                        {name}
                                    </label><label className="block text-gray-600 font-light text-xl">
                                        {telephone}
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm">
                                        Name
                                    </label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-2 rounded-md w-full p-2 border" placeholder="Name" />
                                </div>{' '}
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm">
                                        Email
                                    </label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-2 rounded-md w-full p-2 border" placeholder="Email" />
                                </div>{' '}
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-sm">
                                        Phone
                                    </label>
                                    <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-2 rounded-md w-full p-2 border" placeholder="Phone" />
                                </div>{' '}
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm">
                                        Message
                                    </label>
                                    <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="mt-2 rounded-md w-full border p-2">Hi, I'm interested in {streetNumber} {street}, {address_state}, {suburb}, {country} {postcode}, Could you please contact me with more information.
                                    </textarea>
                                </div>
                                <div className="mb-4">
                                    <button type="button" onClick={handleSubmit} className="bg-focal-blue text-white rounded w-full py-2 px-4">
                                        Send
                                    </button>
                                </div>
                                {messageSent && (
                                    <div className="mb-4">
                                        <p className='text-focal-blue font-semibold text-md'>Your message has been sent successfully!</p>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div >
    );
}


export default Property;