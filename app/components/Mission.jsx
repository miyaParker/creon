import Image from "next/image";
import Accordion from "./Accordion";

const Mission = () => {
    return (
        <section
            className='h-max lg:h-[1024px] lg:h-[768px] xl:h-[872px] 2xl:h-[972px] w-full relative bg-black overflow-hidden pt-[80px] md:pb-[98px] lg:pb-[75px] '>
            <div
                className='relative px-[15px] md:px-[30px] min-[1280px]:px-[160px] xl:px-[180px] 2xl:px-[240px] w-full max-w-[1920px] mx-auto flex flex-col justify-between items-start lg:flex-row lg:items-start'>
                <div className='lg:relative md:mb-[40px]'>
                    <h2 className='xl:hidden relative z-20 font-monument  text-[22px] md:text-[26px] lg:text-[28px] uppercase text-white leading-[120%] md:max-w-max lg:max-w-[365px] xl:max-w-[699px]'>our
                        mission is
                        to provide unique, confidential AI-based tools, to which you will gain <span
                            className='gradient-text'>lifetime access through NFT tokens and our CREON token.</span>
                    </h2>
                    <h2 className='hidden xl:block relative z-20 font-monument text-[38px] uppercase text-white leading-[120%]  md:max-w-max lg:max-w-[365px] xl:max-w-[699px]'>Our
                        vision is to support the innovation of AI blockchain projects <span
                            className='gradient-text'>while prioritizing communities and democratizing profits</span>
                    </h2>
                </div>
                <Image src='/creon.png' width={222} height={182} alt=''
                       className='relative top-[-32px] left-[153px] z-10 md:hidden'/>
                <Image src='/creon-md.png' width={628} height={377} alt=''
                       className='w-[628px] h-[377px] absolute bottom-0 right-[-185px] z-10 hidden md:block lg:hidden'/>
                <Accordion/>
                <Image src='/creon-md.png' width={628} height={377} alt=''
                       className='w-[628px] h-[377px] xl:w-[836px] xl:h-[502px] absolute bottom-0 right-0 z-10 hidden lg:block lg:left-0 xl:left-[119px]'/>
            </div>
        </section>
    )
}
export default Mission
