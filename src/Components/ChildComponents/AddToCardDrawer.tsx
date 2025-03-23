import { useState } from 'react';
import { IconRightArrow } from '../../Assests/Icons'
import { useAddToCart } from '../../Utils/customHooks/useAddToCart'
import AddToCartButton from '../Buttons/AddToCartButton'
import { IProduct } from '../../Redux/type';

type Props = {}
interface ProductActionsProps {
  onMoveToWishlist: () => void;
  onRemove: () => void;
}
interface QuantityControlProps {
  quantity: number;
  onDecrease: (e:any) => void;
  onIncrease: (e:any) => void;
}
interface ProductDetailsProps {
  title: string;
  price: string;
  size: string;
  color: string;
  offerText: string;
}
interface ProductImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt, width, height }) => {
  return (
    <img
      alt={alt}
      decoding="async"
      height={height}
      loading="lazy"
      src={src}
      width={width}
      style={{ aspectRatio: '1 / 1' }}
    />
  );
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ title, price, size, color, offerText }) => {
  return (
    <div>
      <span>
        <p className="text-xs text-sienna font-quinary mb-1.5">HEAVYWEIGHT COTTON</p>
        <h2 className="text-sm text-primary text-left font-primary leading-none mb-1.5 font-bold">{title}</h2>
      </span>
      <div className="text-base font-secondary mb-1 whitespace-wrap text-wrap">
        <span className="text-brown">{price}</span>
      </div>
      <p className="text-xs text-brown fadeIn mt-2 pb-0 !whitespace-normal">{offerText}</p>
      <div className="mt-1">
        <p className="text-xs text-brown font-quinary uppercase">
          <span className="pr-1">Size</span>
          <span className="font-bold">{size}</span>
        </p>
      </div>
      <div className="mt-1">
        <p className="text-xs text-brown font-quinary uppercase">
          <span className="pr-1">Color</span>
          <span className="font-bold">{color}</span>
        </p>
      </div>
    </div>
  );
};

const QuantityControl: React.FC<QuantityControlProps> = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div className="cart-line-quantiy items-center flex justify-between border border-grayDarker h-10 px-2 gap-3 w-full">
      <button aria-label="Decrease quantity" className="flex items-center justify-center p-1 disabled:cursor-not-allowed" onClick={onDecrease}>
        {quantity>1 ? <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"><path d="M2 9H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>:
        <svg viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
          <path d="M10.9082 7.36364L10.604 15.2727M6.39598 15.2727L6.09178 7.36364M14.8516 4.54323C15.1521 4.58862 15.4516 4.63718 15.75 4.68887M14.8516 4.54323L13.9132 16.7426C13.8339 17.7727 12.9749 18.5682 11.9417 18.5682H5.05829C4.02509 18.5682 3.16608 17.7727 3.08684 16.7426L2.14843 4.54323M14.8516 4.54323C13.8441 4.39109 12.825 4.27457 11.7955 4.19502M1.25 4.68887C1.54841 4.63718 1.8479 4.58862 2.14843 4.54323M2.14843 4.54323C3.15589 4.39109 4.17504 4.27457 5.20455 4.19502M11.7955 4.19502V3.38993C11.7955 2.35352 10.9952 1.48827 9.9593 1.45513C9.47477 1.43963 8.9883 1.43182 8.5 1.43182C8.0117 1.43182 7.52523 1.43963 7.0407 1.45513C6.00482 1.48827 5.20455 2.35352 5.20455 3.38993V4.19502M11.7955 4.19502C10.708 4.11098 9.609 4.06819 8.5 4.06819C7.391 4.06819 6.29199 4.11098 5.20455 4.19502" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>}
      </button>
      <div className="flex items-center justify-center text-center font-secondary text-sm mt-0.5 w-5">{quantity}</div>
      <button aria-label="Increase quantity" className="flex items-center justify-center p-1 disabled:cursor-not-allowed" onClick={onIncrease}>
        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
          <path d="M9 2V16M16 9L2 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
    </div>
  );
};

