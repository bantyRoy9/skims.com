import React from 'react';

const SearchButton: React.FC = () => {
  return (
    <div data-headlessui-state="">
      <button className="flex items-center justify-center" type="button" aria-expanded="false" data-headlessui-state="" aria-controls="headlessui-popover-panel-:r1o:" id="headlessui-popover-button-:r1m:">
        <div className="flex pr-2 lg:hidden text-brown focus:ring-0 items-center border-b pb-1 border-[currentcolor]">
          <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:scale-[0.8]" color="#2D2A26">
            <title>Search</title>
            <path d="M11.1204 11.1047L16.9997 17M12.7159 6.87395C12.7159 10.118 10.0932 12.7479 6.85795 12.7479C3.6227 12.7479 1 10.118 1 6.87395C1 3.62986 3.6227 1 6.85795 1C10.0932 1 12.7159 3.62986 12.7159 6.87395Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <span className="uppercase text-primary font-quinary text-xs ml-1">Search</span>
        </div>
        <div className="hidden lg:block focus:ring-0">
          <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 p-[.188rem] outline-none" color="#2D2A26">
            <title>Search</title>
            <path d="M11.1204 11.1047L16.9997 17M12.7159 6.87395C12.7159 10.118 10.0932 12.7479 6.85795 12.7479C3.6227 12.7479 1 10.118 1 6.87395C1 3.62986 3.6227 1 6.85795 1C10.0932 1 12.7159 3.62986 12.7159 6.87395Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <div className="sr-only">Search</div>
        </div>
      </button>
    </div>
  );
};

const AccountButton: React.FC = () => {
  return (
    <a aria-label="Account" data-discover="true" className="hidden md:flex" href="/en-in/account">
      <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 p-[.188rem]">
        <path d="M16.9378 16.9995C16.9378 12.8745 13.5965 9.5332 9.47148 9.5332C5.34644 9.5332 2 12.8796 2 16.9995M12.8446 4.37738C12.8446 6.24265 11.3325 7.75475 9.46722 7.75475C7.60195 7.75475 6.08984 6.24265 6.08984 4.37738C6.08984 2.5121 7.60195 1 9.46722 1C11.3325 1 12.8446 2.5121 12.8446 4.37738Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </a>
  );
};

const WishlistButton: React.FC = () => {
  return (
    <a aria-label="Wishlist" data-discover="true" className="flex" href="/en-in/pages/wishlist">
      <div className="relative w-6 h"></div></a>)}

const RightSide: React.FC = () => {
  return (
    <div className="right-side flex justify-end items-center w-full lg:w-auto">
      <nav className="flex items-center gap-4 text-primary">
        <button type="button" className="flex items-center flex-nowrap min-w-10 3xl:!min-w-12 gap-1 hidden lg:inline-flex" title="India (INR ₹)">
          <img width="16" height="16" src="//gepi.global-e.com/content/images/flags/IN.png" alt="Country Picker country flag" />
          <span className="block font-primary text-base lgPlus:!text-xs 2xl:!text-sm 3xl:!text-base mt-0.5 text-primary">INR</span>
        </button>
        <SearchButton />
        <AccountButton />
        <WishlistButton />
        {/* <CartButton />
        <MenuButton /> */}
      </nav>
    </div>
  );
};

export default RightSide;