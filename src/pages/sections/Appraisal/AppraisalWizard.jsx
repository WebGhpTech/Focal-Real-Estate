import { useState } from 'react';

const AppraisalWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    how_to_contact: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    features: [],
  });

  const steps = ['Let us know about your property', 'Schedule a visit', 'Receive your property appraisal'];

  const featureOptions = ['Swimming Pool', 'Fully Fenced', 'Indoor Fireplace', 'Newly Renovated', 'Backyard', 'Multi-Storey', 'Airconditioning', 'Other'];

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="mx-auto flex items-center justify-center bg-gray-100">
      <div className="mx-auto py-20 w-full items-center justify-center">
        <div className="flex mb-20 items-center justify-center max-sm:flex-col max-sm:mb-5">
          {steps.map((title, index) => (
            <div key={index + 1} className="flex items-center justify-center ml-10 max-sm:m-0">
              <div
                className={`flex-shrink-0 flex rounded-full w-12 h-12  font-bold items-center justify-center text-2xl ${index + 1 === step ? 'bg-focal-blue text-white' : 'bg-white text-focal-blue'}`}
              >
                {index + 1}
              </div>
              <div className="ml-4 mr-4 font-bold">{title}</div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-3xl mb-20 items-center justify-center max-sm:p-5">
          {step === 1 && (
            <div>
              <div className="mx-auto mb-10 items-center justify-center">
                <h2 className="text-gray-700 text-center">
                  We collect some initial property details including land size, bedrooms, bathrooms, suburb, etc. to create a solid foundation for your appraisal.
                </h2>
              </div>
              <div className="mx-auto max-w-xl items-center justify-center mb-6">
                <label htmlFor="address" className="block text-sm text-gray-700">
                  Address
                </label>
                <input type="text" id="address" name="address" value={formData.address} placeholder="Start typing your property address..." className="mt-1 p-2 w-full border rounded-md" />
              </div>
              <div className="mx-auto max-w-xl items-center justify-center mb-6">
                <label htmlFor="bedrooms" className="block text-sm text-gray-700">
                  How many bedrooms does your property have?
                </label>
                <select id="bedrooms" name="bedrooms" value={formData.bedrooms} className="mt-1 p-2 w-full border rounded-md">
                  <option>Select</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                </select>
              </div>
              <div className="mx-auto max-w-xl items-center justify-center mb-6">
                <label htmlFor="bathrooms" className="block text-sm text-gray-700">
                  How many bathrooms does your property have?
                </label>
                <select id="bathrooms" name="bathrooms" value={formData.bathrooms} className="mt-1 p-2 w-full border rounded-md">
                  <option>Select</option>
                  <option value="1">1 Bathroom</option>
                  <option value="2">2 Bathrooms</option>
                  <option value="3">3 Bathrooms</option>
                </select>
              </div>
              <div className="mx-auto max-w-xl items-center justify-center mb-6">
                <label className="block text-sm text-gray-700 mb-4">Property features?</label>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {featureOptions.map((option, index) => (
                    <div key={index} className="flex items-center">
                      <input type="checkbox" id={`checkbox-${index + 1}`} name="features" value={option} checked={formData.features.includes(option)} className="mr-2" />
                      <label htmlFor={`checkbox-${index + 1}`}>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="mx-auto mb-10 items-center justify-center">
                <h2 className="text-gray-700 text-center">Walk us through your property in a physical or virtual (skype) inspection. Book in on whatever day works best for you.</h2>
              </div>
              <div className="mx-auto max-w-xl items-center justify-center mb-6">
                <label htmlFor="first_name" className="block text-sm text-gray-700">
                  First Name
                </label>
                <input type="text" id="first_name" name="first_name" value={formData.first_name} placeholder="First Name" className="mt-1 p-2 w-full border rounded-md" />
              </div>
              <div className="mx-auto max-w-xl items-center justify-center mb-6">
                <label htmlFor="last_name" className="block text-sm text-gray-700">
                  Last Name
                </label>
                <input type="text" id="last_name" name="last_name" value={formData.last_name} placeholder="Last Name" className="mt-1 p-2 w-full border rounded-md" />
              </div>
              <div className="mx-auto max-w-xl items-center justify-center mb-6">
                <label htmlFor="email" className="block text-sm text-gray-700">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} placeholder="Email" className="mt-1 p-2 w-full border rounded-md" />
              </div>
              <div className="mx-auto max-w-xl items-center justify-center mb-6">
                <label htmlFor="phone" className="block text-sm text-gray-700">
                  Phone
                </label>
                <input type="text" id="phone" name="phone" value={formData.phone} placeholder="Phone" className="mt-1 p-2 w-full border rounded-md" />
              </div>
              <div className="mx-auto max-w-xl items-center justify-center mb-6">
                <label htmlFor="how_to_contact" className="block text-sm text-gray-700">
                  How should we contact you about your free appraisal?
                </label>
                <select id="how_to_contact" name="how_to_contact" value={formData.how_to_contact} className="mt-1 p-2 w-full border rounded-md">
                  <option>Select</option>
                </select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="mx-auto max-w-2xl items-center justify-center">
                <img src="./icons/check-icon-large.png" className="mx-auto w-14 h-14" />
                <h2 className="mx-auto text-focal-blue text-xl font-bold text-center mt-3">Visit Scheduled!</h2>
                <h3 className="text-lg font-semibold text-center mt-3 text-gray-700">We'll be in touch shortly with your current market value and property report.</h3>
                <p className="text-md text-gray-700 text-center mt-2">
                  If you'd like to ensure your report is accurate, please book a call on <b>(07) 3208 6222</b> discuss the key features of your property and any recent updates.
                </p>
                <p className="text-md text-gray-700 text-center mt-5">
                  Alternatively, email us:{' '}
                  <a href="mailto:enquiries@focalrealestate.com.au">
                    <b>enquiries@focalrealestate.com.au</b>
                  </a>
                </p>
                <p className="text-md text-gray-700 text-center mt-5">
                  After our visit. We'll provide you with a comprehensive property appraisal, as well as any advice we may have for you. You can also contact us with any questions you may have about
                  your appraisal as well.
                </p>
              </div>
            </div>
          )}

          <div className="mx-auto mt-4 max-w-xl items-center justify-center">
            {step === 1 && (
              <button onClick={nextStep} className="bg-focal-blue text-white rounded w-full py-2 px-4">
                Next
              </button>
            )}
            {step === 2 && (
              <button onClick={nextStep} className="bg-focal-blue text-white rounded w-full py-2 px-4">
                Schedule Visit
              </button>
            )}
            {step < 3 && (
              <button onClick={prevStep} className="bg-gray-300 mt-3 rounded w-full py-2 px-4">
                Back
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppraisalWizard;
