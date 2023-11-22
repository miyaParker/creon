'use client'

import {useState} from "react";
import DropdownItem from "./DropdownItem";

const Dropdown = () => {
    const faqs = [
        {
            q: 'Profitability and Growth',
            a: 'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.',
            icon: 'icon1.svg'
        },
        {
            q: 'Transparent & Fair Decentralized Earnings',
            a: 'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.',
            icon: 'icon1.svg'
        },
        {
            q: 'Early Engagement in Tokenized AI Projects',
            a: 'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.',
            icon: 'icon1.svg'
        },
        {
            q: 'Limitless Possibilities of AI & Crypto',
            a: 'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.',
            icon: 'icon1.svg'
        }
    ]
    const [currentIndex, setCurrentIndex] = useState(1)
    return (
        <section className=' overflow-y-hidden w-full md:max-w-[472px] xl:max-w-[552px] relative z-20'>
            {faqs.map((faq, index) => <DropdownItem data={faq} key={index} index={index + 1}
                                               setShow={() => {
                                                   if (currentIndex === index + 1) setCurrentIndex(0)
                                                   else setCurrentIndex(index + 1)
                                               }} currentIndex={currentIndex}/>)}
        </section>
    )
}
export default Dropdown
