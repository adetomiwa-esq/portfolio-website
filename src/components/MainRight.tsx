import React from 'react'
import About from './About'
import Projects from './Projects'

function MainRight() {
  return (
    <section className='lg:w-[50%] lg:ml-auto'>
      <About />
      <Projects />
    </section>
  )
}

export default MainRight