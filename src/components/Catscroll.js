import React from 'react'
import { Link } from 'react-router-dom'
const CatscrollItems = [
  {
      imageName:"name",
      Catlink:"Search",
      imagelink:"media/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg"
  },
  {
      imageName:"name",
      Catlink:"Search",
      imagelink:"media/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg"
  },
  {
    imageName:"name",
    Catlink:"Search",
    imagelink:"media/171a820e-96f0-4b11-a138-03953a7e05481645602467153-Trousers_W.jpg"
},
{
  imageName:"name",
  Catlink:"Search",
  imagelink:"media/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg"
},
{
  imageName:"name",
  Catlink:"Search",
  imagelink:"media/12c3b4aa-8160-442f-b93e-e896eafb1b0a1645602467160-T-Shirts-_-Shorts_Kids.jpg"
},
{
  imageName:"name",
  Catlink:"Search",
  imagelink:"media/054a056f-33e8-4b6c-b747-9b88d7fce0a11645602467174-Watches.jpg"
},
{
  imageName:"name",
  Catlink:"Search",
  imagelink:"media/736f3951-e67b-414f-bfb1-56e2794d441d1645602467114-Sports-Shoes.jpg"
},
{
  imageName:"name",
  Catlink:"Search",
  imagelink:"media/5860c3c2-a639-4625-ac1d-4d55406f128a1645602467134-Track-Pants.jpg"
},

]
export default function Catscroll() {
  return (
    <div class="flex overflow-x-scroll py-1 hide-scroll-bar md:hidden">
        <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-1 ">
        {CatscrollItems.map((item) => (
          <Link to={item.Catlink}>
          <div class="inline-block px-0.5">
            <div class="w-20 h-20 max-w-xs overflow-hidden rounded-full shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img
                src={item.imagelink}
                class=" w-full"
                alt="..."
              />
            </div>
          </div>
          </Link>
          ))}
        </div>
      </div>
  )
}
