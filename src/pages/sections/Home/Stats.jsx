import CountUp from 'react-countup';

const CountUpNumber = ({ end, suffix }) => <CountUp end={end} duration={20} suffix={suffix} />;

const Stats = () => {
  return (
    <div className="bg-focal-blue relative isolate overflow-hidden pt-5">
      <div className="mx-auto">
        <div className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="text-center mb-8 animate-on-scroll">
                <h1 className="text-5xl font-bold text-white mb-2">
                  <CountUpNumber end={300} />+
                </h1>
                <p className="text-white">CLIENTS HELPED</p>
              </div>
              <div className="text-center mb-8 animate-on-scroll">
                <h1 className="text-5xl font-bold text-white mb-2">$0</h1>
                <p className="text-white">IN HIDDEN FEES</p>
              </div>
              <div className="text-center mb-8 animate-on-scroll">
                <h1 className="text-5xl font-bold text-white mb-2">
                  <CountUpNumber end={12} />-<CountUpNumber end={18} /> Days
                </h1>
                <p className="text-white">AVERAGE LISTING PERIOD</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src="./bg-graphic-01.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
    </div>
  );
};

export default Stats;
