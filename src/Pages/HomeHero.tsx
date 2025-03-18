import React from 'react';
import { pimg } from '../Utils/baseUrl';
import { Link } from 'react-router-dom';

const HomeHero: React.FC = () => {
  return (
    <div className="home-hero w-full">
      <section className="relative mb-5 mt-5" style={{ backgroundColor: 'white' }}>
        <div className="relative">
          <div className="w-full">
            <div className="" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
              <div>
                <section className="relative" style={{ color: 'rgb(246, 246, 246)' }}>
                  <Link className="select-none hover:cursor-pointer focus:outline-none absolute t-0 l-0 r-auto b-auto w-full h-[calc(92%)] z-100 cursor-pointer" rel="" data-quantum="Section - Hero Slides - GLOBAL- BEST SELLERS 1" data-discover="true" to="#" target="_self">
                    <div></div>
                  </Link>
                  <div className="relative h-full z-101 pointer-events-none" data-quantum="Section - Hero Slides - GLOBAL- BEST SELLERS 1">
                    <div className="h-0 pb-[var(--slider-hero-mobile-pb)] md:!pb-[var(--slider-hero-desktop-pb)]" style={{'--slider-hero-desktop-pb': '43.31%','--slider-hero-mobile-pb': '144.23%',} as React.CSSProperties}>
                      <Link className="select-none hover:cursor-pointer focus:outline-none block h-full"     rel="" data-discover="true" to="#" target="_self">
                        <div className="md:!block">
                          <img
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                            alt="FIVE-STAR FAVORITES"
                            sizes="100vw"
                            className="inline-block object-contain w-full"
                            src={"https://skims-sanity.imgix.net/images/hfqi0zm0/production/ab901c0473643c3907a7ae99c65babc7cd978440-3000x1298.png?auto=format&q=95&ixlib=react-9.10.0&w=1946"}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="right-0 p-6 pb-12 md:!max-w-2/3 md:!p-12 lg:!max-w-1/2 bottom-0 left-0 absolute">
                      <div className="flex items-center gap-2 md:!gap-3">
                        <div className="w-full text-left">
                          <h2 className="font-primary block text-3xl md:!text-4xl">FIVE-STAR FAVORITES</h2>
                        </div>
                      </div>
                      <p className="text-sm mt-2 mb-0 md:!text-base md:!mt-2" style={{ color: 'rgb(246, 246, 246)' }}>
                        Get comfy in our five-star fleece sets, the softest PJs, and more beloved styles
                      </p>
                      <div className="lg:flex gap-4 pointer-events-auto">
                        <div className="max-w-[205px] mt-4 mb-1 md:!mt-6 md:!mb-2 text-center">
                          <Link
                            className="select-none hover:cursor-pointer focus:outline-none flex justify-center items-center font-primary tracking-[0.04em] leading-custom-snug transition-colors w-52 px-4 pt-4 pb-3.5 text-base leading-none bg-white border border-white text-primary hover:text-secondary disabled:text-tertiary gap-3 no-swipe"
                            
                            
                            
                            
                            rel=""
                            data-quantum="CTA - Section - Hero Slides - GLOBAL- BEST SELLERS 1"
                            data-discover="true"
                            to="#"
                            target="_self"
                          >
                            <span>SHOP NOW</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock hero-slider-pagination">
              <span className="swiper-pagination-bullet cursor-pointer rounded-full bg-white/30 h-2 w-2 mx-1 transition-all duration-300 hidden swiper-pagination-bullet-active !bg-white opacity-100"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHero;