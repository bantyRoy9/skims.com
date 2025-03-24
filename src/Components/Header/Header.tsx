import React from 'react';
import Logo from './Logo';
import HeaderLinks from './HeaderLinks';
import RightSide from './RightSide';
import Drawer from '../Drawer';
import { useAddToCart } from '../../Utils/customHooks/useAddToCart';
import { AddToCardDrawer } from '../ChildComponents';
import { useAppDispatch } from '../../Redux/Store';
import { setSetIsDrawOpen } from '../../Redux/Store.Reducers';

const Header: React.FC = () => {
    const {isDrawOpen} = useAddToCart();
    const dispatch = useAppDispatch();
  return (
    <>
    <Drawer headerName='My Cart' position={"bottom"} isOpen={isDrawOpen} onClose={() => dispatch(setSetIsDrawOpen(false))} children={<AddToCardDrawer/>}/>
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
    </>
  );
};

export default Header;