import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import fetchDataFromApi from "./utils/api";
import { setGenres, setUrl } from "./store/homeSlice";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Button } from "./components/ui/button";
import HeroBanner from "./pages/Home/HeroBanner";

function App() {
  const dispatch = useDispatch();

  const fetchApiConfig = () => {
    fetchDataFromApi({url :"/configuration"}).then((res) => {
        const url = {
            backdrop: res.images.secure_base_url + "original",
            poster: res.images.secure_base_url + "original",
            profile: res.images.secure_base_url + "original",
        };
        dispatch(setUrl(url));
    });
};
const fetchGenres = () => {
  let promises = [];
  const urls = ["tv","movie"];
  let allGenres = []

  urls.map((url) => {
    promises.push(fetchDataFromApi({url : `/genre/${url}/list`}));
    console.log(`/genre/${url}/list`);
  })

  Promise.all(promises).then((data) => {
    data.map(({genres}) => {
      genres.map((item) => {
        allGenres[item.id]=item;
      })
    })
    dispatch(setGenres(allGenres));
  })
  
};
  useEffect(() => {
    fetchApiConfig()
    fetchGenres()
  }, []);

  return (
    <div className="bg-black">
      <Header/>
      <div className="flex flex-col items-center justify-center">
          <main>
            <Outlet />
          </main>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
