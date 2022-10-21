import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { crew } from '../components/crewdata';


const Crew = () => {

    const [sidebar, setSidebar] = useState(false);

    const [crewMembers, setCrewMembers] = useState({
        douglas: true,
        mark: false,
        victor: false,
        ansari: false
    })

  return (
    <div className='crew-bg h-screen h-full'>
        <Navbar sidebar={sidebar} setSidebar={setSidebar} />

        <div className='flex flex-col justify-between sm:justify-between sm:flex sm:flex-col'>
            {/* SMALL/MEDIUM DEVICES */}
            <div className='full flex justify-center mt-10 sm:justify-start sm:pl-7 lg:ml-16'>
                <p className='text-white uppercase tracking-3 lg:text-2xl'><span className='text-custom'>02 </span>meet your crew</p>
            </div>

            {/* MEDIUM DEVICES */}
            <div className='hidden sm:block lg:flex lg:flex-row lg:items-center lg:justify-center '>
                <div>
                    {crewMembers.douglas && <div className='flex flex-col items-center w-full px-8 text-center mt-5 hidden sm:block sm:justify-center sm:items-center sm:flex sm:flex-col lg:items-start lg:ml-16'>
                        <p className='text-custom uppercase tracking-widest text opacity-75 sm:text-xl sm:mb-2 lg:text-2xl'>{crew[0].role}</p>
                        <h1 className='text-white text-2xl uppercase tracking-3 sm:text-4xl lg:text-5xl'>{crew[0].name}</h1>
                        <p className='text-custom text-sm mt-4 tracking-wide leading-relaxed sm:text-lg sm:w-3/4 lg:text-left'>{crew[0].bio}</p>
                    </div>}
                    {crewMembers.mark && <div className='flex flex-col items-center w-full px-8 text-center mt-5 hidden sm:block sm:justify-center sm:items-center sm:flex sm:flex-col lg:items-start lg:ml-16'>
                        <p className='text-custom uppercase tracking-widest text opacity-75 sm:text-xl sm:mb-2 lg:text-2xl'>{crew[1].role}</p>
                        <h1 className='text-white text-2xl uppercase tracking-3 sm:text-4xl lg:text-5xl'>{crew[1].name}</h1>
                        <p className='text-custom text-sm mt-4 tracking-wide leading-relaxed sm:text-lg sm:w-3/4 lg:text-left'>{crew[1].bio}</p>
                    </div>}
                    {crewMembers.victor && <div className='flex flex-col items-center w-full px-8 text-center mt-5 hidden sm:block sm:justify-center sm:items-center sm:flex sm:flex-col lg:items-start lg:ml-16'>
                        <p className='text-custom uppercase tracking-widest text opacity-75 sm:text-xl sm:mb-2 lg:text-2xl'>{crew[2].role}</p>
                        <h1 className='text-white text-2xl uppercase tracking-3 sm:text-4xl lg:text-5xl'>{crew[2].name}</h1>
                        <p className='text-custom text-sm mt-4 tracking-wide leading-relaxed sm:text-lg sm:w-3/4 lg:text-left'>{crew[2].bio}</p>
                    </div>}
                    {crewMembers.ansari && <div className='flex flex-col items-center w-full px-8 text-center mt-5 hidden sm:block sm:justify-center sm:items-center sm:flex sm:flex-col lg:items-start lg:ml-16'>
                        <p className='text-custom uppercase tracking-widest text opacity-75 sm:text-xl sm:mb-2 lg:text-2xl'>{crew[3].role}</p>
                        <h1 className='text-white text-2xl uppercase tracking-3 sm:text-4xl lg:text-5xl'>{crew[3].name}</h1>
                        <p className='text-custom text-sm mt-4 tracking-wide leading-relaxed sm:text-lg sm:w-3/4 lg:text-left'>{crew[3].bio}</p>
                    </div>}

                    <div className='flex flex-row gap-5 justify-center sm:mt-5 lg:justify-start lg:ml-24 lg:mt-20'>
                        <div 
                        className={!crewMembers.douglas ? 'h-10 w-10 bg-custom opacity-25 rounded-full hover:bg-white hover:opacity-50 transition ease-in-out delay-150 hover:cursor-pointer' : 'h-10 w-10 bg-white opacity-100 rounded-full hover:bg-white transition ease-in-out delay-150 hover:cursor-pointer'}
                        onClick={()=>{
                            setCrewMembers((prevState)=>{
                                return {
                                    ...prevState,
                                    douglas: true,
                                    mark: false,
                                    victor: false,
                                    ansari: false
                                }
                            })
                        }}
                        ></div>
                        <div 
                            className={!crewMembers.mark ? 'h-10 w-10 bg-custom opacity-25 rounded-full hover:bg-white hover:opacity-50 transition ease-in-out delay-150 hover:cursor-pointer' : 'h-10 w-10 bg-white opacity-100 rounded-full hover:bg-white transition ease-in-out delay-150 hover:cursor-pointer'}
                            onClick={()=>{
                                setCrewMembers((prevState)=>{
                                    return {
                                        ...prevState,
                                        douglas: false,
                                        mark: true,
                                        victor: false,
                                        ansari: false
                                    }
                                })
                            }}
                        ></div>
                        <div 
                            className={!crewMembers.victor ? 'h-10 w-10 bg-custom opacity-25 rounded-full hover:bg-white hover:opacity-50 transition ease-in-out delay-150 hover:cursor-pointer' : 'h-10 w-10 bg-white opacity-100 rounded-full hover:bg-white transition ease-in-out delay-150 hover:cursor-pointer'}
                            onClick={()=>{
                                setCrewMembers((prevState)=>{
                                    return {
                                        ...prevState,
                                        douglas: false,
                                        mark: false,
                                        victor: true,
                                        ansari: false
                                    }
                                })
                            }}
                        ></div>
                        <div 
                            className={!crewMembers.ansari ? 'h-10 w-10 bg-custom opacity-25 rounded-full hover:bg-white hover:opacity-50 transition ease-in-out delay-150 hover:cursor-pointer' : 'h-10 w-10 bg-white opacity-100 rounded-full hover:bg-white transition ease-in-out delay-150 hover:cursor-pointer'}
                            onClick={()=>{
                                setCrewMembers((prevState)=>{
                                    return {
                                        ...prevState,
                                        douglas: false,
                                        mark: false,
                                        victor: false,
                                        ansari: true
                                    }
                                })
                            }}
                        ></div>
                    </div>
                </div>

                {/* MEDIUM DEVICES */}
                <div className='w-full flex flex-col items-center justify-center mt-6 hidden sm:block sm:flex sm:flex-col sm:justify-center sm:w-full sm:h-full sm:mt-10'>
                        {crewMembers.douglas && <img 
                            src={crew[0].images}
                            className='h-400 flex justify-center lg:h-460'
                            alt='crew-pic'
                        />}
                        {crewMembers.mark && <img 
                            src={crew[1].images}
                            className='h-400 flex justify-center lg:h-460'
                            alt='crew-pic'
                        />}
                        {crewMembers.victor && <img 
                            src={crew[2].images}
                            className='h-400 flex justify-center lg:h-460'
                            alt='crew-pic'
                        />}
                        {crewMembers.ansari && <img 
                            src={crew[3].images}
                            className='h-400 flex justify-center lg:h-460'
                            alt='crew-pic'
                        />}
                        <div className='hr-crew'></div>
                </div>
            </div>


            {/* SMALL DEVICES */}
            <div className='w-full flex flex-col items-center justify-center mt-6 sm:hidden'>
                {crewMembers.douglas && <img 
                    src={crew[0].images}
                    className='h-222'
                    alt='crew-pic'
                />}
                { crewMembers.mark && <img 
                    src={crew[1].images}
                    className='h-222'
                    alt='crew-pic'
                />}
                { crewMembers.victor && <img 
                    src={crew[2].images}
                    className='h-222'
                    alt='crew-pic'
                />}
                { crewMembers.ansari && <img 
                    src={crew[3].images}
                    className='h-222'
                    alt='crew-pic'
                />}
                <div className='hr-crew'></div>
            </div>

            {/* SMALL DEVICES */}
            <div className='flex flex-row gap-5 justify-center mt-5 sm:hidden'>
                <div 
                    className={!crewMembers.douglas ? 'h-10 w-10 bg-custom opacity-25 rounded-full hover:bg-white hover:opacity-50 transition ease-in-out delay-150 hover:cursor-pointer' : 'h-10 w-10 bg-white opacity-100 rounded-full hover:bg-white transition ease-in-out delay-150 hover:cursor-pointer'}
                    onClick={()=>{
                        setCrewMembers((prevState)=>{
                            return {
                                ...prevState,
                                douglas: true,
                                mark: false,
                                victor: false,
                                ansari: false
                            }
                        })
                    }}
                ></div>
                <div 
                    className={!crewMembers.mark ? 'h-10 w-10 bg-custom opacity-25 rounded-full hover:bg-white hover:opacity-50 transition ease-in-out delay-150 hover:cursor-pointer' : 'h-10 w-10 bg-white opacity-100 rounded-full hover:bg-white transition ease-in-out delay-150 hover:cursor-pointer'}
                    onClick={()=>{
                        setCrewMembers((prevState)=>{
                            return {
                                ...prevState,
                                douglas: false,
                                mark: true,
                                victor: false,
                                ansari: false
                            }
                        })
                    }}
                ></div>
                <div 
                    className={!crewMembers.victor ? 'h-10 w-10 bg-custom opacity-25 rounded-full hover:bg-white hover:opacity-50 transition ease-in-out delay-150 hover:cursor-pointer' : 'h-10 w-10 bg-white opacity-100 rounded-full hover:bg-white transition ease-in-out delay-150 hover:cursor-pointer'}
                    onClick={()=>{
                        setCrewMembers((prevState)=>{
                            return {
                                ...prevState,
                                douglas: false,
                                mark: false,
                                victor: true,
                                ansari: false
                            }
                        })
                    }}
                ></div>
                <div 
                    className={!crewMembers.ansari ? 'h-10 w-10 bg-custom opacity-25 rounded-full hover:bg-white hover:opacity-50 transition ease-in-out delay-150 hover:cursor-pointer' : 'h-10 w-10 bg-white opacity-100 rounded-full hover:bg-white transition ease-in-out delay-150 hover:cursor-pointer'}
                    onClick={()=>{
                        setCrewMembers((prevState)=>{
                            return {
                                ...prevState,
                                douglas: false,
                                mark: false,
                                victor: false,
                                ansari: true
                            }
                        })
                    }}
                ></div>
            </div>
            

            {/* SMALL DEVICES */}
            {crewMembers.douglas && <div className='flex flex-col items-center w-full px-8 text-center mt-5 sm:hidden'>
                <p className='text-custom uppercase tracking-widest text opacity-75'>{crew[0].role}</p>
                <h1 className='text-white text-2xl uppercase tracking-3'>{crew[0].name}</h1>
                <p className='text-custom text-sm mt-4 tracking-wide leading-relaxed'>{crew[0].bio}</p>
            </div>}
            {crewMembers.mark && <div className='flex flex-col items-center w-full px-8 text-center mt-5 sm:hidden'>
                <p className='text-custom uppercase tracking-widest text opacity-75'>{crew[1].role}</p>
                <h1 className='text-white text-2xl uppercase tracking-3'>{crew[1].name}</h1>
                <p className='text-custom text-sm mt-4 tracking-wide leading-relaxed'>{crew[1].bio}</p>
            </div>}
            {crewMembers.victor && <div className='flex flex-col items-center w-full px-8 text-center mt-5 sm:hidden'>
                <p className='text-custom uppercase tracking-widest text opacity-75'>{crew[2].role}</p>
                <h1 className='text-white text-2xl uppercase tracking-3'>{crew[2].name}</h1>
                <p className='text-custom text-sm mt-4 tracking-wide leading-relaxed'>{crew[2].bio}</p>
            </div>}
            {crewMembers.ansari && <div className='flex flex-col items-center w-full px-8 text-center mt-5 sm:hidden'>
                <p className='text-custom uppercase tracking-widest text opacity-75'>{crew[3].role}</p>
                <h1 className='text-white text-2xl uppercase tracking-3'>{crew[3].name}</h1>
                <p className='text-custom text-sm mt-4 tracking-wide leading-relaxed'>{crew[3].bio}</p>
            </div>}
        </div>
    </div>
  )
}

export default Crew