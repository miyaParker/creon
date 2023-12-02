'use client'
import Image from "next/image";
import {motion} from "framer-motion";

const AccordionPanel = ({
                            data, index, panel, setPanel
                        }) => {
    return (
        <div onClick={() => {
            if (panel === index + 1) {
                setPanel(0)
            } else setPanel(index + 1)
        }}
             className={`${index === 1 ? '' : 'pt-[20px]'} relative pb-[20px] border-b border-[#13171D] cursor-pointer`}>
            <div className='flex items-center gap-[20px]'>
                {data.icon(panel, index)}
                <p className={`font-bold text-[18px] max-w-[323px] text-white font-satoshi text-[18px]leading-[130%]  ${panel === index + 1 ? '' : 'hover:text-[#3D8BFF] duration-200 delay-50 ease-linear'}`}>{data.q}</p>
            </div>
            <Image
                className={`${panel === index + 1 ? '' : 'flip-horizontal duration-300'}  duration-300 cursor-pointer absolute top-[24px] right-[24px]`}
                src='/caret.svg'
                alt='read more' width={14}
                height={14}/>
            <motion.div transition={{type: 'tween', duration: 0.25, ease:'easeOut'}}
                        initial={{
                            height: '0',
                            opacity: 0,
                        }}
                        animate={{
                            height:
                                panel === index + 1
                                    ? 'max-content'
                                    : 0,
                            opacity: panel === index + 1 ? 1 : 0,
                        }}
            >
                <p className={`${panel === index + 1 ? 'block' : 'h-0'} ml-[93px] font-satoshi w-full text-[16px] text-white leading-[130%] pb-[30px] max-w-[252px] md:max-w-[379px]`}>
                    {data.a}
                </p>
            </motion.div>
        </div>
    )
}
export default AccordionPanel
