import React from 'react';
import Logo from './Logo';
import HeaderLinks from './HeaderLinks';
import RightSide from './RightSide';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-[101] w-full">
      <div className="flex justify-center transition-colors bg-white">
        <div className="header flex items-center sticky top-0 z-[1] mx-3 w-full max-w-[1600px] justify-between px-[13px] text-center md:px-[15px] h-20">
          <div className="flex h-full w-full items-center">
            <Logo />
            <HeaderLinks />
            <RightSide />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;