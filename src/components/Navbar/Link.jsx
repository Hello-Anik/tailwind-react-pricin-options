import React from 'react';

const Link = ({route}) => {
    return (
       <li className='  lg:py-2 lg:hover:bg-amber-400 lg:mr-10 px-4 rounded-xl'><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;