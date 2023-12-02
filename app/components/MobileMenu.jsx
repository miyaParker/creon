import Image from "next/image";
import {menuItems} from "../constants";
import {motion} from "framer-motion";

const MobileMenu = () => {
    return (
        <div className='w-screen screen-h fixed bottom-0 left-0'>
            <motion.div initial={{x: 208}} animate={{x: 0}} exit={{x: 208}} transition={{type: 'tween', ease:'easeOut', duration:0.25}}
                        className='screen-h top-0 absolute z-[150] right-0 w-[208px] bg-black h-full pt-[88px] pl-[30px]'>
                <motion.ul className='flex flex-col text-white z-[390] relative'>
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
                </motion.ul>
                <div className='absolute left-[30px] bottom-[30px] flex gap-x-[10px] items-center'>
                        <div
                            className='w-[34px] h-[34px] rounded-full border border-2 border-white flex  items-center justify-center hover:bg-[#3D8BFF] hover:border-transparent duration-200 ease-in cursor-pointer'>
                            <a href="#"><Image src='/telegram.svg' width={16} height={16}/></a>
                        </div>
                        <div
                            className='w-[34px] h-[34px] rounded-full border border-2 border-white flex  items-center justify-center hover:bg-[#3D8BFF] hover:border-transparent duration-200 ease-in cursor-pointer'>
                            <a href="#"><Image src='/discord.svg' width={16} height={16}/></a>
                        </div>
                        <div
                            className='w-[34px] h-[34px] rounded-full border border-2 border-white flex  items-center justify-center hover:bg-[#3D8BFF] hover:border-transparent duration-200 ease-in cursor-pointer'>
                            <a href="#"><Image src='/twitter.svg' width={16} height={16}/></a>
                        </div>
                </div>
            </motion.div>
            <motion.div initial={{backdropFilter: 'none'}} animate={{backdropFilter: 'blur(5px)'}} exit={{backdropFilter: 'none'}}
                        className='absolute top-0 left-0  z-50  h-full w-screen bg-transparent '></motion.div>
        </div>
    )
}
export default MobileMenu
