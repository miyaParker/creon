const Hero = () => {
    return (
        <main className='h-screen max-h-[812px] w-full relative'>

                <video className='z-[-10] w-full h-full object-cover' autoPlay muted>
                    <source src="/video-lg.mp4" type="video/mp4"/>
                </video>
                <div className='overlay w-full z-20 h-full absolute top-0'></div>
            <div className='max-w-[1920px] px-[15px] md:px-[30px] xl:px-[120px] 2xl:px-[240px]'>
                <div className='block xl:hidden absolute bottom-[60px] text-white '>
                    <p className='w-full max-w-[345px] md:max-w-[465px] xl:max-w-[964px] font-monument text-[32px] md:text-[44px] lg:text-[44px] uppercase leading-[110%] mb-[20px]'>Empowering
                        AI-Crypto Innovations and Integrating AI Tools into crypto.</p>
                    <p className='gradient-border w-full max-w-[345px] md:max-w-[453px] gradient-text font-satoshi font-bold text-[18px] leading-[130%]'>Creon
                        «Create On» confidential AI Tools for granting access through NFTs.</p>
                </div>
                <div className='hidden xl:block absolute w-full bottom-[60px] text-white '>
                    <div className='w-max'>
                        <p className='w-full max-w-[1200px] 2xl:max-w-[1440px] font-monument text-[48px] 2xl:text-[68px] uppercase leading-[110%] mb-[20px]'>The
                            world's first
                            platform for Tokenizing
                            AI blockchain projects</p>
                        <p className='py-[12px] gradient-border w-full max-w-[345px] md:max-w-[453px] lg:max-w-max gradient-text font-satoshi font-bold text-[18px] leading-[130%]'>Hold
                            the Creon Pass NFT and earn passive income from AI Tools.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Hero
