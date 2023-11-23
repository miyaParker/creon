const CreonPass = () => {
    return (
        <div className='bg-black w-full'>
            <div
                className={`xl:flex justify-between w-full max-w-[1920px] mx-auto px-[15px] md:px-[30px] xl:px-[120px] 2xl:px-[240px] pt-[80px] `}>
                <div>
                    <h2 className={`text-[32px] md:text-[44px] xl:text-[68px] max-w-[345px] md:max-w-full text-white font-monument uppercase leading-[110%] mb-[10px] md: mb-[41px]`}>
                        creon pass nft
                    </h2>
                    <h3 className='xl:hidden gradient-text font-satoshi font-bold w-full text-[18px] text-white leading-[130%] mb-[25px]'>
                        Access to confidential AI tools enabling business optimization and development. Only NFT holders
                        will have the ability to use a given tool.</h3>
                    <h3 className='hidden xl:block gradient-text font-satoshi font-bold w-full text-[18px] text-white leading-[130%] mb-[25px]'>
                        The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate
                        passive income through AI-driven tools</h3>
                    <div className='flex flex-col lg:items-center gap-x-[45px] max-w-full overflow-hidden'>
                        <div
                            className='xl:hidden relative md:left-[93px] flex-shrink-0 mt-[30px] w-full h-[485px] md:w-[694px] md:h-[694px] mb-[18px] overflow-hidden'>
                            <div className="ellipse absolute top-[-32px]"></div>
                            <div className="video-overlay"></div>
                            <video className=' object-cover w-full h-full' autoPlay muted>
                                <source src="/creon-pass.mp4" type="video/mp4"/>
                            </video>
                            <div className="ellipse absolute bottom-[-32px]"></div>
                        </div>
                        <div
                            className='block xl:hidden md:absolute md:left-[30px] xl:left-[120px] 2xl:left-[240px] flex flex-col gap-[15px]'>
                            <p className={`p-[16px] border border-[#13171D] rounded-[6px] font-satoshi w-full md:max-w-[231px] xl:max-w-[472px] text-[16px] text-white leading-[130%] pb-[30px] `}>
                                Prospect to derive financial benefits through the redistributed profit generated from AI
                                tools, but only when the majority of NFT holders decide to release the tool publicly.
                            </p>
                            <div className='flex flex-row md:flex-col xl:flex-row items-start gap-x-[15px]'>
                                <p className={`p-[16px] border border-[#13171D] rounded-[6px] font-satoshi w-full md:max-w-[231px] text-[16px] text-white leading-[130%] pb-[30px] `}>
                                    The possibility of allocating investments into new, exceptional tokenized AI tools
                                    through Creon Launchpad.
                                </p>
                                <p className={`p-[16px] border border-[#13171D] rounded-[6px] font-satoshi w-full md:max-w-[231px] text-[16px] text-white leading-[130%] pb-[30px] `}>
                                    Early access to allocations in inspiring tokenized projects, real businesses based
                                    on
                                    AI.
                                </p>
                            </div>
                            <button
                                className='mt-[5px] w-full md:max-w-[231px] rounded-[6px] gradient-bg h-[56px] font-bold text-center text-[16px] text-white leading-[110%]'>
                                Buy Creon Pass
                            </button>
                        </div>

                        <div
                            className='hidden xl:flex md:absolute md:left-[30px] xl:left-[120px] 2xl:left-[240px] flex flex-col gap-y-[10px]'>
                            <p className={`px-[18px] py-[16px] border border-[#13171D] rounded-[6px] font-satoshi w-max text-[16px] text-white leading-[130%]`}>
                                Pre-launch investment opportunities for upcoming AI projects</p>
                            <p className={`px-[18px] py-[16px] border border-[#13171D] rounded-[6px] font-satoshi w-max text-[16px] text-white leading-[130%]`}>
                                Free and early access to Creon built AI projects
                            </p>
                            <p className={`px-[18px] py-[16px] border border-[#13171D] rounded-[6px] font-satoshi w-max text-[16px] text-white leading-[130%]`}>
                                Higher allocation limits on the Creon AI Launchpad
                            </p>
                            <p className={`px-[18px] py-[16px] border border-[#13171D] rounded-[6px] font-satoshi w-max text-[16px] text-white leading-[130%]`}>
                                Revenue share distribution from Creon built AI projects
                            </p>
                            <button
                                className='mt-[5px] xl:mt-[72px] w-full md:max-w-[231px] rounded-[6px] gradient-bg h-[56px] font-bold text-center text-[16px] text-white leading-[110%]'>
                                Buy Creon Pass
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className='hidden xl:block relative md:left-[93px] flex-shrink-0 mt-[30px] w-full h-[485px] md:w-[694px] md:h-[694px] mb-[18px] overflow-hidden'>
                    <div className="ellipse absolute top-[-32px]"></div>
                    <div className="video-overlay"></div>
                    <video className=' object-cover w-full h-full' autoPlay muted>
                        <source src="/creon-pass.mp4" type="video/mp4"/>
                    </video>
                    <div className="ellipse absolute bottom-[-32px]"></div>
                </div>

            </div>
        </div>
    )
}
export default CreonPass
