import { Slide } from 'react-awesome-reveal';
import { GiCaterpillar } from 'react-icons/gi';
import { MdCategory } from 'react-icons/md';
import { PiPaintBrushBroadFill } from 'react-icons/pi';
import { SiMusescore } from 'react-icons/si';
const Sponsors = () => {
    return (
        <section className='mt-8 bg-gray-400 bg-opacity-25 py-8 md:mt-24'>
            <h2 className='text-center font-yeseva text-5xl uppercase'>
                Sponsors
            </h2>
            <div className='mx-auto mt-12 grid max-w-7xl gap-5 px-5 md:grid-cols-2 lg:grid-cols-4 '>
                <Slide direction='left'>
                    <div className='group flex cursor-pointer items-center gap-3 p-3 duration-300 hover:-translate-y-3'>
                        <PiPaintBrushBroadFill className='text-[60px] group-hover:text-orange-900' />
                        <div>
                            <h3 className='text-2xl uppercase'>NEW WAVE</h3>
                            <p className='text-2xl'>ROAD</p>
                        </div>
                    </div>
                </Slide>
                <Slide delay={100} direction='left'>
                    <div className='group flex cursor-pointer items-center gap-3 p-3 duration-300 hover:-translate-y-3'>
                        <SiMusescore className='text-[60px] group-hover:text-blue-600' />
                        <div>
                            <h3 className='text-2xl'>MATERIAL</h3>
                            <h3 className='text-2xl'>DESIGNS</h3>
                        </div>
                    </div>
                </Slide>
                <Slide delay={200} direction='left'>
                    <div className='group flex cursor-pointer items-center gap-3 p-3 duration-300 hover:-translate-y-3'>
                        <GiCaterpillar className='text-[60px] group-hover:text-green-600' />
                        <div>
                            <h3 className='text-2xl'>CLEAN</h3>
                            <h3 className='text-2xl'>IDEAS</h3>
                        </div>
                    </div>
                </Slide>
                <Slide delay={300} direction='left'>
                    <div className='group flex cursor-pointer items-center gap-3 p-3 duration-300 hover:-translate-y-3'>
                        <MdCategory className='text-[60px] group-hover:text-purple-600' />
                        <div>
                            <h3 className='text-2xl'>CRT STUDIOS</h3>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    );
};

export default Sponsors;
