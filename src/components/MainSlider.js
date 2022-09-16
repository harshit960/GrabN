import React from "react";

const MainSliderItems = [
    {
        imageName:"name",
        link:"media/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"
    },
    {
        imageName:"name",
        link:"media/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg"
    },
    {
      imageName:"name",
      link:"media/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg"
  },

]


export default function MainSlider() {
  return (
    <div>
      <div class="flex overflow-x-scroll py-1 hide-scroll-bar px-0 md:hidden">
        <div class="flex flex-nowrap lg:ml-40 md:ml-20 px-0 py-4">
        {MainSliderItems.map((item) => (
          <div class="inline-block px-0 ">
            <div class="w-96 h-52 max-w-xs overflow-hidden px-0 shadow-md bg-white hover:shadow-xl transition-shadow duration-300 p-0 m-0  ease-in-out">
              <img
                src={item.link}
                class=" w-full px-0"
                alt="..."
              />
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
