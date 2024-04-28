const BannerSlide = ({ slide }) => {
    return (
        <>
            <p className='mx-auto -mb-8 max-w-7xl font-lobster text-xl underline'>
                Highlights
            </p>
            <div className='mx-auto flex max-w-7xl items-center justify-between bg-white'>
                <div>
                    <h2 className='absolute top-16 z-10 font-yeseva text-[80px]'>
                        {slide.itemName}
                    </h2>
                    <p className='max-w-[350px]'>
                        {slide?.description.slice(0, 180)}....
                    </p>
                </div>
                <div className='h-[580px] w-[870px]'>
                    <img
                        src={slide.imageUrl}
                        alt=''
                        className='h-full w-full shadow-2xl'
                    />
                </div>
            </div>
        </>
    );
};

export default BannerSlide;
