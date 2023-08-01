import React, { useState } from 'react';
import { FiInstagram } from 'react-icons/fi';
import { ImTwitter, ImLinkedin } from 'react-icons/im';
import { AiOutlineGithub } from 'react-icons/ai'

type Props = {
  portfolioSection: number|undefined
}

function MainLeft({portfolioSection} : Props) {
  
  const [about, setAbout] = useState(true)
  function fixAboutHeader(){
    if(window.scrollY <= Number(portfolioSection)){
      setAbout(true)
      console.log('outside')
    }
    else if(window.scrollY >= Number(portfolioSection)) {
      setAbout(false)
    }
  }

  window.addEventListener('scroll', fixAboutHeader)
  return (
    <section className='lg:fixed sm:w-[400px] top-[90px] left-[4%] lg:left-[8%] mb-20 lg:mb-0'>
      <h1 className='text-[38px] sm:text-[50px] text-slate-200 font-semibold'>Akinola Kehinde</h1>
      <h5 className='text-slate-200 text-[24px] font-medium mt-3'>Frontend Developer</h5>
      <p className='mt-4'>A meticulous web developer with wealth of experience in responsive web designing.</p>

      <div className='mt-14 text-[12px] hidden lg:block transition-all delay-100 duration-75'>
        <div className='flex items-center mb-4'>
          <div className={`${about ? 'w-[70px] h-[1.4px] bg-slate-200' : 'w-[50px] h-[1px] bg-slate-400'} mr-2`}></div> 
          <span className={`${about ? 'text-slate-200 leading-[20px] text-[20px]' : ''} mr-2`}>ABOUT</span>
        </div>

        {/* <div className='flex items-center mb-4'>
          <div className='w-[50px] h-[1px] bg-slate-400 mr-2'></div> 
          <span>EXPERIENCE</span>
        </div> */}

        <div className='flex items-center mb-4'>
          <div className={`${!about ? 'w-[70px] h-[1.4px] bg-slate-200' : 'w-[50px] h-[1px] bg-slate-400'} mr-2`}></div> 
          <span className={`${!about ? 'text-slate-200 leading-[20px] text-[20px]' : ''} mr-2`}>PROJECTS</span>
        </div>
      </div>

      <div className='text-2xl flex mt-10'>
        <a href="https://github.com/adetomiwa-esq" className='block mr-4 hover:text-slate-200'><AiOutlineGithub /></a>
        <a href="https://instagram.com/adetomiwa_akin?r=nametag" className='block mr-4 hover:text-slate-200'><FiInstagram /></a>
        <a href="https://twitter.com/Adetomiwa_akin" className='block mr-4 hover:text-slate-200'><ImTwitter /></a>
        <a href="https://www.linkedin.com/in/kehinde-akinola-b32aa0229/" className='block mr-4 hover:text-slate-200'><ImLinkedin /></a>
      </div>
    </section>
  )
}

export default MainLeft