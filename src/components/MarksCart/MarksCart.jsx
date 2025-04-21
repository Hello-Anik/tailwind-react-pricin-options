import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksCart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    console.log(marksData)
    //data processing for the cart
    return (
        <div>
           <BarChart width={800} height={500} data={marksData}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Bar dataKey={'chemistry'} fill='yellow'></Bar>
            <Bar dataKey={'physics'}  fill='red'></Bar>
           </BarChart>
        </div>
    );
};

export default MarksCart;