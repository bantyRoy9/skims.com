import React from 'react';
import { HorizontalCardList, HorizontalImageSlider } from '../Components';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import { dd } from '../Utils/baseUrl';
import ProductCard from '../Components/Cards/ProductCard';
const ProductHeader: React.FC = () => {
  return (
    <div className="px-5 lg:px-0">
      <Header />
      <ReviewStars />
    </div>
  );
};
const Header: React.FC = () => {
  return (
    <header className="flex space-between">
      <div className="flex items-center justify-between w-full flex-wrap">
        <CategoryLink />
        <ProductTitle />
        <ProductPrice />
      </div>
    </header>
  );
};
const CategoryLink: React.FC = () => {
  return (
    <p className="shrink-0 grow-0 basis-full text-xs font-quinary text-gray-800 mb-3">
      <a
        href="/collections/heavyweight-cotton"
        className="select-none hover:cursor-pointer text-brown text-xs"
        title=""
        target="_self"
        rel=""
      >
        HEAVYWEIGHT COTTON
      </a>
    </p>
  );
};
const ProductTitle: React.FC = () => {
  return (
    <h1 className="text-xl text-brown text-left font-primary leading-none mb-0">
      MENS RELAXED LONG SLEEVE T-SHIRT
    </h1>
  );
};
const ProductPrice: React.FC = () => {
  return (
    <p className="text-xl text-brown text-left font-primary leading-none mb-0 shrink-0">
      <span className="whitespace-nowrap" data-testid="product-current-price">
        <span>₹</span>5,400
      </span>
    </p>
  );
};

const ReviewStars: React.FC = () => {
  return (
    <span className="pv-review-stars inline-block min-h-6 w-full font-quinary [&_span]:text-xs [&_span]:underline [&_span]:underline-offset-4">
      <div data-oke-star-rating="" data-oke-reviews-product-id="shopify-10246752534881" data-oke-rendered="">
        <div data-oke-reviews-version="0.74.1" data-oke-container="" className="okeReviews oke-sr oke-sr--hidden">
          <script type="application/json" data-oke-metafield-data="">
            {JSON.stringify({ averageRating: "0", reviewCount: 0 })}
          </script>
        </div>
      </div>
    </span>
  );
};
interface ColorSwatch {
  id: string;
  value: string;
  label: string;
  checked?: boolean;
}

