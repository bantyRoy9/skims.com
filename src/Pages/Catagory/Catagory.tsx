import React from 'react'
import FilterHeader from '../../Components/FilterHeader/FilterHeader'

type Props = {}

interface Product {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  altText: string;
  isNew?: boolean;
  isLowStock?: boolean;
  colors: { id: string; value: string; label: string }[];
}

interface ProductGridProps {
  products: Product[];
}
interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  altText: string;
  isNew?: boolean;
  isLowStock?: boolean;
  colors: { id: string; value: string; label: string }[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  imageUrl,
  altText,
  isNew = false,
  isLowStock = false,
  colors,
}) => {
  return (
    <div className="product-card w-full relative col-span-1" role="button" tabIndex={0}>
      <div className="relative w-full" data-id={id}>
        <div className="relative w-full aspect-h-[13] aspect-w-[9] z-0">
          {isNew && (
            <div className="absolute bottom-0 right-0 p-2 md:p-4 left-0 z-10 flex items-end pointer-events-none">
              <div className="flex flex-wrap gap-1 lg:gap-2">
                <div className="border border-primary rounded-sm text-center bg-primary text-white py-1 px-1.5 w-auto" role="tooltip">
                  <p className="font-primary leading-none capitalize whitespace-nowrap text-xxs mt-[.063rem]">
                    <span className="flex gap-1">
                      <span>new</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
          {isLowStock && (
            <div className="absolute bottom-0 right-0 p-2 md:p-4 left-0 z-10 flex items-end pointer-events-none">
              <div className="flex flex-wrap gap-1 lg:gap-2">
                <div className="border border-primary rounded-sm text-center bg-primary text-white py-1 px-1.5 w-auto" role="tooltip">
                  <p className="font-primary leading-none capitalize whitespace-nowrap text-xxs mt-[.063rem]">
                    <span className="flex gap-1">
                      <span>low stock</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
          <a
            className="select-none relative hover:cursor-pointer focus:outline-none absolute z-0"
            role="link"
            data-href={`/products/${id}`}
            tabIndex={0}
            title={title}
            rel=""
            data-discover="true"
            href={`/en-in/products/${id}`}
            target="_self"
          >
            <div className="w-full">
              <div className="group aspect-h-[13] aspect-w-[9] relative flex items-center justify-center overflow-hidden object-cover">
                <div className="pointer-events-none inset-0 bg-white transition-opacity duration-100 ease-in-out opacity-1">
                  <img
                    loading="eager"
                    decoding="async"
                    alt={altText}
                    className="inline-block w-full h-full object-cover h-full w-full transform bg-white bg-cover bg-center object-center transition-opacity duration-100 ease-in-out"
                    width="600"
                    src={imageUrl}
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="w-full p-2 md:p-4">
          <div className="flex justify-between items-start gap-2 md:gap-4 mb-3">
            <div className="w-9/12">
              <div className="relative max-w-full mt-1.5 inline-flex justify-start">
                <ul className="mx-auto flex list-none justify-start md:flex-wrap gap-2 max-w-full flex-wrap">
                  {colors.map((color) => (
                    <li key={color.id} className="relative flex items-center px-0.5 py-0.5 md:!w-3 md:!px-0">
                      <div className="relative text-center flex items-center justify-center overflow-visible w-3.5 h-3.5">
                        <input
                          id={color.id}
                          className="absolute left-0 top-0 bottom-0 right-0 opacity-0"
                          type="radio"
                          value={color.value}
                        />
                        <label
                          htmlFor={color.id}
                          className="relative mb-1 mt-1 inline-block cursor-pointer h-3.5 w-3.5 outline outline-1 outline-offset-1"
                          style={{ backgroundColor: color.value }}
                        >
                          <span className="relative z-[3] block h-full"></span>
                          <span className="sr-only">Select {color.label} swatch</span>
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              className="flex items-center justify-center text-brown p-1"
              aria-label={`Add ${title} to wishlist`}
            >
              <svg
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[1.125rem] h-[1.125rem] stroke-1"
              >
                <path
                  d="M17 6.352C17 3.94667 15.0053 2 12.5467 2C11.096 2 9.81067 3.49333 9 4.53867C8.18933 3.49333 6.89867 2 5.45333 2C2.99467 2 1 3.94667 1 6.352C1 7.38133 1.368 8.32533 1.976 9.072L1.992 9.09333C2.06133 9.17333 9.00533 16.9333 9.00533 16.9333L16.024 9.072C16.632 8.32533 17 7.38133 17 6.352Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex w-full flex-col text-left outline-offset-[-1px]">
            <a
              className="select-none hover:cursor-pointer focus:outline-none text-left"
              role="link"
              data-href={`/products/${id}`}
              tabIndex={0}
              title={title}
              rel=""
              data-discover="true"
              href={`/en-in/products/${id}`}
              target="_self"
            >
              <p className="font-quinary uppercase !text-sienna text-xxs mb-1.5 md:!text-xs md:!mb-2">FLEECE LOUNGE</p>
              <h3 className="text-brown font-primary text-sm md:!text-base mb-1.5 md:mb-2" id={`product-name-${id}`}>
                {title}
              </h3>
              <p className="font-secondary flex gap-2 fadeIn text-xs md:!text-base min-h-5">
                <span className="text-brown" id={`product-price-${id}`}>
                  {price}
                </span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-flow-row grid-cols-2 gap-y-6 md:grid-cols-4 auto-rows-fr gap-x-px lg:gap-x-1">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
const FleeceLoungeSection: React.FC = () => {
  const products = [
    {
      id: 'fleece-lounge-mens-relaxed-hoodie-washed-onyx',
      title: 'MENS RELAXED HOODIE',
      price: '₹8,200',
      imageUrl:
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/PL-PLO-8461M-WON-TA-SKIMS-MENS_0001-FR.jpg?v=1738121091&auto=format&fit=crop&crop=focalpoint&w=600&fp-z=1&fp-y=0.5&fp-x=0.5&ixlib=react-9.10.0',
      altText: 'FLEECE LOUNGE MENS RELAXED HOODIE | WASHED ONYX ON A MODEL FRONT VIEW | FOCUS: 0.0, 1.0, 0.9',
      isNew: true,
      colors: [
        { id: 'washed-onyx9029235898687542', value: '#2d2d2f', label: 'washed-onyx' },
        { id: 'light-heather-grey764901584183487', value: '#c6cbcc', label: 'light-heather-grey' },
      ],
    },
    {
      id: 'fleece-lounge-mens-relaxed-hoodie-washed-onyx',
      title: 'MENS RELAXED HOODIE',
      price: '₹8,200',
      imageUrl:
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/PL-PLO-8461M-WON-TA-SKIMS-MENS_0001-FR.jpg?v=1738121091&auto=format&fit=crop&crop=focalpoint&w=600&fp-z=1&fp-y=0.5&fp-x=0.5&ixlib=react-9.10.0',
      altText: 'FLEECE LOUNGE MENS RELAXED HOODIE | WASHED ONYX ON A MODEL FRONT VIEW | FOCUS: 0.0, 1.0, 0.9',
      isNew: true,
      colors: [
        { id: 'washed-onyx9029235898687542', value: '#2d2d2f', label: 'washed-onyx' },
        { id: 'light-heather-grey764901584183487', value: '#c6cbcc', label: 'light-heather-grey' },
      ],
    },
    {
      id: 'fleece-lounge-mens-relaxed-hoodie-washed-onyx',
      title: 'MENS RELAXED HOODIE',
      price: '₹8,200',
      imageUrl:
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/PL-PLO-8461M-WON-TA-SKIMS-MENS_0001-FR.jpg?v=1738121091&auto=format&fit=crop&crop=focalpoint&w=600&fp-z=1&fp-y=0.5&fp-x=0.5&ixlib=react-9.10.0',
      altText: 'FLEECE LOUNGE MENS RELAXED HOODIE | WASHED ONYX ON A MODEL FRONT VIEW | FOCUS: 0.0, 1.0, 0.9',
      isNew: true,
      colors: [
        { id: 'washed-onyx9029235898687542', value: '#2d2d2f', label: 'washed-onyx' },
        { id: 'light-heather-grey764901584183487', value: '#c6cbcc', label: 'light-heather-grey' },
      ],
    },
    {
      id: 'fleece-lounge-mens-relaxed-hoodie-washed-onyx',
      title: 'MENS RELAXED HOODIE',
      price: '₹8,200',
      imageUrl:
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/PL-PLO-8461M-WON-TA-SKIMS-MENS_0001-FR.jpg?v=1738121091&auto=format&fit=crop&crop=focalpoint&w=600&fp-z=1&fp-y=0.5&fp-x=0.5&ixlib=react-9.10.0',
      altText: 'FLEECE LOUNGE MENS RELAXED HOODIE | WASHED ONYX ON A MODEL FRONT VIEW | FOCUS: 0.0, 1.0, 0.9',
      isNew: true,
      colors: [
        { id: 'washed-onyx9029235898687542', value: '#2d2d2f', label: 'washed-onyx' },
        { id: 'light-heather-grey764901584183487', value: '#c6cbcc', label: 'light-heather-grey' },
      ],
    },
    {
      id: 'fleece-lounge-mens-relaxed-hoodie-washed-onyx',
      title: 'MENS RELAXED HOODIE',
      price: '₹8,200',
      imageUrl:
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/PL-PLO-8461M-WON-TA-SKIMS-MENS_0001-FR.jpg?v=1738121091&auto=format&fit=crop&crop=focalpoint&w=600&fp-z=1&fp-y=0.5&fp-x=0.5&ixlib=react-9.10.0',
      altText: 'FLEECE LOUNGE MENS RELAXED HOODIE | WASHED ONYX ON A MODEL FRONT VIEW | FOCUS: 0.0, 1.0, 0.9',
      isNew: true,
      colors: [
        { id: 'washed-onyx9029235898687542', value: '#2d2d2f', label: 'washed-onyx' },
        { id: 'light-heather-grey764901584183487', value: '#c6cbcc', label: 'light-heather-grey' },
      ],
    },
    {
      id: 'fleece-lounge-mens-relaxed-hoodie-washed-onyx',
      title: 'MENS RELAXED HOODIE',
      price: '₹8,200',
      imageUrl:
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/PL-PLO-8461M-WON-TA-SKIMS-MENS_0001-FR.jpg?v=1738121091&auto=format&fit=crop&crop=focalpoint&w=600&fp-z=1&fp-y=0.5&fp-x=0.5&ixlib=react-9.10.0',
      altText: 'FLEECE LOUNGE MENS RELAXED HOODIE | WASHED ONYX ON A MODEL FRONT VIEW | FOCUS: 0.0, 1.0, 0.9',
      isNew: true,
      colors: [
        { id: 'washed-onyx9029235898687542', value: '#2d2d2f', label: 'washed-onyx' },
        { id: 'light-heather-grey764901584183487', value: '#c6cbcc', label: 'light-heather-grey' },
      ],
    },
    {
      id: 'fleece-lounge-mens-relaxed-hoodie-washed-onyx',
      title: 'MENS RELAXED HOODIE',
      price: '₹8,200',
      imageUrl:
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/PL-PLO-8461M-WON-TA-SKIMS-MENS_0001-FR.jpg?v=1738121091&auto=format&fit=crop&crop=focalpoint&w=600&fp-z=1&fp-y=0.5&fp-x=0.5&ixlib=react-9.10.0',
      altText: 'FLEECE LOUNGE MENS RELAXED HOODIE | WASHED ONYX ON A MODEL FRONT VIEW | FOCUS: 0.0, 1.0, 0.9',
      isNew: true,
      colors: [
        { id: 'washed-onyx9029235898687542', value: '#2d2d2f', label: 'washed-onyx' },
        { id: 'light-heather-grey764901584183487', value: '#c6cbcc', label: 'light-heather-grey' },
      ],
    },
    {
      id: 'fleece-lounge-mens-relaxed-hoodie-washed-onyx',
      title: 'MENS RELAXED HOODIE',
      price: '₹8,200',
      imageUrl:
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/PL-PLO-8461M-WON-TA-SKIMS-MENS_0001-FR.jpg?v=1738121091&auto=format&fit=crop&crop=focalpoint&w=600&fp-z=1&fp-y=0.5&fp-x=0.5&ixlib=react-9.10.0',
      altText: 'FLEECE LOUNGE MENS RELAXED HOODIE | WASHED ONYX ON A MODEL FRONT VIEW | FOCUS: 0.0, 1.0, 0.9',
      isNew: true,
      colors: [
        { id: 'washed-onyx9029235898687542', value: '#2d2d2f', label: 'washed-onyx' },
        { id: 'light-heather-grey764901584183487', value: '#c6cbcc', label: 'light-heather-grey' },
      ],
    },
    {
      id: 'fleece-lounge-mens-relaxed-hoodie-washed-onyx',
      title: 'MENS RELAXED HOODIE',
      price: '₹8,200',
      imageUrl:
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/PL-PLO-8461M-WON-TA-SKIMS-MENS_0001-FR.jpg?v=1738121091&auto=format&fit=crop&crop=focalpoint&w=600&fp-z=1&fp-y=0.5&fp-x=0.5&ixlib=react-9.10.0',
      altText: 'FLEECE LOUNGE MENS RELAXED HOODIE | WASHED ONYX ON A MODEL FRONT VIEW | FOCUS: 0.0, 1.0, 0.9',
      isNew: true,
      colors: [
        { id: 'washed-onyx9029235898687542', value: '#2d2d2f', label: 'washed-onyx' },
        { id: 'light-heather-grey764901584183487', value: '#c6cbcc', label: 'light-heather-grey' },
      ],
    },
    {
      id: 'fleece-lounge-mens-relaxed-hoodie-washed-onyx',
      title: 'MENS RELAXED HOODIE',
      price: '₹8,200',
      imageUrl:
        'https://skims.imgix.net/s/files/1/0259/5448/4284/files/PL-PLO-8461M-WON-TA-SKIMS-MENS_0001-FR.jpg?v=1738121091&auto=format&fit=crop&crop=focalpoint&w=600&fp-z=1&fp-y=0.5&fp-x=0.5&ixlib=react-9.10.0',
      altText: 'FLEECE LOUNGE MENS RELAXED HOODIE | WASHED ONYX ON A MODEL FRONT VIEW | FOCUS: 0.0, 1.0, 0.9',
      isNew: true,
      colors: [
        { id: 'washed-onyx9029235898687542', value: '#2d2d2f', label: 'washed-onyx' },
        { id: 'light-heather-grey764901584183487', value: '#c6cbcc', label: 'light-heather-grey' },
      ],
    },
    // Add more products here
  ];

  return (
    <div className="stack mb-5 pb-8 border-b border-gray last:border-b-0" id="fleece-lounge">
      <h2 className="text-xl text-brown text-left font-primary leading-none md:text-2xl">FLEECE LOUNGE</h2>
      <p className="text-sm text-brown mt-2 pb-7">
        Plush sets made from extra soft, cloud-like fleece for all day, everyday wear
      </p>
      <ProductGrid products={products} />
    </div>
  );
};
const Catagory = (props: Props) => {
  return (
    <>
    <FilterHeader/>
    <FleeceLoungeSection />
    </>
  )
}

export default Catagory