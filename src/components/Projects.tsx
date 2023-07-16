import React from 'react';
import { ProjectsList } from './ProjectsList';
import { BsArrowUpRight } from 'react-icons/bs'

function Projects() {
    const Projects = ProjectsList
  return (
    <div>
        <h2 className='mb-8 lg:hidden'>PROJECTS</h2>
        <div>
            {
                Projects.map(project => {
                    return <div className='mb-14 flex flex-col-reverse sm:flex-row'>
                        <img src={project.imgSrc} alt="project-img" className='w-[200px] h-[120px] lg:w-[100px] lg:h-[60px] sm:mr-6 mt-6 sm:mt-0' />
                        <div>
                            <a href={project.url} className='text-slate-200 mb-2 flex items-center group hover:text-teal-200 w-fit'>{project.name} <i className='group-hover:mt-[-4px] text-[12px] ml-2'><BsArrowUpRight /></i></a>
                            <p className='text-[14px]'>{project.description}</p>
                            <div className='flex flex-wrap mt-2'>
                                {
                                    project.technologies.map((tech, index) => {
                                        return <p className='text-teal-300 bg-teal-400/10 text-[13px] px-3 py-1 mr-3 rounded-full mb-3'>{tech}</p>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Projects