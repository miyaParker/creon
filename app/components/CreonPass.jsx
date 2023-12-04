const CreonPass = () => {
    return (
        <div className='bg-black w-full'>
            <div
                className={`md:min-h-[1024px] min-[860px]:min-h-max relative h-max min-[860px]:flex justify-between w-full max-w-[1920px] mx-auto `}>
                <div
                    className='flex-1 relative px-[15px] md:px-0 md:pl-[30px] lg:pl-[100px] min-[1280px]:pl-[160px] xl:pl-[180px] 2xl:pl-[240px] pt-[80px] '>
                    <h2 className={`relative z-40 text-[32px] md:text-[44px] xl:text-[68px] text-white font-monument uppercase leading-[110%] mb-[10px] md:mb-[41px]`}>
                        creon pass nft
                    </h2>
                    <h3 className='relative z-40 xl:hidden md:max-w-[620px] min-[860px]:max-w-[472px] gradient-text font-satoshi font-bold w-full text-[18px] text-white leading-[130%] mb-[25px]'>
                        Access to confidential AI tools enabling business optimization and development. Only NFT holders
                        will have the ability to use a given tool.</h3>
                    <h3 className='hidden xl:block gradient-text font-satoshi font-bold max-w-[700px] text-[18px] text-white leading-[130%] mb-[25px]'>
                        The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate
                        passive income through AI-driven tools</h3>
                    <div
                        className='min-[860px]:hidden w-full h-auto relative block md:absolute z-40 lg:top-0 flex-shrink-0 mt-[30px] right-0 mb-[18px] overflow-hidden'>
                        <div className='w-full mx-auto relative md:right-[-201px] overflow-visible'>
                            <div className="ellipse"></div>
                            <div className="video-overlay"></div>
                            <video className='object-cover relative w-full h-full' autoPlay muted>
                                <source src="/creon-pass-md.mp4" type="video/mp4"/>
                            </video>
                            <div className="ellipse"></div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-x-[45px] overflow-hidden'>
                        <div className='relative z-40'>
                            <div
                                className='flex flex-col 2xl:flex-row gap-[15px]'>
                                <p className={`p-[16px] border border-[#13171D] rounded-[6px] font-satoshi w-full md:max-w-[231px] min-[860px]:max-w-[472px] 2xl:max-w-[231px] text-[16px] text-white leading-[130%] pb-[30px] `}>
                                    Prospect to derive financial benefits through the redistributed profit generated
                                    from AI
                                    tools, but only when the majority of NFT holders decide to release the tool
                                    publicly.
                                </p>
                                <div className='flex flex-row md:flex-col min-[860px]:flex-row items-start gap-[15px]'>
                                    <p className={`p-[16px] border border-[#13171D] rounded-[6px] font-satoshi w-full md:max-w-[231px] text-[16px] text-white leading-[130%] pb-[30px] `}>
                                        The possibility of allocating investments into new, exceptional tokenized AI
                                        tools
                                        through Creon Launchpad.
                                    </p>
                                    <p className={`p-[16px] border border-[#13171D] rounded-[6px] font-satoshi w-full md:max-w-[231px] text-[16px] text-white leading-[130%] pb-[30px] `}>
                                        Early access to allocations in inspiring tokenized projects, real businesses
                                        based
                                        on
                                        AI.
                                    </p>
                                </div>
                            </div>
                            <button
                                className='btn mt-[20px] md:mt-[30px] xl:mt-[72px] w-full md:w-[231px] xl:w-[453px] rounded-[6px] flex flex-col items-center overflow-hidden gradient-bg h-[57px] py-[22px] font-bold text-[16px] text-white leading-[110%]'>
                                <p className='btn-child-1 duration-300 ease-in text-center'>Buy
                                    Creon Pass</p>
                                <p className='btn-child-2 duration-300 ease-in text-center translate-y-[100%]'>Buy
                                    Creon Pass</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className='hidden min-[860px]:block flex-1 xl:hidden h-max relative z-40 top-0 mb-[18px] overflow-hidden'>
                    <div className='min-[860px]:w-[580px] w-[693px] relative  mt-[80px]'>
                        <div className="ellipse"></div>
                        <div className="video-overlay"></div>
                        <video className='object-cover relative w-full h-max' autoPlay muted>
                            <source src="/creon-pass.mp4" type="video/mp4"/>
                        </video>
                        <div className="ellipse"></div>
                    </div>
                </div>
                <div
                    className='hidden xl:block relative flex-1 flex-shrink-0 mt-[30px] w-full h-full md:w-[694px] mb-[18px] overflow-hidden'>
                    <div className="ellipse absolute"></div>
                    <div className="video-overlay"></div>
                    <video className=' object-cover w-full h-full' autoPlay muted>
                        <source src="/creon-pass.mp4" type="video/mp4"/>
                    </video>
                    <div className="ellipse absolute"></div>
                </div>

            </div>
        </div>
    )
}
export default CreonPass
