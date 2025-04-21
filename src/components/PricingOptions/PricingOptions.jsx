import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({PricingPromise}) => {
    const PricingData = use(PricingPromise);
    console.log(PricingData)
    return (
        <div >
            <h2 className='m-10 text-5xl font-semibold'>Get Our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {/* {
                    PricingData.map(pricing => <PricingCard
                        key={pricing.id}
                        pricing={pricing}></PricingCard>)
                } */}
                {
                    PricingData.map(pricing => <DaisyPricing
                    key={pricing.id}
                         pricing={pricing}></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;