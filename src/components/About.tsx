import React from 'react'
import Mypic from './../images/profile-img.jpg';

function About() {
  return (
    <div className='mb-24'>
      <h3 className='lg:hidden'>ABOUT</h3>
      <h3 className='text-slate-200 hidden lg:block'>MEET AKINOLA KEHINDE:</h3>
      <div className='w-[180px] h-[180px] rounded-full m-auto overflow-hidden my-7'>
        <img src={Mypic} alt="my-pic" className='' />
      </div>
        <div>
            <p className='mb-6'>I discovered my passion for creating aesthetically pleasing websites a long time ago but it was not until early 2021 that I finally started my journey as a frontend developer. More than two years down the line and I have continued to make outstanding progress achieved from working on various side projects, some of which can be found on my <span className='text-slate-200'>Github</span>.</p>
            <p className='mb-6'>My deep interest in programming helps in creating solutions to technical challenges and developing visually appealing websites. I have worked on various projects which have all helped in improving all of my current skills while picking up various technologies in the process. I am well equipped and highly capable of creating pixel-perfect websites within the shortest possible time without compromising performance and scalability.</p>
            <p className='mb-6'>I am currently focused on improving my skills as a front-end developer while also trying to get a good grasp of Node js.</p>
        </div>
    </div>
  )
}

export default About