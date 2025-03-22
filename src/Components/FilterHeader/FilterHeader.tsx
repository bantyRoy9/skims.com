import React from 'react';

const FilterHeader: React.FC = () => {
  return (
    <div className="flex w-full sticky top-[80px] z-10 bg-white">
      <div className="flex flex-nowrap whitespace-nowrap md:whitespace-normal md:flex-wrap flex-auto md:flex-1 w-full">
        <div className="w-full py-4 md:py-5 border-b border-grayLighter">
          <div className="w-full overflow-y-hidden transition-all duration-300 ease-in-out transform-gpu h-auto opacity-100">
            <div className="flex flex-nowrap whitespace-nowrap md:whitespace-normal md:flex-wrap overflow-x-scroll md:overflow-x-auto pb-2 md:pb-0 ml-0">
              <button className="uppercase text-xs font-quinary mr-5">Sort</button>
              <button className="uppercase text-xs font-quinary mr-5">Size</button>
              <button className="uppercase text-xs font-quinary mr-5">Type</button>
              <button className="uppercase text-xs font-quinary mr-5">Color</button>
              <button className="uppercase text-xs font-quinary mr-5">Collection</button>
              <button className="uppercase text-xs font-quinary mr-5">Material</button>
              <button className="uppercase text-xs font-quinary mr-5">Sleeve Length</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterHeader;