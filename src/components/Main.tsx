import React, { useState } from 'react'
import MainLeft from './MainLeft'
import MainRight from './MainRight'

function Main() {
  const [portfolioSection, setPortfolioSection] = useState<number|undefined>(0)
  return (
    <main className='lg:flex pt-[60px] lg:pt-[90px] px-[5%] lg:px-[10%]'>
      <MainLeft portfolioSection={portfolioSection}/>
      <MainRight setPortfolioSection={setPortfolioSection}/>
    </main>
  )
}

export default Main