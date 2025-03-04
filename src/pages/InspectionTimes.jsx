import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const InspectionTimes = () => {
    return (
        <div>
            <section>
                <div className="relative overflow-hidden isolate">
                    <img src="./leased_header.jpg" alt="" className="absolute inset-0 object-cover w-full h-full -z-10" />

                    <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-55">
                        <div className="text-center">
                            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Inspection Times</h1>
                        </div>
                    </div>

                    <img src="./bg-graphic-01.png" alt="" className="absolute inset-0 object-cover w-full h-full -z-10" />
                </div>
            </section>
            <section>
                <div className="relative isolate">
                    <div className="items-center justify-center p-20 py-20 mx-auto text-center">
                        <h2 className="text-4xl font-bold text-heading-blue">We're Sorry!</h2>
                        <p className="mt-4 text-xl">There are currently no properties with upcoming inspections listed.</p>
                        <p className="mt-4 text-xl">Feel free to call our office <span className='text-heading-blue'><Link to="tel:0732086222">(07) 3208 6222</Link></span> if you'd like to request an inspection.</p>
                        <p className="mt-4 text-xl">Alternatively, you can email us: <span className='text-heading-blue'><Link to="mailto:enquiries@focalrealestate.com.au">enquiries@focalrealestate.com.au</Link></span></p>
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
};
export default InspectionTimes;
