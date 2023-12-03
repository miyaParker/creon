import Image from "next/image";
import Accordion from "./Accordion";

const Mission = () => {
    return (
        <section
            className='h-max min-[860px]:h-[768px] xl:h-[872px] 2xl:h-[972px] w-full relative bg-black overflow-hidden pt-[80px] min-[600px]:pb-[140px] min-[860px]:pb-[75px] '>
            <div
                className='relative px-[15px] md:px-[30px] min-[1280px]:px-[160px] xl:px-[180px] 2xl:px-[240px] w-full max-w-[1920px] mx-auto flex flex-col justify-between items-start min-[860px]:flex-row min-[860px]:items-start'>
                <div className='min-[860px]:relative md:mb-[40px]'>
                    <h2 className='xl:hidden relative z-20 font-monument  text-[22px] md:text-[26px] min-[860px]g:text-[28px] uppercase text-white leading-[120%] md:max-w-max min-[860px]:max-w-[365px] xl:max-w-[699px]'>our
                        mission is
                        to provide unique, confidential AI-based tools, to which you will gain <span
                            className='gradient-text'>lifetime access through NFT tokens and our CREON token.</span>
                    </h2>
                    <h2 className='hidden xl:block relative z-20 font-monument text-[38px] uppercase text-white leading-[120%]  md:max-w-max min-[860px]:max-w-[365px] xl:max-w-[699px]'>Our
                        vision is to support the innovation of AI blockchain projects <span
                            className='gradient-text'>while prioritizing communities and democratizing profits</span>
                    </h2>
                </div>
                <Image src='/creon.png' width={222} height={182} alt=''
                       className='relative top-[-32px] left-[153px] z-10 min-[600px]:hidden'/>

                <Accordion/>
                <Image src='/creon-md.png' width={628} height={377} alt=''
                       className='w-[228px] h-[182px] md:w-[628px] md:h-[377px] xl:w-[836px] xl:h-[502px] absolute bottom-0 right-0 z-10 hidden min-[860px]:block left-[-80px] lg:left-0 xl:left-[119px]'/>
            </div>
            <Image src='/creon-md.png' width={628} height={377} alt=''
                   className='w-[628px] h-[377px] absolute bottom-0 right-[-185px] z-10 hidden min-[600px]:block min-[860px]:hidden'/>
        </section>
    )
}
export default Mission
