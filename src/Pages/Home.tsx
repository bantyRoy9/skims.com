import React from 'react'
import { HorizontalCardList, HorizontalImageSlider } from '../Components';
import ProductCard from '../Components/Cards/ProductCard';
import QuadrantModule from './QuadrantModule';
import HomeHero from './HomeHero';
import SplitTout from './SplitTout';
import SliderComponent from './sliderComponent';
import HeroSlider from './HeroSlider';
import { dd } from '../Utils/baseUrl';
import Footer from '../DefaultContainer/Footer';

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <HeroSlider />
      <SliderComponent />
      <SplitTout />
      <HomeHero />
      <QuadrantModule />
      <div className="section relative">
        <HorizontalCardList>{dd.map((el: any) => <ProductCard product={el} />)}</HorizontalCardList>
      </div>
      <section className="flex justify-center my-14 mx-5 lg:my-20 lg:mx-0"><div className="max-w-3xl text-center"><h2 className="text-4xl text-brown text-center font-primary leading-none">SKIMS is a solutions oriented brand creating the next generation of underwear, loungewear and shapewear. </h2></div></section>
      <Footer/>
    </>
  )
}
export default Home;