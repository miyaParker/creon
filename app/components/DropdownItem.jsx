'use client'
import Image from "next/image";
import {useState} from "react";

const DropdownItem = ({
                          data, index
                      }) => {
    const [visible, setVisible] = useState(index === 1)
    return (
        <div onClick={() => setVisible(!visible)}
             className={`${index === 1 ? '' : 'pt-[20px]'} relative pb-[20px] border-b border-[#13171D] cursor-pointer`}>
            <div className='flex items-center gap-[20px]'>
                <Image className='' src={data.icon}
                       alt='read more' width={73}
                       height={83}/>
                <p className={`font-bold text-[18px] max-w-[196px] text-white font-satoshi text-[18px]leading-[130%]`}>{data.q}</p>
            </div>
            <Image
                className={`${visible ? '' : 'flip-horizontal duration-300'}  cursor-pointer absolute top-[24px] right-[24px]`}
                src='/caret.svg'
                alt='read more' width={14}
                height={14}/>
            <p className={`${visible ? 'block ml-[93px]' : 'hidden'} duration-300 transition-[height] transition-[opacity] font-satoshi w-full text-[16px] text-white leading-[130%] pb-[30px] max-w-[252px] md:max-w-[379px]`}>
                {data.a}
            </p>
        </div>
    )
}
export default DropdownItem
