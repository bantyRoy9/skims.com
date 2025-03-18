import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const ShopBtn = (props: Props) => {
  return (
    <div className="max-w-[205px] mt-4 mb-1 md:!mt-6 md:!mb-2 text-center">
        <Link className="hover:cursor-pointer focus:outline-none flex justify-center items-center font-primary tracking-[0.04em] leading-custom-snug transition-colors w-52 px-4 pt-4 pb-3.5 text-base leading-none bg-white border border-white text-primary hover:text-secondary disabled:text-tertiary gap-3 no-swipe" role="link" rel="" data-quantum="CTA - Section - Hero Slides - GLOBAL- BEST SELLERS 1" data-discover="true" to="#" target="_self">
        <span>SHOP NOW</span>
        </Link>
    </div>
  )
}

export default ShopBtn