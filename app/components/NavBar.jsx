'use client'
import Image from "next/image";
import {useState} from "react";
import MobileMenu from "./MobileMenu";
import {menuItems} from "../constants";
import {motion, AnimatePresence} from "framer-motion";

const NavBar = () => {

    const [menuVisible, setMenuVisible] = useState(false)
    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }
    return (
        <>
            <nav
                className='w-full absolute z-50 bg-transparent pt-[20px] xl:pt-[30px] '>
                <div
                    className='flex px-[15px] md:px-[30px] min-[1280px]:px-[160px] xl:px-[180px] 2xl:px-[240px] justify-between items-center w-full max-w-[1920px] mx-auto'>
                    <Image src='/logo.svg' width={120} height={33} className='relative z-[120]'/>
                    <ul className='flex items-center gap-x-[15px] xl:gap-x-[40px] font-satoshi relative z-[120]'>
                        {menuItems.map((menuItem, index) => <li key={`menu-${index}`}
                                                                className='hidden xl:flex items-start gap-x-[4px]'>
                            <a
                                className={`relative font-bold text-white text-[18px] leading-[110%] ${menuItem.comingSoon ? 'cursor-default' : 'cursor-pointer hover:text-[#3D8BFF] duration-200 delay-50 ease-linear'}`}
                                href={menuItem.link}>
                                {menuItem.title}
                            </a>
                            {menuItem.comingSoon ?
                                <p className='text-[10px] leading-[110%] font-bold rounded-[100px] text-center px-[4px] pt-[2px] pb-[1px] uppercase bg-black text-[#AB23FF]'>soon</p> : null}
                        </li>)}
                        <li><a href="#">
                            <button
                                className='font-satoshi font-bold text-center text-base text-white leading-[110%] px-[23px] pt-[9px] pb-[11px] rounded-[6px] border border-[2px] flex items-center'>Connect
                            </button>
                        </a></li>
                        <li className='xl:hidden flex items-center'>
                            <motion.div onClick={toggleMenu}
                                        className={`w-[38px] gap-[5px] h-[38px] rounded-[6px] flex flex-col items-center justify-center ${menuVisible ? 'bg-[#3D8BFF] duration-300 ease-out' : 'bg-white'}`}>
                                <motion.span
                                    className={`w-[20px] h-[2px] block ${menuVisible ?'bg-white duration-300 ease-out rotate-[45deg] translate-y-[3.5px] translate-x-[1px]': 'bg-black  '}`}></motion.span>
                                <motion.span
                                    className={`w-[20px] h-[2px] block ${menuVisible ?'bg-white duration-300 ease-out rotate-[-45deg] opacity-0 hidden': 'bg-black '}`}></motion.span>
                                <motion.span
                                    className={`w-[20px] h-[2px] block ${menuVisible ?'bg-white duration-300 ease-out rotate-[-45deg] translate-y-[-3.5px] translate-x-[1px]': 'bg-black '}`}></motion.span>
                            </motion.div>
                        </li>
                    </ul>
                    {/*Mobile menu*/}
                    <AnimatePresence>
                        {menuVisible ? <MobileMenu toggleMenu={toggleMenu}/> : null}
                    </AnimatePresence>
                </div>
            </nav>
        </>
    )
}
export default NavBar
