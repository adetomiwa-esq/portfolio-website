import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { ImTwitter, ImLinkedin } from 'react-icons/im';
import { AiOutlineGithub } from 'react-icons/ai'

function MainLeft() {
  return (
    <section className='lg:fixed w-[400px] top-[90px] left-[4%] lg:left-[8%] mb-20 lg:mb-0'>
      <h1 className='text-[50px] text-slate-200 font-semibold'>Akinola Kehinde</h1>
      <h5 className='text-slate-200 text-[24px] font-medium mt-3'>Frontend Developer</h5>
      <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error voluptatibus dolor officia.</p>

      <div className='mt-14 text-[12px] hidden lg:block'>
        <div className='flex items-center mb-4'><div className='w-[50px] h-[1px] bg-slate-400 mr-2'></div> <span>ABOUT</span></div>
        <div className='flex items-center mb-4'><div className='w-[50px] h-[1px] bg-slate-400 mr-2'></div> <span>EXPERIENCE</span></div>
        <div className='flex items-center mb-4'><div className='w-[50px] h-[1px] bg-slate-400 mr-2'></div> <span>PROJECTS</span></div>
      </div>

      <div className='text-2xl flex mt-10'>
        <a href="" className='block mr-4'><AiOutlineGithub /></a>
        <a href="" className='block mr-4'><FiInstagram /></a>
        <a href="" className='block mr-4'><ImTwitter /></a>
        <a href="" className='block mr-4'><ImLinkedin /></a>
      </div>
    </section>
  )
}

export default MainLeft