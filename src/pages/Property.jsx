import Footer from '../components/Footer';

const Property = ({match, location}) => {
    const { id } = match.params;
    const { state } = location;
    // const property = state ? state.property : null;
    if(!state || !state.property) {
        return (<div>Error: Property data is undefined</div>)
    }
    
    const property = state.property;

    return (
        <div>
            <section>
                <div className="relative isolate overflow-hidden">
                <img src={property.images[0]} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />

                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-55">
                    <div className="text-center">
                    <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">{property.headline}</h1>
                    </div>
                </div>

                <img src="./bg-graphic-01.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
}


export default Property;