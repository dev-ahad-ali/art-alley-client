import { FaHeadset } from 'react-icons/fa';
import { MdPinDrop } from 'react-icons/md';
import { SiTicktick } from 'react-icons/si';
import { TbTruckDelivery } from 'react-icons/tb';

const Services = () => {
    return (
        <section className='my-6 bg-amber-950/65 py-16 text-white md:my-12 dark:bg-gray-500'>
            <div className='mx-auto grid max-w-7xl grid-cols-1 gap-3 px-5 md:grid-cols-2 lg:grid-cols-4'>
                <div className='flex items-center gap-4'>
                    <TbTruckDelivery className='text-[60px] group-hover:text-orange-900' />
                    <div>
                        <h3 className='text-lg font-bold'>24 Hour Delivery</h3>
                        <p className='text-sm opacity-60'>
                            Get free shipping over $65.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <SiTicktick className='text-[60px] group-hover:text-orange-900' />
                    <div>
                        <h3 className='text-lg font-bold'>
                            Guaranteed Satisfaction
                        </h3>
                        <p className='text-sm opacity-60'>
                            Top notch customer service.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <FaHeadset className='text-[60px] group-hover:text-orange-900' />
                    <div>
                        <h3 className='text-lg font-bold'>
                            Trusted by Professionals
                        </h3>
                        <p className='text-sm opacity-60'>
                            Within 30 days for an exchange.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <MdPinDrop className='text-[60px] group-hover:text-orange-900' />
                    <div>
                        <h3 className='text-lg font-bold'>
                            Customs-free Delivery
                        </h3>
                        <p className='text-sm opacity-60'>
                            Pay with Multiple Credit Cards
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
