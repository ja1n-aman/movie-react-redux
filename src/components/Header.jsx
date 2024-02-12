import React from 'react'

import { Link } from 'react-router-dom'
import { Input } from "@/components/ui/input"
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const navigate = useNavigate();
  return (

    <div className= ' flex h-15 items-center justify-centre bg-black'>
        <h3 className="mx-3 my-2 scroll-m-20 text-2xl font-semibold tracking-tight text-white" onClick={() => navigate("/")}>TMDB</h3>
        <Link to="/explore/movies" className='mx-3 text-white'>
          Movies
        </Link>
        <Link to="/explore/tv-shows" className='mx-3 text-white'>
          Tv Shows
        </Link>
        <Input type="text" placeholder="Search" className='dark mx-3 w-100 ml-auto text-white'/>
    </div>
  )
}

export default Header