interface ColorSwatchesProps {
  title: string;
  colors: ColorSwatch[];
}
const ProductDetails: React.FC = () => {
  return (
    <div className="product-details pb-10">
      <div className="pt-10">
        <div>
          <ul className="flex relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:border-b before:border-grayDarker w-full overflow-x-auto no-scrollbar" role="tablist">
            <li className="z-10">
              <button className="px-6 py-4 border-b border-primary" role="tab" aria-selected="true" aria-controls="productDetails-0" id="productDetailsTab-0" tabIndex={0}>
                <h2 className="text-sm text-primary text-center font-primary leading-none whitespace-nowrap">Details</h2>
              </button>
            </li>
            <li className="z-10">
              <button className="px-6 py-4 border-b border-grayDarker" role="tab" aria-selected="false" aria-controls="productDetails-1" id="productDetailsTab-1" tabIndex={-1}>
                <h2 className="text-sm text-sienna text-center font-primary leading-none whitespace-nowrap">Fit & Fabric</h2>
              </button>
            </li>
            <li className="z-10">
              <button className="px-6 py-4 border-b border-grayDarker" role="tab" aria-selected="false" aria-controls="productDetails-2" id="productDetailsTab-2" tabIndex={-1}>
                <h2 className="text-sm text-sienna text-center font-primary leading-none whitespace-nowrap">Shipping & Returns</h2>
              </button>
            </li>
          </ul>
          <div className="p-6 font-tertiary text-primary text-xs tabbed-details" id="productDetails-0" role="tabpanel" aria-labelledby="productDetailsTab-0" tabIndex={0}>
            <div>
              <p>As essential as tees come. This relaxed long sleeve crewneck is made from 100% heavyweight cotton that’s soft and breathable. Features rib details at the neck and cuffs. Styled with casual or elevated looks, this style won’t let you down. Fits true to size.</p>
            </div>
          </div>
          <div className="p-6 font-tertiary text-primary text-xs tabbed-details hidden" id="productDetails-1" role="tabpanel" aria-labelledby="productDetailsTab-1" tabIndex={0}>
            <ul className="pl-[18px] mb-[18px]">
              <li className="list-disc pb-1 capitalize">Rib crew neckline, Long sleeves, Relaxed fit, Rib cuffs, Standard length</li>
              <li className="list-disc pb-1 capitalize">Ade Is Size M And 6’ 2" (188cm), Wearing SKIMS M</li>
              <li className="list-disc pb-1 capitalize">100% Cotton</li>
              <li className="list-disc pb-1 capitalize">Machine wash cold with like colors, Do not bleach, Tumble dry low, Cool iron, Do not dry clean</li>
              <li className="list-disc pb-1 capitalize">Imported</li>
            </ul>
          </div>
          <div className="p-6 font-tertiary text-primary text-xs tabbed-details hidden" id="productDetails-2" role="tabpanel" aria-labelledby="productDetailsTab-2" tabIndex={0}>
            <div className="h-auto pt-[5px] pb-[20px] text-brown">
              <div className="pl-[30px]">
                <h3 className="relative mb-4 text-base lg:!text-lg">
                  <div className="absolute top-0 -translate-x-[110%]">
                    <div className="flex h-[24px] w-[24px] items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"></path>
                      </svg>
                    </div>
                  </div>
                  SHIPPING POLICY
                </h3>
                <p className="mb-6 text-p font-normal">
                  Please expect a processing time of 2-3 business days for orders placed with standard shipping.
                  <br /><br />
                  Once shipped your order should arrive within 5 - 10 business days
                  <br /><br />
                  Pre-pay duties and taxes at checkout
                </p>
              </div>
              <div className="pl-[30px]">
                <h3 className="relative mb-4 text-base lg:!text-lg">
                  <div className="absolute top-0 -translate-x-[110%]">
                    <div className="flex h-[24px] w-[24px] items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z"></path>
                      </svg>
                    </div>
                  </div>
                  RETURN POLICY
                </h3>
                <p className="mb-6 text-p font-normal">
                  On domestic orders, we offer 30-day free returns for store credit. For a refund back to the original payment method, a $6 return shipping fee will apply. Items marked final sale are not eligible for return.
                  <br /><br />
                  Products must be returned unworn, unwashed, in their original condition and with all tags and liners attached.
                  </p></div></div></div></div></div></div>)}
