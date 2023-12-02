const BusinessModel = () => {
    return (
        <section className='bg-black w-full'>
        <div
            className={`w-full max-w-[1920px] mx-auto px-[15px] md:px-[30px] min-[1280px]:px-[160px] xl:px-[180px] 2xl:px-[240px] pt-[80px] `}>

            <h2 className={`text-[32px] md:text-[44px] xl:text-[68px] max-w-[345px] md:max-w-full text-white font-monument uppercase leading-[110%] mb-[10px]`}>
                <span className='block'>Profiting Through</span><span
                className='block mt-[10px] xl:mt-[20px] text-[22px] md:text-[28px] xl:text-[38px] leading-[120%] block text-right gradient-text'>AI Innovation & Decentralization</span>
            </h2>
            <div className='mx-auto flex flex-col lg:flex-row lg:items-center gap-x-[45px]'>
                <div
                    className='relative flex-shrink-0 mt-[30px] w-full lg:w-[70%] overflow-hidden mb-[18px] overflow-hidden'>
                    <video className='z-[-10] w-full h-full object-cover' autoPlay muted>
                        <source src="/bm-video.mp4" type="video/mp4"/>
                    </video>
                    <div className='overlay w-full z-20 h-full absolute top-0'></div>
                </div>

                <div className='h-max lg:max-w-[291px] py-[20px] mt-[51px] border-y 2xl:border-y-0 2xl:border-x 2xl:px-[20px] border-[#13171D]'>
                    <h3 className=' font-satoshi font-bold w-full text-[18px] text-white leading-[130%] pb-[15px] md:pb-[20px]'>A
                        Dynamic Business Model for Sustainable Growth and Community Engagement</h3>
                    <p className={`font-satoshi w-full text-[16px] text-white leading-[130%] pb-[30px] `}>
                        At Creon, we merge AI tools with the crypto and NFT markets, leveraging a dynamic business model
                        to
                        generate profits. Our commitment to innovation and decentralization allows us to strengthen our
                        market position and foster a sustainable ecosystem.
                        We empower our community, ensuring transparency and actively involving NFT holders in our
                        success.
                    </p>
                </div>
            </div>

        </div>
        </section>
    )
}
export default BusinessModel
