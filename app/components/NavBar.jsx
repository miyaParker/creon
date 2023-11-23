'use client'
import Image from "next/image";
import {useState} from "react";
import MobileMenu from "./MobileMenu";
import {menuItems} from "../constants";

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
                    className='flex px-[15px] md:px-[30px] xl:px-[120px] 2xl:px-[240px] justify-between items-center w-full max-w-[1920px] mx-auto'>
                    <Image src='/logo.svg' width={120} height={33}/>
                    <ul className='flex items-center gap-x-[15px] xl:gap-x-[40px] font-satoshi'>
                        {menuItems.map((menuItem, index) => <li key={`menu-${index}`}
                                                                className='hidden xl:flex items-start gap-x-[4px]'>
                            <a
                                className='relative font-bold text-white text-[18px] leading-[110%]'
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
                            <button onClick={toggleMenu}><Image src='/menu.svg' width={38} height={38}/></button>
                        </li>
                    </ul>
                    {/*Mobile menu*/}
                    {menuVisible ?
                        <MobileMenu toggleMenu={toggleMenu}/> : null}
                </div>
            </nav>


        </>
    )
}
export default NavBar
