const BackgroundVideo=()=>{
    return(
        <div
            className='absolute bottom-0 left-0 md:left-[93px] flex-shrink-0 mt-[30px] w-full h-[485px] overflow-hidden'>
            <div className="ellipse absolute top-[-32px]"></div>
            <div className="video-overlay"></div>
            <video className=' object-cover w-full h-full' autoPlay muted>
                <source src="/bg-video.mp4" type="video/mp4"/>
            </video>
            <div className="ellipse absolute bottom-[-32px]"></div>
        </div>
    )
}
export default BackgroundVideo
