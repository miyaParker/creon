import DefinitionCard from "./DefinitionCard";
import BackgroundVideo from "./BackgroundVideo";

const Definition = () => {
    const cards = [
        {
            heading: 'AI Prospects, Market Size, and Development Pace',
            text: 'The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.',
            image: '/card1.png'
        },
        {
            heading: 'AI Tools and Market',
            text: 'AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.',
            image: '/card2.png'
        },
        {
            heading: 'AI, Crypto, and NFT Market',
            text: 'Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.',
            image: '/card3.png'
        },
    ]
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
