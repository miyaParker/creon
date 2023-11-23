import DefinitionCard from "./DefinitionCard";
import BackgroundVideo from "./BackgroundVideo";
import {definitionCards as cards} from "../constants";

const Definition = () => {
    return (
        <section className='relative w-full h-max overflow-hidden bg-black'>
            <div
                className='w-full h-full bg-black relative bg-opacity-60 z-50 overflow-scroll md:overflow-hidden justify-between py-[80px]'>

                <div className='w-full max-w-[1920px] px-[15px] md:px-[30px] xl:px-[120px] 2xl:px-[240px] mx-auto'>
                    <div
                        className='flex flex-row md:flex-col w-max md:w-full md:max-w-full gap-x-[15px] gap-y-[20px]'>
                        {cards.map((card, index) => <DefinitionCard card={card} key={index}/>)}
                    </div>
                </div>

            </div>
            <div className='hidden xl:block'>
                <BackgroundVideo/>
            </div>
        </section>
    )
}
export default Definition
