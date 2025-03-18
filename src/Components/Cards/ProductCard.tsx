import React, { memo } from 'react'
import AddToCartButton from '../Buttons/AddToCartButton';
import { useNavigate } from 'react-router-dom';
import { IProductCard } from '../../Utils/Const';
const ProductCard = ({ product, addProduct, addtocard, width = 140, activecard = null }: IProductCard) => {
    const nagivate = useNavigate(), isproduct = typeof product === "object" ? true : false;
    console.log('working');

    return (
        <button onClick={(e) => { e.stopPropagation(); nagivate(isproduct ? `product` : `#${activecard}`) }} key={product?.id ?? product} className={`card ${isproduct ? '' : 'slidecard'} ${activecard === -1 ? 'border-green-600' : 'border-[#e8e8e8]'}`}>
            {/* <div className="card-content">
                <img loading="eager" decoding="async" alt="" sizes="(max-width: 1023px) 35vw, 25vw" className="inline-block   object-contain w-full h-full" src="https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0" srcSet="https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=100 100w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=116 116w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=135 135w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=156 156w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=181 181w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=210 210w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=244 244w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=283 283w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=328 328w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=380 380w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=441 441w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=512 512w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=594 594w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=689 689w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=799 799w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=927 927w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=1075 1075w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=1247 1247w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=1446 1446w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=1678 1678w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=1946 1946w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=2257 2257w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=2619 2619w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=3038 3038w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=3524 3524w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=4087 4087w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=4741 4741w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=5500 5500w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=6380 6380w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=7401 7401w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=8192 8192w"/>

                {isproduct && <div className="card-details">
                    <p className="card-eta">{product.base_price.toUpperCase()}</p>
                    <div className="card-titles">
                        <h3 className="card-title">{product.name}</h3>
                    </div>
                    <p className="card-unit">{product.brand.name}</p>
                </div>}
            </div> */}
            <div className="swiper-slide swiper-slide-visible swiper-slide-fully-visible" style={{ width: '264.25px', marginRight: '-1px' }} aria-roledescription="product card" role="group" aria-label="4 of 10 products" data-swiper-slide-index="3"><div className="cursor-pointer border border-grayDarker bg-white flex p-3 md:p-6 w-full" tabIndex={0} aria-labelledby="badge-mISkdHlwZahIT01FUEFHRaRkYXRhkKhsb2NhdGlvbrJodHRwczovL3NraW1zLmNvbS+jbG5npWVuX0lOzXSazgAGWwfCA7NBUC1EUlMtMDU5Ni1DTE8tWFhTCQM=*nLQtMTg5MjEwMzk1MTIwMDU0MjYwOc4AHjrrqDE0MTE3Njg3AZCRzgHCdcOlNzE3MTbA2SAzZWYzZGI4MjJiMTdkN2Y3ZGNkMzhkOWRmNTJmMDYxNrM1MTYwOTQwMzU3MzAzODYwODc5wKdERVNLVE9Q product-name-mISkdHlwZahIT01FUEFHRaRkYXRhkKhsb2NhdGlvbrJodHRwczovL3NraW1zLmNvbS+jbG5npWVuX0lOzXSazgAGWwfCA7NBUC1EUlMtMDU5Ni1DTE8tWFhTCQM=*nLQtMTg5MjEwMzk1MTIwMDU0MjYwOc4AHjrrqDE0MTE3Njg3AZCRzgHCdcOlNzE3MTbA2SAzZWYzZGI4MjJiMTdkN2Y3ZGNkMzhkOWRmNTJmMDYxNrM1MTYwOTQwMzU3MzAzODYwODc5wKdERVNLVE9Q product-compareAtPrice-mISkdHlwZahIT01FUEFHRaRkYXRhkKhsb2NhdGlvbrJodHRwczovL3NraW1zLmNvbS+jbG5npWVuX0lOzXSazgAGWwfCA7NBUC1EUlMtMDU5Ni1DTE8tWFhTCQM=*nLQtMTg5MjEwMzk1MTIwMDU0MjYwOc4AHjrrqDE0MTE3Njg3AZCRzgHCdcOlNzE3MTbA2SAzZWYzZGI4MjJiMTdkN2Y3ZGNkMzhkOWRmNTJmMDYxNrM1MTYwOTQwMzU3MzAzODYwODc5wKdERVNLVE9Q product-price-mISkdHlwZahIT01FUEFHRaRkYXRhkKhsb2NhdGlvbrJodHRwczovL3NraW1zLmNvbS+jbG5npWVuX0lOzXSazgAGWwfCA7NBUC1EUlMtMDU5Ni1DTE8tWFhTCQM=*nLQtMTg5MjEwMzk1MTIwMDU0MjYwOc4AHjrrqDE0MTE3Njg3AZCRzgHCdcOlNzE3MTbA2SAzZWYzZGI4MjJiMTdkN2Y3ZGNkMzhkOWRmNTJmMDYxNrM1MTYwOTQwMzU3MzAzODYwODc5wKdERVNLVE9Q">
                <div className="relative h-full w-full flex flex-col justify-between select-none">
                    <div className="relative cursor-pointer mt-6 mb-4 mx-auto w-full">
                        <div className="w-[100px] h-[100px] mx-auto md:!w-[130px] md:!h-[130px]">
                            <img loading="eager" decoding="async" alt="" sizes="(max-width: 1023px) 35vw, 25vw" className="inline-block w-full h-full object-contain" src=
                            "https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0" srcSet="https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=100 100w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=116 116w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=135 135w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=156 156w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=181 181w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=210 210w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=244 244w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=283 283w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=328 328w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=380 380w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=441 441w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=512 512w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=594 594w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=689 689w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=799 799w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=927 927w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=1075 1075w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=1247 1247w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=1446 1446w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=1678 1678w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=1946 1946w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=2257 2257w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=2619 2619w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=3038 3038w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=3524 3524w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=4087 4087w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=4741 4741w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=5500 5500w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=6380 6380w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=7401 7401w,
https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-AP-DRS-0596-CLO-FLT_grande.jpg?v=1740612371&amp;auto=format&amp;ixlib=react-9.10.0&amp;w=8192 8192w"/>
                        </div>
                    </div>
                    <div className="w-full flex flex-1 justify-between items-stretch gap-2">
                        <div className="flex-1 min-w-0 flex"><div className="text-left">
                            <p className="font-quinary uppercase !text-sienna text-xxs mb-1.5">SOFT LOUNGE</p>
                            <h3 className="text-brown font-primary text-xs mb-2" id="product-name-mISkdHlwZahIT01FUEFHRaRkYXRhkKhsb2NhdGlvbrJodHRwczovL3NraW1zLmNvbS+jbG5npWVuX0lOzXSazgAGWwfCA7NBUC1EUlMtMDU5Ni1DTE8tWFhTCQM=*nLQtMTg5MjEwMzk1MTIwMDU0MjYwOc4AHjrrqDE0MTE3Njg3AZCRzgHCdcOlNzE3MTbA2SAzZWYzZGI4MjJiMTdkN2Y3ZGNkMzhkOWRmNTJmMDYxNrM1MTYwOTQwMzU3MzAzODYwODc5wKdERVNLVE9Q"> long slip dress</h3>
                            <p className="font-secondary flex gap-2 fadeIn text-xs min-h-3">
                                <span className="text-brown" id="product-price-mISkdHlwZahIT01FUEFHRaRkYXRhkKhsb2NhdGlvbrJodHRwczovL3NraW1zLmNvbS+jbG5npWVuX0lOzXSazgAGWwfCA7NBUC1EUlMtMDU5Ni1DTE8tWFhTCQM=*nLQtMTg5MjEwMzk1MTIwMDU0MjYwOc4AHjrrqDE0MTE3Njg3AZCRzgHCdcOlNzE3MTbA2SAzZWYzZGI4MjJiMTdkN2Y3ZGNkMzhkOWRmNTJmMDYxNrM1MTYwOTQwMzU3MzAzODYwODc5wKdERVNLVE9Q">₹7,550</span>
                            </p>
                        </div>
                        </div>
                        <div className="flex-shrink-0 pl-1 flex items-start">
                            <button aria-label="Add Soft Lounge Long Slip Dress to wishlist" className="mt-0.5">
                                <div className="relative w-5 h-5 inline-flex">
                                    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-hidden="true"><path d="M17 6.352C17 3.94667 15.0053 2 12.5467 2C11.096 2 9.81067 3.49333 9 4.53867C8.18933 3.49333 6.89867 2 5.45333 2C2.99467 2 1 3.94667 1 6.352C1 7.38133 1.368 8.32533 1.976 9.072L1.992 9.09333C2.06133 9.17333 9.00533 16.9333 9.00533 16.9333L16.024 9.072C16.632 8.32533 17 7.38133 17 6.352Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </button>
    )
};
export default memo(ProductCard);
