import React, { useEffect, useState } from 'react'
import Mypic from './../images/profile-img.jpg';
import { techs } from './techs';

function About() {
  const [top, setTop] = useState<number|undefined>(0)
  const [bottom, setBottom] = useState<number|undefined>(0)

  useEffect(() => {
    const marker = document.querySelector('#about-marker')
    const about = document.querySelector('#about')
    const currentTop = about?.getBoundingClientRect().y
    const currentBottom = marker?.getBoundingClientRect().y
    setTop(Number(currentTop) - 50)
    setBottom(Number(currentBottom) - 80)
  }, [])

  
  const [active, setActive] = useState(false)

  function fixAboutHeader(){
    if(window.scrollY >= Number(top) && window.scrollY < Number(bottom)){
      setActive(true)
    }
    else {
      setActive(false)
    }
  }

  window.addEventListener('scroll', fixAboutHeader)
  return (
    <div  className=''>
      <h3 className= {`lg:hidden top-0 left-0 w-full py-3 bg-slate-900 transition-all delay-[200ms] ease-in-out ${active ? "sticky left-0 top-0" : "static"}`}>ABOUT</h3>
      <div id="about" className=''></div>
      <h3 className='text-slate-200 hidden lg:block'>MEET AKINOLA KEHINDE:</h3>
      <div className='w-[180px] h-[180px] rounded-full m-auto overflow-hidden my-7'>
        <img src={Mypic} alt="my-pic" className='' />
      </div>
        <div>
            <p className='mb-6'>I discovered my passion for creating aesthetically pleasing websites a long time ago but it was not until early 2021 that I finally started my journey as a frontend developer. More than two years down the line and I have continued to make outstanding progress achieved from working on various side projects, some of which can be found on my <span className='text-slate-200'>Github</span>.</p>
            <p className='mb-6'>My deep interest in programming helps in creating solutions to technical challenges and developing visually appealing websites. I have worked on various projects which have all helped in improving all of my current skills while picking up various technologies in the process. I am well equipped and highly capable of creating pixel-perfect websites within the shortest possible time without compromising performance and scalability.</p>
            <p className='mb-6'>I am currently focused on improving my skills as a front-end developer while also trying to get a good grasp of Node js.</p>
        </div>
        <div className='flex flex-wrap mt-12 w-10/12 sm:w-[560px] lg:w-[390px] mx-auto'>
          {
            techs.map((tech, index) => {
              return <div key={index} className='w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] mx-auto border rounded-full flex items-center justify-center flex-col mb-4'>
                <img src={tech.imgSrc} alt="tech-img"  className='w-[40%] mb-3'/>
                <p>{tech.tech}</p>
              </div>
            })
          }
        </div>
        <div id='about-marker' className='mt-24'></div>
    </div>
  )
}

export default About