const BannerSlide = ({ slide }) => {
    return (
        <>
            <p className='mx-auto -mb-8 max-w-7xl font-lobster text-xl underline'>
                Highlights
            </p>
            <div
                className={`mx-auto flex max-w-7xl flex-col items-center justify-between bg-white lg:flex-row dark:bg-black`}
            >
                <div className='order-2 mt-3 lg:-order-1 lg:mt-0'>
                    <h2 className='top-16 z-10 font-yeseva text-4xl md:text-[50px] lg:absolute lg:text-[80px]'>
                        {slide.itemName}
                    </h2>
                    <p className='mt-3 min-h-[150px] max-w-[400px] lg:mt-0 lg:min-h-max'>
                        {slide?.description.slice(0, 180)}....
                    </p>
                </div>
                <div className='lg:h-[580px] lg:w-[870px]'>
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
