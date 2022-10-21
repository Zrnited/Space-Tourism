import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { destinations } from '../components/desdata';

const Destination = () => {
    const [sidebar, setSidebar] = useState(false);

    //interaction

    const [moon, setMoon] = useState(true);
    const [mars, setMars] = useState(false);
    const [europa, setEuropa] = useState(false);
    const [titan, setTitan] = useState(false);
    const [bars, setBars] = useState({
        moon: false,
        mars: false,
        europa: false,
        titan: false
    })

    //handling data

    const handleClick = (e)=>{
        const currentItem = e.target.innerHTML;
        if(currentItem === 'Moon'){
            setMoon(true);
            setMars(false)
            setEuropa(false)
            setTitan(false);
        } else if(currentItem === 'Mars'){
            setMoon(false);
            setMars(true)
            setEuropa(false)
            setTitan(false);
        } else if (currentItem === 'Europa'){
            setMoon(false);
            setMars(false)
            setEuropa(true)
            setTitan(false);
        } else if (currentItem === 'Titan'){
            setMoon(false);
            setMars(false)
            setEuropa(false)
            setTitan(true);
        }
    }


  return (
    <div className='destination-bg h-screen h-full'>
        <Navbar sidebar={sidebar} setSidebar={setSidebar}/>

        <div className='flex flex-col lg:flex-row lg:items-center justify-evenly'>
            <div className='flex flex-col items-center gap-10 mt-10 sm:items-start'>
                <p className='text-white text-center text-lg sm:ml-10 lg:text-28 lg:mb-5 lg:tracking-widest'> <span className='text-custom'>01</span> PICK YOUR DESTINATION</p>

                <div className='flex justify-center w-full'>
                    {moon && <img
                        src={destinations[0].images}
                        alt='planet-img'
                        className='w-175 sm:w-300 md:w-300 lg:w-445'
                    />}
                    {mars && <img
                        src={destinations[1].images}
                        alt='planet-img'
                        className='w-175 sm:w-300 md:w-300 lg:w-445'
                    />}
                    {europa && <img
                        src={destinations[2].images}
                        alt='planet-img'
                        className='w-175 sm:w-300 md:w-300 lg:w-445'
                    />}
                    {titan && <img
                        src={destinations[3].images}
                        alt='planet-img'
                        className='w-175 sm:w-300 md:w-300 lg:w-445'
                    />}
                </div>
            </div>

            <div className='py-7 px-5'>
                <div className='flex flex-row gap-4 justify-center items-center sm:gap-8 lg:justify-start'>
                    <div className='w-auto flex-flex-col gap-3 items-center justify-center lg:items-start'>
                        <p 
                        onClick={handleClick} className='uppercase text-custom hover:text-white tracking-widest text-center hover:cursor-pointer text-sm sm:text-xl md:text-xl'
                        onMouseOver={(e)=>{
                           const currentItem = e.target.textContent
                           if(currentItem === 'Moon'){
                            setBars((prevState)=>{
                                return {
                                    ...prevState,
                                    moon: true   
                                }
                            })
                           }
                        //    console.log(bars.moon);
                        }}
                        onMouseLeave={(e)=>{
                            const currentItem = e.target.textContent
                            if(currentItem === 'Moon'){
                             setBars((prevState)=>{
                                 return {
                                     ...prevState,
                                     moon: false   
                                 }
                             })
                            }
                            // console.log(bars.moon);
                         }}
                        >
                            {destinations[0].name}
                        </p>
                        {bars.moon && <div className='moon-bar'></div>}
                    </div>
                    <div className='w-auto flex-flex-col gap-3 items-center justify-center'>
                        <p 
                        onClick={handleClick}        className='uppercase text-custom hover:text-white tracking-widest text-center hover:cursor-pointer text-sm sm:text-xl md:text-xl'
                        onMouseOver={(e)=>{
                            const currentItem = e.target.textContent
                            if(currentItem === 'Mars'){
                             setBars((prevState)=>{
                                 return {
                                     ...prevState,
                                     mars: true   
                                 }
                             })
                            }
                         }}
                         onMouseLeave={(e)=>{
                             const currentItem = e.target.textContent
                             if(currentItem === 'Mars'){
                              setBars((prevState)=>{
                                  return {
                                      ...prevState,
                                      mars: false   
                                  }
                              })
                             }
                          }}
                        >
                            {destinations[1].name}
                        </p>
                        {bars.mars && <div className='mars-bar'></div>}
                    </div>
                    <div className='w-auto flex-flex-col gap-3 items-center justify-center text-sm'>
                        <p 
                        onClick={handleClick} className='uppercase text-custom hover:text-white tracking-widest text-center hover:cursor-pointer sm:text-xl sm:mr-0 md:text-xl'
                        onMouseOver={(e)=>{
                            const currentItem = e.target.textContent
                            if(currentItem === 'Europa'){
                             setBars((prevState)=>{
                                 return {
                                     ...prevState,
                                     europa: true   
                                 }
                             })
                            }
                         }}
                         onMouseLeave={(e)=>{
                             const currentItem = e.target.textContent
                             if(currentItem === 'Europa'){
                              setBars((prevState)=>{
                                  return {
                                      ...prevState,
                                      europa: false   
                                  }
                              })
                             }
                          }}
                        >
                            {destinations[2].name}
                        </p>
                        {bars.europa && <div className='europa-bar'></div>}
                    </div>
                    <div className='w-auto flex-flex-col gap-3 items-center justify-center'>
                        <p 
                        onClick={handleClick} className='uppercase text-custom hover:text-white tracking-widest text-center hover:cursor-pointer text-sm sm:text-xl md:text-xl'
                        onMouseOver={(e)=>{
                            const currentItem = e.target.textContent
                            if(currentItem === 'Titan'){
                             setBars((prevState)=>{
                                 return {
                                     ...prevState,
                                     titan: true   
                                 }
                             })
                            }
                         }}
                         onMouseLeave={(e)=>{
                             const currentItem = e.target.textContent
                             if(currentItem === 'Titan'){
                              setBars((prevState)=>{
                                  return {
                                      ...prevState,
                                      titan: false   
                                  }
                              })
                             }
                          }}
                        >
                            {destinations[3].name}
                        </p>
                        {bars.titan && <div className='titan-bar'></div>}
                    </div>
                </div>

                {moon && <div className='flex flex-col gap-5 items-center'>
                    <div>
                        <h1 className='text-6xl uppercase text-white text-center tracking-widest mt-5 sm:text-8xl lg:text-left'>{destinations[0].name}</h1>
                        <p className='text-custom text-sm px-2 text-center mt-4 sm:text-base lg:w-444 lg:text-left'>{destinations[0].description}</p>
                    </div>

                    <div className='hr'></div>

                    <div className='w-full flex flex-col sm:flex-row items-center sm:justify-evenly lg:justify-start lg:gap-10'>
                        <div className='flex flex-col items-center lg:items-start'>
                            <p className='text-custom text-center uppercase tracking-widest'>avg. distance</p>
                            <h1 className='text-white text-center text-3xl uppercase tracking-wide'>{destinations[0].distance}</h1>
                        </div>
                        <div className='mt-8 sm:mt-0 flex flex-col items-center lg:items-start'>
                            <p className='text-custom text-center uppercase tracking-widest'>est. travel time</p>
                            <h1 className='text-white text-center text-3xl uppercase tracking-wide'>{destinations[0].travel}</h1>
                        </div>
                    </div>
                </div>}
                {mars && <div className='flex flex-col gap-5 items-center'>
                    <div>
                        <h1 className='text-6xl uppercase text-white text-center tracking-widest mt-5 sm:text-8xl lg:text-left'>{destinations[1].name}</h1>
                        <p className='text-custom text-sm px-2 text-center mt-4 sm:text-base lg:w-444 lg:text-left'>{destinations[1].description}</p>
                    </div>

                    <div className='hr'></div>

                    <div className='w-full flex flex-col sm:flex-row items-center sm:justify-evenly lg:justify-start lg:gap-10'>
                        <div className='flex flex-col items-center lg:items-start'>
                            <p className='text-custom text-center uppercase tracking-widest'>avg. distance</p>
                            <h1 className='text-white text-center text-3xl uppercase tracking-wide'>{destinations[1].distance}</h1>
                        </div>
                        <div className='mt-8 sm:mt-0 flex flex-col items-center lg:items-start'>
                            <p className='text-custom text-center uppercase tracking-widest'>est. travel time</p>
                            <h1 className='text-white text-center text-3xl uppercase tracking-wide'>{destinations[1].travel}</h1>
                        </div>
                    </div>
                </div>}
                {europa && <div className='flex flex-col gap-5 items-center'>
                    <div>
                        <h1 className='text-6xl uppercase text-white text-center tracking-widest mt-5 sm:text-8xl lg:text-left'>{destinations[2].name}</h1>
                        <p className='text-custom text-sm px-2 text-center mt-4 sm:text-base lg:w-444 lg:text-left'>{destinations[2].description}</p>
                    </div>

                    <div className='hr'></div>

                    <div className='w-full flex flex-col sm:flex-row items-center sm:justify-evenly lg:justify-start lg:gap-10'>
                        <div className='flex flex-col items-center lg:items-start'>
                            <p className='text-custom text-center uppercase tracking-widest'>avg. distance</p>
                            <h1 className='text-white text-center text-3xl uppercase tracking-wide'>{destinations[2].distance}</h1>
                        </div>
                        <div className='mt-8 sm:mt-0 flex flex-col items-center lg:items-start'>
                            <p className='text-custom text-center uppercase tracking-widest'>est. travel time</p>
                            <h1 className='text-white text-center text-3xl uppercase tracking-wide'>{destinations[2].travel}</h1>
                        </div>
                    </div>
                </div>}
                {titan && <div className='flex flex-col gap-5 items-center'>
                    <div>
                        <h1 className='text-6xl uppercase text-white text-center tracking-widest mt-5 sm:text-8xl lg:text-left'>{destinations[3].name}</h1>
                        <p className='text-custom text-sm px-2 text-center mt-4 sm:text-base lg:w-444 lg:text-left'>{destinations[3].description}</p>
                    </div>

                    <div className='hr'></div>

                    <div className='w-full flex flex-col sm:flex-row items-center sm:justify-evenly lg:justify-start lg:gap-10'>
                        <div className='flex flex-col items-center lg:items-start'>
                            <p className='text-custom text-center uppercase tracking-widest'>avg. distance</p>
                            <h1 className='text-white text-center text-3xl uppercase tracking-wide'>{destinations[3].distance}</h1>
                        </div>
                        <div className='mt-8 sm:mt-0 flex flex-col items-center lg:items-start'>
                            <p className='text-custom text-center uppercase tracking-widest'>est. travel time</p>
                            <h1 className='text-white text-center text-3xl uppercase tracking-wide'>{destinations[3].travel}</h1>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Destination