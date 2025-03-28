import React from 'react';

function Breadcrumbs() {
  return (
    <div className="product-breadcrumbs relative mx-auto max-w-screen-2xl lg:py-7 py-5 mt-20 lg:mt-0 px-5">
      <div className="text-left flex">
        <div className="flex">
          <a
            className="select-none hover:cursor-pointer focus:outline-none block"
            role="link"
            data-href="/"
            tabIndex={0}
            title="Home"
            rel=""
            data-discover="true"
            href="#"
            target="_self"
          >
            <p className="text-xs text-primary font-quinary">Home</p>
          </a>
          <p className="text-xs text-primary font-quinary">
            <span className="mx-2">/</span>
          </p>
        </div>
        <div className="flex">
          <a
            className="select-none hover:cursor-pointer focus:outline-none block"
            role="link"
            data-href="/collections/mens-loungewear"
            tabIndex={0}
            title="Men's Loungewear"
            rel=""
            data-discover="true"
            href="#"
            target="_self"
          >
            <p className="text-xs text-primary font-quinary">Men's Loungewear</p>
          </a>
          <p className="text-xs text-primary font-quinary">
            <span className="mx-2">/</span>
          </p>
        </div>
        <div className="flex">
          <a
            className="select-none hover:cursor-pointer focus:outline-none block"
            role="link"
            data-href="#"
            tabIndex={0}
            title="Men's T-Shirts &amp; Tanks"
            rel=""
            data-discover="true"
            href="#"
            target="_self"
          >
            <p className="text-xs text-primary font-quinary">Men's T-Shirts &amp; Tanks</p>
          </a>
          <p className="text-xs text-primary font-quinary"></p>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumbs;