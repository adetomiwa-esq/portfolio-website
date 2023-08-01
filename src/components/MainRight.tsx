import React, { Dispatch } from 'react'
import About from './About'
import Projects from './Projects'

type Props = {
  setPortfolioSection: Dispatch<React.SetStateAction<number|undefined>>
}

function MainRight({setPortfolioSection} : Props) {
  return (
    <section className='lg:w-[50%] lg:ml-auto'>
      <About setPortfolioSection={setPortfolioSection}/>
      <Projects />
    </section>
  )
}

export default MainRight