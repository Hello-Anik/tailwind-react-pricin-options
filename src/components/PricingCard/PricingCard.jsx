import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
   
    const {name, price, description, features} = pricing;
    return (
        <div className='border bg-amber-600 rounded-2xl p-4 m-4 flex flex-col'>
            {
                /**card header */
            }

            <div>
                <h3 className='text-7xl'>{name}</h3>
                <h4 className='text-3xl'>{price}</h4>
            </div>

            {/**card body */}
            <div className='bg-amber-400 p-4 rounded-xl mt-10 flex-1'>
                <p>{description}</p>
                {features.map((feature, index) => <PricingFeature 
                key={index}
                feature={feature}></PricingFeature>)}
            </div>
            <button className="mt-4 btn w-full">Subscribe</button>
        </div>
        
    );
};

export default PricingCard;