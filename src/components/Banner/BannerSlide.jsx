const BannerSlide = ({ slide }) => {
    return (
        <div className='mx-auto flex max-w-7xl items-center justify-between bg-white'>
            <div>
                <h2>{slide.itemName}</h2>
                <p></p>
            </div>
            <div className='h-[580px] w-[870px]'>
                <img src={slide.imageUrl} alt='' className='h-full w-full' />
            </div>
        </div>
    );
};

export default BannerSlide;
