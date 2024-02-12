import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Button } from "@/components/ui/button"
const Carousel = ({carouselData,flag}) => {
    const { url } = useSelector((state) => state.home);
    const [details,setDetails] = useState([]);
    useEffect(()=>{
        if(Array.isArray(carouselData)){
          setDetails(carouselData);
        }
    },[carouselData])
  return (
    <div className="mx-auto grid items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-6">
      {
        details.slice(0, 12).map((item) =>(
          <div
          key={item.id}
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[300px]"
        >
          <img
            src={`${url.backdrop}${item.poster_path}`}
            alt="No image"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left mx-1">
            <h1 className="text-lg w-auto font-semibold text-white">{ flag ? item.original_title : item.original_name}</h1>
            <button className="inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              See Details
            </button>
          </div>
        </div>
        ))
      } 
    </div>
  )
}

export default Carousel;