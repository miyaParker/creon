'use client'
import ProductCard from "./ProductCard";
import BackgroundVideo from "./BackgroundVideo";
import {cardsLG, cards} from "../constants";

const Products = () => {
    return (
        <div className='relative w-full h-max overflow-hidden '>
            <div
                className='bg-[#13171D] pb-[164px] bg-black bg-opacity-60 xl:hidden w-full max-w-[1920px] relative z-30 px-[15px] md:px-[30px] min-[1280px]:px-[160px] xl:px-[180px] 2xl:px-[240px] mx-auto overflow-scroll lg:overflow-hidden py-[76px] md:py-[204px] bg-black'>
                <div className='mx-auto flex gap-x-[40px] lg:gap-x-[20px] justify-between  px-[15px] w-max lg:w-full '>
                    {cards.map((card, index) => <ProductCard card={card} key={index}/>)}
                </div>
            </div>
            <div className='relative z-30 w-full h-max bg-black bg-opacity-60'>
                <section
                    className='relative z-30 pt-[176px] pb-[164px] z-30 mx-auto hidden xl:flex gap-x-[40px] justify-between w-full max-w-[1920px] mx-auto py-[76px] px-[15px] md:px-[30px] md:px-[30px] min-[1280px]:px-[160px] xl:px-[180px] 2xl:px-[240px]'>
                    {cardsLG.map((card, index) => <ProductCard card={card} key={index}/>)}
                </section>
            </div>
            <BackgroundVideo/>


        </div>
    )
}
export default Products
