import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'


const Home = () => {

    const [sidebar, setSidebar] = useState(false);

    const homeBar = true;
    // window.addEventListener( 'resize', ()=>{
    //     if (window.innerWidth >= 640){
    //         if(!sidebar){
    //             setSidebar(false);
    //         } 
    //     }
    // })

  return (
    <div className='home-background flex flex-col h-screen w-full'>
        <Navbar homeBar={homeBar} sidebar={sidebar} setSidebar={setSidebar} />

        <div className='text-center px-10 h-full flex flex-col justify-evenly items-center sm:justify-center lg:flex-row lg:gap-10 lg:justify-evenly'>
            <div className='flex flex-col items-center gap-4 sm:gap-2 lg:w-1/2 lg:text-left lg:items-start'>
                <p className='intro tracking-widest text-white text-sm sm:text-xl lg:text-left'>SO, YOU WANT TO TRAVEL TO</p>
                
                <h1 className='text-7xl text-white tracking-widest sm:text-9xl'>SPACE</h1>

                <p className='intro leading-wide pt-5 text-white text-sm sm:text-base sm:mt-4 sm:w-3/4 lg:text-left lg:w-3/ lg:text-xl lg:leading-relaxed'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>

            <button className='explore-btn bg-white tracking-3 h-36 w-36 text-base rounded-full font-bold sm:text-xl sm:mt-20 sm:h-44 sm:w-44 lg:h-72 lg:w-72 lg:text-2xl'>
                <Link to={'/destination'}>
                    EXPLORE
                </Link>    
            </button>
        </div>
    </div>
  )
}

export default Home