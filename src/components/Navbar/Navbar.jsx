import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigation = [
    { id: 1, name: "Dashboard", urlPath: "/dashboard" },
    { id: 2, name: "Profile", urlPath: "/profile" },
    { id: 3, name: "Settings", urlPath: "/settings" },
    { id: 4, name: "Notifications", urlPath: "/notifications" },
    { id: 5, name: "Help", urlPath: "/help" }
  ];
  
  
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const Links =  navigation.map(route=>  <Link key={route.id} route={route}></Link>);
    return (
        <nav  className='flex justify-between mx-10 mt-4 items-center'>
            <span className='flex' onClick={()=>setOpen(!
                open)}>
            {open ?
            <X className='md:hidden'></X>:
            <Menu className='md:hidden'></Menu>}
            <ul className={`md:hidden  text-black
            absolute
            duration-1000
            ${open? ' top-14 ':'-top-64'}
                bg-amber-400 rounded-xl`}>
                {Links}
            </ul>
    
                 <h4 className='ml-4 font-bold'>My Navbar</h4>
            </span>
           <ul className='md:flex hidden'>
           {
               Links
            }
           </ul>
            {/* <ul className='flex'>
                {
                    navigation.map(route => <li className='mr-10'><a href={route.urlPath}>{route.name}</a></li>)
                }
            </ul> */}
            <button className='btn '>Sign In</button>
        </nav>
    );
};

export default Navbar;