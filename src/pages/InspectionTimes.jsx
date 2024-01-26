import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const InspectionTimes = () => {
    return (
        <div>
            <section>
                <div className="relative isolate overflow-hidden">
                    <img src="./leased_header.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />

                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-55">
                        <div className="text-center">
                            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Inspection Times</h1>
                        </div>
                    </div>

                    <img src="./bg-graphic-01.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                </div>
            </section>
            <section>
                <div className="relative isolate">
                    <div className="mx-auto items-center justify-center py-20 p-20 text-center">
                        <h1 className="text-heading-blue text-4xl font-bold">We're Sorry!</h1>
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
