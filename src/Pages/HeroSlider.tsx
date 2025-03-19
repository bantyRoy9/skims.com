import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider: React.FC = () => {
    return (
        <div className="home-hero">
            <section className="relative mb-5 mt-0 h-[calc(100dvh-6.25rem)] bg-white">
                <div className="relative">
                    <Swiper modules={[Pagination]} pagination={{ clickable: true }} className="w-full">
                        <SwiperSlide>
                            <section className="relative h-[calc(100dvh-6.25rem)]" style={{ color: "rgb(246, 246, 246)" }}>
                                {/* <a className="absolute t-0 l-0 w-full h-[92%] z-100 cursor-pointer" href="/en-in/collections/wedding-shop" target="_self" rel="noopener noreferrer" /> */}
                                <div className="relative h-full z-101 pointer-events-none">
                                    <div className="h-full">
                                        <div className="block h-full">
                                            <div className="relative h-full">
                                            <video 
  className="w-full object-cover h-full" 
  autoPlay 
  loop 
  muted 
  playsInline 
  src="https://skims.imgix.net/videos/c/o/v/4eeb98fac5cb40c082d9b826b4f1510d.mp4"
/>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute right-0 bottom-0 p-6 pb-12 md:!max-w-2/3 md:!p-12 lg:!max-w-1/2 videoPlayerControlsOffset left-0">
                                        <div className="flex items-center gap-2 md:!gap-3">
                                            <div className="w-full text-left">
                                                <h1 className="font-primary block text-3xl md:!text-4xl">LAUNCHING SOON<br />THE WEDDING SHOP<br />OPENS THURS, MARCH 20 AT 9AM PT / 12 PM ET</h1>
                                            </div>
                                        </div>
                                        <p className="text-sm mt-2 mb-0 md:!text-base md:!mt-2" style={{ color: "rgb(246, 246, 246)" }}>The sexiest way to say "I Do" with over 20 limited-edition collections</p>
                                        <div className="lg:flex gap-4 pointer-events-auto">
                                            <div className="max-w-[205px] mt-4 mb-1 md:!mt-6 md:!mb-2 text-center">
                                                <a className="select-none hover:cursor-pointer focus:outline-none   flex justify-center items-center font-primary tracking-[0.04em] leading-custom-snug transition-colors w-52 px-4 pt-4 pb-3.5 text-base leading-none bg-white border border-white text-primary hover:text-secondary disabled:text-tertiary gap-3 no-swipe" role="link" data-href="/collections/wedding-shop" tabIndex={0} title="" rel="" data-quantum="CTA - Section - Hero Slides - Global - MAIN HERO 1" data-discover="true" href="/en-in/collections/wedding-shop" target="_self">
                                                    <span>PREVIEW NOW</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </div>
    );
};

export default HeroSlider;