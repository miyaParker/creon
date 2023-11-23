import Image from "next/image";

const ProductCard = ({card}) => {
    return (
        <div
             className={`flex-1 relative pb-[20px] border-b border-[#13171D] py-[20px] pr-[20px] rounded-[6px] bg-[#13171D]`}>
            <p className={`font-bold text-[12px] text-black w-max absolute right-[36px] top-[-10px] font-satoshi leading-[110%] text-center uppercase bg-white px-[6px] py-[3px] rounded-[100px]`}>COMING SOON</p>
            <p className={`ml-[20px] text-[22px] text-white font-monument uppercase leading-[120%] mb-[10px]`}>{card.heading}</p>
            <p className={`ml-[20px] gradient-text font-bold text-[18px] text-white font-satoshi leading-[130%] mb-[20px] max-w-[252px] `}>{card.subheading}</p>

            <div className='w-full h-[234px] relative left-[0px] mb-[18px] overflow-hidden'>
                <Image
                    src={card.image}
                    alt='read more' width={272}
                    height={234} className='object-cover w-full h-full'/>
            </div>

            <p className={`pl-[20px] font-satoshi w-full text-[16px] text-white leading-[130%] pb-[30px] max-w-[252px] md:max-w-[382px] lg:max-w-max`}>
                {card.text}
            </p>
        </div>
    )
}
export default ProductCard
