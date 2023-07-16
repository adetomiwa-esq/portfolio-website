import React from 'react'
import MainLeft from './MainLeft'
import MainRight from './MainRight'

function Main() {
  return (
    <main className='lg:flex pt-[60px] lg:pt-[90px] px-[5%] lg:px-[10%]'>
      <MainLeft />
      <MainRight />
    </main>
  )
}

export default Main