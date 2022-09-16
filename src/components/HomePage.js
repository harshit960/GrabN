import React from 'react'
import Catscroll from './Catscroll'
import MainSlider from './MainSlider'
import OfferCard from './OfferCard'
import ProSlider from './ProSlider'
export default function HomePage() {
  return (
     <div className=''>
        <div className='pt-16'>
        <Catscroll/>
        <MainSlider/>
        <OfferCard/>
        <ProSlider/>
        </div>

      </div>


  )
}
