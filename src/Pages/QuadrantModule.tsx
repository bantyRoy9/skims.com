import React from 'react';
import { pimg2 } from '../Utils/baseUrl';
import { Link } from 'react-router-dom';

const QuadrantModule: React.FC = () => {
  return (
    <section className="quadrant-module">
      <section className="pb-10">
        <div className="text-center w-full grid grid-cols-2 md:grid-cols-4">
          {/* Clothing */}
          <Link
            className="select-none hover:cursor-pointer focus:outline-none relative text-inherit text-center flex flex-col"
            to={"#"}
          >
            <div className="relative aspect-w-[79] aspect-h-[100]">
              <img
                loading="eager"
                decoding="async"
                alt=""
                sizes="(max-width: 768px) 50vw, 25vw"
                className="inline-block w-full h-full object-cover"
                src={pimg2}
              />
            </div>
            <div className="inline-block mt-4 mb-2 relative px-2 text-left">
              <button
                type="button"
                className="flex justify-center items-center font-primary tracking-[0.04em] leading-custom-snug transition-colors w-auto px-0 pb-0 text-base leading-none bg-white border border-white text-primary hover:text-secondary disabled:text-tertiary gap-2 hover:underline underline-offset-4"
                data-quantum="CTA - Section - Quadrant Module - MAIN QUADS Position 1"
              >
                <span>CLOTHING</span>
              </button>
            </div>
          </Link>

          {/* Bras */}
          <Link
          to={"#"}
            className="select-none hover:cursor-pointer focus:outline-none relative text-inherit text-center flex flex-col"
            >
            <div className="relative aspect-w-[79] aspect-h-[100]">
              <img
                loading="eager"
                decoding="async"
                alt=""
                sizes="(max-width: 768px) 50vw, 25vw"
                className="inline-block w-full h-full object-cover"
                src="https://skims-sanity.imgix.net/images/hfqi0zm0/production/409fbb976d073f2c8c5d37b4a77103489998e1fd-706x894.jpg?auto=format&ixlib=react-9.10.0&w=1946"
              />
            </div>
            <div className="inline-block mt-4 mb-2 relative px-2 text-left">
              <button
                type="button"
                className="flex justify-center items-center font-primary tracking-[0.04em] leading-custom-snug transition-colors w-auto px-0 pb-0 text-base leading-none bg-white border border-white text-primary hover:text-secondary disabled:text-tertiary gap-2 hover:underline underline-offset-4"
                data-quantum="CTA - Section - Quadrant Module - MAIN QUADS Position 2"
              >
                <span>BRAS</span>
              </button>
            </div>
          </Link>

          {/* Shapewear */}
          <Link
            className="select-none hover:cursor-pointer focus:outline-none relative text-inherit text-center flex flex-col"
            to={"#"}
          >
            <div className="relative aspect-w-[79] aspect-h-[100]">
              <img
                loading="eager"
                decoding="async"
                alt=""
                sizes="(max-width: 768px) 50vw, 25vw"
                className="inline-block w-full h-full object-cover"
                src="https://skims-sanity.imgix.net/images/hfqi0zm0/production/409fbb976d073f2c8c5d37b4a77103489998e1fd-706x894.jpg?auto=format&ixlib=react-9.10.0&w=1946"
              />
            </div>
            <div className="inline-block mt-4 mb-2 relative px-2 text-left">
              <button
                type="button"
                className="flex justify-center items-center font-primary tracking-[0.04em] leading-custom-snug transition-colors w-auto px-0 pb-0 text-base leading-none bg-white border border-white text-primary hover:text-secondary disabled:text-tertiary gap-2 hover:underline underline-offset-4"
                data-quantum="CTA - Section - Quadrant Module - MAIN QUADS Position 3"
              >
                <span>SHAPEWEAR</span>
              </button>
            </div>
          </Link>

          {/* Sleep */}
          <Link
            className="select-none hover:cursor-pointer focus:outline-none relative text-inherit text-center flex flex-col"
           to={"#"}
          >
            <div className="relative aspect-w-[79] aspect-h-[100]">
              <img
                loading="eager"
                decoding="async"
                alt=""
                sizes="(max-width: 768px) 50vw, 25vw"
                className="inline-block w-full h-full object-cover"
                src="https://skims-sanity.imgix.net/images/hfqi0zm0/production/409fbb976d073f2c8c5d37b4a77103489998e1fd-706x894.jpg?auto=format&ixlib=react-9.10.0&w=1946"
              />
            </div>
            <div className="inline-block mt-4 mb-2 relative px-2 text-left">
              <button
                type="button"
                className="flex justify-center items-center font-primary tracking-[0.04em] leading-custom-snug transition-colors w-auto px-0 pb-0 text-base leading-none bg-white border border-white text-primary hover:text-secondary disabled:text-tertiary gap-2 hover:underline underline-offset-4"
                data-quantum="CTA - Section - Quadrant Module - MAIN QUADS Position 4"
              >
                <span>SLEEP</span>
              </button>
            </div>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default QuadrantModule;