import React from "react";

const HomepageSlider: React.FC = () => {
    return (
        <section className="relative text-gray-100">
            <a
                className="select-none hover:cursor-pointer focus:outline-none absolute top-0 left-0 right-auto bottom-auto w-full h-[calc(92%)] z-100 cursor-pointer"
                role="link"
                href="/en-in/collections/tees-deal"
                target="_self"
            >
                <div></div>
            </a>
            <div className="relative h-full z-101 pointer-events-none">
                <div
                    className="h-0 pb-[var(--slider-hero-mobile-pb)] md:!pb-[var(--slider-hero-desktop-pb)]"
                    style={{
                        "--slider-hero-desktop-pb": "43.31%",
                        "--slider-hero-mobile-pb": "144.23%",
                    } as React.CSSProperties}
                >
                    <a
                        className="select-none hover:cursor-pointer focus:outline-none block h-full"
                        role="link"
                        href="/en-in/collections/tees-deal"
                        target="_self"
                    >
                        <div className="hidden md:!block">
                            <img
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                                alt="BUY 2 TOPS, GET 1 FREE"
                                sizes="100vw"
                                className="inline-block object-contain w-full"
                                src="https://skims-sanity.imgix.net/images/hfqi0zm0/production/228c3c105136214ae40a3788c85fab50057f7545-3000x1298.png?auto=format&q=95&ixlib=react-9.10.0"
                            />
                        </div>
                    </a>
                </div>
            </div>
            <div className="right-0 p-6 pb-12 md:!max-w-2/3 md:!p-12 lg:!max-w-1/2 bottom-0 left-0 absolute">
                <div className="flex items-center gap-2 md:!gap-3">
                    <div className="w-full text-left">
                        <h1 className="font-primary block text-3xl md:!text-4xl">BUY 2 TOPS, GET 1 FREE</h1>
                    </div>
                </div>
                <p className="text-sm mt-2 mb-0 md:!text-base md:!mt-2" style={{ color: "rgb(246, 246, 246)" }}>Mix, match, and save on our five-star women’s and men’s tees and tanks</p><div className="lg:flex gap-4 pointer-events-auto"><div className="max-w-[205px] mt-4 mb-1 md:!mt-6 md:!mb-2 text-center">
                    <a className="select-none hover:cursor-pointer focus:outline-none   flex justify-center items-center font-primary tracking-[0.04em] leading-custom-snug transition-colors w-52 px-4 pt-4 pb-3.5 text-base leading-none bg-white border border-white text-primary hover:text-secondary disabled:text-tertiary gap-3 no-swipe" role="link" data-href="/collections/tees-deal" title="" rel="" data-quantum="CTA - Section - Homepage Slides - TEES PROMOS US 1" data-discover="true" href="/en-in/collections/tees-deal" target="_self">
                        <span>SHOP NOW</span>
                    </a>
                </div>
                </div>
            </div>
        </section>
    );
};

export default HomepageSlider;
