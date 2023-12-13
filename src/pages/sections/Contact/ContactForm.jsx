import { useState } from 'react';

const ContactForm = () => {
  const [messageSent, setMessageSent] = useState('');
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

  return (
    <div className="mb-10 relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:py-20 lg:px-8">
        <div className="mx-auto lg:mx-0 max-sm:mt-20">
          <div className="max-w-5xl">
            <span className="mb-6 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">CONTACT US</span>
            <h1 className="mb-6 text-4xl text-gray-900 font-bold">Got a question? Get in touch with our team today</h1>
          </div>
          <div className="mx-auto lg:mx-0 max-sm:mt-20">
            <div className="flex max-sm:flex-col max-sm:mx-auto">
              <div className="flex flex-col mr-20 max-sm:mx-auto">
                <div className="mx-auto flex justify-between w-50 mb-5">
                  <dt className="mt-4 mr-16">
                    <div className="flex h-10 w-10 rounded-full bg-blue-600 items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                        />
                      </svg>
                    </div>
                    <p className="mt-2 font-bold text-2xl text-gray-900">Email</p>
                    <p className="text-gray-500">
                      <a href="mailto:enquiries@focalrealestate.com.au">enquiries@focalrealestate.com.au</a>
                    </p>
                  </dt>
                  <dt className="mt-4 ml-6 max-sm:ml-0">
                    <div className="flex h-10 w-10 rounded-full bg-blue-600 items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <p className="mt-2 font-bold text-2xl text-gray-900">Phone</p>
                    <p className="text-gray-500">(07) 3208 6222</p>
                  </dt>
                </div>
                <div className="mx-auto flex justify-between w-50 mb-5">
                  <dt className="mt-4 ml-5 mr-20 max-sm:ml-0">
                    <div className="flex h-10 w-10 rounded-full bg-blue-600 items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <p className="mt-2 font-bold text-2xl text-gray-900">Office</p>
                    <p className="text-gray-500">
                      10C/11-21 Kingston Rd,
                      <br />
                      Underwood QLD 4119
                    </p>
                  </dt>
                  <dt className="mt-4 ml-20 max-sm:ml-0">
                    <div className="flex h-10 w-10 rounded-full bg-blue-600 items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                        />
                      </svg>
                    </div>
                    <p className="mt-2 font-bold text-2xl text-gray-900">Social</p>
                    <div className="mt-4 flex">
                      <div className="mr-3">
                        <a href="https://www.facebook.com">
                          <img src="./icons/Facebook.svg" />
                        </a>
                      </div>
                      <div className="mr-3">
                        <a href="https://www.twitter.com">
                          <img src="./icons/Twitter.svg" />
                        </a>
                      </div>
                      <div className="mr-3">
                        <a href="https://www.instagram.com">
                          <img src="./icons/Instagram.svg" />
                        </a>
                      </div>
                      <div className="mr-3">
                        <a href="https://www.linkedin.com">
                          <img src="./icons/LinkedIn.svg" />
                        </a>
                      </div>
                    </div>
                  </dt>
                </div>
              </div>
              <div className="flex-1 flex-col ml-20 mt-5 max-sm:mx-auto">
                <form className="mx-auto">
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
                    <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="mt-2 rounded-md w-full border p-2">
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
