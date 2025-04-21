import React from 'react';
import Link from './Link';

const navigation = [
    { id: 1, name: "Dashboard", urlPath: "/dashboard" },
    { id: 2, name: "Profile", urlPath: "/profile" },
    { id: 3, name: "Settings", urlPath: "/settings" },
    { id: 4, name: "Notifications", urlPath: "/notifications" },
    { id: 5, name: "Help", urlPath: "/help" }
  ];
  
  
const Navbar = () => {
    return (
        <nav>

           <ul className='flex'>
           {
                navigation.map(route=>  <Link key={route.id} route={route}></Link>)
            }
           </ul>
            {/* <ul className='flex'>
                {
                    navigation.map(route => <li className='mr-10'><a href={route.urlPath}>{route.name}</a></li>)
                }
            </ul> */}
        </nav>
    );
};

export default Navbar;