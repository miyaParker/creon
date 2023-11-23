import Image from "next/image";
import {menuItems} from "../constants";

const MobileMenu = ({toggleMenu}) => {
    return (
        <div className='xl:hidden z-50 w-full fixed top-0 left-0 h-screen right-0 flex'>
            <div className='flex-1 h-full bg-blur pt-[24px]'>
            </div>
            <div
                className='relative flex-shrink-0 grow-0 w-[208px] md:w-[308px] bg-black h-full pt-[88px] pl-[30px]'>
                <ul className='flex flex-col text-white'>
                    {menuItems.map((menuItem, index) => <li
                        className='py-[15px] border-y border-[#13171D] flex items-start gap-x-[4px]'>
                        <a key={`menu-${index}`}
                           className='relative font-bold text-white text-[18px] leading-[110%]'
                           href={menuItem.link}>
                            {menuItem.title}
                        </a>
                        {menuItem.comingSoon ?
                            <p className='text-[10px] leading-[110%] font-bold rounded-[100px] text-center px-[4px] pt-[2px] pb-[1px] uppercase bg-black text-[#AB23FF]'>soon</p> : null}
                    </li>)}
                </ul>
                <div className='absolute left-[30px] bottom-[30px] flex gap-x-[10px] items-center'>
                    <Image src='/telegram.svg' width={34} height={34}/>
                    <Image src='/discord.svg' width={34} height={34}/>
                    <Image src='/twitter.svg' width={34} height={34}/>
                </div>
            </div>
            <div
                className='absolute top-[20px] px-[15px] md:px-[30px] items-center w-full flex justify-between'>
                <Image src='/logo.svg' width={120} height={33}/>
                <div className='flex items-center gap-[15px]'>
                    <a href="#connect">
                        <button
                            className='text-[16px] font-satoshi font-bold text-center text-base text-white leading-[110%] px-[23px] pt-[9px] pb-[11px] rounded-[6px] border border-[2px] flex items-center'>Connect
                        </button>
                    </a>
                    <button onClick={toggleMenu} className='flex-shrink-0'>
                        <Image src='/close.svg' width={38} height={38}/>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default MobileMenu
