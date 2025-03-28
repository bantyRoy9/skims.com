
import React from 'react';

const HeaderLinks: React.FC = () => {
  const links = [
    { text: 'new', href: "#" },
    { text: 'Best Sellers', href: "#" },
    { text: 'WEDDING SHOP', href: "#" },
    { text: 'Bras', href: "#" },
    { text: 'Underwear', href: "#" },
    { text: 'Clothing', href: "#" },
    { text: 'shapewear', href: "#" },
    { text: 'Swim', href: "#" },
    { text: 'Mens', href: "#" },
    { text: 'collections', href: "#" },
    { text: 'More', href: '#' },
    { text: 'Sale', href: "#" },
  ];

  return (
    <div className="header-links flex flex-wrap w-full justify-center overflow-hidden md:flex whitespace-nowrap">
      {links.map((link, index) => (
        <div key={index} data-headlessui-state="">
          <button className="relative xl:mx-2 xs:mx-1 my-1 inline-block outline-none" data-nav-group={link.text.toLowerCase()} type="button" aria-expanded="false" data-headlessui-state="" id={`headlessui-popover-button-:r${index}:`}>
            <a data-discover="true" className="cursor-pointer hover:underline uppercase flex items-center" href={link.href} style={{ color: 'black' }}>
              <p className="text-xs text-brown text-left font-primary leading-none flex items-center">
                {link.text}
                {link.text === 'new' || link.text === 'WEDDING SHOP' || link.text === 'Bras' || link.text === 'Underwear' || link.text === 'Clothing' || link.text === 'shapewear' || link.text === 'Swim' || link.text === 'Mens' || link.text === 'collections' || link.text === 'More' ? (
                  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 ml-2">
                    <path d="M17 5L9.5 12.5L2 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                ) : null}
              </p>
            </a>
          </button>
        </div>
      ))}
    </div>
  );
};

export default HeaderLinks;