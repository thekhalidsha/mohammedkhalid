import React from 'react';
import WorkExps from '../data/Experience';
// import WorkExps from '../data/Experience';

const WorkExp = () => {
    return (
        <section className='max-w-screen-xl px-4 py-8 mx-auto lg:py-16 w-full'>
            <p className='font-heading font-bold text-4xl text-zinc-700 pb-8'>Work Experience</p>

            {/* COLUMN-WISE FLOW: 2 columns, fill 3 rows first */}
            <div className='grid lg:grid-flow-col grid-rows-2 gap-x-12 gap-y-10'>
                {WorkExps.sort((a, b) => b.id - a.id).map((company, index) => (
                    <div
                        key={company.id}
                        className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
                    >
                        <a
                            rel="noopener"
                            target="_blank"
                            className="group grid place-items-center border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
                        >
                            <img
                                alt="Company Logo"
                                loading="lazy"
                                width="50"
                                height="50"
                                decoding="async"
                                className="object-cover duration-300 grayscale-100 group-hover:grayscale-0"
                                style={{ color: "transparent" }}
                                src={company.logo}
                            />
                        </a>
                        <div className="flex flex-col items-start">
                            <h3 className="text-xl font-semibold">{company.company}</h3>
                            <p>{company.jobTitle}</p>
                            <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                                {company.duration}
                            </time>
                            <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4">
                                {company.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkExp;
