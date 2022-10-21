import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import { } from 'react-icons/ai'
import spacelogo from '../assets/spacelogo.png';
import { Link } from 'react-router-dom';

const Navbar = ({sidebar, setSidebar}) => {
  return (
    <nav className='flex flex-row justify-between items-center h-12 w-full pl-5 md:py-1 md:px-1 lg:py-14 lg:px-6'>
        <img 
            src={spacelogo}
            alt='space-logo'
            className='5/6 w-auto mt-5 lg:mt-0 lg:ml-16'
        />

        <button className='hamburger text-white mr-4 h-auto text-2xl sm:hidden' onClick={()=>setSidebar(!sidebar)}>
            <GiHamburgerMenu/>
        </button>

        <div className='h-20 navlink hidden flex items-center px-10 pt-4 w-144 sm:block lg:w-2/3 lg:pt-0'>
            <div className={'text-white flex flex-row gap-10 w-full h-full items-center md:gap-10 lg:justify-center lg:gap-20'}>
                <Link
                    className='text-capitalize text-sm p-0 m-0 lg:tracking-widest lg:text-base'
                    to={'/'}
                >
                    00 HOME
                </Link>
                <Link
                    className='text-capitalize text-sm p-0 m-0 lg:tracking-widest lg:text-base'
                    to={'/destination'}
                >
                    01 DESTINATION
                </Link>
                <Link
                    className='text-capitalize text-sm p-0 m-0 lg:tracking-widest lg:text-base'
                    to={'/crew'}
                >
                    02 CREW
                </Link>
                <Link
                    className='text-capitalize text-sm p-0 m-0 lg:tracking-widest lg:text-base'
                    to={'/technology'}
                >
                    03 TECHNOLOGY
                </Link>
            </div>
        </div>
        {/* HIDDEN NAVLINK */}
        <div
                className={sidebar ? 'navbar active' : 'navbar'}
            >
                <div className='flex w-full justify-end'>
                    <button
                        onClick={()=>setSidebar(!sidebar)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
                    </button>
                </div>
               

                <Link
                    to={'/'}
                    className='text-sm tracking-widest'
                >
                    00 HOME
                </Link>
                <Link
                    to={'/destination'}
                    className='text-sm tracking-widest'
                >
                    01 DESTINATION
                </Link>
                <Link
                    to={'/crew'}
                    className='text-sm tracking-widest'
                >
                    02 CREW
                </Link>
                <Link
                    to={'/technology'}
                    className='text-sm tracking-widest'
                >
                    03 TECHNOLOGY
                </Link>
            </div>
    </nav>
  )
}

export default Navbar