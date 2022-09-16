import React from "react";

const ProSliderItems = [
  {
    imageName: "name",
    link: "media/ffaa74a6-4824-4b19-8936-70ffaef92f001644407437937-M-H_and_HRX_Tshirts.jpg",
  },
  {
    imageName: "name",
    link: "media/f9621136-0f00-44d5-aa06-b727a6c8f7c51644407437944-M-H_and_Wrogn_Shirts.jpg",
  },
  {
    imageName: "name",
    link: "media/f8f83d7d-0612-4a8a-92d6-bf25c553bf5d1661952994160-H-M--6-.jpg",
  },
  {
    imageName: "name",
    link: "media/f08e2bac-9bed-4f87-b022-0dce8defeded1645602543380-Men-Trousers.jpg",
  },
  {
    imageName: "name",
    link: "media/ca1dff5f-b876-4cce-a99c-0baa8c300c4e1661953027983-Levis--2-.jpg",
  },
  {
    imageName: "name",
    link: "media/e27ee3af-3f6b-4106-9b20-2b4463c80ba41644407437953-Roadster-_Wrogn_Jeans.jpg",
  },
  {
    imageName: "name",
    link: "media/c6b09c0f-5c57-472c-a3fc-854ec506a90e1645602543387-Men-T-shirt.jpg",
  },
  {
    imageName: "name",
    link: "media/c6b09c0f-5c57-472c-a3fc-854ec506a90e1645602543387-Men-T-shirt.jpg",
  },
  {
    imageName: "name",
    link: "media/82a9be01-3032-4725-9500-bcc94366b7931645602543399-Mens-Shirts.jpg",
  }
];
const ProCardItems = 
    {
        imageName:"name",
        link:"media/b967e8ad-07bf-44fd-ab43-30216ed837e21662458135152-Prebuzz-Banner_DK.jpg"
    }

export default function ProSlider() {
  return (
    <div>
      <div className="w-full pt-1 h-fit ">
        <img src={ProCardItems.link} className="w-full"/>
    </div>
      <div class="flex overflow-x-scroll hide-scroll-bar md:hidden">
        <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-1 px-0 py-2">
          {ProSliderItems.map((item) => (
            <div class="inline-block ">
              <div class="w-56 mx-0.5 h-72 max-w-xs overflow-hidden  shadow-md bg-black hover:shadow-xl transition-shadow duration-300 p-0 m-0  ease-in-out">
                <img src={item.link} class=" w-full" alt="..." />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
