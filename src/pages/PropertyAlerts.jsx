import { useEffect, useState } from 'react';
import Footer from '../components/Footer';

const PropertyAlerts = () => {
    const cities = ["ACACIA RIDGE", "ADVANCETOWN", "AGNES WATER", "ALBANY CREEK", "ALDERLEY", "ALEXANDRA HEADLAND", "ALEXANDRA HILLS", "ALGESTER", "ALLORA", "ALPHA", "ANDERGROVE", "ANNANDALE", "ANNERLEY", "ARANA HILLS", "ARUNDEL", "ASCOT", "ASHMORE", "ASPLEY", "ATHERTON", "AUCHENFLOWER", "AURUKUN", "AVENELL HEIGHTS", "AVOCA", "AYR", "BABINDA", "BALD HILLS", "BANKSIA BEACH", "BANYO", "BARCALDINE", "BARDON", "BARGARA", "BAYVIEW HEIGHTS", "BEACHMERE", "BEACONSFIELD", "BEAUDESERT", "BEENLEIGH", "BEERWAH", "BELLARA", "BELLBIRD PARK", "BELLBOWRIE", "BELLMERE", "BENOWA", "BENTLEY PARK", "BERSERKER", "BETHANIA", "BIGGENDEN", "BIGGERA WATERS", "BILOELA", "BIRKDALE", "BIRTINYA", "BLACKALL", "BLACKBUTT", "BLACKWATER", "BLI BLI", "BOHLE PLAINS", "BONGAREE", "BOONAH", "BOONDALL", "BOORAL", "BOOVAL", "BORONIA HEIGHTS", "BOWEN", "BOWEN HILLS", "BOYNE ISLAND", "BRACKEN RIDGE", "BRANYAN", "BRASSALL", "BRAY PARK", "BRIDGEMAN DOWNS", "BRIGHTON", "BRISBANE", "BROADBEACH", "BROADBEACH WATERS", "BROOKFIELD", "BROWNS PLAINS", "BUCASIA", "BUDERIM", "BULIMBA", "BUNDABERG", "BUNDABERG EAST", "BUNDABERG NORTH", "BUNDAMBA", "BURDELL", "BURLEIGH HEADS", "BURLEIGH WATERS", "BURNETT HEADS", "BURNSIDE", "BURPENGARY", "BURPENGARY EAST", "CABOOLTURE", "CABOOLTURE SOUTH", "CAIRNS", "CAIRNS NORTH", "CALAMVALE", "CALOUNDRA", "CALOUNDRA WEST", "CAMIRA", "CAMP HILL", "CANNON HILL", "CANNONVALE", "CAPALABA", "CARAVONICA", "CARBROOK", "CARDWELL", "CARINA", "CARINDALE", "CARRARA", "CARSELDINE", "CASHMERE", "CENTENARY HEIGHTS", "CHAPEL HILL", "CHARLEVILLE", "CHARTERS TOWERS", "CHELMER", "CHERBOURG", "CHERMSIDE", "CHERMSIDE WEST", "CHILDERS", "CHINCHILLA", "CLAYFIELD", "CLEAR ISLAND WATERS", "CLERMONT", "CLEVELAND", "CLIFTON", "CLIFTON BEACH", "CLONCURRY", "CLONTARF", "COLLINGWOOD PARK", "COLLINSVILLE", "CONDON", "COOKTOWN", "COOLANGATTA", "COOLOOLA COVE", "COOLUM BEACH", "COOMBABAH", "COOMERA", "COOPERS PLAINS", "COOROY", "COORPAROO", "CORINDA", "CORNUBIA", "CRAIGLIE", "CRAIGNISH", "CRANBROOK", "CRESTMEAD", "CROWS NEST", "CUNNAMULLA", "CURRIMUNDI", "CURRUMBIN", "CURRUMBIN WATERS", "DAISY HILL", "DALBY", "DARRA", "DAYBORO", "DECEPTION BAY", "DEERAGUN", "DICKY BEACH", "DIDDILLIBAH", "DINMORE", "DOONAN", "DOUGLAS", "DREWVALE", "DUNWICH", "DURACK", "EAGLEBY", "EARLVILLE", "EAST BRISBANE", "EAST MACKAY", "EAST TOOWOOMBA", "EASTERN HEIGHTS", "EDENS LANDING", "EDMONTON", "EIDSVOLD", "EIGHT MILE PLAINS", "ELANORA", "ELI WATERS", "ELIMBAH", "ELLEN GROVE", "ELLIOTT HEADS", "EMERALD", "ENOGGERA", "ESK", "EVERTON PARK", "FERNVALE", "FERNY GROVE", "FERNY HILLS", "FITZGIBBON", "FLINDERS VIEW", "FOREST LAKE", "FORTITUDE VALLEY", "FRASER ISLAND", "FRENCHVILLE", "GARBUTT", "GATTON", "GAYNDAH", "GEEBUNG", "GIN GIN", "GLADSTONE", "GLASS HOUSE MOUNTAINS", "GLEN EDEN", "GLENELLA", "GLENVALE", "GLENWOOD", "GOLDEN BEACH", "GOODNA", "GOONDIWINDI", "GORDONVALE", "GRACEMERE", "GRACEVILLE", "GRANVILLE", "GREENBANK", "GREENSLOPES", "GRIFFIN", "GULLIVER", "GYMPIE", "HAMILTON", "HARLAXTON", "HARRISTOWN", "HAWTHORNE", "HEATHWOOD", "HEATLEY", "HELENSVALE", "HENDRA", "HERBERTON", "HERMIT PARK", "HERSTON", "HIDDEN VALLEY", "HIGHFIELDS", "HIGHGATE HILL", "HIGHLAND PARK", "HILLCREST", "HOLLAND PARK", "HOLLAND PARK WEST", "HOME HILL", "HOPE ISLAND", "HUGHENDEN", "HYDE PARK", "IDALIA", "INALA", "INDOOROOPILLY", "INGHAM", "INGLEWOOD", "INNES PARK", "INNISFAIL", "IPSWICH", "JANDOWAE", "JIMBOOMBA", "JINDALEE", "JOYNER", "JULATTEN", "KALKIE", "KALLANGUR", "KANGAROO POINT", "KAWANA", "KAWANA WATERS", "KAWUNGAN", "KEARNEYS SPRING", "KEDRON", "KELSO", "KELVIN GROVE", "KENMORE", "KENMORE HILLS", "KEPERRA", "KEPNOCK", "KEWARRA BEACH", "KILCOY", "KILLARNEY", "KINGAROY", "KINGSTON", "KIPPA-RING", "KIRRA", "KIRWAN", "KULUIN", "KURABY", "LABRADOR", "LAIDLEY", "LAWNTON", "LEICHHARDT", "LITTLE MOUNTAIN", "LOGAN CENTRAL", "LOGAN VILLAGE", "LOGANHOLME", "LOGANLEA", "LONGREACH", "LOTA", "LOWOOD", "LUTWYCHE", "MACKAY", "MACLEAY ISLAND", "MAIN BEACH", "MALANDA", "MALENY", "MANGO HILL", "MANLY", "MANLY WEST", "MANOORA", "MANSFIELD", "MANUNDA", "MAPLETON", "MAREEBA", "MARGATE", "MAROOCHYDORE", "MARSDEN", "MARYBOROUGH", "MCDOWALL", "MEADOWBROOK", "MERIDAN PLAINS", "MERMAID BEACH", "MERMAID WATERS", "MERRIMAC", "MIAMI", "MIDDLE RIDGE", "MILES", "MILLBANK", "MILLMERRAN", "MINYAMA", "MIRANI", "MITCHELL", "MITCHELTON", "MOGGILL", "MOLENDINAR", "MONKLAND", "MONTO", "MOOLOOLABA", "MOOLOOLAH VALLEY", "MOORE PARK BEACH", "MOOROOBOOL", "MOOROOKA", "MORAYFIELD", "MORNINGSIDE", "MORNINGTON ISLAND", "MOSSMAN", "MOUNT COOLUM", "MOUNT GRAVATT", "MOUNT GRAVATT EAST", "MOUNT ISA", "MOUNT LOFTY", "MOUNT LOUISA", "MOUNT MORGAN", "MOUNT OMMANEY", "MOUNT PLEASANT", "MOUNT SHERIDAN", "MOUNT TAMBORINE", "MOUNT WARREN PARK", "MOUNTAIN CREEK", "MOURA", "MUDGEERABA", "MUNDINGBURRA", "MUNDUBBERA", "MURGON", "MURRUMBA DOWNS", "NAMBOUR", "NANANGO", "NARANGBA", "NERANG", "NEW AUCKLAND", "NEW FARM", "NEWMARKET", "NEWPORT", "NEWSTEAD", "NEWTOWN", "NINGI", "NOOSA HEADS", "NOOSAVILLE", "NORMAN GARDENS", "NORMAN PARK", "NORMANTON", "NORTH BOOVAL", "NORTH IPSWICH", "NORTH LAKES", "NORTH MACKAY", "NORTH ROCKHAMPTON", "NORTH TAMBORINE", "NORTH WARD", "NUDGEE", "NUNDAH", "OAKEY", "ORMEAU", "ORMISTON", "OXENFORD", "OXLEY", "PACIFIC PARADISE", "PACIFIC PINES", "PADDINGTON", "PALM BEACH", "PALM ISLAND", "PALMWOODS", "PARADISE POINT", "PARK AVENUE", "PARK RIDGE", "PARKINSON", "PARKWOOD", "PARRAMATTA PARK", "PELICAN WATERS", "PEREGIAN SPRINGS", "PETRIE", "PIALBA", "PIMLICO", "PIMPAMA", "PINJARRA HILLS", "PITTSWORTH", "POINT VERNON", "POMONA", "PORMPURAAW", "PORT DOUGLAS", "PROSERPINE", "PULLENVALE", "RACEVIEW", "RAILWAY ESTATE", "RANGEVILLE", "RASMUSSEN", "RAVENSHOE", "RED HILL", "REDBANK", "REDBANK PLAINS", "REDCLIFFE", "REDLAND BAY", "REDLYNCH", "REGENTS PARK", "RICHLANDS", "RIVERVIEW", "ROBINA", "ROCHEDALE SOUTH", "ROCKHAMPTON", "ROCKLEA", "ROCKVILLE", "ROMA", "ROSEWOOD", "ROTHWELL", "ROWES BAY", "RUNAWAY BAY", "RUNCORN", "RUSSELL ISLAND", "SALISBURY", "SANDGATE", "SARINA", "SCARBOROUGH", "SCARNESS", "SEVENTEEN MILE ROCKS", "SHAILER PARK", "SHERWOOD", "SHORNCLIFFE", "SILKSTONE", "SINNAMON PARK", "SIPPY DOWNS", "SLACKS CREEK", "SMITHFIELD", "SOUTH BRISBANE", "SOUTH MACKAY", "SOUTH TOOWOOMBA", "SOUTH TOWNSVILLE", "SOUTHPORT", "SOUTHSIDE", "SPRING HILL", "SPRINGBROOK", "SPRINGFIELD", "SPRINGFIELD CENTRAL", "SPRINGFIELD LAKES", "SPRINGSURE", "SPRINGWOOD", "ST GEORGE", "ST LUCIA", "STAFFORD", "STAFFORD HEIGHTS", "STANTHORPE", "STRATHPINE", "SUNNYBANK", "SUNNYBANK HILLS", "SURFERS PARADISE", "TAIGUM", "TALLAI", "TALLEBUDGERA", "TANNUM SANDS", "TARA", "TARINGA", "TAROOM", "TARRAGINDI", "TEWANTIN", "TEXAS", "THABEBAN", "THE GAP", "THE GEMFIELDS", "THE RANGE", "THEODORE", "THORNESIDE", "THORNLANDS", "THURINGOWA CENTRAL", "THURSDAY ISLAND", "TIARO", "TIN CAN BAY", "TINANA", "TINGALPA", "TIVOLI", "TOLGA", "TOOGOOLAWAH", "TOOGOOM", "TOOWONG", "TOOWOOMBA", "TOOWOOMBA CITY", "TORQUAY", "TREBONNE", "TRINITY BEACH", "TUGUN", "TULLY", "TWIN WATERS", "UNDERWOOD", "UPPER CABOOLTURE", "UPPER COOMERA", "UPPER MOUNT GRAVATT", "URANGAN", "URRAWEEN", "VARSITY LAKES", "VICTORIA POINT", "WACOL", "WANDAL", "WARANA", "WARNER", "WARWICK", "WATERFORD", "WATERFORD WEST", "WAVELL HEIGHTS", "WELLINGTON POINT", "WEST END, BRISBANE", "WEST END, TOWNSVILLE", "WEST MACKAY", "WESTCOURT", "WHITE ROCK", "WHITFIELD", "WILSONTON", "WILSONTON HEIGHTS", "WINDSOR", "WINTON", "WISHART", "WONDAI", "WOODFORD", "WOODRIDGE", "WOODY POINT", "WOOLLOONGABBA", "WOOLOOWIN", "WOOMBYE", "WOORABINDA", "WOORIM", "WOREE", "WORONGARY", "WULGURU", "WURTULLA", "WYNNUM", "WYNNUM NORTH", "WYNNUM WEST", "YARRABAH", "YARRABILBA", "YATALA", "YEPPOON", "YERONGA", "ZILLMERE", "ZILZIE"];
    const [messageSent, setMessageSent] = useState('');
    const [minBedroomRange, setMinBedroomRange] = useState([0, 10]);
    const [maxBedroomRange, setMaxBedroomRange] = useState([0, 10]);
    const [minBathroomRange, setMinBathroomRange] = useState([0, 10]);
    const [maxBathroomRange, setMaxBathroomRange] = useState([0, 10]);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        min_bedrooms: minBedroomRange[0],
        max_bedrooms: maxBedroomRange[0],
        min_bathrooms: minBathroomRange[0],
        max_bathrooms: maxBathroomRange[0],
        cities_suburbs: '',
    });

    useEffect(() => {
        setFormData({
            ...formData,
            min_bedrooms: minBedroomRange[0],
            max_bedrooms: maxBedroomRange[0],
            min_bathrooms: minBathroomRange[0],
            max_bathrooms: maxBathroomRange[0],
        });
    }, [minBedroomRange[0], maxBedroomRange[0], minBathroomRange[0], maxBathroomRange[0]]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch('https://focalrealestate.com.au/internal_api/alerts.php', {
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
        <div>
            <section>
                <div className="relative isolate overflow-hidden">
                    <img src="./leased_header.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />

                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-55">
                        <div className="text-center">
                            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Property Alerts</h1>
                        </div>
                    </div>

                    <img src="./bg-graphic-01.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                </div>
            </section>
            <section>
                <div className="mx-auto relative isolate p-10">
                    <div className="mx-auto mt-10 mb-10 items-center justify-center">
                        <h2 className="text-gray-700 text-center">Simply enter your name and email address to receive property alerts the moment they're available.</h2>
                    </div>
                    <form className="mx-auto">
                        <div className="mx-auto max-w-xl items-center justify-center mb-6">
                            <label htmlFor="first_name" className="block text-sm text-gray-700">
                                First Name
                            </label>
                            <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div className="mx-auto max-w-xl items-center justify-center mb-6">
                            <label htmlFor="last_name" className="block text-sm text-gray-700">
                                Last Name
                            </label>
                            <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div className="mx-auto max-w-xl items-center justify-center mb-6">
                            <label htmlFor="email" className="block text-sm text-gray-700">
                                Email
                            </label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div className="mx-auto max-w-xl items-center justify-center mb-6">
                            <label htmlFor="phone" className="block text-sm text-gray-700">
                                Phone
                            </label>
                            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div className="mx-auto max-w-xl items-center justify-center mb-6">
                            <label htmlFor="min_bedrooms" className="block text-sm text-gray-700">
                                Min. Bedrooms
                            </label>
                            <input type="range" id="min_bedrooms" name="min_bedrooms" min="0" max="10" step="1" value={minBedroomRange[0]} onChange={(e) => setMinBedroomRange(e.target.value.split(',').map(Number))} className="mt-1 p-2 w-full" />
                            <div className='text-xs'>
                                <span>{minBedroomRange[0]} bedrooms</span>
                            </div>
                        </div>
                        <div className="mx-auto max-w-xl items-center justify-center mb-6">
                            <label htmlFor="max_bedrooms" className="block text-sm text-gray-700">
                                Max. Bedrooms
                            </label>
                            <input type="range" id="max_bedrooms" name="max_bedrooms" min="0" max="10" step="1" value={maxBedroomRange[0]} onChange={(e) => setMaxBedroomRange(e.target.value.split(',').map(Number))} className="mt-1 p-2 w-full" />
                            <div className='text-xs'>
                                <span>{maxBedroomRange[0]} bedrooms</span>
                            </div>
                        </div>
                        <div className="mx-auto max-w-xl items-center justify-center mb-6">
                            <label htmlFor="min_bathrooms" className="block text-sm text-gray-700">
                                Min. Bathrooms
                            </label>
                            <input type="range" id="min_bathrooms" name="min_bathrooms" min="0" max="10" step="1" value={minBathroomRange[0]} onChange={(e) => setMinBathroomRange(e.target.value.split(',').map(Number))} className="mt-1 p-2 w-full" />
                            <div className='text-xs'>
                                <span>{minBathroomRange[0]} bathrooms</span>
                            </div>
                        </div>
                        <div className="mx-auto max-w-xl items-center justify-center mb-6">
                            <label htmlFor="max_bathrooms" className="block text-sm text-gray-700">
                                Max. Bathrooms
                            </label>
                            <input type="range" id="max_bathrooms" name="max_bathrooms" min="0" max="10" step="1" value={maxBathroomRange[0]} onChange={(e) => setMaxBathroomRange(e.target.value.split(',').map(Number))} className="mt-1 p-2 w-full" />
                            <div className='text-xs'>
                                <span>{maxBathroomRange[0]} bathrooms</span>
                            </div>
                        </div>
                        <div className="mx-auto max-w-xl items-center justify-center mb-6">
                            <label htmlFor="cities_suburbs" className="block text-sm text-gray-700">
                                Cities / Suburbs
                            </label>
                            <select id="cities_suburbs" name="cities_suburbs" value={formData.cities_suburbs} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md">
                                <option>Select</option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mx-auto max-w-xl items-center justify-center mb-6">
                            <button type="button" onClick={handleSubmit} className="bg-focal-blue text-white rounded w-full py-2 px-4">
                                Send
                            </button>
                        </div>
                        {messageSent && (
                            <div className="mx-auto max-w-xl items-center justify-center mb-6">
                                <p className='text-focal-blue font-semibold text-md'>Thank you, you will receive property alerts the moment they're available!</p>
                            </div>
                        )}
                    </form>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
};

export default PropertyAlerts;