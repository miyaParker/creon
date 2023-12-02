const BackgroundVideo=()=>{
    return(
        <div
            className='absolute z-10 bottom-0 left-0 w-full h-full'>
            <div className="bg-gradient z-10 "></div>
            <div className="z-20  black-gradient"></div>
            <div className="z-20 black-gradient"></div>
            <video className='object-cover w-full h-full absolute bottom-0' autoPlay muted>
                <source src="/bg-video.mp4" type="video/mp4"/>
            </video>
        </div>
    )
}
export default BackgroundVideo