const ProductCard: React.FC<{product:IProduct[]}> = ({product}) => {
  const {addProduct} = useAddToCart()
  return (
    <div className="w-full">
      <div className="block mb-1">
        <div className="flex flex-col w-full">
          <div role="row" className="relative flex flex-wrap border-t border-grayDarker py-[18px] px-[24px] last:border-b md:px-0">
            <div className="flex w-full md:px-6 lg:px-0">
              <div role="cell" className="self-center md:basis-[158px] min-w-[93px] basis-[170px] pl-[20px] md:min-w-[129px] lg:min-w-[153px] lg:basis-[177px]">
                <ProductImage src={product[0].image_url} alt="GUNMETAL / XS" width={130} height={130}/>
              </div>
              <div role="cell" className="basis-[calc(100%-88px)] lg:flex ml-[24px] min-h-[40px] flex-col justify-center pr-[20px] md:ml-[22px]">
                <ProductDetails title={product[0].name} price={`₹${product[0].base_price}`} size="XS" color="Gunmetal" offerText="Add 2 more to your cart and get 1 free"/>
                <div className="lg:flex lg:flex-col mt-2">
                  <div className="text-xs text-brown">
                    <QuantityControl quantity={product.length} onDecrease={(e)=>addProduct(e,-1,product[0])} onIncrease={(e)=>addProduct(e,1,product[0])} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
interface EmptyBagMessageProps {
  onShopBestsellers: () => void; // Callback function for the button click
}
const EmptyBagMessage: React.FC<EmptyBagMessageProps> = ({ onShopBestsellers }) => {
  return (
    <div className="px-6">
      {/* Heading */}
      <h1 className="text-brown text-center font-primary mx-auto my-0 max-w-[200px] font-bold tracking-[0.05em] lg:leading-[28px] text-[16px]">
        Oops...
      </h1>

      {/* Description */}
      <p className="text-brown mx-auto mb-[20px] mt-0 max-w-[200px] text-[14px] leading-[25.9px] lg:leading-[1.85]">
        You have no items in your bag
      </p>

      {/* Button */}
      <button
        type="button"
        className="flex justify-center items-center font-primary tracking-[0.04em] leading-custom-snug transition-colors w-full px-4 pt-4 pb-3.5 text-base leading-none bg-white text-primary border border-primary hover:text-secondary hover:border-secondary disabled:text-tertiary disabled:border-tertiary gap-2"
        onClick={onShopBestsellers}
      >
        <span>shop bestsellers</span>
      </button>
    </div>
  );
};
const AddToCardDrawer = (props: Props) => {
  const { addtocard, calculateTotalMRP } = useAddToCart();
  const handleShopBestsellers = () => {
    window.location.href = '/'
  };  
  return (
    (addtocard && Object.keys(addtocard).length > 0) ?
      <div>
        {Object.keys(addtocard).map(el =><ProductCard product={addtocard[el]}/>)}
        <div className="px-5 pt-2 pb-5 bg-white">
          <button className="flex items-center justify-center px-4 pt-4 pb-3.5 transition-colors font-primary text-base leading-none border border-primary bg-primary text-white hover:bg-secondary hover:border-secondary disabled:bg-white disabled:text-tertiary disabled:border-tertiary !w-full">
            <span><span>₹{calculateTotalMRP(addtocard)}</span> - Checkout</span>
          </button>
          <a className="mt-4 w-full text-center font-quinary text-xs underline transition-colors text-primary hover:text-secondary underline-offset-4 hidden md:block" title="View Bag" color="brown" data-discover="true" href="/en-in/cart">View Bag</a>
        </div>
      </div>
      : <EmptyBagMessage onShopBestsellers={handleShopBestsellers} />
  )
}

export default AddToCardDrawer