const sizes = ['XS', 'S', 'M', 'L', 'XL', '2X', '3X', '4X', '5X'];
const AddToCartButton: React.FC = () => {
  return (
    <div>
      <form method="post" action="/cart">
        <input type="hidden" name="cartFormInput" value={JSON.stringify({ action: "LinesAdd", inputs: { lines: [], totalLimitEnabled: true, totalQuantityLimit: 25 } })} />
        <input name="analytics" type="hidden" value="" />
        <div>
          <button
            type="submit"
            className="flex justify-center items-center font-primary tracking-[0.04em] leading-custom-snug px-4 pt-4 pb-3.5 text-base leading-none border border-primary bg-primary text-white hover:bg-secondary hover:border-secondary disabled:bg-white disabled:text-tertiary disabled:border-tertiary gap-2 w-full mt-10 lg:mt-5 transition-colors duration-300"
            disabled
            style={{ backgroundColor: 'rgb(236, 238, 236)', color: 'rgb(45, 42, 38)', borderColor: 'rgb(236, 238, 236)' }}
          >
            <span>Select A Size</span>
          </button>
        </div>
      </form>
      <form method="post" action="/cart">
        <input type="hidden" name="cartFormInput" value={JSON.stringify({ action: "LinesAdd", inputs: { lines: [], totalLimitEnabled: true, totalQuantityLimit: 25 } })} />
        <input name="analytics" type="hidden" value="" />
        <div>
          <button
            type="submit"
            className="flex justify-center items-center font-primary tracking-[0.04em] leading-custom-snug transition-colors px-4 pt-4 pb-3.5 text-base leading-none bg-white text-primary border border-primary hover:text-secondary hover:border-secondary disabled:text-tertiary disabled:border-tertiary gap-2 w-full mt-10 lg:mt-5"
            disabled
            style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(45, 42, 38)' }}
          >
            <span>Buy 2, Get 1 Free</span>
          </button>
        </div>
      </form>
    </div>
  );
};
const SizeSelector: React.FC = () => {
  return (
    <div className="w-full">
      <div className="relative first:mt-0 mt-3 overflow-x-auto">
        <div className="flex items-center justify-between sticky left-0 uppercase">
          <p className="text-xs text-brown font-quinary">Size</p>
          <button
            type="button"
            className="flex items-center tracking-[0.04em] leading-custom-snug transition-colors w-52 px-4 pt-4 pb-3.5 hover:text-secondary disabled:text-tertiary border-none gap-2 text-xs underline underline-offset-4 font-quinary text-brown bg-white hover:bg-white border-white hover:border-white uppercase justify-end !pr-0"
          >
            <span>Size Guide</span>
          </button>
        </div>
        <fieldset>
          <legend className="sr-only">Size</legend>
          <ul id="sizeSelection" className="flex list-none pb-2 pt-6 w-auto gap-1 h-16">
            {sizes.map((size) => (
              <li key={size} className="pb-0">
                <label htmlFor={`Option-0-${size}`} className="relative mb-0 inline-block">
                  <input
                    id={`Option-0-${size}`}
                    type="radio"
                    name="options[Size]"
                    className="appearance-none flex items-center justify-center relative rounded-none border border-solid border-grayDarker text-brown cursor-pointer text-center h-8 w-14 text-small hover:[&~.tooltip]:left-0"
                    value={size}
                  />
                  <span className="pointer-events-none absolute top-1/2 left-1/2 block w-10 -translate-x-[50%] -translate-y-[50%] text-center font-quinary text-brown text-xs text-small">
                    {size}
                  </span>
                  <span className="sr-only">Select size {size}</span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      </div>
    </div>
  );
};
const ColorSwatches: React.FC<ColorSwatchesProps> = ({ title, colors }) => {
  return (
    <div>
      <header>
        <h2 className="text-xs text-brown font-quinary">{title}</h2>
      </header>
      <div className="relative block w-full min-w-0">
        <legend className="sr-only">{title}</legend>
        <div className="flex lg:px-0 w-full overflow-x-visible no-scrollbar overflow-y-clip pt-6 pb-2 mx-0 md:mt-0 md:!pt-4 md:overflow-visible px-0">
          {colors.map((color) => (
            <div key={color.id} className="relative text-center flex items-center justify-center overflow-visible w-8 h-8 md:px-0" style={{ color: color.value }}>
              <input
                id={color.id}
                className="absolute left-0 top-0 bottom-0 right-0 opacity-0"
                type="radio"
                value={color.value}
                defaultChecked={color.checked}
              />
              <label
                htmlFor={color.id}
                className="relative mb-1 mt-1 inline-block cursor-pointer h-6 w-6"
                style={{ backgroundColor: color.value, outlineColor: color.value }}
              >
                <span className="relative z-[3] block h-full"></span>
                <span className="sr-only">Select {color.label} swatch</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const ProductForm: React.FC = () => {
  return (
    <div className="product-form">
      <div className="w-full">
        <div className="md:flex md:flex-col pb-5">
          <ColorSwatches title="Limited Edition" colors={[
            { id: 'gunmetal5959982902362133', value: '#797979', label: 'gunmetal' },
            { id: 'espresso2268559350250996', value: '#352a2a', label: 'espresso' },
          ]} />
        </div>
        <div className="md:flex md:flex-col pb-5">
          <ColorSwatches title="Classic Shades" colors={[
            { id: 'chalk6052756567098372', value: '#ECEEEC', label: 'chalk', checked: true },
            { id: 'obsidian13298339293662442', value: '#3B3A3C', label: 'obsidian' },
          ]} />
        </div>
        <SizeSelector />
        <AddToCartButton />
      </div>
    </div>
  );
};
const PromoBanner: React.FC = () => {
  return (
    <div className="flex justify-center md:justify-start pb-2 lg:pb-0">
      <div className="text-brown py-2 px-3 mt-4 lg:mb-3 inline-block border border-grayDarker">
        <div className="[&>div]:mb-0 [&_b]:font-bold [&_*]:text-xs [&_*]:font-quinary [&_*]:!leading-5 opacity-70 [&_u]:underline-offset-4 [&_u]:block [&_u]:mb-1.5 [&_center]:text-left">
          <p>
            <center>
              <b>BUY 2, GET 1 FREE</b>
              <br />
              <u>
                <a href="https://skims.com/collections/tees-deal">
                  For a limited time, mix, match, and save on the tees and tanks that can’t be topped
                </a>
              </u>
            </center>
          </p>
        </div>
      </div>
    </div>
  );
};
const Product: React.FC = () => {
  return (
    <div className="px-5 lg:px-0">
      <PromoBanner />
      <ProductForm />
      <ProductDetails />
    </div>
  );
};


const images = [
    {
      src: "https://skims.imgix.net/s/files/1/0259/5448/4284/files/LS-LST-7893M-GUN-SB-SKIMS-MENS_0005-FR.jpg?v=1738122119&auto=format&w=106&h=106&ixlib=react-9.10.0",
      alt: "HEAVYWEIGHT COTTON MENS RELAXED LONG SLEEVE T-SHIRT | GUNMETAL ON A MODEL FRONT VIEW | FOCUS: 0.0, 1.0, 0.9",
    },
    {
      src: "https://skims.imgix.net/s/files/1/0259/5448/4284/files/LS-LST-7893M-GUN-SB-SKIMS-MENS_0043-SD.jpg?v=1738122119&auto=format&w=106&h=106&ixlib=react-9.10.0",
      alt: "HEAVYWEIGHT COTTON MENS RELAXED LONG SLEEVE T-SHIRT | GUNMETAL ON A MODEL SIDE VIEW | FOCUS: 0.0, 1.0, 0.9",
    },
    {
      src: "https://skims.imgix.net/s/files/1/0259/5448/4284/files/LS-LST-7893M-GUN-SB-SKIMS-MENS_0029-FR.jpg?v=1738122119&auto=format&w=106&h=106&ixlib=react-9.10.0",
      alt: "HEAVYWEIGHT COTTON MENS RELAXED LONG SLEEVE T-SHIRT | GUNMETAL ON A MODEL FRONT VIEW | FOCUS: 0.0, 1.0, 0.9",
    },
    {
      src: "https://skims.imgix.net/s/files/1/0259/5448/4284/files/LS-LST-7893M-GUN-SB-SKIMS-MENS_0034-FR.jpg?v=1738122119&auto=format&w=106&h=106&ixlib=react-9.10.0",
      alt: "HEAVYWEIGHT COTTON MENS RELAXED LONG SLEEVE T-SHIRT | GUNMETAL ON A MODEL FRONT VIEW | FOCUS: 0.0, 1.0, 0.9",
    },
    {
      src: "https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-HEAVYWEIGHTCOTTON-GUN-SW.jpg?v=1738119933&auto=format&w=106&h=106&ixlib=react-9.10.0",
      alt: "HEAVYWEIGHT COTTON MENS RELAXED LONG SLEEVE T-SHIRT | GUNMETAL ADDITIONAL FABRIC DETAILS",
    },
    {
      src: "https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-LS-LST-7893M-GUN.jpg?v=1738122119&auto=format&w=106&h=106&ixlib=react-9.10.0",
      alt: "HEAVYWEIGHT COTTON MENS RELAXED LONG SLEEVE T-SHIRT | GUNMETAL FLAT ON A WHITE BACKGROUND | FLT",
    },
  ];
  interface Product {
    id: string;
    title: string;
    price: string;
    color: string;
    imageUrl: string;
    badge?: string;
  }
  
  interface ProductCardProps {
    product: Product;
  }
  
  interface ProductCarouselProps {
    products: Product[];
  }
  
  // ProductCard Component
  const ProductCards: React.FC<ProductCardProps> = ({ product }) => {
    return (
      <div
        className="swiper-slide cursor-pointer bg-white h-full pt-4 pl-4 pr-4 w-[15.625rem] min-h-[22.125rem] md:min-h-[27rem] md:w-[18.2rem]"
        aria-roledescription="product card"
        role="group"
        style={{ marginRight: '16px' }}
      >
        <div className="relative h-full w-full flex flex-col flex-1 select-none">
          {product.badge && (
            <div id={`badge-${product.id}`}>
              <div
                className="border border-primary rounded-sm text-center bg-primary text-white py-0.5 px-1.5 absolute top-0 left-0 z-10"
                role="tooltip"
              >
                <p className="font-primary capitalize whitespace-nowrap text-xs mt-[.063rem]">
                  {product.badge}
                </p>
              </div>
            </div>
          )}
          <div className="relative cursor-pointer mx-auto w-full">
            <div className="aspect-w-1 aspect-h-1">
              <a
                className="flex items-center"
                title={product.title}
                data-discover="true"
                href={`/products/${product.id}`}
              >
                <img
                  loading="eager"
                  decoding="async"
                  alt={product.title}
                  className="inline-block w-full h-full object-cover !h-[205px] max-w-[1023px]"
                  height="205"
                  src={product.imageUrl}
                  srcSet={`${product.imageUrl}&dpr=1&q=75 1x, ${product.imageUrl}&dpr=2&q=50 2x, ${product.imageUrl}&dpr=3&q=35 3x, ${product.imageUrl}&dpr=4&q=23 4x, ${product.imageUrl}&dpr=5&q=20 5x`}
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-baseline justify-between w-full flex-wrap">
              <h2 className="text-sm text-brown text-left font-primary leading-none flex-1 min-w-0">
                {product.title}
              </h2>
              <p className="text-sm text-brown text-right leading-none mb-0 shrink-0 self-start font-secondary">
                <span className="whitespace-nowrap">{product.price}</span>
              </p>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <p className="text-xs text-onyx m-0 font-quinary uppercase">
                Color: <span>{product.color}</span>
              </p>
              <div className="flex justify-between">
                <div className="relative mt-[10px] flex-1">
                  <div className="inline-flex flex-col items-start w-full">
                    <label
                      className="font-quinary tracking-wide text-xs leading-normal mb-2 text-primary sr-only"
                      htmlFor={`select-Size-${product.id}`}
                    >
                      Select Size
                    </label>
                    <div className="relative w-full">
                      <button
                        className="relative w-full flex items-center appearance-none h-9 px-2 grow py-2 pl-3 pr-8 font-p text-sm tracking-normal leading-normal text-primary border disabled:border-tertiary focus:border-sienna focus-within:border-sienna border-primary bg-white disabled:text-tertiary cursor-default disabled:cursor-not-allowed outline-none ring-0"
                        id={`select-Size-${product.id}`}
                        type="button"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                      >
                        <span className="block truncate pr-8 font-quinary text-xs">
                          Select Size
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-brown transform transition-transform duration-150 ease-in-out rotate-0"
                            aria-hidden="true"
                          >
                            <path
                              d="M13 5.5L8 10.5L3 5.5"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
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
  
  // ProductCarousel Component
  const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
    return (
      <div
        className="swiper swiper-initialized swiper-horizontal completethelook-swiper w-full pb-0 swiper-backface-hidden"
        aria-roledescription="Carousel displaying products"
        aria-label="Product carousel: Navigate through products"
        role="region"
      >
        <div
          className="swiper-wrapper"
          aria-live="polite"
          style={{ transitionDuration: '0ms', transitionDelay: '0ms' }}
        >
          {products.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
    );
  };
  
  // Example Usage
  const products: Product[] = [
    {
      id: '7202127970436',
      title: 'JERSEY LOUNGE MENS JOGGER | OBSIDIAN',
      price: '₹7,300',
      color: 'obsidian',
      imageUrl:
       'https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-TP-ZUP-5417M-OBS.jpg?v=1710447010&auto=format&ixlib=react-9.10.0&h=205&dpr=1&q=75',
      badge: 'Styled With',
    },
    // Add more products here
  ];
  
const ProductPage: React.FC = () => {
  images.map(el=>console.log(`${el.src.split("?")[0]}?auto=format&w=2000&h=2000&q=100`));
  
  return (<>
    <div className=' mt-20'>
      <Breadcrumbs/>
    
    <div className="flex flex-col pt-2 relative min-h-96 max-w-screen-2xl mx-auto lg:pt-0 lg:flex-row lg:flex-nowrap lg:justify-between lg:items-start md:px-5 gap-6">
      {/* Left Side - Product Images */}
      <div className="pb-24 hidden lg:flex lg:w-1/2 xl:w-7/12 sticky top-[100px] flex-1">
        <div className="h-full w-full flex flex-row justify-items-start gap-6 overflow-x-hidden border">
          <div className="w-28 overflow-auto">
            <div className="">
              <div className="" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                {/* Thumbnail Images */}
                {images.map((src, index) => (
                  <div key={index} className="" style={{ marginBottom: '10px' }}>
                    <img loading="eager" decoding="async" alt="" className="inline-block w-[106px] h-[106px] object-contain" width="106" height="106" src={src.src} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='flex-1 relative'>
            <HorizontalCardList>{images.map(el=>
                    <img loading="eager" decoding="async" alt="" className="object-cover w-[400px] h-[400px]" src={`${el.src.split("?")[0]}?auto=format&w=2000&h=2000&q=100`} />
              // <img  alt='' style={{width:'500px',height:'500px',objectFit:"cover"}}/>
              )}
              </HorizontalCardList>
          </div>
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="lg:w-1/2 xl:w-5/12 flex-1">
        <div className="w-full pt-0 pb-5 lg:min-h-[75vh]">
          <ProductHeader/>
          <Product/>
        </div>
      </div>
    </div>
    </div>
    <section className="w-full mt-4">
      <div className="flex items-center justify-start pl-5 md:!justify-center md:pl-0 mb-5 relative">
        <h2 className="text-xl text-brown text-center font-primary leading-none">Complete the Look</h2>
        </div>
        <div className="flex items-center w-full mx-auto relative !bg-grayLighter p-5">
    <ProductCarousel products={products} />
    <ProductCarousel products={products} />
    <ProductCarousel products={products} />
    <ProductCarousel products={products} />
    <ProductCarousel products={products} />
    <ProductCarousel products={products} />
    <ProductCarousel products={products} />
    <ProductCarousel products={products} />
    <ProductCarousel products={products} />
        </div>
      </section>
      <div className="section relative">
              <HorizontalCardList>{dd.map((el: any) => <ProductCard product={el} />)}</HorizontalCardList>
            </div>
            <div className="section relative">
                    <HorizontalCardList>{dd.map((el: any) => <ProductCard product={el} />)}</HorizontalCardList>
                  </div>
                  <div className="section relative">
                          <HorizontalCardList>{dd.map((el: any) => <ProductCard product={el} />)}</HorizontalCardList>
                        </div>
    </>
  );
};

export default ProductPage;