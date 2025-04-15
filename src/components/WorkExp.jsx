import React from 'react';

const WorkExp = () => {
    return (
        <section className='max-w-screen-xl px-4 py-8 mx-auto lg:py-16 w-full'>
            <p className='font-heading font-bold text-4xl text-zinc-700 pb-8'>Work Experience</p>

            {/* COLUMN-WISE FLOW: 2 columns, fill 3 rows first */}
            <div className='grid lg:grid-flow-col grid-rows-3 gap-x-12 gap-y-10'>
                {[2025, 2024, 2023, 2022, 2021, 2020].map((year, index) => (
                    <div
                        key={index}
                        className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
                    >
                        <a
                            rel="noopener"
                            target="_blank"
                            className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
                        >
                            <img
                                alt="Company Logo"
                                loading="lazy"
                                width="50"
                                height="50"
                                decoding="async"
                                className="object-cover duration-300"
                                style={{ color: "transparent" }}
                                src="https://avatars.githubusercontent.com/u/72810866?size=200&v=4"
                            />
                        </a>
                        <div className="flex flex-col items-start">
                            <h3 className="text-xl font-semibold">{year}</h3>
                            <p>{year}</p>
                            <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                                Nov 25, {year} - Jan 8, {year}
                            </time>
                            <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4"></p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkExp;
