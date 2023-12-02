const Hero = () => {
    return (
        <main className='h-screen max-h-[812px] w-full relative'>
                <video className='z-[-10] w-full h-full object-cover' autoPlay muted>
                    <source src="/video-lg.mp4" type="video/mp4"/>
                </video>
                <div className='overlay w-full z-20 h-full absolute top-0'></div>
            <div className='relative z-40 w-full max-w-[1920px] mx-auto px-[15px] md:px-[30px] min-[1280px]:px-[160px] xl:px-[180px] 2xl:px-[240px]'>
                <div className='absolute bottom-[60px] text-white '>
                    <p className='w-full max-w-[345px] md:max-w-[465px] xl:max-w-[1200px] 2xl:max-w-[1400px] font-monument text-[32px] md:text-[44px] xl:text-[54px] 2xl:text-[68px] uppercase leading-[110%] mb-[20px]'>Empowering
                        AI-Crypto Innovations and Integrating AI Tools into crypto.</p>
                    <p className='gradient-border w-full py-[10px] lg:py-[12px] md:max-w-[345px] lg:max-w-max md:max-w-[453px] gradient-text font-satoshi font-bold text-[18px] leading-[130%]'>Creon
                        «Create On» confidential AI Tools for granting access through NFTs.</p>
                </div>
            </div>
        </main>
    )
}
export default Hero
