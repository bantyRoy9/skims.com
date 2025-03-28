import React from 'react';
import { pimg } from '../Utils/baseUrl';
import { Link } from 'react-router-dom';

const SplitTout: React.FC = () => {
  return (
    <section className="split-tout flex justify-center lg:mb-5">
      <div className="px-6 lg:px-0 pb-5">
        <section className="relative w-full overflow-hidden flex flex-col lg:flex-row text-white py-5 gap-5" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
          {/* First Link */}
          <Link className="select-none hover:cursor-pointer focus:outline-none relative w-full lg:flex-auto cursor-pointer self-center flex"to="#"target="_self">
            <div className="p-6 pt-20 lg:p-14 max-w-xl absolute bottom-0 left-0">
              <h2 className="text-2xl text-left font-primary leading-tight" style={{ color: 'rgb(246, 246, 246)' }}>
                OUR BEST PANTY DEAL
              </h2>
              <p className="text-sm mt-2">
                From our buttery Fits Everybody to our five-star Cotton Jersey—we have the perfect cut for every butt
              </p>
              <button
                type="button"
                className="flex justify-center items-center font-primary tracking-[0.04em] leading-custom-snug transition-colors w-auto px-8 pt-4 pb-3.5 text-base leading-none bg-white border border-white text-primary hover:text-secondary disabled:text-tertiary gap-2 mt-6"
                data-quantum="CTA - Section - Homepage Tout - 50/50 PROMOS ALL OTHER REGIONS Position 1"
              >
                <span>SHOP NOW</span>
              </button>
            </div>
            <img
              loading="eager"
              decoding="async"
              alt="OUR BEST PANTY DEAL"
              sizes="50vw"
              className="inline-block w-full h-full object-cover lg:block"
              src={pimg}
              
            />
            <img
              loading="lazy"
              decoding="async"
              alt="OUR BEST PANTY DEAL"
              sizes="auto, 100vw"
              className="inline-block w-full h-full object-cover lg:hidden"
              src={pimg}
              
            />
          </Link>

          {/* Second Link */}
          <Link className="select-none hover:cursor-pointer focus:outline-none relative w-full lg:flex-auto cursor-pointer self-center flex" to="#" target="_self">
            <div className="p-6 lg:p-14 max-w-xl absolute bottom-0 left-0">
              <h2 className="text-2xl text-left font-primary leading-tight" style={{ color: 'rgb(246, 246, 246)' }}>
                THE BEST UNDERWEAR BUNDLE
              </h2>
              <p className="text-sm mt-2">
                From our Stretch styles that never lose shape to our super soft Cotton—SKIMS Mens is the total package
              </p>
              <button
                type="button"
                className="flex justify-center items-center font-primary tracking-[0.04em] leading-custom-snug transition-colors w-auto px-8 pt-4 pb-3.5 text-base leading-none bg-white border border-white text-primary hover:text-secondary disabled:text-tertiary gap-2 mt-6"
                data-quantum="CTA - Section - Homepage Tout - 50/50 PROMOS ALL OTHER REGIONS Position 2"
              >
                <span>SHOP NOW</span>
              </button>
            </div>
            <img
              loading="eager"
              decoding="async"
              alt="THE BEST UNDERWEAR BUNDLE"
              sizes="50vw"
              className="inline-block w-full h-full object-cover lg:block"
              src={pimg}
              
            />
            <img
              loading="lazy"
              decoding="async"
              alt="THE BEST UNDERWEAR BUNDLE"
              sizes="auto, 100vw"
              className="inline-block w-full h-full object-cover lg:hidden"
              src={pimg}
            />
          </Link>
        </section>
      </div>
    </section>
  );
};

export default SplitTout;