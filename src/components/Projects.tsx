import React, { useEffect, useState } from 'react';
import { ProjectsList } from './ProjectsList';
import { BsArrowUpRight } from 'react-icons/bs'

function Projects() {

    const [top, setTop] = useState<number|undefined>(0)
    // const [bottom, setBottom] = useState<number|undefined>(0)

  useEffect(() => {
    // const marker = document.querySelector('#proj-marker')
    const header = document.querySelector('#header')
    const currentTop = header?.getBoundingClientRect().y
    // const currentBottom = marker?.getBoundingClientRect().y
    setTop(Number(currentTop) + 7)
    // setBottom(Number(currentBottom) - 75)
  }, [])

  
  const [active, setActive] = useState(false)

  function fixAboutHeader(){
    if(window.scrollY >= Number(top)){
      setActive(true)
    }
    else {
      setActive(false)
    }
  }

  window.addEventListener('scroll', fixAboutHeader)

    const Projects = ProjectsList
  return (
    <div className='mt-'>
        <div className='mb-8'>
            <div className='h-[48px]'>
                <div id="header"></div>
                <h2 className={`lg:hidden py-3 w-full bg-slate-900 z-20 transition-all delay-[200ms] ease-in-out lg:static ${active ? "fixed left-0 top-0 pl-4" : "static"}`}>PROJECTS</h2>
            </div>
        </div>
        <div>
            {
                Projects.map((project, index) => {
                    return <div key={index} className='mb-14 flex flex-col-reverse sm:flex-row'>
                        <img src={project.imgSrc} alt="project-img" className='w-[200px] h-[120px] lg:w-[100px] lg:h-[60px] sm:mr-6 mt-6 sm:mt-0' />
                        <div>
                            <a href={project.url} className='text-slate-200 mb-2 flex items-center group hover:text-teal-200 w-fit'>{project.name} <i className='group-hover:mt-[-4px] text-[12px] ml-2'><BsArrowUpRight /></i></a>
                            <p className='text-[14px]'>{project.description}</p>
                            <div className='flex flex-wrap mt-2'>
                                {
                                    project.technologies.map((tech, index) => {
                                        return <p key={index} className='text-teal-300 bg-teal-400/10 text-[13px] px-3 py-1 mr-3 rounded-full mb-3'>{tech}</p>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
        <div id='proj-marker'></div>
    </div>
  )
}

export default Projects