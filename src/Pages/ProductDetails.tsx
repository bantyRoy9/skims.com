import React from 'react';
import ProductGallery from '../Components/Product/ProductGalary';
import ProductZoom from '../Components/Product/ProductGalary';
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
const ProductPage: React.FC = () => {
  return (
    <div className="flex flex-col pt-2 relative min-h-96 max-w-screen-2xl mx-auto lg:pt-0 lg:flex-row lg:flex-nowrap lg:justify-between lg:items-start md:px-5">
      {/* Left Side - Product Images */}
      <div className="pb-24 hidden lg:flex lg:w-1/2 xl:w-7/12 sticky top-[100px]">
        <div className="h-full w-full flex flex-row justify-items-start gap-6 overflow-x-hidden">
          <div className="w-28">
            <div className="swiper swiper-initialized swiper-vertical swiper-free-mode swiper-watch-progress thumbnailSwiper swiper-backface-hidden swiper-thumbs">
              <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                {/* Thumbnail Images */}
                {[
                  'https://skims.imgix.net/s/files/1/0259/5448/4284/files/AP-TSH-0638-SPN-DB-SKIMS-LOUNGEWEAR_0015-FR.jpg?v=1740612795&auto=format&w=106&h=106&ixlib=react-9.10.0',
                  'https://skims.imgix.net/s/files/1/0259/5448/4284/files/AP-TSH-0638-SPN-DB-SKIMS-LOUNGEWEAR_0025-SD.jpg?v=1740612795&auto=format&w=106&h=106&ixlib=react-9.10.0',
                  'https://skims.imgix.net/s/files/1/0259/5448/4284/files/AP-TSH-0638-SPN-DB-SKIMS-LOUNGEWEAR_0023-SD.jpg?v=1740612795&auto=format&w=106&h=106&ixlib=react-9.10.0',
                  'https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-COTTON_20JERSEY-SPN-SW-2_85a03ed9-9bb8-449b-848f-572389df4b32.jpg?v=1740612795&auto=format&w=106&h=106&ixlib=react-9.10.0',
                  'https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-SP-TSH-0638-SPN-FLT.jpg?v=1740612795&auto=format&w=106&h=106&ixlib=react-9.10.0',
                ].map((src, index) => (
                  <div key={index} className="swiper-slide swiper-slide-visible swiper-slide-fully-visible" style={{ marginBottom: '10px' }}>
                    <img loading="eager" decoding="async" alt="" className="inline-block w-[106px] h-[106px] object-contain" width="106" height="106" src={src} />
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        <ProductZoom src={images[0].src}/>
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="lg:w-1/2 xl:w-5/12">
        <div className="w-full pt-0 pb-5 lg:min-h-[75vh]">
          <div className="px-5 lg:px-0">
            <header className="flex space-between">
              <div className="flex items-center justify-between w-full flex-wrap">
                <p className="shrink-0 grow-0 basis-full text-xs font-quinary text-gray-800 mb-3">
                  <a href="/collections/cotton-jersey" className="select-none hover:cursor-pointer text-brown text-xs" title="" target="_self" rel="">COTTON JERSEY</a>
                </p>
                <h1 className="text-xl text-brown text-left font-primary leading-none mb-0">T-SHIRT</h1>
                <p className="text-xl text-brown text-left font-primary leading-none mb-0 shrink-0">
                  <span className="whitespace-nowrap" data-testid="product-current-price"><span>₹</span>4,550</span>
                </p>
              </div>
            </header>
            <span className="pv-review-stars inline-block min-h-6 w-full font-quinary [&_span]:text-xs [&_span]:underline [&_span]:underline-offset-4">
              <div data-oke-star-rating="" data-oke-reviews-product-id="shopify-10246813581665" data-oke-rendered="">
                <div data-oke-reviews-version="0.74.1" data-oke-container="" className="okeReviews oke-sr">
                  <div className="oke-is-clickable" tabIndex={0} role="button">
                    <div className="oke-sr-rating"> 4.8 </div>
                    <div className="oke-sr-stars">
                      <div className="oke-stars">
                        <div className="oke-stars-background">
                          <svg height="18" viewBox="0 0 79.22222222222221 14" aria-hidden="true" role="none">
                            <use x="0" href="#oke-star-empty"></use>
                            <use x="16.155555555555555" href="#oke-star-empty"></use>
                            <use x="32.31111111111111" href="#oke-star-empty"></use>
                            <use x="48.46666666666667" href="#oke-star-empty"></use>
                            <use x="64.62222222222222" href="#oke-star-empty"></use>
                          </svg>
                        </div>
                        <div className="oke-stars-foreground" style={{ width: '96.3142%' }}>
                          <svg height="18" viewBox="0 0 79.22222222222221 14" aria-hidden="true" role="none">
                            <use x="0" href="#oke-star-filled"></use>
                            <use x="16.155555555555555" href="#oke-star-filled"></use>
                            <use x="32.31111111111111" href="#oke-star-filled"></use>
                            <use x="48.46666666666667" href="#oke-star-filled"></use>
                            <use x="64.62222222222222" href="#oke-star-filled"></use>
                          </svg>
                        </div>
                        <span className="oke-a11yText">Rated 4.8 out of 5 stars</span>
                      </div>
                    </div>
                    <div className="oke-sr-count">
                      <span className="oke-sr-count-number">2,541</span>
                      <span className="oke-sr-label-text"> Reviews</span>
                    </div>
                    <span className="oke-a11yText">Click to scroll to reviews</span>
                  </div>
                  <script type="application/json" data-oke-metafield-data=""> averageRating:"4.8",reviewCount:2541</script>
                </div>
              </div>
            </span>
          </div>
          {/* Additional Product Details */}
          <div className="px-5 lg:px-0">
            <div className="flex justify-center md:justify-start pb-2 lg:pb-0">
              <div className="text-brown py-2 px-3 mt-4 lg:mb-3 inline-block border border-grayDarker">
                <div className="[&>div]:mb-0 [&_b]:font-bold [&_*]:text-xs [&_*]:font-quinary [&_*]:!leading-5 opacity-70 [&_u]:underline-offset-4 [&_u]:block [&_u]:mb-1.5 [&_center]:text-left">
                  <p>
                    <center>
                      <b>BUY 2, GET 1 FREE</b>
                      <br />
                      <u><a href="https://skims.com/collections/tees-deal">For a limited time, mix, match, and save on the tees and tanks that can’t be topped</a></u>
                    </center>
                  </p>
                </div>
              </div>
            </div>
            {/* Product Form */}
            <div className="product-form">
              <div className="w-full">
                <div className="md:flex md:flex-col pb-5">
                  <div>
                    <header>
                      <h2 className="text-xs text-brown font-quinary">Limited Edition<span className="ml-2 font-bold">spearmint</span></h2>
                    </header>
                  </div>
                  {/* Color Swatches */}
                  <div className="relative block w-full min-w-0">
                    <legend className="sr-only">Limited Edition</legend>
                    <div className="flex lg:px-0 w-full overflow-x-visible no-scrollbar overflow-y-clip pt-6 pb-2 mx-0 md:mt-0 md:!pt-4 md:overflow-visible px-0">
                      {[
                        { id: 'barely-pink8524355074280714', value: '#ECDADD', label: 'barely-pink' },
                        { id: 'spearmint116238723224803', value: '#CED4CA', label: 'spearmint' },
                        { id: 'navy45340009961091754', value: '#465061', label: 'navy' },
                      ].map((color) => (
                        <div key={color.id} className="relative text-center flex items-center justify-center overflow-visible w-8 h-8 md:px-0 text-[{color.value}]">
                          <input id={color.id} className="absolute left-0 top-0 bottom-0 right-0 opacity-0" type="radio" value={color.value} />
                          <label htmlFor={color.id} className="relative mb-1 mt-1 inline-block cursor-pointer h-6 w-6" style={{ backgroundColor: color.value, outlineColor: color.value }}>
                            <span className="relative z-[3] block h-full"></span>
                            <span className="sr-only">Select {color.label} swatch</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Size Selection */}
                <div className="md:flex md:flex-col pb-5">
                  <div>
                    <header>
                      <h2 className="text-xs text-brown font-quinary">Size</h2>
                    </header>
                  </div>
                  <div className="relative block w-full min-w-0">
                    <legend className="sr-only">Size</legend>
                    <ul id="sizeSelection" className="flex list-none pb-2 pt-6 w-auto gap-1 h-16">
                      {['XXS', 'XS', 'S', 'M', 'L', 'XL', '2X', '3X', '4X'].map((size) => (
                        <li key={size} className="pb-0">
                          <label htmlFor={`Option-0-${size}`} className="relative mb-0 inline-block">
                            <input id={`Option-0-${size}`} type="radio" name="options[Size]" className="appearance-none flex items-center justify-center relative rounded-none border border-solid border-grayDarker text-brown cursor-pointer text-center h-8 w-14 text-small hover:[&~.tooltip]:left-0" value={size} />
                            <span className="pointer-events-none absolute top-1/2 left-1/2 block w-10 -translate-x-[50%] -translate-y-[50%] text-center font-quinary text-brown text-xs text-small">{size}</span>
                            <span className="sr-only">Select size {size}</span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Add to Cart Button */}
                <div className="min-h-[10px] mb-4"></div>
                <div>
                  <form method="post" action="/cart">
                    <input type="hidden" name="cartFormInput" value='{"action":"LinesAdd","inputs":{"lines":[],"totalLimitEnabled":true,"totalQuantityLimit":25}}' />
                    <input name="analytics" type="hidden" value="" />
                    <div>
                      <button type="submit" className="flex justify-center items-center font-primary tracking-[0.04em] leading-custom-snug px-4 pt-4 pb-3.5 text-base leading-none border border-primary bg-primary text-white hover:bg-secondary hover:border-secondary disabled:bg-white disabled:text-tertiary disabled:border-tertiary gap-2 w-full mt-10 lg:mt-5 transition-colors duration-300" disabled style={{ backgroundColor: '#CED4CA', color: '#2D2A26', borderColor: '#CED4CA' }}>
                        <span>Select A Size</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;