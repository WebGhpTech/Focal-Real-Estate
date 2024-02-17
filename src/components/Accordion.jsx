import { useState } from "react";

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(prevIndex => index === prevIndex ? null : index);
    };

    return (
        <div className="hs-accordion-group">
            {items.map((item, index) => (
                <div key={index} className="hs-accordion hs-accordion-active:border-gray-200 active bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent" id={`hs-active-bordered-heading-${index}`}>
                    <button onClick={() => handleClick(index)} className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-active-bordered-collapse-two">
                        {item.question}
                        {activeIndex === index ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-8 h-8 lucide lucide-chevron-up"
                            >
                                <path d="m18 15-6-6-6 6" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-8 h-8 lucide lucide-chevron-down"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        )}
                    </button>
                    <div id={`hs-basic-active-bordered-collapse-${index}`} className={`${activeIndex === index ? 'block' : 'hidden'} hs-accordion-content w-full overflow-hidden transition-[height] duration-300`} aria-labelledby="hs-active-bordered-heading-{index}">
                        <div className="pb-4 px-5">
                            <p className="text-gray-800 dark:text-gray-200">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;