import DropdownItem from "./DropdownItem";
import {faqs} from "../constants";

const Dropdown = () => {

    return (
        <section className=' overflow-y-hidden w-full md:max-w-[472px] xl:max-w-[552px] relative z-20'>
            {faqs.map((faq, index) => <DropdownItem data={faq} key={index} index={index + 1}/>)}
        </section>
    )
}
export default Dropdown
