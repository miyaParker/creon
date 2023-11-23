'use client'
import ProductCard from "./ProductCard";
import BackgroundVideo from "./BackgroundVideo";
import {cardsLG,cards} from "../constants";
const Products = () => {
    return (
        <div className='w-full relative w-full h-max overflow-hidden'>
            <div className='bg-[#13171D] bg-opacity-60 xl:bg-black xl:hidden w-full max-w-[1920px] relative z-50 md:px-[30px] xl:px-[120px] 2xl:px-[240px] mx-auto overflow-scroll lg:overflow-hidden py-[76px] md:py-[204px] bg-black'>
                <div className='mx-auto flex gap-x-[40px] lg:gap-x-[20px] justify-between  px-[15px] w-max lg:w-full '>
                    {cards.map((card, index) => <ProductCard card={card} key={index}/>)}

                </div>
            </div>
            <section
                className='pt-[176px] mx-auto hidden xl:flex gap-x-[40px] justify-between bg-black w-full py-[76px] px-[15px] md:px-[30px] md:px-[30px] xl:px-[120px] 2xl:px-[240px]'>
                {cardsLG.map((card, index) => <ProductCard card={card} key={index}/>)}
            </section>
            <div className='block xl:hidden'>
                <BackgroundVideo/>
            </div>
        </div>
    )
}
export default Products
