import React, { useEffect, useState } from 'react'
import HeroBanner from './HeroBanner'
import Carousel from './Carousel'
import useFetch from '@/hooks/useFetch'

const Home = () => {
  const [movieData,setMovieData] = useState({})
  const [tvData,setTvData] = useState({})
  const trendingMovies = useFetch('/discover/movie')
  const trendingTv = useFetch('/discover/tv')
  
  useEffect(() => {
    if(trendingMovies.data) setMovieData(trendingMovies.data.results)
    if(trendingTv.data) setTvData(trendingTv.data.results)

  },[trendingMovies,trendingTv])

  return (
    <div>
      <HeroBanner />
      <div className='w-screen'>
        <h3 className="pt-5 pl-10 text-3xl font-semibold tracking-tight text-white">
          TRENDING MOVIES
        </h3>
        <Carousel carouselData={movieData}  flag={true}/>
      </div>
      <div className='w-screen'>
        <h3 className="pt-5 pl-10 text-3xl font-semibold tracking-tight text-white">
          TRENDING TV SHOWS
        </h3>
        <Carousel carouselData={tvData}/>
      </div>
    </div>
  )
}

export default Home