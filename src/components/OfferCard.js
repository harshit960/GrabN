import React from 'react'
const CardItems = 
    {
        imageName:"name",
        link:"media/70a3d1a4-f16a-45ca-9bb4-64dc2315352b1659297228544-Desktop-Banners_unisex-with-kids.jpg"
    }
export default function offercard() {
  return (
    <div className="w-full h-24">
        <img src={CardItems.link} className="w-full"/>
    </div>
  )
}
