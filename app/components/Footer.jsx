import Image from "next/image";

const Footer = () => {
    return (
        <footer className='bg-transparent w-full text-white absolute bottom-0'>
            <nav className="max-w-[1920px] mx-auto px-[15px] md:px-[30px] xl:px-[120px] h-[160px] md:h-[84px] 2xl:px-[240px] gap-y-[15px] flex flex-col md:flex-row justify-center md:justify-between items-center">
                <div className='flex flex-col-reverse md:flex-row gap-x-[90px] gap-y-[28px] items-center'>
                    <p className='text-[14px] lg:text-[16px] leading-[130%]'>© Creon 2023. All rights reserved.</p>
                    <div className='flex gap-x-[10px] items-center'>
                    <a href="#"><Image src='/telegram.svg' width={34} height={34}/></a>
                    <a href="#"><Image src='/discord.svg' width={34} height={34}/></a>
                    <a href="#"><Image src='/twitter.svg' width={34} height={34}/></a>
                    </div>
                </div>
                <p className='flex gap-x-[6px] text-[14px] lg:text-[16px]'><span>Powered by</span> <Image src='/niftables-logo.svg' alt='niftables logo' width={101} height={18} className='w-[90px] h-[16px] lg:w-[101px] lg:h-[81px]'/></p>
            </nav>
        </footer>
    )
}
export default Footer
