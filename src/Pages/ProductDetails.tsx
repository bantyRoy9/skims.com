import React, { useState } from 'react';
import { HorizontalCardList } from '../Components';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import { dd } from '../Utils/baseUrl';
import ProductCard from '../Components/Cards/ProductCard';
import { useAddToCart } from '../Utils/customHooks/useAddToCart';
import { useProductDetails } from '../Utils/customHooks/useProductDetails';
import { IProduct } from '../Redux/type';
import clsx from 'clsx';


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
const ProductDetails: React.FC<{ product: IProduct }> = ({ product }) => {
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
            {/* <li className="z-10">
              <button className="px-6 py-4 border-b border-grayDarker" role="tab" aria-selected="false" aria-controls="productDetails-1" id="productDetailsTab-1" tabIndex={-1}>
                <h2 className="text-sm text-sienna text-center font-primary leading-none whitespace-nowrap">Fit & Fabric</h2>
              </button>
            </li>
            <li className="z-10">
              <button className="px-6 py-4 border-b border-grayDarker" role="tab" aria-selected="false" aria-controls="productDetails-2" id="productDetailsTab-2" tabIndex={-1}>
                <h2 className="text-sm text-sienna text-center font-primary leading-none whitespace-nowrap">Shipping & Returns</h2>
              </button>
            </li> */}
          </ul>
          <div className="p-6 font-tertiary text-primary text-xs tabbed-details" id="productDetails-0" role="tabpanel" aria-labelledby="productDetailsTab-0" tabIndex={0}>
            <div>
              <p>{product.productdetails.details}</p>
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
                </p></div></div></div></div></div></div>)
}
const sizes = ['XS', 'S', 'M', 'L', 'XL', '2X', '3X', '4X', '5X'];

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
const ProductForm: React.FC<{ product: IProduct }> = ({ product }) => {
  const { addProduct } = useAddToCart();
  return (
    <div className="product-form">
      <div className="w-full">
        <div className="md:flex md:flex-col pb-5">
          <ColorSwatches title="Limited Edition" colors={[
            { id: 'gunmetal5959982902362133', value: '#797979', label: 'gunmetal', checked: true },
            // { id: 'espresso2268559350250996', value: '#352a2a', label: 'espresso' },
          ]} />
        </div>
        <div className="md:flex md:flex-col pb-5">
          <ColorSwatches title="Classic Shades" colors={[
            { id: 'chalk6052756567098372', value: '#ECEEEC', label: 'chalk', checked: true },
            // { id: 'obsidian13298339293662442', value: '#3B3A3C', label: 'obsidian' },
          ]} />
        </div>
        <SizeSelector />
        <div>
          <button onClick={(e) => addProduct(e, 1, product)} className="flex justify-center items-center font-primary tracking-[0.04em] leading-custom-snug px-4 pt-4 pb-3.5 text-base leading-none border border-primary bg-primary text-white hover:bg-secondary hover:border-secondary disabled:bg-white disabled:text-tertiary disabled:border-tertiary gap-2 w-full mt-10 lg:mt-5 transition-colors duration-300" style={{ backgroundColor: "rgb(121, 121, 121)", color: "rgb(255, 255, 255)", borderColor: "rgb(121, 121, 121)" }}>
            <span>Add To Bag</span>
          </button>
          {/* <button className="flex justify-center items-center font-primary tracking-[0.04em] leading-custom-snug transition-colors px-4 pt-4 pb-3.5 text-base leading-none bg-white text-primary border border-primary hover:text-secondary hover:border-secondary disabled:text-tertiary disabled:border-tertiary gap-2 w-full mt-10 lg:mt-5" style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(45, 42, 38)' }}>
            <span>Buy 2, Get 1 Free</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};
interface Product {
  id: string;
  title: string;
  price: string;
  color: string;
  imageUrl: string;
  badge?: string;
  sizes?:string[]
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
    <div className="cursor-pointer bg-white h-full pt-4 pl-4 pr-4 w-[15.625rem] min-h-[22.125rem] md:min-h-[27rem] md:w-[18.2rem]">
      <div className="relative h-full w-full flex flex-col flex-1 gap-3 select-none">
        {product.badge ? (
          <div id={`badge-${product.id}`}>
            <div className="border border-primary rounded-sm text-center bg-primary text-white py-0.5 px-1.5 absolute top-0 left-0 z-10" role="tooltip">
              <p className="font-primary capitalize whitespace-nowrap text-xs mt-[.063rem]">
                {product.badge}
              </p>
            </div>
          </div>
        ):<div></div>}
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
                className="inline-block w-full h-full object-cover max-w-[1023px]"
                height="205"
                src={product.imageUrl}
                srcSet={`${product.imageUrl}&dpr=1&q=75 1x, ${product.imageUrl}&dpr=2&q=50 2x, ${product.imageUrl}&dpr=3&q=35 3x, ${product.imageUrl}&dpr=4&q=23 4x, ${product.imageUrl}&dpr=5&q=20 5x`}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full flex-1 mb-8">
          <div className="flex flex-1 items-baseline justify-between w-full flex-wrap">
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

// Example Usage
const products: Product[] = [
      {
        "title": "Fleece Lounge Mens Classic Straight Leg Pant",
        "price": "₹8,200",
        "color": "Washed Onyx",
        "sizes": ["Select Size", "XS", "S", "M"],
        "imageUrl": "https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-TP-ZUP-5417M-OBS.jpg?v=1710447010&auto=format&ixlib=react-9.10.0&h=205&dpr=1&q=75",
        "badge": "Styled With",
        "id":"1"
      },
      {
        "id":"1",
        "title": "Fleece Lounge Mens Relaxed Short",
        "price": "₹5,950",
        "color": "Washed Onyx",
        "sizes": ["Select Size", "XS", "S", "M"],
                "imageUrl": "https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-TP-ZUP-5417M-OBS.jpg?v=1710447010&auto=format&ixlib=react-9.10.0&h=205&dpr=1&q=75  ",

      },
      {
        "id":"1",
        "title": "Skims Stretch Mens 5\" Boxer Brief 3-Pack",
        "price": "₹4,850",
        "color": "Obsidian",
        "sizes": ["Select Size", "XS", "S", "M"],
                "imageUrl": "https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-TP-ZUP-5417M-OBS.jpg?v=1710447010&auto=format&ixlib=react-9.10.0&h=205&dpr=1&q=75  ",

      },
      {
        "id":"1",
        "title": "Mens Day Sock 3-Pack",
        "price": "₹2,650",
        "color": "Gunmetal Navy Multi",
        "sizes": ["Select Size"],
                "imageUrl": "https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-TP-ZUP-5417M-OBS.jpg?v=1710447010&auto=format&ixlib=react-9.10.0&h=205&dpr=1&q=75  ",

      }
    ]
  // Add more products here
const projectSection = [
    {
      "title": "Similar Styles",
      "products": [
        {
          "name": "Mens Classic Hoodie",
          "category": "Fleece Lounge",
          "price": "₹7,850"
        },
        {
          "name": "Mens Classic Hoodie",
          "category": "Outdoor Jersey",
          "price": "₹8,200"
        },
        {
          "name": "Mens Hoodie",
          "category": "Jersey Lounge",
          "price": "₹6,800"
        },
        {
          "name": "Mens Zip Up Hoodie",
          "category": "Jersey Lounge",
          "price": "₹7,250"
        },
        {
          "name": "Mens Relaxed Zip Up Hoodie",
          "category": "Fleece Lounge",
          "price": "₹8,750"
        },
        {
          "name": "Mens Classic Crewneck",
          "category": "Terry",
          "original_price": "₹3,200",
          "discounted_price": "₹2,800"
        }
      ]
    },
    {
      "title": "More in This Color",
      "products": [
        {
          "name": "Mens Relaxed Jogger",
          "category": "Fleece Lounge",
          "price": "₹8,200"
        },
        {
          "name": "Straight Leg Pant",
          "category": "Boyfriend Fleece",
          "price": "₹7,850"
        },
        {
          "name": "Crewneck",
          "category": "Boyfriend Fleece",
          "price": "₹6,400"
        },
        {
          "name": "Cargo Pant",
          "category": "Boyfriend Fleece",
          "price": "₹8,750"
        },
        {
          "name": "Bike Short",
          "category": "Outdoor",
          "original_price": "₹2,800",
          "discounted_price": "₹2,250"
        },
        {
          "name": "Track Jacket",
          "category": "Boyfriend Fleece",
          "price": "₹8,750"
        }
      ]
    },
    {
      "title": "Explore Collection",
      "products": [
        {
          "name": "Mens Relaxed Short",
          "category": "Fleece Lounge",
          "price": "₹5,950"
        },
        {
          "name": "Mens Classic Straight Leg Pant",
          "category": "Fleece Lounge",
          "price": "₹8,200"
        },
        {
          "name": "Mens Tapered Jogger",
          "category": "Fleece Lounge",
          "price": "₹7,850"
        },
        {
          "name": "Mens Classic Hoodie",
          "category": "Fleece Lounge",
          "price": "₹7,850"
        },
        {
          "name": "Mens Classic Crewneck",
          "category": "Fleece Lounge",
          "price": "₹7,250"
        },
        {
          "name": "Oversized Pant",
          "category": "Fleece Lounge",
          "price": "₹10,150"
        }
      ]
    },
    {
      "title": "We Think You'd Like",
      "products": [
        {
          "name": "Mens 5\" Boxer Brief",
          "category": "Skims Stretch",
          "price": "₹1,800"
        },
        {
          "name": "Mens Classic Long Sleeve T-Shirt",
          "category": "Skims Cotton",
          "price": "₹4,500"
        },
        {
          "name": "Cami Bodysuit",
          "category": "Fits Everybody",
          "price": "₹5,000"
        },
        {
          "name": "Long Sleeve T-Shirt",
          "category": "Cotton Jersey",
          "price": "₹5,250"
        },
        {
          "name": "Legging",
          "category": "Cotton Rib",
          "price": "₹5,250"
        }
      ]
    }
  ]

const ProductPage: React.FC = () => {
  let { product } = useProductDetails();
  const [activeImg, setActiveImg] = useState(0);
  return (<>
    <div className=' mt-20'>
      <Breadcrumbs />
      <div className=" flex flex-col pt-2 relative min-h-96 max-w-screen-2xl mx-auto lg:pt-0 lg:flex-row lg:flex-nowrap lg:justify-between lg:items-start md:px-5 gap-6">
        <div className="pb-24 flex lg sticky top-[100px] flex-1">
          <div className="w-full flex flex-row justify-items-start gap-6 overflow-x-hidden">
            <div className="w-28">
              <HorizontalCardList isVertical>{product.sliding_images.map((src, index) => (
                <div key={index} className="" style={{ marginBottom: '10px' }} onClick={() => setActiveImg(index)}>
                  <img loading="eager" decoding="async" alt="" className={clsx("inline-block w-[106px] h-[106px] object-contain cursor-pointer", activeImg === index ? 'border p-[1px]' : '')} width="106" height="106" src={src} />
                </div>
              ))}
              </HorizontalCardList>
            </div>
            <div className='flex-1 relative'>
              <HorizontalCardList lastIndex={product.sliding_images.length} setActiveImg={setActiveImg} >{[<img loading="eager" decoding="async" alt="" className="object-cover" src={`${product.sliding_images[activeImg].split("?")[0]}?auto=format&w=2000&h=2000&q=100`} />]}</HorizontalCardList>
            </div>
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="lg:w-1/2 xl:w-5/12 flex-1">
          <div className="w-full pt-0 pb-5 lg:min-h-[75vh]">
            <div className="px-5 lg:px-0">
              <header className="flex space-between">
                <div className="flex items-center justify-between w-full flex-wrap">
                  <p className="shrink-0 grow-0 basis-full text-xs font-quinary text-gray-800 mb-3">
                    <span className="select-none hover:cursor-pointer text-brown text-xs">{product.brandName}</span>
                  </p>
                  <h1 className="text-xl text-brown text-left font-primary leading-none mb-0">{product.name}</h1>
                  <p className="text-xl text-brown text-left font-primary leading-none mb-0 shrink-0">
                    <span className="whitespace-nowrap" data-testid="product-current-price"><span>₹</span>{product.base_price}</span>
                  </p>
                </div>
              </header>
            </div>
            <div className="px-5 lg:px-0">
              {product.promo && <div className="flex justify-center md:justify-start pb-2 lg:pb-0">
                <div className="text-brown py-2 px-3 mt-4 lg:mb-3 inline-block border border-grayDarker">
                  <div className="[&>div]:mb-0 [&_b]:font-bold [&_*]:text-xs [&_*]:font-quinary [&_*]:!leading-5 opacity-70 [&_u]:underline-offset-4 [&_u]:block [&_u]:mb-1.5 [&_center]:text-left">
                    <p>
                      <center>
                        <b>{product.promo.heading}</b>
                        <br />
                        <u>
                          <span>{product.promo.subheading}</span>
                        </u>
                      </center>
                    </p>
                  </div>
                </div>
              </div>}
              <ProductForm product={product} />
              <ProductDetails product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="w-full mt-4">
      <div className="flex items-center justify-start pl-5 md:!justify-center md:pl-0 mb-5 relative">
        <h2 className="text-xl text-brown text-center font-primary leading-none">Complete the Look</h2>
      </div>
      <div className="flex items-center justify-center w-full mx-auto relative !bg-grayLighter p-5">
        <HorizontalCardList isHidScrollerBtn>
        {products.map((product) => (
              <div className="w-full m-4">
                <ProductCards key={product.id} product={product} />
              </div>
        ))}
        </HorizontalCardList>
      </div>
    </section>
    {projectSection.map(el=>(
      <section className="w-full mt-4">
        <div className="flex items-center justify-start pl-5 md:!justify-center md:pl-0 mb-5 relative">
          <h2 className="text-xl text-brown text-center font-primary leading-none">{el.title}</h2>
        </div>
        <div>
          <HorizontalCardList>
            {el.products.map((ele: any) => <ProductCard product={ele}/>)}
          </HorizontalCardList>
        </div>
      </section>
    ))}
  </>
  );
};

export default ProductPage;