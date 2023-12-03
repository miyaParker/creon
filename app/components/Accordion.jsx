'use client'
import AccordionPanel from "./AccordionPanel";
import {faqs} from "../constants";
import {useState} from "react";

const Accordion = () => {
    const [panel, setPanel] =useState(1)
    return (
        <section className='h-max min-[860px]:h-[800px] overflow-y-hidden w-full min-[600px]:max-w-max md:max-w-[472px] xl:max-w-[552px] relative z-20'>
            {faqs.map((faq, index) => <AccordionPanel panel={panel} setPanel={setPanel} data={faq} key={index} index={index+1}/>)}
        </section>
    )
}
export default Accordion
