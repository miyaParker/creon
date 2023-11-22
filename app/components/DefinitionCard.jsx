import Image from "next/image";

const DefinitionCard = ({card}) => {
    return (
        <div
            className={`max-w-[292px] md:h-[336px] md:w-full lg:h-[260px] xl:h-[301px] md:max-w-full xl:max-w-[1440px] mx-auto flex justify-between flex-col md:flex-row-reverse flex-shrink-0 relative border-b border-[#13171D] rounded-[6px] bg-[#13171D]`}>
            <div className='flex-shrink-0 w-[308px] h-[259px] md:w-[223px] md:h-[336px] lg:h-[260px] xl:w-[453px] xl:h-[301px] mb-[18px] overflow-hidden'>
                <Image
                    src={card.image}
                    alt='read more' width={308}
                    height={259} className='object-cover w-full h-full'/>
            </div>
            <div className='pl-[24px] pt-[24px] pr-[30px]'>
                <p className={`text-[22px] md:max-w-[437px] text-white font-monument uppercase leading-[120%] mb-[10px]`}>{card.heading}</p>
                <p className={`font-satoshi w-full text-[16px] text-white leading-[130%] pb-[30px]`}>
                    {card.text}
                </p>
            </div>

        </div>
    )
}
export default DefinitionCard
