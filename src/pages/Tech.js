import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { technology } from '../components/techdata';

const Tech = () => {

    const techBar = true;

    const [sidebar, setSidebar] = useState(false);
    const [techImage, setTechImage] = useState({
        launch: true,
        spaceCapsule: false,
        spacePort: false
    })
    const [innerWidth, setInnerWidth] = useState(null);


    // let windowWidth = window.innerWidth
    // if(windowWidth ===  1024){
    //     setInnerWidth(window.innerWidth);
    // }

    //altering
    const changeTechDetails =(e)=>{
        const currentItem = e.target.innerHTML
        if(currentItem === '1'){
            setTechImage((prevState)=>{
                return {
                    ...prevState,
                    launch: true,
                    spaceCapsule: false,
                    spacePort: false
                }
            })
        } else if (currentItem === '2'){
            setTechImage((prevState)=>{
                return {
                    ...prevState,
                    launch: false,
                    spaceCapsule: true,
                    spacePort: false
                }
            })
        } else {
            setTechImage((prevState)=>{
                return {
                    ...prevState,
                    launch: false,
                    spaceCapsule: false,
                    spacePort: true
                }
            })
        }
    }

    window.addEventListener('resize', ()=>{
        // console.log(window.innerWidth);
        // windowWidth = window.innerWidth 
        if(window.innerWidth >= 1024){
            setInnerWidth(window.innerWidth)
        } else {
            setInnerWidth(null);
        }
    })
    // console.log(innerWidth)

    React.useEffect(()=>{
        // console.log('ran');
        if(window.innerWidth >= 1024){
            setInnerWidth(window.innerWidth)
        } else {
            setInnerWidth(null);
        }
    }, [])

    //fixed
    // const setFixed = ()=>{
    //     if(window.scrollY > 70) {
    //         setfixedNavBar(true);
    //     } else {
    //         setfixedNavBar(false)
    //     }
    // }

    // window.addEventListener('scroll', setFixed)
    

  return (
    <div className='tech-bg h-screen h-full'>
        <Navbar techBar={techBar}  sidebar={sidebar} setSidebar={setSidebar} />

        <div className='flex flex-col gap-6'>
            <div className='mt-8 flex w-full justify-center lg:justify-start lg:pl-24'>
                <p className='text-white tracking-3 text-lg lg:text-2xl'><span className='text-custom'>03</span> SPACE LAUNCH 101</p>
            </div>

            <div className='flex w-full flex-col gap-6 lg:flex lg:flex-row-reverse lg:justify-evenly'>
                <div className='w-full lg:w-auto'>
                    {techImage.launch && <img 
                        src={innerWidth ? technology[0].images.portrait : technology[0].images.landscape}
                        alt='tech-pic'
                        className='w-full lg:w-5/6 mr-0'
                    />}
                    {techImage.spaceCapsule && <img 
                        src={innerWidth ? technology[1].images.portrait : technology[1].images.landscape}
                        alt='tech-pic'
                        className='w-full lg:w-5/6 mr-0'
                    />}
                    {techImage.spacePort && <img 
                        src={innerWidth ? technology[2].images.portrait : technology[2].images.landscape}
                        alt='tech-pic'
                        className='w-full lg:w-5/6 mr-0'
                    />}
                </div>

                <div className='flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-center lg:gap-8 xl:gap-12'>
                    <div className='flex flex-row gap-4 w-full justify-center lg:flex-col lg:ml-5 lg:gap-7'>
                        <div 
                            className={!techImage.launch ? 'w-40 h-40 rounded-full flex items-center text-white justify-center cursor-pointer border-custom border-solid border opacity-50 hover:opacity-75 hover:bg-white hover:text-black hover:font-bold transition ease-in delay-100 lg:w-80 lg:h-80 lg:text-2xl' : 'w-40 h-40 bg-white rounded-full flex items-center cursor-pointer justify-center font-bold lg:w-80 lg:h-80 lg:text-2xl'}
                            onClick={changeTechDetails}
                        >1</div>
                        <div 
                            className={!techImage.spaceCapsule ? 'w-40 h-40 rounded-full flex items-center text-white justify-center cursor-pointer border-custom border-solid border opacity-50 hover:opacity-75 hover:bg-white hover:text-black hover:font-bold transition ease-in delay-100 lg:w-80 lg:h-80 lg:text-2xl' : 'w-40 h-40 bg-white rounded-full flex items-center cursor-pointer justify-center font-bold lg:w-80 lg:h-80 lg:text-2xl'}
                            onClick={changeTechDetails}
                        >2</div>
                        <div 
                            className={!techImage.spacePort ? 'w-40 h-40 rounded-full flex items-center text-white justify-center cursor-pointer border-custom border-solid border opacity-50 hover:opacity-75 hover:bg-white hover:text-black hover:font-bold transition ease-in delay-100 lg:w-80 lg:h-80 lg:text-2xl' : 'w-40 h-40 bg-white rounded-full flex items-center cursor-pointer justify-center font-bold lg:w-80 lg:h-80 lg:text-2xl'}
                            onClick={changeTechDetails}
                        >3</div>
                    </div>

                    {techImage.launch && <div className='flex flex-col text-center gap-2 sm:items-center lg:items-start'>
                        <p className='uppercase text-sm text-custom tracking-widest lg:text-xl'>the terminology...</p>
                        <h1 className='uppercase text-white text-2xl tracking-widest lg:text-5xl'>{technology[0].name}</h1>
                        <p className='text-custom px-6 mt-3 sm:px-0 sm:w-458 lg:text-left lg:text-base'>{technology[0].description}</p>
                    </div>}
                    {techImage.spaceCapsule && <div className='flex flex-col text-center gap-2 sm:items-center lg:items-start'>
                        <p className='uppercase text-sm text-custom tracking-widest lg:text-xl'>the terminology...</p>
                        <h1 className='uppercase text-white text-2xl tracking-widest lg:text-5xl'>{technology[1].name}</h1>
                        <p className='text-custom px-6 mt-3 sm:px-0 sm:w-458 lg:text-left lg:text-base'>{technology[1].description}</p>
                    </div>}
                    {techImage.spacePort && <div className='flex flex-col text-center gap-2 sm:items-center lg:items-start'>
                        <p className='uppercase text-sm text-custom tracking-widest lg:text-xl'>the terminology...</p>
                        <h1 className='uppercase text-white text-2xl tracking-widest lg:text-5xl'>{technology[2].name}</h1>
                        <p className='text-custom px-6 mt-3 sm:px-0 sm:w-458 lg:text-left lg:text-base'>{technology[2].description}</p>
                    </div>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tech