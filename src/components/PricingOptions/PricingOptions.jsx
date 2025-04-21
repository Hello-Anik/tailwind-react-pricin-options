import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({PricingPromise}) => {
    const PricingData = use(PricingPromise);
    console.log(PricingData)
    return (
        <div >
            <h2 className='m-10 text-5xl font-semibold'>Get Our Membership</h2>
            <div className='grid md:grid-cols-3 gap-4 sm:grid-rows-3'>
                {
                    PricingData.map(pricing => <PricingCard
                        key={pricing.id}
                        pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;