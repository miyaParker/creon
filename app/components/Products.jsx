'use client'
import ProductCard from "./ProductCard";

const Products = () => {
    const cardsLG = [
        {
            heading: 'token',
            subheading: 'The Gateway token to the world of AI',
            text: 'Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.',
            image: '/card-lg1.png'
        },
        {
            heading: 'revenue',
            subheading: 'Driving income and growth through decentralization',
            text: 'CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.',
            image: '/card-lg2.png'
        },
        {
            heading: 'launchpad',
            subheading: 'Driving the future of AI Innovation',
            text: 'The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.',
            image: '/card-lg3.png'
        },
    ]

    const cards = [
        {
            heading: 'token',
            subheading: 'Empowering NFT Holders and Shaping AI Development',
            text: 'Launching in the second half of 2024, the CREON token represents first bridge between AI tools and blockchain technology, giving NFT holders and token users unprecedented access and influence.',
            image: '/card1.png'
        },
        {
            heading: 'income',
            subheading: 'Harnessing AI for Profit Generation',
            text: 'As an integral part of our project, AI Income offers the opportunity to benefit from a genuine, profit-generating AI-based business. This facet of our initiative leverages the power of selected exclusive AI tools to create a profit stream.',
            image: '/card2.png'
        },
        {
            heading: 'launchpad',
            subheading: 'Unlocking Tokenized AI Projects',
            text: 'AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.',
            image: '/card3.png'
        },
    ]
    return (
        <div className='w-full'>
            <section className='xl:hidden max-w-[1920px] md:px-[30px] xl:px-[120px] 2xl:px-[240px] mx-auto overflow-scroll lg:overflow-hidden py-[76px] md:py-[204px] bg-black'>
                <div className='mx-auto flex gap-x-[40px] lg:gap-x-[20px] justify-between  px-[15px] w-max lg:w-full '>
                    {cards.map((card, index) => <ProductCard card={card} key={index}/>)}

                </div>
            </section>
            <section className='pt-[176px] mx-auto hidden xl:flex gap-x-[40px] justify-between bg-black w-full py-[76px] px-[15px] md:px-[30px] md:px-[30px] xl:px-[120px] 2xl:px-[240px]'>
                {cardsLG.map((card, index) => <ProductCard card={card} key={index}/>)}
            </section>

        </div>
    )
}
export default Products
