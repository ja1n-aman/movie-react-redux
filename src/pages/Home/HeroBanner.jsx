import useFetch from '@/hooks/useFetch';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Input } from '../../components/ui/input';
import {useNavigate} from 'react-router-dom';

const HeroBanner = () => {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const { url } = useSelector((state) => state.home);
  const { data } = useFetch('/movie/upcoming');
  const navigate = useNavigate();
  useEffect(() => {
    if(url && data)
    {
      setBackground(url?.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path);
    }
  }, [data]);
  const searchQueryHandler = (e) => {
    if(e.key == "Enter" && query.length > 0){
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className="relative w-full h-screen">
      <img
        src={background}
        className="w-full h-full object-cover shadow-2xl"
        style={{
          filter: 'brightness(0.3)',
        }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-white scroll-m-20 pb-2 text-6xl text-center font-semibold tracking-tight first:mt-0">Welcome</h2>
        <h4 className="text-white mb-10 scroll-m-20 text-2xl text-center tracking-tight w-full">Millions of Movies , TV Shows to discover</h4>
        <Input
          type="email"
          placeholder="What would you like to watch?"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyPress={searchQueryHandler}
          className=" placeholder:text-white flex flex-col items-center border-gray-100 bg-transparent text-2xl text-gray-50  rounded-xl justify-center h-16 min-w-fit"
        />
      </div>
    </div>
  );
};


export default HeroBanner;
